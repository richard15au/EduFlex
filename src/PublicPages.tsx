"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { forwardRef, FormEvent, useRef, useState, ReactNode } from "react";
import { registerUser, loginUser } from "./auth";

const Arrow = () => <span aria-hidden="true" className="text-lg leading-none">→</span>;

function EyeIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`flex items-center gap-2 font-bold tracking-tight ${light ? "text-white" : "text-[#173b9f]"}`}>
      <span className={`grid h-9 w-9 place-items-center rounded-xl ${light ? "bg-white text-[#173b9f]" : "bg-[#173b9f] text-white"}`}>
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" /></svg>
      </span>
      <span className="text-xl">EduFlex</span>
    </Link>
  );
}

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#f8f9fe] text-[#193e9f]">
      <header className="mx-auto flex h-20 max-w-[1080px] items-center justify-between px-7">
        <Brand />
        <nav className="hidden items-center gap-10 text-sm font-medium text-slate-500 md:flex">
          <a href="#" className="hover:text-[#173b9f]">Learning</a>
          <a href="#" className="hover:text-[#173b9f]">About EduFlex</a>
        </nav>
        <div className="flex items-center gap-4 text-sm font-semibold">
          <Link href="/login" className="text-slate-600 hover:text-[#173b9f]">Log in</Link>
          <Link href="/register" className="rounded-xl bg-[#203f9f] px-5 py-2.5 text-white shadow-md shadow-blue-900/20 hover:bg-[#102d80]">Register</Link>
        </div>
      </header>

      <main className="mx-auto flex max-w-[780px] flex-col items-center px-7 pt-28 pb-32 text-center">
        <p className="flex items-center gap-2 text-[11px] font-bold tracking-[.16em] text-[#5771bd]">
          <span className="h-px w-6 bg-[#5771bd]" />
          EDUCATION, MADE FLEXIBLE
          <span className="h-px w-6 bg-[#5771bd]" />
        </p>
        <h1 className="mt-6 text-[clamp(3rem,6vw,4.2rem)] font-bold leading-[1.02] tracking-[-.055em] text-[#102b78]">
          Your learning,<br /><span className="text-[#3675ea]">in one place.</span>
        </h1>
        <p className="mt-6 max-w-[420px] text-base leading-7 text-slate-500">
          A simple and smart platform for students, instructors, and administrators.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link href="/login" className="rounded-xl bg-[#203f9f] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/20 hover:bg-[#102d80]">Log in</Link>
          <Link href="/register" className="rounded-xl border border-blue-200 bg-white px-7 py-3.5 text-sm font-bold text-[#203f9f] hover:border-blue-300 hover:bg-blue-50">Create an account</Link>
        </div>

        {/* Decorative element */}
        <div className="mt-24 flex items-center justify-center gap-5 opacity-30">
          <span className="h-px w-16 bg-[#3675ea]" />
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-[#3675ea]"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" /></svg>
          <span className="h-px w-16 bg-[#3675ea]" />
        </div>
      </main>
    </div>
  );
}


export function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const email = emailRef.current?.value ?? "";
    const password = passwordRef.current?.value ?? "";
    const account = loginUser(email, password);
    if (account) {
      router.push(`/${account.role}`);
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <AuthLayout eyebrow="Welcome back" title="Pick up where you left off." note="New to EduFlex?" link="Create an account" to="/register">
      <form onSubmit={submit} className="mt-8 space-y-4">
        <FieldRef label="Email address" type="email" placeholder="you@eduflex.edu" ref={emailRef} />
        <FieldRef
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="••••••••"
          ref={passwordRef}
          rightElement={
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 transition hover:text-slate-600 focus:outline-none"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          }
        />
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-slate-500"><input type="checkbox" className="accent-[#173b9f]" />Remember me</label>
          <button type="button" className="font-semibold text-[#173b9f]">Forgot password?</button>
        </div>
        {error && <p className="text-xs text-red-500">{error}</p>}
        <button className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#173b9f] py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/15 transition hover:bg-[#102d80]">Log in <Arrow /></button>
      </form>
    </AuthLayout>
  );
}

export function RegisterPage() {
  const router = useRouter();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const password = passwordRef.current?.value ?? "";
    const confirmPassword = confirmPasswordRef.current?.value ?? "";
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    }
    setPasswordError("");
    const name = nameRef.current?.value ?? "";
    const email = emailRef.current?.value ?? "";
    registerUser({ name, email, password, role: "student" });
    router.push("/login");
  };

  return (
    <AuthLayout eyebrow="Get started" title="Start your learning journey." note="Already have an account?" link="Log in" to="/login">
      <form onSubmit={submit} className="mt-8 grid gap-4">
        <FieldRef label="Full name" placeholder="Your full name" ref={nameRef} />
        <FieldRef label="Email address" type="email" placeholder="you@eduflex.edu" ref={emailRef} />
        <FieldRef
          label="Create password"
          type={showPassword ? "text" : "password"}
          placeholder="At least 8 characters"
          ref={passwordRef}
          rightElement={
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 transition hover:text-slate-600 focus:outline-none"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          }
        />
        <div className="grid gap-1">
          <FieldRef
            label="Confirm password"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Re-enter your password"
            ref={confirmPasswordRef}
            rightElement={
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 transition hover:text-slate-600 focus:outline-none"
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              >
                {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            }
          />
          {passwordError && <p className="text-xs text-red-500">{passwordError}</p>}
        </div>
        <label className="flex items-start gap-2 text-xs leading-5 text-slate-500"><input required type="checkbox" className="mt-1 accent-[#173b9f]" />I agree to the Terms of Service and Privacy Policy.</label>
        <button className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#173b9f] py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/15 transition hover:bg-[#102d80]">Create account <Arrow /></button>
      </form>
    </AuthLayout>
  );
}

const FieldRef = forwardRef<
  HTMLInputElement,
  { label: string; type?: string; placeholder: string; rightElement?: ReactNode }
>(({ label, type = "text", placeholder, rightElement }, ref) => (
  <label className="block text-sm font-semibold text-slate-700">
    {label}
    <div className="relative mt-2">
      <input
        required
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-xl border border-slate-200 bg-white py-3 text-sm font-normal text-slate-700 outline-none placeholder:text-slate-400 focus:border-[#173b9f] focus:ring-2 focus:ring-blue-100 ${
          rightElement ? "pl-4 pr-11" : "px-4"
        }`}
      />
      {rightElement}
    </div>
  </label>
));
FieldRef.displayName = "FieldRef";

function AuthLayout({ eyebrow, title, note, link, to, children }: { eyebrow: string; title: string; note: string; link: string; to: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#f7f9ff] lg:grid lg:grid-cols-[.95fr_1.05fr]">
      <section className="relative hidden overflow-hidden bg-[#173b9f] p-12 text-white lg:flex lg:flex-col">
        <Brand light />
        <div className="my-auto">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-blue-200">EduFlex learning portal</p>
          <h1 className="mt-5 max-w-md text-5xl font-semibold leading-[1.05] tracking-[-.05em]">The whole learning day, in one place.</h1>
          <p className="mt-6 max-w-sm leading-7 text-blue-100">Plan, teach, connect, and celebrate every step of progress.</p>
        </div>
        <p className="text-sm text-blue-200">Simple and smart system</p>
        <span className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full border-[50px] border-blue-400/30" />
      </section>
      <section className="flex min-h-screen items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-md">
          <div className="lg:hidden"><Brand /></div>
          <p className="mt-10 text-xs font-bold uppercase tracking-[.18em] text-[#3156bb]">{eyebrow}</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-[-.045em] text-[#102b78]">{title}</h2>
          {children}
          <p className="mt-7 text-center text-sm text-slate-500">
            {note} <Link href={to} className="font-bold text-[#173b9f] hover:underline">{link}</Link>
          </p>
          <Link href="/" className="mt-8 block text-center text-sm font-semibold text-slate-500 hover:text-[#173b9f]">← Back to EduFlex</Link>
        </div>
      </section>
    </main>
  );
}
