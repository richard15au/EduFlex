import { createHmac, scryptSync, timingSafeEqual } from "node:crypto";
import {
  AccountStatus,
  AnnouncementAudience,
  ApprovalStatus,
  ApprovalType,
  AssignmentType,
  CalendarCategory,
  CourseStatus,
  EnrollmentStatus,
  MaterialCategory,
  MaterialFormat,
  PrismaClient,
  PublishStatus,
  QuizAttemptStatus,
  SubmissionStatus,
  UserRole,
} from "@prisma/client";

// ─── 1. Mandatory Development-Only Safety Guard ───────────────────────────────

const ALLOWED_DEV_NEON_HOSTS = new Set([
  "ep-blue-shadow-a73crclr-pooler.ap-southeast-2.aws.neon.tech",
  "ep-blue-shadow-a73crclr.ap-southeast-2.aws.neon.tech",
]);
const EXPECTED_DATABASE_PATH = "/neondb";

function assertSafeDevelopmentSeedEnvironment(): { host: string; dbName: string } {
  const nodeEnv = (process.env.NODE_ENV ?? "development").trim().toLowerCase();
  if (nodeEnv === "production") {
    throw new Error(
      "[SEED BLOCKED] Refusing to execute seed script when NODE_ENV is 'production'."
    );
  }

  if (process.env.EDUFLEX_ALLOW_DEV_SEED !== "true") {
    throw new Error(
      "[SEED BLOCKED] Missing explicit opt-in environment variable. Set EDUFLEX_ALLOW_DEV_SEED=true to authorize seeding the development database."
    );
  }

  const rawDatabaseUrl = process.env.DATABASE_URL?.trim();
  if (!rawDatabaseUrl) {
    throw new Error(
      "[SEED BLOCKED] DATABASE_URL is not set. Configure .env.local before running the development seed."
    );
  }

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(rawDatabaseUrl);
  } catch {
    throw new Error(
      "[SEED BLOCKED] DATABASE_URL could not be parsed as a valid URL."
    );
  }

  if (parsedUrl.protocol !== "postgresql:" && parsedUrl.protocol !== "postgres:") {
    throw new Error(
      `[SEED BLOCKED] Unexpected database protocol '${parsedUrl.protocol}'. Expected postgresql:.`
    );
  }

  if (!ALLOWED_DEV_NEON_HOSTS.has(parsedUrl.hostname)) {
    throw new Error(
      `[SEED BLOCKED] Unrecognized database host '${parsedUrl.hostname}'. Seeding is restricted exclusively to the confirmed EduFlex Neon development branch.`
    );
  }

  if (parsedUrl.pathname !== EXPECTED_DATABASE_PATH) {
    throw new Error(
      `[SEED BLOCKED] Unexpected database path '${parsedUrl.pathname}'. Expected '${EXPECTED_DATABASE_PATH}'.`
    );
  }

  return {
    host: parsedUrl.hostname,
    dbName: parsedUrl.pathname.slice(1),
  };
}

// ─── 2. Deterministic Standard-Library Password Hashing (`node:crypto`) ───────
// Matches `lib/password.ts` format: `scrypt$16384$8$1$<saltHex>$<derivedKeyHex>`

const SCRYPT_ALGO = "scrypt";
const SCRYPT_N = 16384;
const SCRYPT_R = 8;
const SCRYPT_P = 1;
const SCRYPT_KEYLEN = 64;
const SEED_SALT_NAMESPACE = "eduflex-dev-seed-salt-v1";

function deriveSeedSaltHex(email: string): string {
  return createHmac("sha256", SEED_SALT_NAMESPACE)
    .update(email.trim().toLowerCase())
    .digest("hex")
    .slice(0, 32);
}

function hashSeedPassword(plainPassword: string, email: string): string {
  const saltHex = deriveSeedSaltHex(email);
  const saltBuffer = Buffer.from(saltHex, "hex");
  const derivedKey = scryptSync(plainPassword, saltBuffer, SCRYPT_KEYLEN, {
    N: SCRYPT_N,
    r: SCRYPT_R,
    p: SCRYPT_P,
  });
  return `${SCRYPT_ALGO}$${SCRYPT_N}$${SCRYPT_R}$${SCRYPT_P}$${saltHex}$${derivedKey.toString("hex")}`;
}

function verifySeedPassword(plainPassword: string, storedHash: string): boolean {
  const parts = storedHash.split("$");
  if (parts.length !== 6) return false;
  const [algo, nStr, rStr, pStr, saltHex, expectedKeyHex] = parts;
  if (algo !== SCRYPT_ALGO) return false;
  const N = Number.parseInt(nStr, 10);
  const r = Number.parseInt(rStr, 10);
  const p = Number.parseInt(pStr, 10);
  const saltBuffer = Buffer.from(saltHex, "hex");
  const expectedBuffer = Buffer.from(expectedKeyHex, "hex");
  const actualBuffer = scryptSync(plainPassword, saltBuffer, expectedBuffer.length, { N, r, p });
  return actualBuffer.length === expectedBuffer.length && timingSafeEqual(actualBuffer, expectedBuffer);
}

// ─── 3. Seed Datasets ─────────────────────────────────────────────────────────

interface SeedUserSpec {
  externalId: string;
  name: string;
  email: string;
  plainPassword: string;
  role: UserRole;
  status: AccountStatus;
  program?: string;
  department?: string;
  phone?: string;
  bio?: string;
  joinedAt: Date;
  lastActiveAt?: Date;
}

const SEED_USERS: SeedUserSpec[] = [
  // Group A: Authoritative Institutional Accounts (@richacademy.en-rich.me) — Seeded First
  {
    externalId: "2003988",
    name: "Richard Maceda Vitug",
    email: "2003988@richacademy.en-rich.me",
    plainPassword: "student123",
    role: UserRole.STUDENT,
    status: AccountStatus.ACTIVE,
    program: "BS Information Technology",
    phone: "+61 412 345 678",
    bio: "Final-year Bachelor of Information Technology student specializing in full-stack systems engineering and AI.",
    joinedAt: new Date("2025-02-15T09:00:00.000Z"),
    lastActiveAt: new Date("2026-09-02T11:45:00.000Z"),
  },
  {
    externalId: "INS-20260001",
    name: "Anita Humagain",
    email: "anita.humagain@richacademy.en-rich.me",
    plainPassword: "instructor123",
    role: UserRole.INSTRUCTOR,
    status: AccountStatus.ACTIVE,
    department: "School of ICT",
    phone: "+61 423 456 789",
    bio: "Senior Lecturer and Unit Coordinator in the School of ICT.",
    joinedAt: new Date("2024-07-01T09:00:00.000Z"),
    lastActiveAt: new Date("2026-09-02T11:30:00.000Z"),
  },
  {
    externalId: "ADM-20260001",
    name: "Rojit Munankarmi",
    email: "a.rojit.munankarmi@richacademy.en-rich.me",
    plainPassword: "admin123",
    role: UserRole.ADMIN,
    status: AccountStatus.ACTIVE,
    department: "University Administration",
    phone: "+61 2 9000 1234",
    bio: "Platform Administrator & Academic Registrar Officer for EduFlex LMS.",
    joinedAt: new Date("2024-01-10T09:00:00.000Z"),
    lastActiveAt: new Date("2026-09-02T12:00:00.000Z"),
  },

  // Group B: Legacy Demo Accounts (@eduflex.edu) for E2E & backward compatibility
  {
    externalId: "2003988-LEGACY",
    name: "Richard Maceda Vitug",
    email: "2003988@eduflex.edu",
    plainPassword: "student123",
    role: UserRole.STUDENT,
    status: AccountStatus.ACTIVE,
    program: "BS Information Technology",
    phone: "+61 412 345 678",
    bio: "Legacy student demo account paired with institutional student ID 2003988.",
    joinedAt: new Date("2025-02-15T09:00:00.000Z"),
    lastActiveAt: new Date("2026-09-02T11:45:00.000Z"),
  },
  {
    externalId: "INS-20260001-LEGACY",
    name: "Anita Humagain",
    email: "anita.humagain@eduflex.edu",
    plainPassword: "instructor123",
    role: UserRole.INSTRUCTOR,
    status: AccountStatus.ACTIVE,
    department: "School of ICT",
    phone: "+61 423 456 789",
    bio: "Legacy instructor demo account paired with INS-20260001.",
    joinedAt: new Date("2024-07-01T09:00:00.000Z"),
    lastActiveAt: new Date("2026-09-02T11:30:00.000Z"),
  },
  {
    externalId: "ADM-20260001-LEGACY",
    name: "Rojit Munankarmi",
    email: "a.rojit.munankarmi@eduflex.edu",
    plainPassword: "admin123",
    role: UserRole.ADMIN,
    status: AccountStatus.ACTIVE,
    department: "University Administration",
    phone: "+61 2 9000 1234",
    bio: "Legacy admin demo account paired with ADM-20260001.",
    joinedAt: new Date("2024-01-10T09:00:00.000Z"),
    lastActiveAt: new Date("2026-09-02T12:00:00.000Z"),
  },

  // Group C: Admin Roster Accounts (INITIAL_ADMIN_USERS in src/adminData.ts)
  {
    externalId: "STU-20262001",
    name: "Maria Santos",
    email: "m.santos@eduflex.edu.ph",
    plainPassword: "student123",
    role: UserRole.STUDENT,
    status: AccountStatus.ACTIVE,
    program: "BS Information Technology",
    phone: "+63 917 123 4567",
    joinedAt: new Date("2026-09-01T00:00:00.000Z"),
    lastActiveAt: new Date("2026-09-02T00:42:00.000Z"),
  },
  {
    externalId: "STU-20262002",
    name: "James Reyes",
    email: "j.reyes@eduflex.edu.ph",
    plainPassword: "student123",
    role: UserRole.STUDENT,
    status: AccountStatus.ACTIVE,
    program: "BS Information Technology",
    phone: "+63 918 234 5678",
    joinedAt: new Date("2026-09-01T00:00:00.000Z"),
    lastActiveAt: new Date("2026-09-01T23:15:00.000Z"),
  },
  {
    externalId: "INS-20260034",
    name: "Anna Cruz",
    email: "a.cruz@eduflex.edu.ph",
    plainPassword: "instructor123",
    role: UserRole.INSTRUCTOR,
    status: AccountStatus.ACTIVE,
    department: "School of IT",
    phone: "+63 919 345 6789",
    joinedAt: new Date("2026-08-31T00:00:00.000Z"),
    lastActiveAt: new Date("2026-09-01T22:00:00.000Z"),
  },
  {
    externalId: "INS-20260035",
    name: "Prof. Eduardo Lim",
    email: "e.lim@eduflex.edu.ph",
    plainPassword: "instructor123",
    role: UserRole.INSTRUCTOR,
    status: AccountStatus.ACTIVE,
    department: "School of IT",
    phone: "+63 920 456 7890",
    joinedAt: new Date("2026-08-15T00:00:00.000Z"),
    lastActiveAt: new Date("2026-09-01T06:30:00.000Z"),
  },
  {
    externalId: "STU-20262003",
    name: "Carlos Bautista",
    email: "c.bautista@eduflex.edu.ph",
    plainPassword: "student123",
    role: UserRole.STUDENT,
    status: AccountStatus.INACTIVE,
    program: "BS Information Technology",
    phone: "+63 921 567 8901",
    joinedAt: new Date("2026-08-30T00:00:00.000Z"),
    lastActiveAt: new Date("2026-08-20T04:11:00.000Z"),
  },
  {
    externalId: "STU-20262004",
    name: "Sophia Dela Torre",
    email: "s.delatorre@eduflex.edu.ph",
    plainPassword: "student123",
    role: UserRole.STUDENT,
    status: AccountStatus.ACTIVE,
    program: "BS Information Technology",
    phone: "+63 922 678 9012",
    joinedAt: new Date("2026-08-28T00:00:00.000Z"),
    lastActiveAt: new Date("2026-09-02T01:03:00.000Z"),
  },
  {
    externalId: "STU-20262005",
    name: "Mark Villanueva",
    email: "m.villanueva@eduflex.edu.ph",
    plainPassword: "student123",
    role: UserRole.STUDENT,
    status: AccountStatus.ACTIVE,
    program: "BS Information Technology",
    phone: "+63 923 789 0123",
    joinedAt: new Date("2026-08-27T00:00:00.000Z"),
    lastActiveAt: new Date("2026-09-01T21:45:00.000Z"),
  },
  {
    externalId: "INS-20260036",
    name: "Dr. Rachel Gomez",
    email: "r.gomez@eduflex.edu.ph",
    plainPassword: "instructor123",
    role: UserRole.INSTRUCTOR,
    status: AccountStatus.ACTIVE,
    department: "School of IT",
    phone: "+63 924 890 1234",
    joinedAt: new Date("2026-07-10T00:00:00.000Z"),
    lastActiveAt: new Date("2026-09-01T07:00:00.000Z"),
  },
  {
    externalId: "STU-20262006",
    name: "Rico Dela Cruz",
    email: "r.delacruz@eduflex.edu.ph",
    plainPassword: "student123",
    role: UserRole.STUDENT,
    status: AccountStatus.INACTIVE,
    program: "BS Information Technology",
    phone: "+63 925 901 2345",
    joinedAt: new Date("2026-08-25T00:00:00.000Z"),
    lastActiveAt: new Date("2026-08-14T23:00:00.000Z"),
  },
  {
    externalId: "STU-20262007",
    name: "Patricia Aquino",
    email: "p.aquino@eduflex.edu.ph",
    plainPassword: "student123",
    role: UserRole.STUDENT,
    status: AccountStatus.ACTIVE,
    program: "BS Information Technology",
    phone: "+63 926 012 3456",
    joinedAt: new Date("2026-08-22T00:00:00.000Z"),
    lastActiveAt: new Date("2026-09-02T00:10:00.000Z"),
  },
  {
    externalId: "STU-20262008",
    name: "Gabriel Mendoza",
    email: "g.mendoza@eduflex.edu.ph",
    plainPassword: "student123",
    role: UserRole.STUDENT,
    status: AccountStatus.ACTIVE,
    program: "BS Information Technology",
    phone: "+63 927 123 4567",
    joinedAt: new Date("2026-08-20T00:00:00.000Z"),
    lastActiveAt: new Date("2026-09-01T05:20:00.000Z"),
  },
  {
    externalId: "INS-20260037",
    name: "Prof. Carla Tan",
    email: "c.tan@eduflex.edu.ph",
    plainPassword: "instructor123",
    role: UserRole.INSTRUCTOR,
    status: AccountStatus.ACTIVE,
    department: "School of IT",
    phone: "+63 928 234 5678",
    joinedAt: new Date("2026-06-01T00:00:00.000Z"),
    lastActiveAt: new Date("2026-08-30T01:30:00.000Z"),
  },
  {
    externalId: "INS-20260012",
    name: "Prof. Sarita Koirala",
    email: "s.koirala@eduflex.edu.ph",
    plainPassword: "instructor123",
    role: UserRole.INSTRUCTOR,
    status: AccountStatus.ACTIVE,
    department: "School of IT",
    phone: "+63 929 111 2233",
    joinedAt: new Date("2026-05-10T00:00:00.000Z"),
    lastActiveAt: new Date("2026-09-02T01:30:00.000Z"),
  },

  // Group D: Pending Approval Requesters (INITIAL_ADMIN_PENDING) & Service Accounts
  {
    externalId: "REQ-PA-001",
    name: "Bea Tolentino",
    email: "b.tolentino@eduflex.edu.ph",
    plainPassword: "instructor123",
    role: UserRole.INSTRUCTOR,
    status: AccountStatus.PENDING,
    department: "School of ICT",
    joinedAt: new Date("2026-09-01T00:00:00.000Z"),
  },
  {
    externalId: "REQ-PA-002",
    name: "Karl Navarro",
    email: "karl.navarro@eduflex.edu.ph",
    plainPassword: "student123",
    role: UserRole.STUDENT,
    status: AccountStatus.PENDING,
    program: "BS Information Technology",
    joinedAt: new Date("2026-09-01T00:00:00.000Z"),
  },
  {
    externalId: "REQ-PA-003",
    name: "Liza Mendoza",
    email: "l.mendoza@eduflex.edu.ph",
    plainPassword: "instructor123",
    role: UserRole.INSTRUCTOR,
    status: AccountStatus.PENDING,
    department: "School of ICT",
    joinedAt: new Date("2026-08-31T00:00:00.000Z"),
  },
  {
    externalId: "REQ-PA-004",
    name: "Nico Aguilar",
    email: "n.aguilar@eduflex.edu.ph",
    plainPassword: "student123",
    role: UserRole.STUDENT,
    status: AccountStatus.PENDING,
    program: "BS Information Technology",
    joinedAt: new Date("2026-08-30T00:00:00.000Z"),
  },
  {
    externalId: "REQ-PA-005",
    name: "Danilo Santos",
    email: "d.santos@eduflex.edu.ph",
    plainPassword: "student123",
    role: UserRole.STUDENT,
    status: AccountStatus.PENDING,
    program: "BS Information Technology",
    joinedAt: new Date("2026-08-29T00:00:00.000Z"),
  },
  {
    externalId: "SYS-SUPPORT-01",
    name: "Student Support Desk",
    email: "support@richacademy.en-rich.me",
    plainPassword: "admin123",
    role: UserRole.ADMIN,
    status: AccountStatus.INACTIVE,
    department: "Student Services",
    joinedAt: new Date("2025-01-01T00:00:00.000Z"),
  },
  {
    externalId: "SYS-INFRA-01",
    name: "IT Infrastructure",
    email: "infra@richacademy.en-rich.me",
    plainPassword: "admin123",
    role: UserRole.ADMIN,
    status: AccountStatus.INACTIVE,
    department: "IT Operations",
    joinedAt: new Date("2025-01-01T00:00:00.000Z"),
  },
];

function buildDefaultModulesJson(code: string, title: string) {
  return [
    {
      week: 1,
      title: `Week 1: Introduction to ${code} & Unit Foundations`,
      topics: [`${title} overview and syllabus expectations`, "Development environment and tooling setup"],
      status: "completed",
    },
    {
      week: 2,
      title: `Week 2: Core Architecture & Design Principles`,
      topics: ["Requirements engineering and modeling", "Analytical frameworks and case studies"],
      status: "completed",
    },
    {
      week: 3,
      title: `Week 3: Applied Implementation & Laboratory Workshop`,
      topics: ["Hands-on lab exercises and modular coding", "Verification, testing, and peer review"],
      status: "in-progress",
    },
    {
      week: 4,
      title: `Week 4: Assessment Milestone Preparation & Review`,
      topics: ["Rubric walkthrough and deliverable packaging", "Consultation and milestone defense"],
      status: "upcoming",
    },
  ];
}

function buildAssignmentInstructionsJson(
  courseCode: string,
  slug: string,
  title: string,
  description: string,
  maxScore: number
) {
  return {
    overview: `${description} Students must complete all required technical deliverables and include verification documentation in accordance with ${courseCode} unit standards.`,
    tasks: [
      {
        title: "1. Requirements Analysis & Planning",
        desc: `Review the official ${title} specification and define the technical scope, architecture, and milestone schedule.`,
      },
      {
        title: "2. Technical Implementation & Development",
        desc: "Develop and assemble deliverables following course guidelines, utilizing modular structures and robust error handling.",
      },
      {
        title: "3. Testing, Verification & Technical Write-up",
        desc: "Conduct thorough testing of all components and compile a concise report summarizing results and references.",
      },
    ],
    rubric: [
      {
        criterion: "Technical Execution & Completeness",
        maxPts: Math.round(maxScore * 0.4),
        desc: "Implementation meets all key technical requirements and objectives.",
      },
      {
        criterion: "Methodology & Architecture",
        maxPts: Math.round(maxScore * 0.3),
        desc: "Adherence to standards, structure, and optimal problem-solving.",
      },
      {
        criterion: "Documentation & Analysis",
        maxPts: Math.round(maxScore * 0.3),
        desc: "Clear reporting, evidence of testing, and thorough write-up.",
      },
    ],
    resources: [
      {
        name: `${courseCode}_${slug.toUpperCase()}_Brief.pdf`,
        size: "1.2 MB",
        type: "PDF Document",
        desc: "Official assessment brief and instructions.",
      },
      {
        name: `${courseCode}_Assessment_Marking_Rubric.pdf`,
        size: "380 KB",
        type: "PDF Document",
        desc: "Marking criteria and grade bands.",
      },
    ],
  };
}

const QUIZ_1_QUESTIONS = [
  {
    questionNumber: 1,
    prompt: "Which DOM method returns the first Element that matches a specified CSS selector string?",
    optionsJson: ["document.getElementById()", "document.querySelector()", "document.querySelectorAll()", "document.getElementsByTagName()"],
    correctIndex: 1,
    explanation: "document.querySelector() returns the first Element within the document that matches the specified CSS selector or group of selectors.",
  },
  {
    questionNumber: 2,
    prompt: "How do you prevent an event from bubbling up the DOM tree to parent ancestor nodes?",
    optionsJson: ["event.preventDefault()", "event.stopPropagation()", "event.stopImmediatePropagation()", "event.cancelBubble()"],
    correctIndex: 1,
    explanation: "event.stopPropagation() halts the propagation of the event further up the DOM hierarchy in the capturing and bubbling phases.",
  },
  {
    questionNumber: 3,
    prompt: "Which property is used to safely retrieve or set the visible text content of an HTML element without parsing HTML tags?",
    optionsJson: ["element.innerHTML", "element.textContent", "element.outerHTML", "element.nodeValue"],
    correctIndex: 1,
    explanation: "element.textContent retrieves or sets the text content of a node and its descendants without parsing HTML tags, making it safe against XSS attacks.",
  },
  {
    questionNumber: 4,
    prompt: "When attaching an event listener with addEventListener('click', handler, true), what does setting the third parameter to true do?",
    optionsJson: [
      "The handler runs during the bubbling phase.",
      "The handler runs during the capturing phase.",
      "The event listener executes only once before being deleted.",
      "The browser prevents the default action automatically.",
    ],
    correctIndex: 1,
    explanation: "Setting useCapture to true (or { capture: true }) causes the handler to execute during the event capturing phase (from window down to target element).",
  },
  {
    questionNumber: 5,
    prompt: "What is 'event delegation' in modern JavaScript web development?",
    optionsJson: [
      "Delegating event dispatch to a Web Worker thread.",
      "Attaching a single event listener to an ancestor container to manage events on current and future children via bubbling.",
      "Passing callback functions to a microtask queue.",
      "Triggering synthetic events programmatically using dispatchEvent().",
    ],
    correctIndex: 1,
    explanation: "Event delegation leverages event bubbling by placing one listener on a parent element to handle events on multiple or dynamically inserted child elements.",
  },
  {
    questionNumber: 6,
    prompt: "Which method is the standard way to dynamically add a CSS class name to an element?",
    optionsJson: [
      "element.className.add('active')",
      "element.classList.add('active')",
      "element.classes.push('active')",
      "element.setAttribute('class-add', 'active')",
    ],
    correctIndex: 1,
    explanation: "element.classList.add() adds one or more specified class tokens to the element's class list without overwriting existing classes.",
  },
  {
    questionNumber: 7,
    prompt: "What is the key difference between event.target and event.currentTarget in an event handler?",
    optionsJson: [
      "event.target is where the handler is attached; event.currentTarget is the element clicked.",
      "event.target is the element that triggered the event; event.currentTarget is the element whose event listener is currently running.",
      "event.target is only for keyboard events; event.currentTarget is for mouse events.",
      "They are aliases in modern ECMAScript with identical behavior.",
    ],
    correctIndex: 1,
    explanation: "event.target references the deepest element where the event originated, while event.currentTarget references the element to which the event handler is attached.",
  },
  {
    questionNumber: 8,
    prompt: "Which method creates a new HTML DOM element in memory before inserting it into the document?",
    optionsJson: [
      "document.newElement('div')",
      "document.createElement('div')",
      "document.appendNode('div')",
      "document.instantiateElement('div')",
    ],
    correctIndex: 1,
    explanation: "document.createElement(tagName) creates the HTML element specified by tagName in memory, ready for attribute configuration and DOM attachment.",
  },
  {
    questionNumber: 9,
    prompt: "How do you prevent a form element from performing a full page reload when its submit button is clicked?",
    optionsJson: [
      "event.preventDefault()",
      "event.stopPropagation()",
      "event.halt()",
      "window.stopSubmit()",
    ],
    correctIndex: 0,
    explanation: "event.preventDefault() suppresses the default browser action associated with the event, such as form submission and page reloading.",
  },
  {
    questionNumber: 10,
    prompt: "Which DOM method is used to insert a new node immediately before an existing reference child node?",
    optionsJson: [
      "parentElement.prepend(newNode, referenceNode)",
      "parentElement.insertBefore(newNode, referenceNode)",
      "referenceNode.insertPreceding(newNode)",
      "parentElement.insertAfter(newNode, referenceNode)",
    ],
    correctIndex: 1,
    explanation: "parentElement.insertBefore(newNode, referenceNode) inserts newNode directly before referenceNode as a child of parentElement.",
  },
  {
    questionNumber: 11,
    prompt: "What is the primary difference between DOMContentLoaded and the window.load event?",
    optionsJson: [
      "DOMContentLoaded fires when the HTML is parsed without waiting for stylesheets/images; window.load waits for all external resources.",
      "DOMContentLoaded waits for all images to download; window.load fires as soon as the HTML is parsed.",
      "DOMContentLoaded only works on desktop browsers; window.load is for mobile devices.",
      "DOMContentLoaded fires repeatedly whenever the DOM updates; window.load fires only once.",
    ],
    correctIndex: 0,
    explanation: "DOMContentLoaded triggers when the HTML document has been parsed and DOM tree built, without waiting for stylesheets, images, and subframes to finish loading.",
  },
  {
    questionNumber: 12,
    prompt: "Which method provides the modern, standard way to remove an element directly from the DOM?",
    optionsJson: [
      "element.parentNode.removeChild(element)",
      "element.remove()",
      "document.deleteElement(element)",
      "element.clear()",
    ],
    correctIndex: 1,
    explanation: "The modern ChildNode.remove() method allows an element to remove itself directly from the DOM tree without requiring a reference to parentNode.",
  },
  {
    questionNumber: 13,
    prompt: "Which of the following methods returns a live HTMLCollection rather than a static NodeList?",
    optionsJson: [
      "document.querySelectorAll('.card')",
      "document.getElementsByClassName('.card')",
      "element.closest('.card')",
      "document.querySelector('.card')",
    ],
    correctIndex: 1,
    explanation: "document.getElementsByClassName() returns a live HTMLCollection that dynamically updates as matching elements are added or removed from the DOM.",
  },
  {
    questionNumber: 14,
    prompt: "How do you read or write a custom data-user-id attribute on an element using the dataset API?",
    optionsJson: [
      "element.dataset.userId",
      "element.dataset['user-id-attr']",
      "element.data.userId",
      "element.getDataset('userId')",
    ],
    correctIndex: 0,
    explanation: "The dataset property maps kebab-case data-* attributes to camelCase properties, so data-user-id is accessed via element.dataset.userId.",
  },
  {
    questionNumber: 15,
    prompt: "What is the effect of configuring { once: true } in addEventListener('click', handler, { once: true })?",
    optionsJson: [
      "The listener throttles execution to once per minute.",
      "The listener is automatically removed after being invoked for the first time.",
      "The listener only executes if no previous click event occurred in the window.",
      "The listener executes synchronously blocking all other callbacks.",
    ],
    correctIndex: 1,
    explanation: "The once: true option specifies that the event listener should be invoked at most once after being added, and automatically removed after firing.",
  },
];

const QUIZ_2_QUESTIONS = [
  {
    questionNumber: 1,
    prompt: "Which CSS property defines a flex container and activates the Flexbox formatting context?",
    optionsJson: ["display: block-flex", "display: flex", "flex-mode: container", "position: flex"],
    correctIndex: 1,
    explanation: "display: flex converts the element into a flex container and its direct children into flex items.",
  },
  {
    questionNumber: 2,
    prompt: "Which property controls the alignment of flex items along the main axis?",
    optionsJson: ["align-items", "justify-content", "align-content", "flex-align"],
    correctIndex: 1,
    explanation: "justify-content aligns items along the main axis (horizontal by default when flex-direction is row).",
  },
  {
    questionNumber: 3,
    prompt: "Which property controls the alignment of flex items along the cross axis inside a single line?",
    optionsJson: ["justify-items", "align-items", "align-self", "content-align"],
    correctIndex: 1,
    explanation: "align-items defines default alignment along the cross axis for all flex items in the container.",
  },
  {
    questionNumber: 4,
    prompt: "When flex-direction is set to column, which direction becomes the main axis?",
    optionsJson: ["Horizontal (left to right)", "Vertical (top to bottom)", "Diagonal", "Radial"],
    correctIndex: 1,
    explanation: "Setting flex-direction: column sets the main axis vertically from top to bottom.",
  },
  {
    questionNumber: 5,
    prompt: "Which property allows flex items to wrap onto multiple lines when container width is insufficient?",
    optionsJson: ["flex-wrap: nowrap", "flex-wrap: wrap", "overflow: wrap", "white-space: normal"],
    correctIndex: 1,
    explanation: "flex-wrap: wrap allows flex items to break onto multiple lines rather than overflowing or shrinking.",
  },
  {
    questionNumber: 6,
    prompt: "What does the align-content property do in a flex container?",
    optionsJson: [
      "Aligns text content inside each flex item.",
      "Aligns flex lines relative to each other along the cross axis when extra space exists.",
      "Centers the flex container on the screen.",
      "Controls letter spacing across flex elements.",
    ],
    correctIndex: 1,
    explanation: "align-content aligns flex lines along the cross axis when there is extra space and flex-wrap is active.",
  },
  {
    questionNumber: 7,
    prompt: "What does flex-grow: 1 signify on a flex item?",
    optionsJson: [
      "The item absorbs available free space proportionally along the main axis.",
      "The item doubles in font size.",
      "The item shrinks faster than other items.",
      "The item is fixed at 100% width.",
    ],
    correctIndex: 0,
    explanation: "flex-grow determines how much of the available free space along the main axis this flex item should absorb.",
  },
  {
    questionNumber: 8,
    prompt: "How do you prevent a flex item from shrinking smaller than its flex-basis or intrinsic content size?",
    optionsJson: ["flex-shrink: 0", "flex-shrink: 1", "flex-grow: 0", "min-width: auto"],
    correctIndex: 0,
    explanation: "Setting flex-shrink: 0 prevents the item from shrinking when available space is constrained.",
  },
  {
    questionNumber: 9,
    prompt: "What does flex-basis define on a flex item?",
    optionsJson: [
      "The maximum height of the item.",
      "The initial main size of the item before any free space is distributed or shrinking occurs.",
      "The border radius of the item.",
      "The flex item's z-index order.",
    ],
    correctIndex: 1,
    explanation: "flex-basis specifies the initial size of the flex item along the main axis before space distribution.",
  },
  {
    questionNumber: 10,
    prompt: "What does the shorthand 'flex: 1 1 auto' expand to?",
    optionsJson: [
      "flex-grow: 1, flex-shrink: 1, flex-basis: 0%",
      "flex-grow: 1, flex-shrink: 1, flex-basis: auto",
      "flex-grow: 0, flex-shrink: 1, flex-basis: auto",
      "flex-direction: row, flex-wrap: wrap, flex-align: center",
    ],
    correctIndex: 1,
    explanation: "flex: 1 1 auto sets flex-grow to 1, flex-shrink to 1, and flex-basis to auto.",
  },
  {
    questionNumber: 11,
    prompt: "Which media query breakpoint syntax represents a standard mobile-first approach for screens at least 768px wide?",
    optionsJson: [
      "@media (max-width: 768px)",
      "@media (min-width: 768px)",
      "@media only screen and (max-device-width: 768px)",
      "@media (device-width: 768px)",
    ],
    correctIndex: 1,
    explanation: "min-width: 768px applies styles for screens 768px and wider, which is the foundational pattern of mobile-first responsive design.",
  },
  {
    questionNumber: 12,
    prompt: "What is the purpose of the <meta name='viewport' content='width=device-width, initial-scale=1.0'> tag?",
    optionsJson: [
      "Enables GPU acceleration on mobile devices.",
      "Instructs mobile browsers to render the viewport width equal to the physical device width at 1:1 scale.",
      "Compresses image assets for mobile bandwidth.",
      "Disables pinch-to-zoom completely.",
    ],
    correctIndex: 1,
    explanation: "The viewport meta tag ensures the mobile browser scales the document correctly to match device screen width without zoomed-out desktop rendering.",
  },
  {
    questionNumber: 13,
    prompt: "Which CSS property provides space between flex items without applying margin to outer edges?",
    optionsJson: ["gap", "flex-spacing", "margin-between", "item-padding"],
    correctIndex: 0,
    explanation: "The gap property (including row-gap and column-gap) sets gutters between flex items without unnecessary outer margins.",
  },
  {
    questionNumber: 14,
    prompt: "How does the order property affect flex items?",
    optionsJson: [
      "Modifies the item's position in the HTML DOM tree permanently.",
      "Changes the visual rendering order of flex items without altering DOM structure or tab order.",
      "Reverses the flex-direction axis.",
      "Sorts children alphabetically.",
    ],
    correctIndex: 1,
    explanation: "The order property reorders visual display of flex items without modifying the underlying DOM hierarchy.",
  },
  {
    questionNumber: 15,
    prompt: "Which property allows an individual flex item to override the container's align-items setting?",
    optionsJson: ["align-content", "justify-self", "align-self", "flex-override"],
    correctIndex: 2,
    explanation: "align-self allows a specific flex item to override the default cross-axis alignment defined by its parent's align-items.",
  },
];

// Student's recorded answers for Quiz 2 ("Weekly Quiz 3", 13/15 correct) from `src/LegacyApp.tsx`
const QUIZ_2_STUDENT_ANSWERS: Record<number, number> = {
  1: 1,
  2: 1,
  3: 1,
  4: 0, // Incorrect (correct is 1)
  5: 1,
  6: 1,
  7: 0,
  8: 0,
  9: 1,
  10: 0, // Incorrect (correct is 1)
  11: 1,
  12: 1,
  13: 0,
  14: 1,
  15: 2,
};

// ─── 4. Main Idempotent Seed Execution ────────────────────────────────────────

async function main(): Promise<void> {
  const target = assertSafeDevelopmentSeedEnvironment();
  console.log(
    `[EduFlex Seed] Safety guard passed. Target host: ${target.host} (database: ${target.dbName})`
  );

  // Self-test password hashing & constant-time verification before opening DB connection
  const sampleDigest = hashSeedPassword("student123", "2003988@richacademy.en-rich.me");
  if (!verifySeedPassword("student123", sampleDigest) || verifySeedPassword("wrongpass", sampleDigest)) {
    throw new Error("[SEED ABORTED] Password hashing/verification self-check failed.");
  }

  const prisma = new PrismaClient();

  try {
    // ── Tier 1A: SystemSetting ─────────────────────────────────────────────────
    await prisma.systemSetting.upsert({
      where: { id: "default" },
      update: {
        institutionName: "EduFlex University",
        institutionEmail: "admin@richacademy.en-rich.me",
        contactNumber: "+61 2 9000 1234",
        timezone: "UTC+10:00 (Sydney / AEST)",
        academicYear: "2026",
        currentSemester: "Trimester 2, 2026",
        semesterStartDate: new Date("2026-09-01T00:00:00.000Z"),
        semesterEndDate: new Date("2026-11-30T23:59:59.000Z"),
        enrollmentPeriod: "Sep 1 – Sep 14, 2026",
        emailNotifications: true,
        studentNotifications: true,
        instructorNotifications: true,
        systemAlerts: true,
        passwordPolicy: "Strong (Min 8 chars, mixed case, symbols)",
        sessionTimeoutMins: 60,
        twoFactorAuth: false,
        loginSecurity: true,
        language: "English (US)",
        dateFormat: "MMM D, YYYY",
        theme: "Light Mode",
      },
      create: {
        id: "default",
        institutionName: "EduFlex University",
        institutionEmail: "admin@richacademy.en-rich.me",
        contactNumber: "+61 2 9000 1234",
        timezone: "UTC+10:00 (Sydney / AEST)",
        academicYear: "2026",
        currentSemester: "Trimester 2, 2026",
        semesterStartDate: new Date("2026-09-01T00:00:00.000Z"),
        semesterEndDate: new Date("2026-11-30T23:59:59.000Z"),
        enrollmentPeriod: "Sep 1 – Sep 14, 2026",
        emailNotifications: true,
        studentNotifications: true,
        instructorNotifications: true,
        systemAlerts: true,
        passwordPolicy: "Strong (Min 8 chars, mixed case, symbols)",
        sessionTimeoutMins: 60,
        twoFactorAuth: false,
        loginSecurity: true,
        language: "English (US)",
        dateFormat: "MMM D, YYYY",
        theme: "Light Mode",
      },
    });

    // ── Tier 1B: Users (Institutional accounts first, then legacy & admin roster) ─
    const userByEmail = new Map<string, { id: string; email: string; externalId: string | null; name: string }>();
    const userByExternalId = new Map<string, { id: string; email: string; externalId: string | null; name: string }>();

    for (const spec of SEED_USERS) {
      const normalizedEmail = spec.email.trim().toLowerCase();
      const passwordHash = hashSeedPassword(spec.plainPassword, normalizedEmail);

      const user = await prisma.user.upsert({
        where: { email: normalizedEmail },
        update: {
          externalId: spec.externalId,
          name: spec.name,
          passwordHash,
          role: spec.role,
          status: spec.status,
          program: spec.program ?? null,
          department: spec.department ?? null,
          phone: spec.phone ?? null,
          bio: spec.bio ?? null,
          joinedAt: spec.joinedAt,
          lastActiveAt: spec.lastActiveAt ?? null,
        },
        create: {
          externalId: spec.externalId,
          name: spec.name,
          email: normalizedEmail,
          passwordHash,
          role: spec.role,
          status: spec.status,
          program: spec.program ?? null,
          department: spec.department ?? null,
          phone: spec.phone ?? null,
          bio: spec.bio ?? null,
          joinedAt: spec.joinedAt,
          lastActiveAt: spec.lastActiveAt ?? null,
        },
      });

      userByEmail.set(normalizedEmail, user);
      if (user.externalId) {
        userByExternalId.set(user.externalId, user);
      }
    }

    const richardInst = userByEmail.get("2003988@richacademy.en-rich.me")!;
    const anitaInst = userByEmail.get("anita.humagain@richacademy.en-rich.me")!;
    const rojitInst = userByEmail.get("a.rojit.munankarmi@richacademy.en-rich.me")!;
    const richardLegacy = userByEmail.get("2003988@eduflex.edu")!;
    const saritaUser = userByEmail.get("s.koirala@eduflex.edu.ph")!;
    const annaCruzUser = userByEmail.get("a.cruz@eduflex.edu.ph")!;
    const rachelGomezUser = userByEmail.get("r.gomez@eduflex.edu.ph")!;
    const eduardoLimUser = userByEmail.get("e.lim@eduflex.edu.ph")!;
    const carlaTanUser = userByEmail.get("c.tan@eduflex.edu.ph")!;

    // ── Tier 2A: Courses ───────────────────────────────────────────────────────
    const courseSpecs = [
      {
        code: "ICT301",
        title: "Information Technology Project 1",
        faculty: "School of ICT",
        term: "T2 2026",
        academicYear: 2026,
        description: "Capstone systems development and project management course for final year IT students.",
        iconColor: "#2563eb",
        bgColor: "#eff6ff",
        capacity: 150,
        status: CourseStatus.ACTIVE,
        instructorId: saritaUser.id,
      },
      {
        code: "ICT272",
        title: "Web Design and Development",
        faculty: "School of ICT",
        term: "T2 2026",
        academicYear: 2026,
        description: "Modern responsive web applications, component lifecycle, styling architectures, and REST API integration.",
        iconColor: "#0e9f6e",
        bgColor: "#ecfdf5",
        capacity: 150,
        status: CourseStatus.ACTIVE,
        instructorId: annaCruzUser.id,
      },
      {
        code: "ICT126",
        title: "Artificial Intelligence",
        faculty: "School of ICT",
        term: "T2 2026",
        academicYear: 2026,
        description: "Core concepts of artificial intelligence, search algorithms, heuristic evaluation, and machine learning models.",
        iconColor: "#7c3aed",
        bgColor: "#f5f3ff",
        capacity: 120,
        status: CourseStatus.ACTIVE,
        instructorId: rachelGomezUser.id,
      },
      {
        code: "ICT350",
        title: "Cybersecurity Basics",
        faculty: "School of ICT",
        term: "T2 2026",
        academicYear: 2026,
        description: "Network defense principles, encryption standards, threat modeling, and vulnerability assessments.",
        iconColor: "#dc2626",
        bgColor: "#fef2f2",
        capacity: 100,
        status: CourseStatus.DRAFT,
        instructorId: eduardoLimUser.id,
      },
      {
        code: "ICT410",
        title: "Mobile Application Development",
        faculty: "School of ICT",
        term: "T1 2026",
        academicYear: 2026,
        description: "Cross-platform mobile application engineering, reactive state management, and native device hardware access.",
        iconColor: "#0284c7",
        bgColor: "#f0f9ff",
        capacity: 120,
        status: CourseStatus.ACTIVE,
        instructorId: carlaTanUser.id,
      },
      {
        code: "ICT220",
        title: "Data Structures & Algorithms",
        faculty: "School of ICT",
        term: "T1 2026",
        academicYear: 2026,
        description: "Algorithmic complexity, tree traversals, dynamic programming, and asymptotic computational analysis.",
        iconColor: "#4f46e5",
        bgColor: "#eef2ff",
        capacity: 130,
        status: CourseStatus.ARCHIVED,
        instructorId: eduardoLimUser.id,
      },
      {
        code: "ICT180",
        title: "Computer Networks",
        faculty: "School of ICT",
        term: "T1 2026",
        academicYear: 2026,
        description: "OSI and TCP/IP protocol stacks, subnetting, socket communications, routing topologies, and packet filtering.",
        iconColor: "#0d9488",
        bgColor: "#f0fdfa",
        capacity: 100,
        status: CourseStatus.ARCHIVED,
        instructorId: annaCruzUser.id,
      },
      {
        code: "ICT101",
        title: "Introduction to Programming",
        faculty: "School of ICT",
        term: "T3 2025",
        academicYear: 2025,
        description: "Foundational Python programming, control structures, functions, and algorithmic problem solving.",
        iconColor: "#2563eb",
        bgColor: "#eff6ff",
        capacity: 150,
        status: CourseStatus.ARCHIVED,
        instructorId: anitaInst.id,
      },
      {
        code: "ICT102",
        title: "Discrete Mathematics for IT",
        faculty: "School of ICT",
        term: "T3 2025",
        academicYear: 2025,
        description: "Propositional logic, set theory, combinatorics, proof techniques, and graph theory for computing.",
        iconColor: "#7c3aed",
        bgColor: "#f5f3ff",
        capacity: 140,
        status: CourseStatus.ARCHIVED,
        instructorId: anitaInst.id,
      },
    ];

    const courseByCode = new Map<string, { id: string; code: string; title: string }>();
    for (const c of courseSpecs) {
      const modulesJson = buildDefaultModulesJson(c.code, c.title);
      const course = await prisma.course.upsert({
        where: { code: c.code },
        update: {
          title: c.title,
          faculty: c.faculty,
          term: c.term,
          academicYear: c.academicYear,
          description: c.description,
          modulesJson,
          iconColor: c.iconColor,
          bgColor: c.bgColor,
          capacity: c.capacity,
          status: c.status,
          instructorId: c.instructorId,
        },
        create: {
          code: c.code,
          title: c.title,
          faculty: c.faculty,
          term: c.term,
          academicYear: c.academicYear,
          description: c.description,
          modulesJson,
          iconColor: c.iconColor,
          bgColor: c.bgColor,
          capacity: c.capacity,
          status: c.status,
          instructorId: c.instructorId,
        },
      });
      courseByCode.set(c.code, course);
    }

    // ── Tier 2B: Approval Requests (PA-001 .. PA-005) ──────────────────────────
    const approvalSpecs = [
      {
        referenceCode: "PA-001",
        requesterEmail: "b.tolentino@eduflex.edu.ph",
        type: ApprovalType.ACCOUNT_REGISTRATION,
        actionLabel: "Account Registration",
        requestedRole: UserRole.INSTRUCTOR,
        courseCode: null,
        submittedAt: new Date("2026-09-01T09:00:00.000Z"),
      },
      {
        referenceCode: "PA-002",
        requesterEmail: "karl.navarro@eduflex.edu.ph",
        type: ApprovalType.LATE_ENROLLMENT,
        actionLabel: "Late Enrollment – ICT301",
        requestedRole: UserRole.STUDENT,
        courseCode: "ICT301",
        submittedAt: new Date("2026-09-01T10:30:00.000Z"),
      },
      {
        referenceCode: "PA-003",
        requesterEmail: "l.mendoza@eduflex.edu.ph",
        type: ApprovalType.ACCOUNT_REGISTRATION,
        actionLabel: "Account Registration",
        requestedRole: UserRole.INSTRUCTOR,
        courseCode: null,
        submittedAt: new Date("2026-08-31T14:00:00.000Z"),
      },
      {
        referenceCode: "PA-004",
        requesterEmail: "n.aguilar@eduflex.edu.ph",
        type: ApprovalType.COURSE_OVERRIDE,
        actionLabel: "Course Override – ICT272",
        requestedRole: UserRole.STUDENT,
        courseCode: "ICT272",
        submittedAt: new Date("2026-08-30T11:15:00.000Z"),
      },
      {
        referenceCode: "PA-005",
        requesterEmail: "d.santos@eduflex.edu.ph",
        type: ApprovalType.ACCOUNT_REGISTRATION,
        actionLabel: "Account Registration",
        requestedRole: UserRole.STUDENT,
        courseCode: null,
        submittedAt: new Date("2026-08-29T16:45:00.000Z"),
      },
    ];

    for (const req of approvalSpecs) {
      const requester = userByEmail.get(req.requesterEmail)!;
      const courseId = req.courseCode ? courseByCode.get(req.courseCode)!.id : null;
      await prisma.approvalRequest.upsert({
        where: { referenceCode: req.referenceCode },
        update: {
          requesterId: requester.id,
          type: req.type,
          actionLabel: req.actionLabel,
          requestedRole: req.requestedRole,
          courseId,
          status: ApprovalStatus.PENDING,
          submittedAt: req.submittedAt,
          reviewedAt: null,
          reviewedById: null,
        },
        create: {
          referenceCode: req.referenceCode,
          requesterId: requester.id,
          type: req.type,
          actionLabel: req.actionLabel,
          requestedRole: req.requestedRole,
          courseId,
          status: ApprovalStatus.PENDING,
          submittedAt: req.submittedAt,
        },
      });
    }

    // ── Tier 2C: Enrollments ───────────────────────────────────────────────────
    const enrollmentSpecs = [
      // Institutional Student (2003988@richacademy.en-rich.me) active & completed enrollments
      {
        referenceCode: "ENR-STU-ICT301",
        studentId: richardInst.id,
        courseCode: "ICT301",
        semester: "T2 2026",
        status: EnrollmentStatus.ENROLLED,
        progressPct: 68,
        enrolledAt: new Date("2026-08-15T09:00:00.000Z"),
      },
      {
        referenceCode: "ENR-STU-ICT272",
        studentId: richardInst.id,
        courseCode: "ICT272",
        semester: "T2 2026",
        status: EnrollmentStatus.ENROLLED,
        progressPct: 75,
        enrolledAt: new Date("2026-08-15T09:05:00.000Z"),
      },
      {
        referenceCode: "ENR-STU-ICT126",
        studentId: richardInst.id,
        courseCode: "ICT126",
        semester: "T2 2026",
        status: EnrollmentStatus.ENROLLED,
        progressPct: 54,
        enrolledAt: new Date("2026-08-15T09:10:00.000Z"),
      },
      {
        referenceCode: "ENR-STU-ICT101",
        studentId: richardInst.id,
        courseCode: "ICT101",
        semester: "T3 2025",
        status: EnrollmentStatus.COMPLETED,
        progressPct: 100,
        finalScore: 91,
        finalGrade: "HD",
        enrolledAt: new Date("2025-09-01T09:00:00.000Z"),
        completedAt: new Date("2025-12-10T17:00:00.000Z"),
      },
      {
        referenceCode: "ENR-STU-ICT102",
        studentId: richardInst.id,
        courseCode: "ICT102",
        semester: "T3 2025",
        status: EnrollmentStatus.COMPLETED,
        progressPct: 100,
        finalScore: 84,
        finalGrade: "D",
        enrolledAt: new Date("2025-09-01T09:05:00.000Z"),
        completedAt: new Date("2025-12-10T17:00:00.000Z"),
      },

      // Legacy Student (2003988@eduflex.edu) active enrollments
      {
        referenceCode: "ENR-LEG-ICT301",
        studentId: richardLegacy.id,
        courseCode: "ICT301",
        semester: "T2 2026",
        status: EnrollmentStatus.ENROLLED,
        progressPct: 68,
        enrolledAt: new Date("2026-08-15T09:00:00.000Z"),
      },
      {
        referenceCode: "ENR-LEG-ICT272",
        studentId: richardLegacy.id,
        courseCode: "ICT272",
        semester: "T2 2026",
        status: EnrollmentStatus.ENROLLED,
        progressPct: 75,
        enrolledAt: new Date("2026-08-15T09:05:00.000Z"),
      },
      {
        referenceCode: "ENR-LEG-ICT126",
        studentId: richardLegacy.id,
        courseCode: "ICT126",
        semester: "T2 2026",
        status: EnrollmentStatus.ENROLLED,
        progressPct: 54,
        enrolledAt: new Date("2026-08-15T09:10:00.000Z"),
      },

      // Admin Enrollment Records (ENR-001 .. ENR-010 from INITIAL_ADMIN_ENROLLMENTS)
      {
        referenceCode: "ENR-001",
        studentId: userByExternalId.get("STU-20262001")!.id,
        courseCode: "ICT301",
        semester: "T2 2026",
        status: EnrollmentStatus.ENROLLED,
        progressPct: 60,
        enrolledAt: new Date("2026-09-01T09:00:00.000Z"),
      },
      {
        referenceCode: "ENR-002",
        studentId: userByExternalId.get("STU-20262002")!.id,
        courseCode: "ICT272",
        semester: "T2 2026",
        status: EnrollmentStatus.ENROLLED,
        progressPct: 64,
        enrolledAt: new Date("2026-09-01T09:30:00.000Z"),
      },
      {
        referenceCode: "ENR-003",
        studentId: userByExternalId.get("STU-20262003")!.id,
        courseCode: "ICT301",
        semester: "T2 2026",
        status: EnrollmentStatus.ENROLLED,
        progressPct: 20,
        enrolledAt: new Date("2026-09-01T10:00:00.000Z"),
      },
      {
        referenceCode: "ENR-004",
        studentId: userByExternalId.get("STU-20262004")!.id,
        courseCode: "ICT126",
        semester: "T2 2026",
        status: EnrollmentStatus.DROPPED,
        progressPct: 0,
        enrolledAt: new Date("2026-08-31T09:00:00.000Z"),
        droppedAt: new Date("2026-09-01T12:00:00.000Z"),
      },
      {
        referenceCode: "ENR-005",
        studentId: userByExternalId.get("STU-20262005")!.id,
        courseCode: "ICT272",
        semester: "T2 2026",
        status: EnrollmentStatus.ENROLLED,
        progressPct: 50,
        enrolledAt: new Date("2026-08-30T09:00:00.000Z"),
      },
      {
        referenceCode: "ENR-006",
        studentId: userByExternalId.get("STU-20262006")!.id,
        courseCode: "ICT350",
        semester: "T2 2026",
        status: EnrollmentStatus.ENROLLED,
        progressPct: 15,
        enrolledAt: new Date("2026-08-30T10:00:00.000Z"),
      },
      {
        referenceCode: "ENR-007",
        studentId: userByExternalId.get("STU-20262007")!.id,
        courseCode: "ICT126",
        semester: "T2 2026",
        status: EnrollmentStatus.ENROLLED,
        progressPct: 48,
        enrolledAt: new Date("2026-08-29T09:00:00.000Z"),
      },
      {
        referenceCode: "ENR-008",
        studentId: userByExternalId.get("STU-20262004")!.id,
        courseCode: "ICT272",
        semester: "T2 2026",
        status: EnrollmentStatus.ENROLLED,
        progressPct: 72,
        enrolledAt: new Date("2026-08-28T09:00:00.000Z"),
      },
      {
        referenceCode: "ENR-009",
        studentId: userByExternalId.get("STU-20262005")!.id,
        courseCode: "ICT126",
        semester: "T2 2026",
        status: EnrollmentStatus.ENROLLED,
        progressPct: 55,
        enrolledAt: new Date("2026-08-27T09:00:00.000Z"),
      },
      {
        referenceCode: "ENR-010",
        studentId: userByExternalId.get("STU-20262007")!.id,
        courseCode: "ICT301",
        semester: "T2 2026",
        status: EnrollmentStatus.ENROLLED,
        progressPct: 62,
        enrolledAt: new Date("2026-08-22T09:00:00.000Z"),
      },
    ];

    for (const enr of enrollmentSpecs) {
      const course = courseByCode.get(enr.courseCode)!;
      await prisma.enrollment.upsert({
        where: {
          studentId_courseId_semester: {
            studentId: enr.studentId,
            courseId: course.id,
            semester: enr.semester,
          },
        },
        update: {
          referenceCode: enr.referenceCode,
          status: enr.status,
          progressPct: enr.progressPct,
          finalScore: enr.finalScore ?? null,
          finalGrade: enr.finalGrade ?? null,
          enrolledAt: enr.enrolledAt,
          completedAt: enr.completedAt ?? null,
          droppedAt: enr.droppedAt ?? null,
        },
        create: {
          referenceCode: enr.referenceCode,
          studentId: enr.studentId,
          courseId: course.id,
          semester: enr.semester,
          status: enr.status,
          progressPct: enr.progressPct,
          finalScore: enr.finalScore ?? null,
          finalGrade: enr.finalGrade ?? null,
          enrolledAt: enr.enrolledAt,
          completedAt: enr.completedAt ?? null,
          droppedAt: enr.droppedAt ?? null,
        },
      });
    }

    // ── Tier 3A: Assignments & Assessments (12 items from src/assignmentData.ts) ─
    const assignmentSpecs = [
      // ICT301
      {
        slug: "ict301-a1",
        courseCode: "ICT301",
        title: "Milestone 1: Project Proposal",
        description: "Comprehensive project proposal detailing project scope, team roles, and Gantt chart schedule.",
        type: AssignmentType.ASSIGNMENT,
        dueDate: new Date("2026-08-25T13:59:00.000Z"),
        maxScore: 100,
        weightPct: 15,
      },
      {
        slug: "ict301-a2",
        courseCode: "ICT301",
        title: "Milestone 2: Preliminary Design",
        description: "Preliminary architecture design diagrams, class models, and UX wireframe deliverables.",
        type: AssignmentType.ASSIGNMENT,
        dueDate: new Date("2026-09-05T13:59:00.000Z"),
        maxScore: 100,
        weightPct: 20,
      },
      {
        slug: "ict301-a3",
        courseCode: "ICT301",
        title: "Weekly Journal Entry 1",
        description: "Reflective learning journal entry covering sprint planning and risk management notes.",
        type: AssignmentType.ASSIGNMENT,
        dueDate: new Date("2026-08-22T13:59:00.000Z"),
        maxScore: 50,
        weightPct: 10,
      },
      {
        slug: "ict301-ass1",
        courseCode: "ICT301",
        title: "Milestone 3: Final System Implementation & Defense",
        description: "Final functional software submission and panel presentation defense demonstrating project deliverables.",
        type: AssignmentType.ASSESSMENT,
        dueDate: new Date("2026-09-25T13:59:00.000Z"),
        maxScore: 100,
        weightPct: 35,
      },

      // ICT272
      {
        slug: "ict272-a1",
        courseCode: "ICT272",
        title: "Lab Exercise 1: HTML Basics",
        description: "Semantic markup exercise creating accessible multi-page structure.",
        type: AssignmentType.ASSIGNMENT,
        dueDate: new Date("2026-08-20T13:59:00.000Z"),
        maxScore: 50,
        weightPct: 10,
      },
      {
        slug: "ict272-a2",
        courseCode: "ICT272",
        title: "Lab Exercise 2: CSS Layouts",
        description: "Flexbox and Grid layout implementation matching design specifications.",
        type: AssignmentType.ASSIGNMENT,
        dueDate: new Date("2026-08-27T13:59:00.000Z"),
        maxScore: 50,
        weightPct: 10,
      },
      {
        slug: "ict272-a3",
        courseCode: "ICT272",
        title: "Lab Exercise 3: JavaScript DOM",
        description: "Interactive client-side web application handling DOM events and form validation.",
        type: AssignmentType.ASSIGNMENT,
        dueDate: new Date("2026-09-03T13:59:00.000Z"),
        maxScore: 50,
        weightPct: 10,
      },
      {
        slug: "ict272-a4",
        courseCode: "ICT272",
        title: "Lab Exercise 4: React Basics",
        description: "Component-based web application with React state and props.",
        type: AssignmentType.ASSIGNMENT,
        dueDate: new Date("2026-09-07T13:59:00.000Z"),
        maxScore: 50,
        weightPct: 10,
      },
      {
        slug: "ict272-ass1",
        courseCode: "ICT272",
        title: "Major Project: Interactive Web Application",
        description: "Production-ready web application built with responsive design and modern frontend framework.",
        type: AssignmentType.ASSESSMENT,
        dueDate: new Date("2026-09-22T13:59:00.000Z"),
        maxScore: 100,
        weightPct: 30,
      },

      // ICT126
      {
        slug: "ict126-a1",
        courseCode: "ICT126",
        title: "AI Case Study Research Paper",
        description: "Research paper surveying contemporary applications of generative AI in education.",
        type: AssignmentType.ASSIGNMENT,
        dueDate: new Date("2026-09-19T13:59:00.000Z"),
        maxScore: 100,
        weightPct: 20,
      },
      {
        slug: "ict126-a2",
        courseCode: "ICT126",
        title: "Assignment 1: AI History Review",
        description: "Literature review of classical AI paradigms and symbolic reasoning systems.",
        type: AssignmentType.ASSIGNMENT,
        dueDate: new Date("2026-08-28T13:59:00.000Z"),
        maxScore: 100,
        weightPct: 15,
      },
      {
        slug: "ict126-a3",
        courseCode: "ICT126",
        title: "Assignment 2: ML Algorithm Analysis",
        description: "Empirical evaluation of decision trees versus random forests on benchmark classification data.",
        type: AssignmentType.ASSIGNMENT,
        dueDate: new Date("2026-09-04T13:59:00.000Z"),
        maxScore: 100,
        weightPct: 20,
      },
      {
        slug: "ict126-ass1",
        courseCode: "ICT126",
        title: "Mid-Term Practical AI Assessment",
        description: "Hands-on machine learning implementation and empirical performance evaluation report.",
        type: AssignmentType.ASSESSMENT,
        dueDate: new Date("2026-09-18T13:59:00.000Z"),
        maxScore: 100,
        weightPct: 25,
      },
    ];

    const assignmentBySlug = new Map<string, { id: string; slug: string | null; courseId: string; title: string }>();
    for (const a of assignmentSpecs) {
      const course = courseByCode.get(a.courseCode)!;
      const instructionsJson = buildAssignmentInstructionsJson(
        a.courseCode,
        a.slug,
        a.title,
        a.description,
        a.maxScore
      );
      const namingConvention = `${a.courseCode}_${a.slug.toUpperCase()}_StudentID.zip`;

      const assignment = await prisma.assignment.upsert({
        where: { slug: a.slug },
        update: {
          courseId: course.id,
          title: a.title,
          description: a.description,
          instructionsJson,
          type: a.type,
          dueDate: a.dueDate,
          maxScore: a.maxScore,
          weightPct: a.weightPct,
          acceptedFormats: [".ZIP", ".PDF"],
          maxFileSizeMb: 50,
          namingConvention,
          allowResubmissions: true,
          status: PublishStatus.PUBLISHED,
        },
        create: {
          slug: a.slug,
          courseId: course.id,
          title: a.title,
          description: a.description,
          instructionsJson,
          type: a.type,
          dueDate: a.dueDate,
          maxScore: a.maxScore,
          weightPct: a.weightPct,
          acceptedFormats: [".ZIP", ".PDF"],
          maxFileSizeMb: 50,
          namingConvention,
          allowResubmissions: true,
          status: PublishStatus.PUBLISHED,
        },
      });
      assignmentBySlug.set(a.slug, assignment);
    }

    // ── Tier 3B: Quizzes (q1 .. q6 from src/LegacyApp.tsx) ─────────────────────
    const quizSpecs = [
      {
        slug: "q1",
        courseCode: "ICT272",
        title: "Weekly Quiz 4",
        description: "JavaScript DOM manipulation and event handling.",
        dueDate: new Date("2026-09-05T13:59:00.000Z"),
        availableFrom: new Date("2026-08-29T00:00:00.000Z"),
        timeLimitMins: 30,
        attemptsAllowed: 1,
        weightPct: 5,
        maxScore: 15,
        status: PublishStatus.PUBLISHED,
      },
      {
        slug: "q2",
        courseCode: "ICT272",
        title: "Weekly Quiz 3",
        description: "CSS Flexbox and responsive layout.",
        dueDate: new Date("2026-08-15T13:59:00.000Z"),
        availableFrom: new Date("2026-08-08T00:00:00.000Z"),
        timeLimitMins: 30,
        attemptsAllowed: 1,
        weightPct: 5,
        maxScore: 15,
        status: PublishStatus.PUBLISHED,
      },
      {
        slug: "q3",
        courseCode: "ICT301",
        title: "Midterm Exam",
        description: "Project management and systems analysis.",
        dueDate: new Date("2026-10-12T13:59:00.000Z"),
        availableFrom: new Date("2026-10-12T00:00:00.000Z"),
        timeLimitMins: 90,
        attemptsAllowed: 1,
        weightPct: 20,
        maxScore: 40,
        status: PublishStatus.SCHEDULED,
      },
      {
        slug: "q4",
        courseCode: "ICT301",
        title: "Weekly Quiz 1",
        description: "Introduction to project lifecycle.",
        dueDate: new Date("2026-08-02T13:59:00.000Z"),
        availableFrom: new Date("2026-07-26T00:00:00.000Z"),
        timeLimitMins: 45,
        attemptsAllowed: 1,
        weightPct: 10,
        maxScore: 35,
        status: PublishStatus.PUBLISHED,
      },
      {
        slug: "q5",
        courseCode: "ICT126",
        title: "Weekly Quiz 3",
        description: "Neural networks and deep learning fundamentals.",
        dueDate: new Date("2026-09-20T13:59:00.000Z"),
        availableFrom: new Date("2026-09-20T00:00:00.000Z"),
        timeLimitMins: 30,
        attemptsAllowed: 1,
        weightPct: 5,
        maxScore: 15,
        status: PublishStatus.SCHEDULED,
      },
      {
        slug: "q6",
        courseCode: "ICT126",
        title: "Weekly Quiz 1",
        description: "Foundations of AI and propositional logic.",
        dueDate: new Date("2026-07-28T13:59:00.000Z"),
        availableFrom: new Date("2026-07-20T00:00:00.000Z"),
        timeLimitMins: 25,
        attemptsAllowed: 1,
        weightPct: 5,
        maxScore: 10,
        status: PublishStatus.PUBLISHED,
      },
    ];

    const quizBySlug = new Map<string, { id: string; slug: string | null; courseId: string; title: string }>();
    for (const q of quizSpecs) {
      const course = courseByCode.get(q.courseCode)!;
      const quiz = await prisma.quiz.upsert({
        where: { slug: q.slug },
        update: {
          courseId: course.id,
          title: q.title,
          description: q.description,
          dueDate: q.dueDate,
          availableFrom: q.availableFrom,
          timeLimitMins: q.timeLimitMins,
          attemptsAllowed: q.attemptsAllowed,
          weightPct: q.weightPct,
          maxScore: q.maxScore,
          status: q.status,
        },
        create: {
          slug: q.slug,
          courseId: course.id,
          title: q.title,
          description: q.description,
          dueDate: q.dueDate,
          availableFrom: q.availableFrom,
          timeLimitMins: q.timeLimitMins,
          attemptsAllowed: q.attemptsAllowed,
          weightPct: q.weightPct,
          maxScore: q.maxScore,
          status: q.status,
        },
      });
      quizBySlug.set(q.slug, quiz);
    }

    // ── Tier 3C: Learning Materials ────────────────────────────────────────────
    const materialSpecs = [
      // Course Materials
      {
        id: "mat-cm-1",
        courseCode: "ICT301",
        uploadedById: saritaUser.id,
        title: "ICT301 Project Charter Template",
        description: "Official capstone project charter and scope definition template.",
        category: MaterialCategory.COURSE_MATERIAL,
        format: MaterialFormat.PDF,
        weekLabel: "Week 1",
        fileName: "ICT301_Project_Charter_Template.pdf",
        fileSizeLabel: "340 KB",
        fileSizeBytes: 348160,
        mimeType: "application/pdf",
        publishedAt: new Date("2026-08-28T09:00:00.000Z"),
      },
      {
        id: "mat-cm-2",
        courseCode: "ICT301",
        uploadedById: saritaUser.id,
        title: "ICT301 Assessment 2 Brief",
        description: "Preliminary system architecture and UX wireframe specification brief.",
        category: MaterialCategory.COURSE_MATERIAL,
        format: MaterialFormat.PDF,
        weekLabel: "Week 4",
        fileName: "ICT301_Assessment_2_Brief.pdf",
        fileSizeLabel: "518 KB",
        fileSizeBytes: 530432,
        mimeType: "application/pdf",
        publishedAt: new Date("2026-08-20T09:00:00.000Z"),
      },
      {
        id: "mat-cm-3",
        courseCode: "ICT272",
        uploadedById: annaCruzUser.id,
        title: "ICT272 Week 7 Slides — React Hooks",
        description: "Lecture presentation covering useState, useEffect, useMemo, and custom hooks.",
        category: MaterialCategory.COURSE_MATERIAL,
        format: MaterialFormat.POWERPOINT,
        weekLabel: "Week 7",
        fileName: "ICT272_Week7_React_Hooks.pptx",
        fileSizeLabel: "3.1 MB",
        fileSizeBytes: 3250585,
        mimeType: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        publishedAt: new Date("2026-08-25T09:00:00.000Z"),
      },
      {
        id: "mat-cm-4",
        courseCode: "ICT272",
        uploadedById: annaCruzUser.id,
        title: "ICT272 Handout — CSS Grid & Flexbox",
        description: "Quick-reference layout cheat sheet and responsive breakpoint guide.",
        category: MaterialCategory.COURSE_MATERIAL,
        format: MaterialFormat.PDF,
        weekLabel: "Week 3",
        fileName: "ICT272_CSS_Grid_Flexbox_Handout.pdf",
        fileSizeLabel: "210 KB",
        fileSizeBytes: 215040,
        mimeType: "application/pdf",
        publishedAt: new Date("2026-08-18T09:00:00.000Z"),
      },
      {
        id: "mat-cm-5",
        courseCode: "ICT126",
        uploadedById: rachelGomezUser.id,
        title: "ICT126 Week 8 — AI Ethics Lecture Notes",
        description: "Comprehensive notes on algorithmic fairness, interpretability, and AI governance.",
        category: MaterialCategory.COURSE_MATERIAL,
        format: MaterialFormat.PDF,
        weekLabel: "Week 8",
        fileName: "ICT126_Week8_AI_Ethics_Notes.pdf",
        fileSizeLabel: "425 KB",
        fileSizeBytes: 435200,
        mimeType: "application/pdf",
        publishedAt: new Date("2026-08-27T09:00:00.000Z"),
      },
      {
        id: "mat-cm-6",
        courseCode: "ICT126",
        uploadedById: rachelGomezUser.id,
        title: "ICT126 Assessment 1 Rubric",
        description: "Evaluation rubric and marking criteria for Assessment 1.",
        category: MaterialCategory.COURSE_MATERIAL,
        format: MaterialFormat.DOCUMENT,
        weekLabel: "Week 2",
        fileName: "ICT126_Assessment1_Rubric.docx",
        fileSizeLabel: "128 KB",
        fileSizeBytes: 131072,
        mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        publishedAt: new Date("2026-08-10T09:00:00.000Z"),
      },

      // Class Recordings
      {
        id: "mat-rec-1",
        courseCode: "ICT126",
        uploadedById: rachelGomezUser.id,
        title: "Week 8 — AI Ethics & Bias in Machine Learning",
        description: "Recorded lecture session examining bias mitigation in supervised learning.",
        category: MaterialCategory.CLASS_RECORDING,
        format: MaterialFormat.VIDEO,
        weekLabel: "Week 8",
        durationLabel: "1h 52m",
        publishedAt: new Date("2026-08-27T14:00:00.000Z"),
      },
      {
        id: "mat-rec-2",
        courseCode: "ICT272",
        uploadedById: annaCruzUser.id,
        title: "Week 7 — REST APIs & Async JavaScript",
        description: "Recorded Zoom lecture covering Fetch API, Promises, and async/await error handling.",
        category: MaterialCategory.CLASS_RECORDING,
        format: MaterialFormat.VIDEO,
        weekLabel: "Week 7",
        durationLabel: "1h 47m",
        publishedAt: new Date("2026-08-20T14:00:00.000Z"),
      },
      {
        id: "mat-rec-3",
        courseCode: "ICT301",
        uploadedById: saritaUser.id,
        title: "Week 7 — Project Scoping and Stakeholder Analysis",
        description: "Recorded workshop on agile sprint ceremonies and stakeholder communication matrices.",
        category: MaterialCategory.CLASS_RECORDING,
        format: MaterialFormat.VIDEO,
        weekLabel: "Week 7",
        durationLabel: "1h 58m",
        publishedAt: new Date("2026-08-19T14:00:00.000Z"),
      },

      // Additional Resources & Code/Lab
      {
        id: "mat-add-1",
        courseCode: "ICT126",
        uploadedById: rachelGomezUser.id,
        title: "Neural Networks — 3Blue1Brown Series",
        description: "Visual explainer on how neural networks learn via backpropagation.",
        category: MaterialCategory.ADDITIONAL_RESOURCE,
        format: MaterialFormat.EXTERNAL_LINK,
        externalUrl: "https://www.youtube.com/watch?v=aircAruvnKk",
        sourceLabel: "YouTube",
        publishedAt: new Date("2026-08-26T09:00:00.000Z"),
      },
      {
        id: "mat-add-2",
        courseCode: "ICT272",
        uploadedById: annaCruzUser.id,
        title: "MDN Web Docs — JavaScript Reference",
        description: "Comprehensive JS, HTML, and CSS documentation.",
        category: MaterialCategory.ADDITIONAL_RESOURCE,
        format: MaterialFormat.EXTERNAL_LINK,
        externalUrl: "https://developer.mozilla.org",
        sourceLabel: "Web Docs",
        publishedAt: new Date("2026-08-19T09:00:00.000Z"),
      },
      {
        id: "mat-cl-1",
        courseCode: "ICT301",
        uploadedById: saritaUser.id,
        title: "ICT301 Project — GitHub Repository",
        description: "Team project starter repository for T226 semester.",
        category: MaterialCategory.CODE_AND_LAB,
        format: MaterialFormat.CODE_REPO,
        externalUrl: "https://github.com",
        sourceLabel: "GitHub",
        tags: ["GitHub", "Python"],
        publishedAt: new Date("2026-08-22T09:00:00.000Z"),
      },
      {
        id: "mat-cl-2",
        courseCode: "ICT126",
        uploadedById: rachelGomezUser.id,
        title: "Lab 5 — Perceptron Starter Code",
        description: "Starter template for Lab 5 perceptron implementation.",
        category: MaterialCategory.CODE_AND_LAB,
        format: MaterialFormat.ARCHIVE,
        fileName: "ict126_lab5_perceptron_starter.zip",
        fileSizeLabel: "1.8 MB",
        fileSizeBytes: 1887436,
        tags: ["Python", "Jupyter"],
        publishedAt: new Date("2026-08-23T09:00:00.000Z"),
      },
    ];

    for (const mat of materialSpecs) {
      const course = courseByCode.get(mat.courseCode)!;
      await prisma.learningMaterial.upsert({
        where: { id: mat.id },
        update: {
          courseId: course.id,
          uploadedById: mat.uploadedById,
          title: mat.title,
          description: mat.description,
          category: mat.category,
          format: mat.format,
          weekLabel: mat.weekLabel ?? null,
          fileName: mat.fileName ?? null,
          fileSizeLabel: mat.fileSizeLabel ?? null,
          fileSizeBytes: mat.fileSizeBytes ?? null,
          mimeType: mat.mimeType ?? null,
          externalUrl: mat.externalUrl ?? null,
          sourceLabel: mat.sourceLabel ?? null,
          durationLabel: mat.durationLabel ?? null,
          tags: mat.tags ?? [],
          isPublished: true,
          publishedAt: mat.publishedAt,
        },
        create: {
          id: mat.id,
          courseId: course.id,
          uploadedById: mat.uploadedById,
          title: mat.title,
          description: mat.description,
          category: mat.category,
          format: mat.format,
          weekLabel: mat.weekLabel ?? null,
          fileName: mat.fileName ?? null,
          fileSizeLabel: mat.fileSizeLabel ?? null,
          fileSizeBytes: mat.fileSizeBytes ?? null,
          mimeType: mat.mimeType ?? null,
          externalUrl: mat.externalUrl ?? null,
          sourceLabel: mat.sourceLabel ?? null,
          durationLabel: mat.durationLabel ?? null,
          tags: mat.tags ?? [],
          isPublished: true,
          publishedAt: mat.publishedAt,
        },
      });
    }

    // ── Tier 3D: Announcements (ANN-001 .. ANN-005 from src/adminData.ts) ──────
    const announcementSpecs = [
      {
        code: "ANN-001",
        authorId: rojitInst.id,
        authorName: "Admin Office",
        authorRole: "Admin",
        title: "Semester T226 Important Notice",
        body: "All students and faculty are reminded of the key academic dates for Trimester 2, 2026 including enrollment deadlines.",
        audience: AnnouncementAudience.ALL_USERS,
        status: PublishStatus.PUBLISHED,
        isImportant: true,
        publishedAt: new Date("2026-09-02T08:00:00.000Z"),
      },
      {
        code: "ANN-002",
        authorId: rojitInst.id,
        authorName: "IT Department",
        authorRole: "Admin",
        title: "System Maintenance Scheduled",
        body: "The LMS platform will undergo scheduled maintenance on September 10, 2026 from 11 PM to 2 AM.",
        audience: AnnouncementAudience.ALL_USERS,
        status: PublishStatus.SCHEDULED,
        isImportant: true,
        publishedAt: new Date("2026-09-01T08:00:00.000Z"),
      },
      {
        code: "ANN-003",
        authorId: anitaInst.id,
        authorName: "Academic Office",
        authorRole: "Instructor",
        title: "Assessment Submission Reminder",
        body: "Reminder: Assessment 1 submissions close on September 15, 2026. Late submissions will not be accepted.",
        audience: AnnouncementAudience.STUDENTS,
        status: PublishStatus.PUBLISHED,
        isImportant: true,
        publishedAt: new Date("2026-08-31T08:00:00.000Z"),
      },
      {
        code: "ANN-004",
        authorId: rojitInst.id,
        authorName: "Registrar",
        authorRole: "Admin",
        title: "Enrollment Period Opens",
        body: "The enrollment period for Trimester 2, 2026 is now open. Students may enroll via the student portal.",
        audience: AnnouncementAudience.STUDENTS,
        status: PublishStatus.PUBLISHED,
        isImportant: false,
        publishedAt: new Date("2026-08-28T08:00:00.000Z"),
      },
      {
        code: "ANN-005",
        authorId: rojitInst.id,
        authorName: "Admin Office",
        authorRole: "Admin",
        title: "Faculty Training Workshop",
        body: "Mandatory training workshop for all instructors on the updated LMS features scheduled for September 5, 2026.",
        audience: AnnouncementAudience.INSTRUCTORS,
        status: PublishStatus.DRAFT,
        isImportant: false,
        publishedAt: new Date("2026-08-27T08:00:00.000Z"),
      },
    ];

    const announcementByCode = new Map<string, { id: string; code: string | null }>();
    for (const ann of announcementSpecs) {
      const record = await prisma.announcement.upsert({
        where: { code: ann.code },
        update: {
          authorId: ann.authorId,
          authorName: ann.authorName,
          authorRole: ann.authorRole,
          title: ann.title,
          body: ann.body,
          audience: ann.audience,
          status: ann.status,
          isImportant: ann.isImportant,
          publishedAt: ann.publishedAt,
        },
        create: {
          code: ann.code,
          authorId: ann.authorId,
          authorName: ann.authorName,
          authorRole: ann.authorRole,
          title: ann.title,
          body: ann.body,
          audience: ann.audience,
          status: ann.status,
          isImportant: ann.isImportant,
          publishedAt: ann.publishedAt,
        },
      });
      announcementByCode.set(ann.code, record);
    }

    // ── Tier 3E: Calendar Events (ce-1 .. ce-16 from src/adminData.ts) ─────────
    const calendarSpecs = [
      {
        externalCode: "ce-1",
        courseCode: null,
        title: "Trimester 2 Begins",
        label: "Trimester 2 Begins",
        description: "Official commencement of academic teaching period for Trimester 2, 2026.",
        eventDate: new Date("2026-09-01T08:00:00.000Z"),
        timeLabel: "8:00 AM",
        category: CalendarCategory.ACADEMIC_DATE,
        color: "#1a3a9e",
      },
      {
        externalCode: "ce-2",
        courseCode: null,
        title: "Enrollment Opens",
        label: "Enrollment Opens",
        description: "Online course selection and enrollment portal open for all students.",
        eventDate: new Date("2026-09-02T09:00:00.000Z"),
        timeLabel: "9:00 AM",
        category: CalendarCategory.ENROLLMENT,
        color: "#16a34a",
      },
      {
        externalCode: "ce-8",
        courseCode: null,
        title: "System Audit & Health Review",
        label: "System Audit",
        description: "Mid-week platform load monitoring and enrollment audit.",
        eventDate: new Date("2026-09-08T14:00:00.000Z"),
        timeLabel: "2:00 PM",
        category: CalendarCategory.ACADEMIC_DATE,
        color: "#2563eb",
      },
      {
        externalCode: "ce-3",
        courseCode: null,
        title: "Census Date — Final Enrollment",
        label: "Census Date",
        description: "Final date to drop or add units without academic and financial penalty.",
        eventDate: new Date("2026-09-14T23:59:00.000Z"),
        timeLabel: "11:59 PM",
        category: CalendarCategory.EXAM,
        color: "#db2777",
      },
      {
        externalCode: "ce-4",
        courseCode: null,
        title: "Assessment 1 Due (All Courses)",
        label: "Assessment 1 Due",
        description: "Submission deadline for Assessment 1 across School of ICT units.",
        eventDate: new Date("2026-09-15T23:59:00.000Z"),
        timeLabel: "11:59 PM",
        category: CalendarCategory.ASSESSMENT,
        color: "#ea580c",
      },
      {
        externalCode: "ce-5",
        courseCode: "ICT126",
        title: "Midterm Practical Due — ICT126",
        label: "Midterm Practical Due",
        description: "Hands-on machine learning laboratory assessment submission.",
        eventDate: new Date("2026-09-18T17:00:00.000Z"),
        timeLabel: "5:00 PM",
        category: CalendarCategory.ASSESSMENT,
        color: "#ea580c",
      },
      {
        externalCode: "ce-6",
        courseCode: null,
        title: "Mid-Semester School Break Begins",
        label: "School Break",
        description: "No lectures scheduled. Campus libraries and study areas open.",
        eventDate: new Date("2026-09-21T00:00:00.000Z"),
        timeLabel: "All Day",
        category: CalendarCategory.SCHOOL_BREAK,
        color: "#7c3aed",
      },
      {
        externalCode: "ce-7",
        courseCode: "ICT272",
        title: "Assessment 2 Due — ICT272",
        label: "Assessment 2 Due",
        description: "Interactive web frontend project milestone deadline.",
        eventDate: new Date("2026-09-22T23:59:00.000Z"),
        timeLabel: "11:59 PM",
        category: CalendarCategory.ASSESSMENT,
        color: "#ea580c",
      },
      {
        externalCode: "ce-9",
        courseCode: null,
        title: "School Break Day 3",
        label: "School Break",
        description: "Recess and independent study period.",
        eventDate: new Date("2026-09-23T00:00:00.000Z"),
        timeLabel: "All Day",
        category: CalendarCategory.SCHOOL_BREAK,
        color: "#7c3aed",
      },
      {
        externalCode: "ce-10",
        courseCode: null,
        title: "School Break Day 4",
        label: "School Break",
        description: "Recess and independent study period.",
        eventDate: new Date("2026-09-24T00:00:00.000Z"),
        timeLabel: "All Day",
        category: CalendarCategory.SCHOOL_BREAK,
        color: "#7c3aed",
      },
      {
        externalCode: "ce-11",
        courseCode: "ICT301",
        title: "Milestone 3 Due — ICT301",
        label: "Milestone 3 Due",
        description: "Final architectural presentation and system defense.",
        eventDate: new Date("2026-09-25T23:59:00.000Z"),
        timeLabel: "11:59 PM",
        category: CalendarCategory.ASSESSMENT,
        color: "#ea580c",
      },
      {
        externalCode: "ce-12",
        courseCode: null,
        title: "Public Holiday — Labour Day",
        label: "Labour Day (Holiday)",
        description: "Official public holiday. Campus administration and facilities closed.",
        eventDate: new Date("2026-09-28T00:00:00.000Z"),
        timeLabel: "All Day",
        category: CalendarCategory.PUBLIC_HOLIDAY,
        color: "#059669",
      },
      {
        externalCode: "ce-13",
        courseCode: null,
        title: "Spring Holiday",
        label: "Spring Holiday",
        description: "University holiday observance.",
        eventDate: new Date("2026-10-05T00:00:00.000Z"),
        timeLabel: "All Day",
        category: CalendarCategory.PUBLIC_HOLIDAY,
        color: "#059669",
      },
      {
        externalCode: "ce-14",
        courseCode: null,
        title: "Marks Entry Deadline",
        label: "Marks Entry Deadline",
        description: "Instructors must submit midterm assessment marks to registrar.",
        eventDate: new Date("2026-10-15T17:00:00.000Z"),
        timeLabel: "5:00 PM",
        category: CalendarCategory.ACADEMIC_DATE,
        color: "#1a3a9e",
      },
      {
        externalCode: "ce-15",
        courseCode: null,
        title: "Final Examinations Period",
        label: "Final Exams Period",
        description: "Formal proctored exam timetable commences.",
        eventDate: new Date("2026-10-20T00:00:00.000Z"),
        timeLabel: "All Day",
        category: CalendarCategory.EXAM,
        color: "#db2777",
      },
      {
        externalCode: "ce-16",
        courseCode: null,
        title: "Trimester 2 Teaching Period Ends",
        label: "Trimester 2 Ends",
        description: "Conclusion of 12-week teaching trimester.",
        eventDate: new Date("2026-10-30T17:00:00.000Z"),
        timeLabel: "5:00 PM",
        category: CalendarCategory.ACADEMIC_DATE,
        color: "#1a3a9e",
      },
    ];

    for (const cal of calendarSpecs) {
      const courseId = cal.courseCode ? courseByCode.get(cal.courseCode)!.id : null;
      await prisma.calendarEvent.upsert({
        where: { externalCode: cal.externalCode },
        update: {
          courseId,
          createdById: rojitInst.id,
          title: cal.title,
          label: cal.label,
          description: cal.description,
          eventDate: cal.eventDate,
          timeLabel: cal.timeLabel,
          category: cal.category,
          color: cal.color,
        },
        create: {
          externalCode: cal.externalCode,
          courseId,
          createdById: rojitInst.id,
          title: cal.title,
          label: cal.label,
          description: cal.description,
          eventDate: cal.eventDate,
          timeLabel: cal.timeLabel,
          category: cal.category,
          color: cal.color,
        },
      });
    }

    // ── Tier 4A: Quiz Questions (q1 & q2 full 15-question banks) ───────────────
    const q1Quiz = quizBySlug.get("q1")!;
    for (const q of QUIZ_1_QUESTIONS) {
      await prisma.quizQuestion.upsert({
        where: {
          quizId_questionNumber: {
            quizId: q1Quiz.id,
            questionNumber: q.questionNumber,
          },
        },
        update: {
          prompt: q.prompt,
          optionsJson: q.optionsJson,
          correctIndex: q.correctIndex,
          explanation: q.explanation,
          points: 1,
        },
        create: {
          quizId: q1Quiz.id,
          questionNumber: q.questionNumber,
          prompt: q.prompt,
          optionsJson: q.optionsJson,
          correctIndex: q.correctIndex,
          explanation: q.explanation,
          points: 1,
        },
      });
    }

    const q2Quiz = quizBySlug.get("q2")!;
    const q2QuestionByNumber = new Map<number, { id: string; questionNumber: number; correctIndex: number }>();
    for (const q of QUIZ_2_QUESTIONS) {
      const questionRecord = await prisma.quizQuestion.upsert({
        where: {
          quizId_questionNumber: {
            quizId: q2Quiz.id,
            questionNumber: q.questionNumber,
          },
        },
        update: {
          prompt: q.prompt,
          optionsJson: q.optionsJson,
          correctIndex: q.correctIndex,
          explanation: q.explanation,
          points: 1,
        },
        create: {
          quizId: q2Quiz.id,
          questionNumber: q.questionNumber,
          prompt: q.prompt,
          optionsJson: q.optionsJson,
          correctIndex: q.correctIndex,
          explanation: q.explanation,
          points: 1,
        },
      });
      q2QuestionByNumber.set(q.questionNumber, questionRecord);
    }

    // ── Tier 4B: Assignment Submissions (INITIAL_SUBMISSIONS in src/assignmentData.ts) ─
    const submissionSpecs = [
      {
        receiptNumber: "#EDF-2026-8192",
        assignmentSlug: "ict272-a1",
        studentId: richardInst.id,
        fileName: "ict272_lab1_html_vitug.zip",
        fileSizeLabel: "4.2 MB",
        fileSizeBytes: 4404019,
        mimeType: "application/zip",
        comments: "Complete HTML5 multi-page accessible website with semantic tags.",
        integrityAcceptedAt: new Date("2026-08-19T06:14:30.000Z"),
        submittedAt: new Date("2026-08-19T06:15:00.000Z"),
        status: SubmissionStatus.GRADED,
        score: 48,
        maxScore: 50,
        gradeLabel: "High Distinction (HD)",
        feedback: "Outstanding work! Semantic HTML tags are used impeccably. Flawless structure.",
        gradedAt: new Date("2026-08-21T00:30:00.000Z"),
        gradedById: saritaUser.id,
      },
      {
        receiptNumber: "#EDF-2026-9418",
        assignmentSlug: "ict301-a1",
        studentId: richardInst.id,
        fileName: "ict301_milestone1_proposal_vitug.pdf",
        fileSizeLabel: "2.8 MB",
        fileSizeBytes: 2936012,
        mimeType: "application/pdf",
        comments: "Includes team charter, work breakdown structure, and milestone schedules.",
        integrityAcceptedAt: new Date("2026-08-24T10:19:30.000Z"),
        submittedAt: new Date("2026-08-24T10:20:00.000Z"),
        status: SubmissionStatus.GRADED,
        score: 94,
        maxScore: 100,
        gradeLabel: "High Distinction (HD)",
        feedback: "Comprehensive project proposal detailing clear scope, thorough team roles, and realistic Gantt chart schedule.",
        gradedAt: new Date("2026-08-26T04:00:00.000Z"),
        gradedById: saritaUser.id,
      },
      {
        receiptNumber: "#EDF-2026-5321",
        assignmentSlug: "ict272-a2",
        studentId: richardInst.id,
        fileName: "ict272_lab2_css_vitug.zip",
        fileSizeLabel: "8.5 MB",
        fileSizeBytes: 8912896,
        mimeType: "application/zip",
        comments: "Responsive CSS grid and flexbox layout tested on desktop, tablet, and mobile breakpoints.",
        integrityAcceptedAt: new Date("2026-08-26T08:39:30.000Z"),
        submittedAt: new Date("2026-08-26T08:40:00.000Z"),
        status: SubmissionStatus.GRADED,
        score: 47,
        maxScore: 50,
        gradeLabel: "High Distinction (HD)",
        feedback: "Great implementation of CSS Grid and custom properties. Clean and modern aesthetic.",
        gradedAt: new Date("2026-08-28T01:15:00.000Z"),
        gradedById: saritaUser.id,
      },
    ];

    for (const studentTarget of [richardInst, richardLegacy]) {
      for (const sub of submissionSpecs) {
        const assignment = assignmentBySlug.get(sub.assignmentSlug)!;
        const receipt = studentTarget === richardLegacy ? `${sub.receiptNumber}-LEG` : sub.receiptNumber;
        await prisma.assignmentSubmission.upsert({
          where: { receiptNumber: receipt },
          update: {
            assignmentId: assignment.id,
            studentId: studentTarget.id,
            attemptNumber: 1,
            isLatest: true,
            fileName: sub.fileName,
            fileSizeLabel: sub.fileSizeLabel,
            fileSizeBytes: sub.fileSizeBytes,
            mimeType: sub.mimeType,
            comments: sub.comments,
            integrityAccepted: true,
            integrityAcceptedAt: sub.integrityAcceptedAt,
            status: sub.status,
            score: sub.score,
            maxScore: sub.maxScore,
            gradeLabel: sub.gradeLabel,
            feedback: sub.feedback,
            submittedAt: sub.submittedAt,
            gradedAt: sub.gradedAt,
            gradedById: sub.gradedById,
          },
          create: {
            assignmentId: assignment.id,
            studentId: studentTarget.id,
            attemptNumber: 1,
            isLatest: true,
            receiptNumber: receipt,
            fileName: sub.fileName,
            fileSizeLabel: sub.fileSizeLabel,
            fileSizeBytes: sub.fileSizeBytes,
            mimeType: sub.mimeType,
            comments: sub.comments,
            integrityAccepted: true,
            integrityAcceptedAt: sub.integrityAcceptedAt,
            status: sub.status,
            score: sub.score,
            maxScore: sub.maxScore,
            gradeLabel: sub.gradeLabel,
            feedback: sub.feedback,
            submittedAt: sub.submittedAt,
            gradedAt: sub.gradedAt,
            gradedById: sub.gradedById,
          },
        });
      }
    }

    // ── Tier 4C: Quiz Attempts (q2 & q4 completed attempts for Richard Vitug) ──
    const q4Quiz = quizBySlug.get("q4")!;
    for (const studentTarget of [richardInst, richardLegacy]) {
      const q2Att = await prisma.quizAttempt.upsert({
        where: {
          quizId_studentId_attemptNumber: {
            quizId: q2Quiz.id,
            studentId: studentTarget.id,
            attemptNumber: 1,
          },
        },
        update: {
          status: QuizAttemptStatus.SUBMITTED,
          score: 13,
          maxScore: 15,
          percentage: 86.7,
          feedback:
            "Outstanding work on CSS Flexbox container properties, alignment, and flex-wrap responsiveness. Review flex-basis auto vs 0 edge cases.",
          startedAt: new Date("2026-08-15T09:00:00.000Z"),
          submittedAt: new Date("2026-08-15T09:22:00.000Z"),
          timeSpentSecs: 1320,
        },
        create: {
          quizId: q2Quiz.id,
          studentId: studentTarget.id,
          attemptNumber: 1,
          status: QuizAttemptStatus.SUBMITTED,
          score: 13,
          maxScore: 15,
          percentage: 86.7,
          feedback:
            "Outstanding work on CSS Flexbox container properties, alignment, and flex-wrap responsiveness. Review flex-basis auto vs 0 edge cases.",
          startedAt: new Date("2026-08-15T09:00:00.000Z"),
          submittedAt: new Date("2026-08-15T09:22:00.000Z"),
          timeSpentSecs: 1320,
        },
      });

      await prisma.quizAttempt.upsert({
        where: {
          quizId_studentId_attemptNumber: {
            quizId: q4Quiz.id,
            studentId: studentTarget.id,
            attemptNumber: 1,
          },
        },
        update: {
          status: QuizAttemptStatus.SUBMITTED,
          score: 32,
          maxScore: 35,
          percentage: 91.4,
          feedback:
            "Excellent understanding of software development life cycles (SDLC), Agile ceremonies, and stakeholder risk matrices.",
          startedAt: new Date("2026-08-02T10:00:00.000Z"),
          submittedAt: new Date("2026-08-02T10:38:00.000Z"),
          timeSpentSecs: 2280,
        },
        create: {
          quizId: q4Quiz.id,
          studentId: studentTarget.id,
          attemptNumber: 1,
          status: QuizAttemptStatus.SUBMITTED,
          score: 32,
          maxScore: 35,
          percentage: 91.4,
          feedback:
            "Excellent understanding of software development life cycles (SDLC), Agile ceremonies, and stakeholder risk matrices.",
          startedAt: new Date("2026-08-02T10:00:00.000Z"),
          submittedAt: new Date("2026-08-02T10:38:00.000Z"),
          timeSpentSecs: 2280,
        },
      });

      // ── Tier 5A: QuizAttemptAnswer (15 answers for q2Attempt) ──────────────────
      for (let qNum = 1; qNum <= 15; qNum++) {
        const qRecord = q2QuestionByNumber.get(qNum)!;
        const selectedIndex = QUIZ_2_STUDENT_ANSWERS[qNum];
        const isCorrect = selectedIndex === qRecord.correctIndex;
        const pointsAwarded = isCorrect ? 1 : 0;

        await prisma.quizAttemptAnswer.upsert({
          where: {
            attemptId_questionId: {
              attemptId: q2Att.id,
              questionId: qRecord.id,
            },
          },
          update: {
            selectedIndex,
            isCorrect,
            pointsAwarded,
          },
          create: {
            attemptId: q2Att.id,
            questionId: qRecord.id,
            selectedIndex,
            isCorrect,
            pointsAwarded,
          },
        });
      }
    }

    // ── Tier 4D: AnnouncementRead receipts ─────────────────────────────────────
    for (const studentTarget of [richardInst, richardLegacy]) {
      for (const annCode of ["ANN-001", "ANN-004"]) {
        const ann = announcementByCode.get(annCode)!;
        await prisma.announcementRead.upsert({
          where: {
            announcementId_userId: {
              announcementId: ann.id,
              userId: studentTarget.id,
            },
          },
          update: {
            readAt: new Date("2026-09-02T09:00:00.000Z"),
          },
          create: {
            announcementId: ann.id,
            userId: studentTarget.id,
            readAt: new Date("2026-09-02T09:00:00.000Z"),
          },
        });
      }
    }

    // ── Tier 5B: GradeRecords (Released assignment & quiz grades) ──────────────
    const assignmentGradeSpecs = [
      {
        assignmentSlug: "ict272-a1",
        courseCode: "ICT272",
        itemTitle: "Lab Exercise 1: HTML Basics",
        category: "Assignment",
        score: 48,
        maxScore: 50,
        percentage: 96,
        weightPct: 10,
        gradeLabel: "High Distinction (HD)",
        feedback: "Outstanding work! Semantic HTML tags are used impeccably. Flawless structure.",
        releasedAt: new Date("2026-08-21T00:30:00.000Z"),
      },
      {
        assignmentSlug: "ict301-a1",
        courseCode: "ICT301",
        itemTitle: "Milestone 1: Project Proposal",
        category: "Assignment",
        score: 94,
        maxScore: 100,
        percentage: 94,
        weightPct: 15,
        gradeLabel: "High Distinction (HD)",
        feedback: "Comprehensive project proposal detailing clear scope, thorough team roles, and realistic Gantt chart schedule.",
        releasedAt: new Date("2026-08-26T04:00:00.000Z"),
      },
      {
        assignmentSlug: "ict272-a2",
        courseCode: "ICT272",
        itemTitle: "Lab Exercise 2: CSS Layouts",
        category: "Assignment",
        score: 47,
        maxScore: 50,
        percentage: 94,
        weightPct: 10,
        gradeLabel: "High Distinction (HD)",
        feedback: "Great implementation of CSS Grid and custom properties. Clean and modern aesthetic.",
        releasedAt: new Date("2026-08-28T01:15:00.000Z"),
      },
    ];

    for (const studentTarget of [richardInst, richardLegacy]) {
      for (const g of assignmentGradeSpecs) {
        const assignment = assignmentBySlug.get(g.assignmentSlug)!;
        const course = courseByCode.get(g.courseCode)!;
        await prisma.gradeRecord.upsert({
          where: {
            studentId_assignmentId: {
              studentId: studentTarget.id,
              assignmentId: assignment.id,
            },
          },
          update: {
            courseId: course.id,
            awardedById: saritaUser.id,
            itemTitle: g.itemTitle,
            category: g.category,
            score: g.score,
            maxScore: g.maxScore,
            percentage: g.percentage,
            weightPct: g.weightPct,
            gradeLabel: g.gradeLabel,
            feedback: g.feedback,
            isReleased: true,
            releasedAt: g.releasedAt,
          },
          create: {
            studentId: studentTarget.id,
            courseId: course.id,
            assignmentId: assignment.id,
            awardedById: saritaUser.id,
            itemTitle: g.itemTitle,
            category: g.category,
            score: g.score,
            maxScore: g.maxScore,
            percentage: g.percentage,
            weightPct: g.weightPct,
            gradeLabel: g.gradeLabel,
            feedback: g.feedback,
            isReleased: true,
            releasedAt: g.releasedAt,
          },
        });
      }
    }

    const quizGradeSpecs = [
      {
        quizSlug: "q2",
        courseCode: "ICT272",
        itemTitle: "Weekly Quiz 3",
        category: "Quiz",
        score: 13,
        maxScore: 15,
        percentage: 86.7,
        weightPct: 5,
        gradeLabel: "High Distinction (HD)",
        feedback:
          "Outstanding work on CSS Flexbox container properties, alignment, and flex-wrap responsiveness.",
        releasedAt: new Date("2026-08-15T09:22:00.000Z"),
      },
      {
        quizSlug: "q4",
        courseCode: "ICT301",
        itemTitle: "Weekly Quiz 1",
        category: "Quiz",
        score: 32,
        maxScore: 35,
        percentage: 91.4,
        weightPct: 10,
        gradeLabel: "High Distinction (HD)",
        feedback:
          "Excellent understanding of software development life cycles (SDLC), Agile ceremonies, and stakeholder risk matrices.",
        releasedAt: new Date("2026-08-02T10:38:00.000Z"),
      },
    ];

    for (const studentTarget of [richardInst, richardLegacy]) {
      for (const g of quizGradeSpecs) {
        const quiz = quizBySlug.get(g.quizSlug)!;
        const course = courseByCode.get(g.courseCode)!;
        await prisma.gradeRecord.upsert({
          where: {
            studentId_quizId: {
              studentId: studentTarget.id,
              quizId: quiz.id,
            },
          },
          update: {
            courseId: course.id,
            awardedById: saritaUser.id,
            itemTitle: g.itemTitle,
            category: g.category,
            score: g.score,
            maxScore: g.maxScore,
            percentage: g.percentage,
            weightPct: g.weightPct,
            gradeLabel: g.gradeLabel,
            feedback: g.feedback,
            isReleased: true,
            releasedAt: g.releasedAt,
          },
          create: {
            studentId: studentTarget.id,
            courseId: course.id,
            quizId: quiz.id,
            awardedById: saritaUser.id,
            itemTitle: g.itemTitle,
            category: g.category,
            score: g.score,
            maxScore: g.maxScore,
            percentage: g.percentage,
            weightPct: g.weightPct,
            gradeLabel: g.gradeLabel,
            feedback: g.feedback,
            isReleased: true,
            releasedAt: g.releasedAt,
          },
        });
      }
    }

    // ── Tier 5C & Tier 6: Conversations, Participants & Messages ───────────────
    const conversationSpecs = [
      {
        externalCode: "conv-1",
        title: "Late Enrollment Request — ICT301",
        courseCode: "ICT301",
        partnerEmail: "s.koirala@eduflex.edu.ph",
        adminUnread: 2,
        lastMessageAt: new Date("2026-09-02T00:32:00.000Z"),
        messages: [
          {
            id: "msg-m-1",
            senderEmail: "s.koirala@eduflex.edu.ph",
            body: "Good morning! Could you approve the late enrollment request for ICT301 from one of my students?",
            createdAt: new Date("2026-09-02T00:28:00.000Z"),
          },
          {
            id: "msg-m-2",
            senderEmail: "a.rojit.munankarmi@richacademy.en-rich.me",
            body: "Good morning, Sarita. I'll look into it now. What's the student's ID number?",
            createdAt: new Date("2026-09-02T00:30:00.000Z"),
          },
          {
            id: "msg-m-3",
            senderEmail: "s.koirala@eduflex.edu.ph",
            body: "It's STU-20262008 — Carla Ramos. She had a valid medical reason for missing the deadline.",
            createdAt: new Date("2026-09-02T00:31:00.000Z"),
          },
          {
            id: "msg-m-4",
            senderEmail: "a.rojit.munankarmi@richacademy.en-rich.me",
            body: "Got it. I'll review her file and get back to you within the hour.",
            createdAt: new Date("2026-09-02T00:32:00.000Z"),
          },
        ],
      },
      {
        externalCode: "conv-2",
        title: "Instructor Account Onboarding",
        courseCode: null,
        partnerEmail: "b.tolentino@eduflex.edu.ph",
        adminUnread: 0,
        lastMessageAt: new Date("2026-09-01T23:15:00.000Z"),
        messages: [
          {
            id: "msg-m-201",
            senderEmail: "b.tolentino@eduflex.edu.ph",
            body: "Hello Admin, just following up on my instructor onboarding access.",
            createdAt: new Date("2026-09-01T23:00:00.000Z"),
          },
          {
            id: "msg-m-202",
            senderEmail: "a.rojit.munankarmi@richacademy.en-rich.me",
            body: "Hi Bea, your account has been reviewed and approved! You can now log in.",
            createdAt: new Date("2026-09-01T23:12:00.000Z"),
          },
          {
            id: "msg-m-203",
            senderEmail: "b.tolentino@eduflex.edu.ph",
            body: "Thank you for approving my account.",
            createdAt: new Date("2026-09-01T23:15:00.000Z"),
          },
        ],
      },
      {
        externalCode: "conv-3",
        title: "Trimester 2 Enrollment Period Inquiry",
        courseCode: "ICT301",
        partnerEmail: "karl.navarro@eduflex.edu.ph",
        adminUnread: 1,
        lastMessageAt: new Date("2026-09-01T05:45:00.000Z"),
        messages: [
          {
            id: "msg-m-301",
            senderEmail: "karl.navarro@eduflex.edu.ph",
            body: "Hi, I would like to confirm when will the enrollment period close for T2?",
            createdAt: new Date("2026-09-01T05:15:00.000Z"),
          },
          {
            id: "msg-m-302",
            senderEmail: "a.rojit.munankarmi@richacademy.en-rich.me",
            body: "Hello Karl, the census date is September 14, 2026. Please complete your enrollment before then.",
            createdAt: new Date("2026-09-01T05:45:00.000Z"),
          },
        ],
      },
      {
        externalCode: "conv-4",
        title: "Student Support Desk Daily Summary",
        courseCode: null,
        partnerEmail: "support@richacademy.en-rich.me",
        adminUnread: 3,
        lastMessageAt: new Date("2026-09-01T01:20:00.000Z"),
        messages: [
          {
            id: "msg-m-401",
            senderEmail: "support@richacademy.en-rich.me",
            body: "We have received 3 student queries regarding password resets and 2FA.",
            createdAt: new Date("2026-09-01T01:20:00.000Z"),
          },
        ],
      },
      {
        externalCode: "conv-5",
        title: "IT Infrastructure Maintenance Report",
        courseCode: null,
        partnerEmail: "infra@richacademy.en-rich.me",
        adminUnread: 0,
        lastMessageAt: new Date("2026-08-31T06:00:00.000Z"),
        messages: [
          {
            id: "msg-m-501",
            senderEmail: "infra@richacademy.en-rich.me",
            body: "Scheduled database backup and index optimization finished successfully.",
            createdAt: new Date("2026-08-31T06:00:00.000Z"),
          },
        ],
      },
    ];

    for (const convSpec of conversationSpecs) {
      const courseId = convSpec.courseCode ? courseByCode.get(convSpec.courseCode)!.id : null;
      const partnerUser = userByEmail.get(convSpec.partnerEmail)!;

      const conv = await prisma.conversation.upsert({
        where: { externalCode: convSpec.externalCode },
        update: {
          title: convSpec.title,
          courseId,
          lastMessageAt: convSpec.lastMessageAt,
        },
        create: {
          externalCode: convSpec.externalCode,
          title: convSpec.title,
          courseId,
          lastMessageAt: convSpec.lastMessageAt,
        },
      });

      // Upsert admin participant
      await prisma.conversationParticipant.upsert({
        where: {
          conversationId_userId: {
            conversationId: conv.id,
            userId: rojitInst.id,
          },
        },
        update: {
          unreadCount: convSpec.adminUnread,
        },
        create: {
          conversationId: conv.id,
          userId: rojitInst.id,
          unreadCount: convSpec.adminUnread,
        },
      });

      // Upsert partner participant
      await prisma.conversationParticipant.upsert({
        where: {
          conversationId_userId: {
            conversationId: conv.id,
            userId: partnerUser.id,
          },
        },
        update: {
          unreadCount: 0,
        },
        create: {
          conversationId: conv.id,
          userId: partnerUser.id,
          unreadCount: 0,
        },
      });

      // Upsert messages
      for (const msg of convSpec.messages) {
        const sender = userByEmail.get(msg.senderEmail)!;
        await prisma.message.upsert({
          where: { id: msg.id },
          update: {
            conversationId: conv.id,
            senderId: sender.id,
            body: msg.body,
            createdAt: msg.createdAt,
          },
          create: {
            id: msg.id,
            conversationId: conv.id,
            senderId: sender.id,
            body: msg.body,
            createdAt: msg.createdAt,
          },
        });
      }
    }

    console.log(
      `[EduFlex Seed] Completed idempotent seed across all 19 seeded models (${SEED_USERS.length} users, ${courseSpecs.length} courses, ${enrollmentSpecs.length} enrollments, ${assignmentSpecs.length} assignments, ${quizSpecs.length} quizzes).`
    );
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(message);
  process.exit(1);
});
