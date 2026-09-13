(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/instructor/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InstructorRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$InstructorDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/InstructorDashboard.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function InstructorRoute() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleLogout = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearSession"])();
        router.push("/");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$InstructorDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        onLogout: handleLogout
    }, void 0, false, {
        fileName: "[project]/app/instructor/page.tsx",
        lineNumber: 15,
        columnNumber: 10
    }, this);
}
_s(InstructorRoute, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = InstructorRoute;
var _c;
__turbopack_context__.k.register(_c, "InstructorRoute");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/src/InstructorDashboard.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__, module, exports) => {

var e = new Error("Could not parse module '[project]/src/InstructorDashboard.tsx'\n\nReturn statement is not allowed here");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/src/assignmentData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ── Shared Assignment & Assessment Data Layer ────────────────────────────────
__turbopack_context__.s([
    "INITIAL_ASSIGNMENT_COURSES",
    ()=>INITIAL_ASSIGNMENT_COURSES,
    "INITIAL_SUBMISSIONS",
    ()=>INITIAL_SUBMISSIONS,
    "addStudentSubmission",
    ()=>addStudentSubmission,
    "formatDueDate",
    ()=>formatDueDate,
    "getSharedCourses",
    ()=>getSharedCourses,
    "getSharedSubmissions",
    ()=>getSharedSubmissions,
    "gradeStudentSubmission",
    ()=>gradeStudentSubmission,
    "saveSharedCourses",
    ()=>saveSharedCourses,
    "saveSharedSubmissions",
    ()=>saveSharedSubmissions
]);
const INITIAL_ASSIGNMENT_COURSES = [
    {
        code: "ICT301",
        name: "Information Technology Project 1",
        color: "#2563eb",
        term: "T226",
        assignments: [
            {
                id: "ict301-a1",
                title: "Milestone 1: Project Proposal",
                due: "Aug 25, 2026",
                submissions: 32,
                total: 32,
                type: "Assignment",
                graded: true,
                maxScore: 100,
                description: "Comprehensive project proposal detailing project scope, team roles, and Gantt chart schedule.",
                status: "Published"
            },
            {
                id: "ict301-a2",
                title: "Milestone 2: Preliminary Design",
                due: "Sep 5, 2026",
                submissions: 28,
                total: 32,
                type: "Assignment",
                graded: false,
                maxScore: 100,
                description: "Preliminary architecture design diagrams, class models, and UX wireframe deliverables.",
                status: "Published"
            },
            {
                id: "ict301-a3",
                title: "Weekly Journal Entry 1",
                due: "Aug 22, 2026",
                submissions: 30,
                total: 32,
                type: "Assignment",
                graded: true,
                maxScore: 50,
                description: "Reflective learning journal entry covering sprint planning and risk management notes.",
                status: "Published"
            }
        ],
        assessments: [
            {
                id: "ict301-ass1",
                title: "Milestone 3: Final System Implementation & Defense",
                due: "Sep 25, 2026",
                submissions: 20,
                total: 32,
                type: "Assessment",
                graded: false,
                maxScore: 100,
                weight: 35,
                description: "Final functional software submission and panel presentation defense demonstrating project deliverables.",
                status: "Published"
            }
        ]
    },
    {
        code: "ICT272",
        name: "Web Design and Development",
        color: "#0e9f6e",
        term: "T226",
        assignments: [
            {
                id: "ict272-a1",
                title: "Lab Exercise 1: HTML Basics",
                due: "Aug 20, 2026",
                submissions: 38,
                total: 38,
                type: "Assignment",
                graded: true,
                maxScore: 50,
                description: "Semantic markup exercise creating accessible multi-page structure.",
                status: "Published"
            },
            {
                id: "ict272-a2",
                title: "Lab Exercise 2: CSS Layouts",
                due: "Aug 27, 2026",
                submissions: 37,
                total: 38,
                type: "Assignment",
                graded: true,
                maxScore: 50,
                description: "Flexbox and Grid layout implementation matching design specifications.",
                status: "Published"
            },
            {
                id: "ict272-a3",
                title: "Lab Exercise 3: JavaScript DOM",
                due: "Sep 3, 2026",
                submissions: 36,
                total: 38,
                type: "Assignment",
                graded: false,
                maxScore: 50,
                description: "Interactive client-side web application handling DOM events and form validation.",
                status: "Published"
            },
            {
                id: "ict272-a4",
                title: "Lab Exercise 4: React Basics",
                due: "Sep 7, 2026",
                submissions: 12,
                total: 38,
                type: "Assignment",
                graded: false,
                maxScore: 50,
                description: "Component-based web application with React state and props.",
                status: "Published"
            }
        ],
        assessments: [
            {
                id: "ict272-ass1",
                title: "Major Project: Interactive Web Application",
                due: "Sep 22, 2026",
                submissions: 35,
                total: 38,
                type: "Assessment",
                graded: true,
                maxScore: 100,
                weight: 30,
                description: "Production-ready web application built with responsive design and modern frontend framework.",
                status: "Published"
            }
        ]
    },
    {
        code: "ICT126",
        name: "Artificial Intelligence",
        color: "#7c3aed",
        term: "T226",
        assignments: [
            {
                id: "ict126-a1",
                title: "AI Case Study Research Paper",
                due: "Sep 19, 2026",
                submissions: 10,
                total: 26,
                type: "Assignment",
                graded: false,
                maxScore: 100,
                description: "Research paper surveying contemporary applications of generative AI in education.",
                status: "Published"
            },
            {
                id: "ict126-a2",
                title: "Assignment 1: AI History Review",
                due: "Aug 28, 2026",
                submissions: 26,
                total: 26,
                type: "Assignment",
                graded: true,
                maxScore: 100,
                description: "Literature review of classical AI paradigms and symbolic reasoning systems.",
                status: "Published"
            },
            {
                id: "ict126-a3",
                title: "Assignment 2: ML Algorithm Analysis",
                due: "Sep 4, 2026",
                submissions: 24,
                total: 26,
                type: "Assignment",
                graded: false,
                maxScore: 100,
                description: "Empirical evaluation of decision trees versus random forests on benchmark classification data.",
                status: "Published"
            }
        ],
        assessments: [
            {
                id: "ict126-ass1",
                title: "Mid-Term Practical AI Assessment",
                due: "Sep 18, 2026",
                submissions: 22,
                total: 26,
                type: "Assessment",
                graded: false,
                maxScore: 100,
                weight: 25,
                description: "Hands-on machine learning implementation and empirical performance evaluation report.",
                status: "Published"
            }
        ]
    }
];
const INITIAL_SUBMISSIONS = [
    {
        id: "sub-1",
        itemId: "ict272-a1",
        itemTitle: "Lab Exercise 1: HTML Basics",
        itemType: "Assignment",
        courseCode: "ICT272",
        studentName: "Richard Maceda Vitug",
        studentEmail: "2003988@eduflex.edu",
        submittedAt: "Aug 19, 2026 at 4:15 PM AEST",
        fileName: "ict272_lab1_html_vitug.zip",
        fileSize: "4.2 MB",
        comments: "Complete HTML5 multi-page accessible website with semantic tags.",
        receiptNumber: "#EDF-2026-8192",
        status: "graded",
        score: 48,
        maxScore: 50,
        grade: "High Distinction (HD)",
        feedback: "Outstanding work! Semantic HTML tags are used impeccably. Flawless structure.",
        gradedAt: "Aug 21, 2026 at 10:30 AM AEST",
        gradedBy: "Prof. Sarita Koirala"
    },
    {
        id: "sub-2",
        itemId: "ict301-a1",
        itemTitle: "Milestone 1: Project Proposal",
        itemType: "Assignment",
        courseCode: "ICT301",
        studentName: "Richard Maceda Vitug",
        studentEmail: "2003988@eduflex.edu",
        submittedAt: "Aug 24, 2026 at 8:20 PM AEST",
        fileName: "ict301_milestone1_proposal_vitug.pdf",
        fileSize: "2.8 MB",
        comments: "Includes team charter, work breakdown structure, and milestone schedules.",
        receiptNumber: "#EDF-2026-9418",
        status: "graded",
        score: 94,
        maxScore: 100,
        grade: "High Distinction (HD)",
        feedback: "Comprehensive project proposal detailing clear scope, thorough team roles, and realistic Gantt chart schedule.",
        gradedAt: "Aug 26, 2026 at 2:00 PM AEST",
        gradedBy: "Prof. Sarita Koirala"
    },
    {
        id: "sub-3",
        itemId: "ict272-a2",
        itemTitle: "Lab Exercise 2: CSS Layouts",
        itemType: "Assignment",
        courseCode: "ICT272",
        studentName: "Richard Maceda Vitug",
        studentEmail: "2003988@eduflex.edu",
        submittedAt: "Aug 26, 2026 at 6:40 PM AEST",
        fileName: "ict272_lab2_css_vitug.zip",
        fileSize: "8.5 MB",
        comments: "Responsive CSS grid and flexbox layout tested on desktop, tablet, and mobile breakpoints.",
        receiptNumber: "#EDF-2026-5321",
        status: "graded",
        score: 47,
        maxScore: 50,
        grade: "High Distinction (HD)",
        feedback: "Great implementation of CSS Grid and custom properties. Clean and modern aesthetic.",
        gradedAt: "Aug 28, 2026 at 11:15 AM AEST",
        gradedBy: "Prof. Sarita Koirala"
    }
];
const STORAGE_KEY_COURSES = "eduflex_assignment_courses";
const STORAGE_KEY_SUBMISSIONS = "eduflex_assignment_submissions";
function formatDueDate(dateStr) {
    if (!dateStr) return "";
    try {
        const parts = dateStr.split("-");
        if (parts.length === 3) {
            const year = parts[0];
            const monthIndex = parseInt(parts[1], 10) - 1;
            const day = parseInt(parts[2], 10);
            const months = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ];
            if (months[monthIndex]) {
                return `${months[monthIndex]} ${day}, ${year}`;
            }
        }
    } catch  {}
    return dateStr;
}
function notifySync() {
    if ("TURBOPACK compile-time truthy", 1) {
        window.dispatchEvent(new CustomEvent("eduflex_assignment_sync"));
    }
}
function getSharedCourses() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem(STORAGE_KEY_COURSES);
        if (!raw) {
            localStorage.setItem(STORAGE_KEY_COURSES, JSON.stringify(INITIAL_ASSIGNMENT_COURSES));
            return INITIAL_ASSIGNMENT_COURSES;
        }
        return JSON.parse(raw);
    } catch  {
        return INITIAL_ASSIGNMENT_COURSES;
    }
}
function saveSharedCourses(courses) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        localStorage.setItem(STORAGE_KEY_COURSES, JSON.stringify(courses));
        notifySync();
    } catch (err) {
        console.error("Failed to save assignment courses:", err);
    }
}
function getSharedSubmissions() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem(STORAGE_KEY_SUBMISSIONS);
        if (!raw) {
            localStorage.setItem(STORAGE_KEY_SUBMISSIONS, JSON.stringify(INITIAL_SUBMISSIONS));
            return INITIAL_SUBMISSIONS;
        }
        return JSON.parse(raw);
    } catch  {
        return INITIAL_SUBMISSIONS;
    }
}
function saveSharedSubmissions(submissions) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        localStorage.setItem(STORAGE_KEY_SUBMISSIONS, JSON.stringify(submissions));
        notifySync();
    } catch (err) {
        console.error("Failed to save assignment submissions:", err);
    }
}
function addStudentSubmission(data) {
    const submissions = getSharedSubmissions();
    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric"
    }) + " at " + now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit"
    }) + " AEST";
    const newSub = {
        ...data,
        id: `sub-${Date.now()}`,
        submittedAt: formattedDate,
        status: "submitted"
    };
    // Check if replacing previous submission or adding new
    const existingIdx = submissions.findIndex((s)=>s.courseCode === data.courseCode && (s.itemId === data.itemId || s.itemTitle === data.itemTitle) && s.studentEmail === data.studentEmail);
    let updatedSubmissions;
    if (existingIdx >= 0) {
        updatedSubmissions = [
            ...submissions
        ];
        updatedSubmissions[existingIdx] = newSub;
    } else {
        updatedSubmissions = [
            newSub,
            ...submissions
        ];
        // Increment submission count in courses
        const courses = getSharedCourses();
        const updatedCourses = courses.map((c)=>{
            if (c.code === data.courseCode) {
                return {
                    ...c,
                    assignments: c.assignments.map((a)=>{
                        if (a.id === data.itemId || a.title === data.itemTitle) {
                            return {
                                ...a,
                                submissions: a.submissions + 1
                            };
                        }
                        return a;
                    }),
                    assessments: (c.assessments || []).map((ass)=>{
                        if (ass.id === data.itemId || ass.title === data.itemTitle) {
                            return {
                                ...ass,
                                submissions: ass.submissions + 1
                            };
                        }
                        return ass;
                    })
                };
            }
            return c;
        });
        saveSharedCourses(updatedCourses);
    }
    saveSharedSubmissions(updatedSubmissions);
    return newSub;
}
function gradeStudentSubmission(studentName, itemTitleOrId, courseCode, score, feedback) {
    const submissions = getSharedSubmissions();
    const numScore = Number(score);
    let gradeLabel = "Pass (P)";
    if (numScore >= 85) gradeLabel = "High Distinction (HD)";
    else if (numScore >= 75) gradeLabel = "Distinction (D)";
    else if (numScore >= 65) gradeLabel = "Credit (C)";
    else if (numScore >= 50) gradeLabel = "Pass (P)";
    else gradeLabel = "Fail (F)";
    const now = new Date();
    const formattedGradedAt = now.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric"
    }) + " at " + now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit"
    }) + " AEST";
    let matchFound = false;
    const updatedSubmissions = submissions.map((sub)=>{
        if ((sub.studentName === studentName || sub.studentEmail.includes(studentName.toLowerCase().split(" ")[0])) && (sub.itemId === itemTitleOrId || sub.itemTitle === itemTitleOrId || itemTitleOrId.includes(sub.itemTitle)) && (!courseCode || sub.courseCode === courseCode)) {
            matchFound = true;
            return {
                ...sub,
                status: "graded",
                score: numScore,
                grade: gradeLabel,
                feedback: feedback || "Graded by instructor.",
                gradedAt: formattedGradedAt,
                gradedBy: "Prof. Sarita Koirala"
            };
        }
        return sub;
    });
    // If no existing student submission record was found (e.g. grading a mock student), create a graded record
    if (!matchFound) {
        const newRecord = {
            id: `sub-${Date.now()}`,
            itemId: itemTitleOrId,
            itemTitle: itemTitleOrId,
            itemType: "Assignment",
            courseCode: courseCode || "ICT301",
            studentName,
            studentEmail: `${studentName.toLowerCase().replace(/\s+/g, ".")}@eduflex.edu`,
            submittedAt: formattedGradedAt,
            fileName: `${courseCode.toLowerCase()}_submission.zip`,
            fileSize: "5.1 MB",
            receiptNumber: `#EDF-2026-${Math.floor(1000 + Math.random() * 9000)}`,
            status: "graded",
            score: numScore,
            grade: gradeLabel,
            feedback: feedback || "Graded by instructor.",
            gradedAt: formattedGradedAt,
            gradedBy: "Prof. Sarita Koirala"
        };
        updatedSubmissions.unshift(newRecord);
    }
    saveSharedSubmissions(updatedSubmissions);
    // Mark item as graded in courses list if all submissions or as appropriate
    const courses = getSharedCourses();
    const updatedCourses = courses.map((c)=>{
        if (c.code === courseCode) {
            return {
                ...c,
                assignments: c.assignments.map((a)=>{
                    if (a.id === itemTitleOrId || a.title === itemTitleOrId || itemTitleOrId.includes(a.title)) {
                        return {
                            ...a,
                            graded: true
                        };
                    }
                    return a;
                }),
                assessments: (c.assessments || []).map((ass)=>{
                    if (ass.id === itemTitleOrId || ass.title === itemTitleOrId || itemTitleOrId.includes(ass.title)) {
                        return {
                            ...ass,
                            graded: true
                        };
                    }
                    return ass;
                })
            };
        }
        return c;
    });
    saveSharedCourses(updatedCourses);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/auth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearSession",
    ()=>clearSession,
    "getInitials",
    ()=>getInitials,
    "getSessionUser",
    ()=>getSessionUser,
    "loginUser",
    ()=>loginUser,
    "registerUser",
    ()=>registerUser,
    "setSessionUser",
    ()=>setSessionUser
]);
const ACCOUNTS_KEY = "eduflex_accounts";
const SESSION_KEY = "eduflex_current_user";
const SEED_ACCOUNTS = [
    {
        name: "Richard Maceda Vitug",
        email: "2003988@eduflex.edu",
        password: "student123",
        role: "student"
    },
    {
        name: "Anita Humagain",
        email: "anita.humagain@eduflex.edu",
        password: "instructor123",
        role: "instructor"
    },
    {
        name: "Rojit Munankarmi",
        email: "a.rojit.munankarmi@eduflex.edu",
        password: "admin123",
        role: "admin"
    }
];
function getAccounts() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const stored = JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || "[]");
        // Merge seed accounts in without overwriting any existing registered account
        const emails = new Set(stored.map((a)=>a.email));
        const merged = [
            ...stored,
            ...SEED_ACCOUNTS.filter((s)=>!emails.has(s.email))
        ];
        return merged;
    } catch  {
        return SEED_ACCOUNTS;
    }
}
function registerUser(account) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const accounts = getAccounts();
    const exists = accounts.find((a)=>a.email === account.email);
    if (!exists) {
        accounts.push(account);
        localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
    }
}
function loginUser(email, password) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const accounts = getAccounts();
    const match = accounts.find((a)=>a.email === email && a.password === password);
    if (match) {
        localStorage.setItem(SESSION_KEY, JSON.stringify(match));
        return match;
    }
    return null;
}
function setSessionUser(user) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}
function getSessionUser() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem(SESSION_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch  {
        return null;
    }
}
function clearSession() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.removeItem(SESSION_KEY);
}
function getInitials(name) {
    return name.split(" ").filter(Boolean).slice(0, 2).map((w)=>w[0].toUpperCase()).join("");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_00ucngg._.js.map