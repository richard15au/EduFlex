(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/instructor/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InstructorRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$InstructorDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/InstructorDashboard.tsx [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$InstructorDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
"[project]/src/InstructorDashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INITIAL_ASSIGNMENT_COURSES",
    ()=>INITIAL_ASSIGNMENT_COURSES,
    "INSTRUCTOR_LEARNING_MATERIALS",
    ()=>INSTRUCTOR_LEARNING_MATERIALS,
    "default",
    ()=>InstructorDashboard,
    "formatDueDate",
    ()=>formatDueDate,
    "getInstructorSearchPool",
    ()=>getInstructorSearchPool
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature(), _s11 = __turbopack_context__.k.signature();
"use client";
;
;
// ── Icons ─────────────────────────────────────────────────────────────────────
const IconGraduationCap = ({ className = "w-6 h-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"
        }, void 0, false, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 9,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 8,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = IconGraduationCap;
const IconDashboard = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: "w-5 h-5 shrink-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"
        }, void 0, false, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 14,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = IconDashboard;
const IconBook = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: "w-5 h-5 shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 19.5A2.5 2.5 0 016.5 17H20"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 19,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 19,
                columnNumber: 47
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = IconBook;
const IconUsers = ({ className = "w-5 h-5 shrink-0" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 24,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "9",
                cy: "7",
                r: "4"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 24,
                columnNumber: 57
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M23 21v-2a4 4 0 00-3-3.87"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 25,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 3.13a4 4 0 010 7.75"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 25,
                columnNumber: 43
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = IconUsers;
const IconAssignment = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: "w-5 h-5 shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "5",
                y: "2",
                width: "14",
                height: "20",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 30,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "9",
                y1: "7",
                x2: "15",
                y2: "7"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 30,
                columnNumber: 55
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "9",
                y1: "11",
                x2: "15",
                y2: "11"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 30,
                columnNumber: 92
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "9",
                y1: "15",
                x2: "12",
                y2: "15"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 30,
                columnNumber: 131
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 29,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = IconAssignment;
const IconQuiz = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: "w-5 h-5 shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 35,
                columnNumber: 38
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "17",
                x2: "12.01",
                y2: "17"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 35,
                columnNumber: 85
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 34,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c5 = IconQuiz;
const IconFolder = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: "w-5 h-5 shrink-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"
        }, void 0, false, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 40,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c6 = IconFolder;
const IconGrades = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: "w-5 h-5 shrink-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "22 12 18 12 15 21 9 3 6 12 2 12"
        }, void 0, false, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 45,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 44,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c7 = IconGrades;
const IconAnnouncement = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: "w-5 h-5 shrink-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M3 11l19-9-9 19-2-8-8-2z"
        }, void 0, false, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 50,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 49,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c8 = IconAnnouncement;
const IconCalendar = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: "w-5 h-5 shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "4",
                width: "18",
                height: "18",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 55,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "16",
                y1: "2",
                x2: "16",
                y2: "6"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 55,
                columnNumber: 55
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "2",
                x2: "8",
                y2: "6"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 55,
                columnNumber: 93
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "3",
                y1: "10",
                x2: "21",
                y2: "10"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 55,
                columnNumber: 129
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 54,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c9 = IconCalendar;
const IconMessage = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: "w-5 h-5 shrink-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
        }, void 0, false, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 60,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 59,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c10 = IconMessage;
const IconProfile = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: "w-5 h-5 shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 65,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "7",
                r: "4"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 65,
                columnNumber: 57
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 64,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c11 = IconProfile;
const IconSettings = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: "w-5 h-5 shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "3"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 70,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 70,
                columnNumber: 37
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 69,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c12 = IconSettings;
const IconLogout = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: "w-5 h-5 shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 75,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "16 17 21 12 16 7"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 75,
                columnNumber: 54
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "21",
                y1: "12",
                x2: "9",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 75,
                columnNumber: 92
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c13 = IconLogout;
const IconBell = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: "w-5 h-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 80,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13.73 21a2 2 0 01-3.46 0"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 80,
                columnNumber: 59
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 79,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c14 = IconBell;
const IconMail = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: "w-5 h-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 85,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "22,6 12,13 2,6"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 85,
                columnNumber: 93
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 84,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c15 = IconMail;
const IconSearch = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: "w-4 h-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "11",
                cy: "11",
                r: "8"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 90,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "21",
                y1: "21",
                x2: "16.65",
                y2: "16.65"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 90,
                columnNumber: 37
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 89,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c16 = IconSearch;
const IconChevronsLeft = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: "w-4 h-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "11 17 6 12 11 7"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 95,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "18 17 13 12 18 7"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 95,
                columnNumber: 42
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 94,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c17 = IconChevronsLeft;
const IconChevronsRight = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: "w-4 h-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "13 17 18 12 13 7"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 100,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "6 17 11 12 6 7"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 100,
                columnNumber: 43
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 99,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c18 = IconChevronsRight;
const IconChevronRight = ({ className = "w-4 h-4" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "9 18 15 12 9 6"
        }, void 0, false, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 105,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 104,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c19 = IconChevronRight;
const IconChevronDown = ({ className = "w-4 h-4" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "6 9 12 15 18 9"
        }, void 0, false, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 110,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 109,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c20 = IconChevronDown;
const IconCheck = ({ className = "w-4 h-4" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "20 6 9 17 4 12"
        }, void 0, false, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 115,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 114,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c21 = IconCheck;
const IconClock = ({ className = "w-4 h-4" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 120,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "12 6 12 12 16 14"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 120,
                columnNumber: 38
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 119,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c22 = IconClock;
const IconStar = ({ className = "w-4 h-4" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        }, void 0, false, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 125,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 124,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c23 = IconStar;
const IconEdit = ({ className = "w-4 h-4" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 130,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 131,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 129,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c24 = IconEdit;
const IconEye = ({ className = "w-4 h-4" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 136,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "3"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 136,
                columnNumber: 62
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 135,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c25 = IconEye;
const IconUpload = ({ className = "w-4 h-4" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "16 16 12 12 8 16"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 141,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "12",
                x2: "12",
                y2: "21"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 141,
                columnNumber: 43
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 142,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 140,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c26 = IconUpload;
const IconVideo = ({ className = "w-4 h-4" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "23 7 16 12 23 17 23 7"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 147,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "1",
                y: "5",
                width: "15",
                height: "14",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 147,
                columnNumber: 47
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 146,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c27 = IconVideo;
const IconPlus = ({ className = "w-4 h-4" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "5",
                x2: "12",
                y2: "19"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 152,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "5",
                y1: "12",
                x2: "19",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 152,
                columnNumber: 44
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 151,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c28 = IconPlus;
const IconFilter = ({ className = "w-4 h-4" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
            points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
        }, void 0, false, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 157,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 156,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c29 = IconFilter;
const IconBarChart = ({ className = "w-5 h-5" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "18",
                y1: "20",
                x2: "18",
                y2: "10"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 162,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "20",
                x2: "12",
                y2: "4"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 162,
                columnNumber: 45
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "6",
                y1: "20",
                x2: "6",
                y2: "14"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 162,
                columnNumber: 84
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "2",
                y1: "20",
                x2: "22",
                y2: "20"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 163,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 161,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c30 = IconBarChart;
const IconAlertCircle = ({ className = "w-4 h-4" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 168,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "8",
                x2: "12",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 168,
                columnNumber: 38
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "16",
                x2: "12.01",
                y2: "16"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 168,
                columnNumber: 77
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 167,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c31 = IconAlertCircle;
const IconX = ({ className = "w-5 h-5" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "18",
                y1: "6",
                x2: "6",
                y2: "18"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 173,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 173,
                columnNumber: 43
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 172,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c32 = IconX;
const IconTrash = ({ className = "w-4 h-4" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "3 6 5 6 21 6"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 178,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 178,
                columnNumber: 39
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 177,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c33 = IconTrash;
const IconDownload = ({ className = "w-4 h-4" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "8 17 12 21 16 17"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 183,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "12",
                x2: "12",
                y2: "21"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 183,
                columnNumber: 43
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 184,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 182,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c34 = IconDownload;
// ── Nav Config ────────────────────────────────────────────────────────────────
const navItems = [
    {
        label: "Dashboard",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconDashboard, {}, void 0, false, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 190,
            columnNumber: 40
        }, ("TURBOPACK compile-time value", void 0)),
        id: "dashboard"
    },
    {
        label: "My Courses",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconBook, {}, void 0, false, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 191,
            columnNumber: 40
        }, ("TURBOPACK compile-time value", void 0)),
        id: "courses"
    },
    {
        label: "Students",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconUsers, {}, void 0, false, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 192,
            columnNumber: 40
        }, ("TURBOPACK compile-time value", void 0)),
        id: "students"
    },
    {
        label: "Assignments",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconAssignment, {}, void 0, false, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 193,
            columnNumber: 40
        }, ("TURBOPACK compile-time value", void 0)),
        id: "assignments"
    },
    {
        label: "Quizzes",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconQuiz, {}, void 0, false, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 194,
            columnNumber: 40
        }, ("TURBOPACK compile-time value", void 0)),
        id: "quizzes"
    },
    {
        label: "Learning Materials",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconFolder, {}, void 0, false, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 195,
            columnNumber: 40
        }, ("TURBOPACK compile-time value", void 0)),
        id: "materials"
    },
    {
        label: "Grades",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconGrades, {}, void 0, false, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 196,
            columnNumber: 40
        }, ("TURBOPACK compile-time value", void 0)),
        id: "grades"
    },
    {
        label: "Announcements",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconAnnouncement, {}, void 0, false, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 197,
            columnNumber: 40
        }, ("TURBOPACK compile-time value", void 0)),
        id: "announcements"
    },
    {
        label: "Calendar",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCalendar, {}, void 0, false, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 198,
            columnNumber: 40
        }, ("TURBOPACK compile-time value", void 0)),
        id: "calendar"
    },
    {
        label: "Messages",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconMessage, {}, void 0, false, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 199,
            columnNumber: 40
        }, ("TURBOPACK compile-time value", void 0)),
        id: "messages"
    },
    {
        label: "Profile",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconProfile, {}, void 0, false, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 200,
            columnNumber: 40
        }, ("TURBOPACK compile-time value", void 0)),
        id: "profile"
    },
    {
        label: "Settings",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconSettings, {}, void 0, false, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 201,
            columnNumber: 40
        }, ("TURBOPACK compile-time value", void 0)),
        id: "settings"
    }
];
// ── Sidebar ───────────────────────────────────────────────────────────────────
function InstructorSidebar({ active, setActive, collapsed, setCollapsed, onLogout }) {
    const w = collapsed ? "w-16" : "w-56";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: `fixed top-0 left-0 h-full flex flex-col z-30 transition-all duration-300 ${w}`,
        style: {
            background: "#1a3a9e"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex items-center pt-5 pb-4 border-b border-white/10 ${collapsed ? "justify-center px-0" : "px-4 gap-2"}`,
                children: collapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setCollapsed(false),
                    className: "text-white hover:text-blue-200 transition-colors flex flex-col items-center gap-1",
                    title: "Expand sidebar",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconGraduationCap, {
                            className: "w-7 h-7"
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 221,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[8px] font-bold tracking-wider text-blue-300",
                            children: "EF"
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 222,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 220,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconGraduationCap, {
                            className: "w-6 h-6 text-white shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 226,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white font-bold text-base tracking-tight leading-none truncate",
                                    children: "EduFlex"
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 228,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-blue-200 text-[10px] mt-0.5 truncate",
                                    children: "Instructor Portal"
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 229,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 227,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setCollapsed(true),
                            className: "text-blue-200 hover:text-white transition-colors ml-1 p-1 rounded hover:bg-white/10",
                            title: "Collapse sidebar",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconChevronsLeft, {}, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 232,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 231,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 225,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 px-2 py-3 overflow-y-auto space-y-0.5",
                children: navItems.map((item)=>{
                    const isActive = active === item.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActive(item.id),
                        title: collapsed ? item.label : undefined,
                        className: `w-full flex items-center rounded-lg transition-all duration-150 text-left
                ${collapsed ? "justify-center px-0 py-3" : "gap-3 px-3 py-2.5"}
                ${isActive ? "bg-white/20 text-white" : "text-blue-100 hover:bg-white/10 hover:text-white"}`,
                        children: [
                            item.icon,
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium truncate",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 251,
                                columnNumber: 30
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 242,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this),
            collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-2 py-3 border-t border-white/10 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setCollapsed(false),
                    className: "text-blue-200 hover:text-white transition-colors p-2 rounded hover:bg-white/10",
                    title: "Expand",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconChevronsRight, {}, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 260,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 259,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 258,
                columnNumber: 9
            }, this),
            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-2 py-4 border-t border-white/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onLogout,
                    className: "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/10 hover:text-white transition-all duration-150",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconLogout, {}, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 268,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Logout"
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 268,
                            columnNumber: 27
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 267,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 266,
                columnNumber: 9
            }, this),
            collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-2 py-4 border-t border-white/10 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onLogout,
                    className: "text-blue-100 hover:text-white hover:bg-white/10 transition-all p-2 rounded-lg",
                    title: "Logout",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconLogout, {}, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 275,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 274,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 273,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 214,
        columnNumber: 5
    }, this);
}
_c35 = InstructorSidebar;
const INITIAL_ASSIGNMENT_COURSES = [
    {
        code: "ICT301",
        name: "Information Technology Project 1",
        color: "#2563eb",
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
                description: "Comprehensive project proposal detailing project scope, team roles, and Gantt chart schedule."
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
                description: "Preliminary architecture design diagrams, class models, and UX wireframe deliverables."
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
                description: "Reflective learning journal entry covering sprint planning and risk management notes."
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
                description: "Semantic markup exercise creating accessible multi-page structure."
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
                description: "Flexbox and Grid layout implementation matching design specifications."
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
                description: "Interactive client-side web application handling DOM events and form validation."
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
                description: "Component-based web application with React state and props."
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
                description: "Research paper surveying contemporary applications of generative AI in education."
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
                description: "Literature review of classical AI paradigms and symbolic reasoning systems."
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
                description: "Empirical evaluation of decision trees versus random forests on benchmark classification data."
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
function getInstructorSearchPool(assignmentCourses) {
    const pool = [];
    // 1. Courses
    pool.push({
        id: "course-ict301",
        category: "Course",
        title: "ICT301 — Information Technology Project 1",
        subtitle: "3 Credits · Mon/Wed 8:00–10:00 AM · Room IT-201 · 32 Students Enrolled",
        badgeColor: "bg-blue-100 text-blue-700",
        targetPage: "courses"
    }, {
        id: "course-ict272",
        category: "Course",
        title: "ICT272 — Web Design and Development",
        subtitle: "3 Credits · Tue/Thu 10:00 AM–12:00 PM · Online Zoom · 38 Students Enrolled",
        badgeColor: "bg-blue-100 text-blue-700",
        targetPage: "courses"
    }, {
        id: "course-ict126",
        category: "Course",
        title: "ICT126 — Artificial Intelligence",
        subtitle: "3 Credits · Fri 1:00–3:00 PM · Room IT-304 · 26 Students Enrolled",
        badgeColor: "bg-blue-100 text-blue-700",
        targetPage: "courses"
    });
    // 2. Students
    const sampleStudents = [
        {
            name: "Marco Reyes",
            id: "STU-0231",
            course: "ICT301",
            email: "m.reyes@student.edu",
            grade: "B+",
            status: "Active"
        },
        {
            name: "Sofia Tan",
            id: "STU-0198",
            course: "ICT272",
            email: "s.tan@student.edu",
            grade: "A",
            status: "Active"
        },
        {
            name: "Liam Garcia",
            id: "STU-0274",
            course: "ICT301",
            email: "l.garcia@student.edu",
            grade: "B",
            status: "Active"
        },
        {
            name: "Aisha Patel",
            id: "STU-0312",
            course: "ICT272",
            email: "a.patel@student.edu",
            grade: "A-",
            status: "Active"
        },
        {
            name: "Ethan Cruz",
            id: "STU-0299",
            course: "ICT272",
            email: "e.cruz@student.edu",
            grade: "B+",
            status: "Active"
        },
        {
            name: "Maya Lopez",
            id: "STU-0344",
            course: "ICT272",
            email: "m.lopez@student.edu",
            grade: "A",
            status: "Active"
        },
        {
            name: "Noah Kim",
            id: "STU-0401",
            course: "ICT126",
            email: "n.kim@student.edu",
            grade: "A+",
            status: "Active"
        },
        {
            name: "Priya Nair",
            id: "STU-0388",
            course: "ICT126",
            email: "p.nair@student.edu",
            grade: "B",
            status: "Active"
        },
        {
            name: "Carlos Vega",
            id: "STU-0411",
            course: "ICT126",
            email: "c.vega@student.edu",
            grade: "B+",
            status: "Active"
        },
        {
            name: "Luna Santos",
            id: "STU-0422",
            course: "ICT301",
            email: "l.santos@student.edu",
            grade: "C+",
            status: "At Risk"
        },
        {
            name: "Raj Sharma",
            id: "STU-0433",
            course: "ICT272",
            email: "r.sharma@student.edu",
            grade: "B",
            status: "Active"
        },
        {
            name: "Zoe Andrade",
            id: "STU-0444",
            course: "ICT126",
            email: "z.andrade@student.edu",
            grade: "A-",
            status: "Active"
        }
    ];
    sampleStudents.forEach((s)=>{
        pool.push({
            id: `student-${s.id}`,
            category: "Student",
            title: s.name,
            subtitle: `${s.id} · ${s.course} · ${s.email} · Current Grade: ${s.grade} · ${s.status}`,
            badgeColor: "bg-emerald-100 text-emerald-700",
            targetPage: "students"
        });
    });
    // 3. Assignments & Assessments (dynamically includes newly created items!)
    assignmentCourses.forEach((c)=>{
        c.assignments.forEach((a, idx)=>{
            pool.push({
                id: `assign-${c.code}-${idx}-${a.title}`,
                category: "Assignment",
                title: a.title,
                subtitle: `${c.code} · Assignment · Due: ${a.due} · ${a.submissions}/${a.total} submitted · ${a.graded ? "Graded" : "Pending Grading"}`,
                badgeColor: "bg-amber-100 text-amber-700",
                targetPage: "assignments"
            });
        });
        if (c.assessments) {
            c.assessments.forEach((ass, idx)=>{
                pool.push({
                    id: `assess-${c.code}-${idx}-${ass.title}`,
                    category: "Assignment",
                    title: ass.title,
                    subtitle: `${c.code} · Assessment (Weight: ${ass.weight ?? 0}%) · Due: ${ass.due} · ${ass.status ?? "Published"}`,
                    badgeColor: "bg-purple-100 text-purple-700",
                    targetPage: "assignments"
                });
            });
        }
    });
    // 4. Quizzes
    const sampleQuizzes = [
        {
            title: "Weekly Quiz 1",
            course: "ICT301",
            date: "Aug 19, 2026",
            status: "Completed",
            avg: "Avg Score: 82%"
        },
        {
            title: "Weekly Quiz 2",
            course: "ICT272",
            date: "Aug 26, 2026",
            status: "Completed",
            avg: "Avg Score: 78%"
        },
        {
            title: "Weekly Quiz 3",
            course: "ICT126",
            date: "Sep 2, 2026",
            status: "Active",
            avg: "24/26 submissions"
        },
        {
            title: "Midterm Quiz",
            course: "ICT126",
            date: "Sep 8, 2026",
            status: "Upcoming",
            avg: "Lab Quiz · 25 Questions"
        },
        {
            title: "Lab Quiz 1",
            course: "ICT272",
            date: "Sep 10, 2026",
            status: "Upcoming",
            avg: "Online Quiz · 20 Questions"
        },
        {
            title: "Weekly Quiz 3",
            course: "ICT301",
            date: "Sep 3, 2026",
            status: "Active",
            avg: "18/32 submissions"
        }
    ];
    sampleQuizzes.forEach((q, idx)=>{
        pool.push({
            id: `quiz-${idx}-${q.title}`,
            category: "Quiz",
            title: q.title,
            subtitle: `${q.course} · Scheduled: ${q.date} · ${q.status} · ${q.avg}`,
            badgeColor: "bg-purple-100 text-purple-700",
            targetPage: "quizzes"
        });
    });
    // 5. Learning Materials
    if (typeof INSTRUCTOR_LEARNING_MATERIALS !== "undefined" && Array.isArray(INSTRUCTOR_LEARNING_MATERIALS)) {
        INSTRUCTOR_LEARNING_MATERIALS.forEach((m)=>{
            pool.push({
                id: `material-${m.id}`,
                category: "Learning Material",
                title: m.title,
                subtitle: `${m.course} — ${m.courseName} · ${m.type} · ${m.size} · Uploaded ${m.date}`,
                badgeColor: "bg-teal-100 text-teal-700",
                targetPage: "materials"
            });
        });
    }
    // 6. Grades
    pool.push({
        id: "grade-ict301",
        category: "Grade",
        title: "ICT301 Student Grades",
        subtitle: "Information Technology Project 1 · Grade roster and submission tracking",
        badgeColor: "bg-indigo-100 text-indigo-700",
        targetPage: "grades"
    }, {
        id: "grade-ict272",
        category: "Grade",
        title: "ICT272 Student Grades",
        subtitle: "Web Design and Development · Grade roster and submission tracking",
        badgeColor: "bg-indigo-100 text-indigo-700",
        targetPage: "grades"
    }, {
        id: "grade-ict126",
        category: "Grade",
        title: "ICT126 Student Grades",
        subtitle: "Artificial Intelligence · Grade roster and submission tracking",
        badgeColor: "bg-indigo-100 text-indigo-700",
        targetPage: "grades"
    });
    // 7. Announcements
    const sampleAnnouncements = [
        {
            title: "Milestone 2 Submission Reminder",
            course: "ICT301",
            status: "Published",
            date: "Sep 1, 2026"
        },
        {
            title: "Updated Learning Materials — Week 8",
            course: "All Courses",
            status: "Published",
            date: "Aug 28, 2026"
        },
        {
            title: "Guest Lecture: AI in Healthcare Industry",
            course: "ICT126",
            status: "Published",
            date: "Aug 20, 2026"
        },
        {
            title: "Final Project Report Guidelines & Submission Portal",
            course: "ICT301",
            status: "Draft",
            date: "Aug 15, 2026"
        },
        {
            title: "Mid-Semester Course Feedback Survey",
            course: "All Courses",
            status: "Scheduled",
            date: "Sep 10, 2026"
        }
    ];
    sampleAnnouncements.forEach((a, idx)=>{
        pool.push({
            id: `announcement-${idx}`,
            category: "Announcement",
            title: a.title,
            subtitle: `${a.course} · Status: ${a.status} · ${a.date}`,
            badgeColor: "bg-rose-100 text-rose-700",
            targetPage: "announcements"
        });
    });
    // 8. Messages
    const sampleMessages = [
        {
            name: "Marco Reyes",
            detail: "Question about Milestone 2 rubric and submission deadline",
            course: "ICT301"
        },
        {
            name: "Sofia Tan",
            detail: "Thank you for the feedback on the lab exercise",
            course: "ICT272"
        },
        {
            name: "Prof. Eduardo Lim",
            detail: "Faculty meeting scheduled for tomorrow at 2 PM in Room IT-301",
            course: "Faculty"
        },
        {
            name: "Liam Garcia",
            detail: "Request for office hours consult regarding project architecture",
            course: "ICT301"
        }
    ];
    sampleMessages.forEach((msg, idx)=>{
        pool.push({
            id: `msg-${idx}`,
            category: "Message",
            title: `Message with ${msg.name}`,
            subtitle: `${msg.course} · "${msg.detail}"`,
            badgeColor: "bg-cyan-100 text-cyan-700",
            targetPage: "messages"
        });
    });
    // 9. Calendar
    const sampleCalendar = [
        {
            title: "ICT301 Lecture",
            detail: "Mon/Wed 8:00–10:00 AM · Room IT-201"
        },
        {
            title: "ICT272 Online Lecture",
            detail: "Tue/Thu 10:00 AM–12:00 PM · Online Zoom"
        },
        {
            title: "ICT126 Lab",
            detail: "Fri 1:00–3:00 PM · Room IT-304"
        },
        {
            title: "ICT126 Midterm Quiz",
            detail: "Sep 8, 2026 · 1:00–2:00 PM · Room IT-304"
        },
        {
            title: "Faculty Meeting",
            detail: "Sep 10, 2026 · 2:00–3:00 PM · Room IT-301"
        }
    ];
    sampleCalendar.forEach((cal, idx)=>{
        pool.push({
            id: `calendar-${idx}`,
            category: "Calendar",
            title: cal.title,
            subtitle: cal.detail,
            badgeColor: "bg-orange-100 text-orange-700",
            targetPage: "calendar"
        });
    });
    return pool;
}
// ── Header ────────────────────────────────────────────────────────────────────
function InstructorHeader({ sidebarW, userName, userInitials, setActive, assignmentCourses = INITIAL_ASSIGNMENT_COURSES }) {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const searchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const searchPool = getInstructorSearchPool(assignmentCourses);
    const trimmed = query.trim().toLowerCase();
    const matches = trimmed.length > 0 ? searchPool.filter((item)=>{
        return item.title.toLowerCase().includes(trimmed) || item.subtitle.toLowerCase().includes(trimmed) || item.category.toLowerCase().includes(trimmed);
    }) : [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InstructorHeader.useEffect": ()=>{
            function handleClickOutside(e) {
                if (searchRef.current && !searchRef.current.contains(e.target)) {
                    setIsOpen(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "InstructorHeader.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["InstructorHeader.useEffect"];
        }
    }["InstructorHeader.useEffect"], []);
    const handleSelect = (item)=>{
        if (setActive) {
            setActive(item.targetPage);
        }
        setQuery("");
        setIsOpen(false);
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter") {
            e.preventDefault();
            if (matches.length > 0) {
                handleSelect(matches[0]);
            }
        } else if (e.key === "Escape") {
            setIsOpen(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center px-6 gap-4 z-20 transition-all duration-300",
        style: {
            left: sidebarW
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 relative",
                ref: searchRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconSearch, {}, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 642,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 641,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: query,
                        onChange: (e)=>{
                            setQuery(e.target.value);
                            setIsOpen(true);
                        },
                        onFocus: ()=>{
                            if (query.trim().length > 0) setIsOpen(true);
                        },
                        onKeyDown: handleKeyDown,
                        placeholder: "Search courses, students, materials...",
                        className: "w-full pl-9 pr-9 py-2 bg-gray-100 rounded-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 644,
                        columnNumber: 9
                    }, this),
                    query.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{
                            setQuery("");
                            setIsOpen(false);
                        },
                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 rounded-full cursor-pointer",
                        title: "Clear search",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconX, {
                            className: "w-3.5 h-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 668,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 659,
                        columnNumber: 11
                    }, this),
                    isOpen && query.trim().length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 max-h-96 overflow-y-auto divide-y divide-gray-50 animate-in fade-in zoom-in-95 duration-150",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-2 bg-gray-50 border-b border-gray-100 flex items-center justify-between text-[11px] text-gray-500 font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Search Results (",
                                            matches.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 675,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Press Enter to select top result"
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 676,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 674,
                                columnNumber: 13
                            }, this),
                            matches.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "py-1",
                                children: matches.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleSelect(item),
                                        className: "w-full px-4 py-3 text-left flex items-center justify-between gap-3 hover:bg-blue-50/60 transition-colors cursor-pointer group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${item.badgeColor || "bg-gray-100 text-gray-700"}`,
                                                        children: item.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 688,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors truncate",
                                                                children: item.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                                lineNumber: 692,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-500 truncate",
                                                                children: item.subtitle
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                                lineNumber: 695,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 691,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 687,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 text-xs text-blue-600 shrink-0 font-medium opacity-0 group-hover:opacity-100 transition-opacity",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Go to ",
                                                            item.targetPage.charAt(0).toUpperCase() + item.targetPage.slice(1)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 701,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconChevronRight, {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 702,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 700,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 682,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 680,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 text-center text-gray-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 mx-auto mb-2 rounded-full bg-gray-100 flex items-center justify-center text-gray-400",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconSearch, {}, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 710,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 709,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-gray-700",
                                        children: "No results found"
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 712,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400 mt-1",
                                        children: [
                                            "No matching results found for “",
                                            query,
                                            "”. Try searching for courses, students, assignments, quizzes, or materials."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 713,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 708,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 673,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 640,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActive && setActive("messages"),
                        className: "relative text-gray-500 hover:text-blue-700 transition-colors p-1.5 rounded-full hover:bg-gray-100 cursor-pointer",
                        title: "Messages",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconMail, {}, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 728,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 723,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActive && setActive("announcements"),
                        className: "relative text-gray-500 hover:text-blue-700 transition-colors p-1.5 rounded-full hover:bg-gray-100 cursor-pointer",
                        title: "Notifications",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconBell, {}, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 735,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 736,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 730,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 pl-3 border-l border-gray-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-gray-800 leading-tight",
                                        children: userName
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 740,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500",
                                        children: "Instructor"
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 741,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 739,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0",
                                style: {
                                    background: "#0e9f6e"
                                },
                                children: userInitials
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 743,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 738,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 722,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 636,
        columnNumber: 5
    }, this);
}
_s(InstructorHeader, "C6/TrvvancCH04F1U/f0P3GPHMI=");
_c36 = InstructorHeader;
// ── Summary Card ──────────────────────────────────────────────────────────────
function SummaryCard({ title, value, subtitle, icon, bg, iconBg, textColor, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: `w-full text-left rounded-2xl border shadow-sm p-4 flex items-start gap-3 transition-all hover:shadow-md hover:brightness-95 ${bg}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${iconBg}`,
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 762,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-[10px] font-bold uppercase tracking-wider mb-0.5 ${textColor} opacity-70`,
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 766,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-2xl font-extrabold leading-none ${textColor}`,
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 767,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-xs mt-1 ${textColor} opacity-60`,
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 768,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 765,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 761,
        columnNumber: 5
    }, this);
}
_c37 = SummaryCard;
// ── Progress Bar ──────────────────────────────────────────────────────────────
function ProgressBar({ pct, color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-2 rounded-full bg-gray-200 overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full rounded-full transition-all duration-700",
            style: {
                width: `${pct}%`,
                background: color
            }
        }, void 0, false, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 778,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 777,
        columnNumber: 5
    }, this);
}
_c38 = ProgressBar;
// ── Dashboard Page ────────────────────────────────────────────────────────────
function DashboardHome({ setActive, userName }) {
    const greeting = userName.startsWith("Prof.") ? userName.split(" ").slice(0, 2).join(" ") : userName.split(" ")[0];
    const announcements = [
        {
            type: "warning",
            icon: "⚠️",
            title: "Assignment Submission Deadline Approaching",
            detail: "ICT301 – IT Project 1: Milestone 2 submissions due September 5, 2026 at 11:59 PM",
            time: "1 hr ago",
            color: "border-l-amber-400 bg-amber-50"
        },
        {
            type: "info",
            icon: "🎓",
            title: "New Student Enrollment",
            detail: "3 new students enrolled in ICT272 – Web Design and Development this week",
            time: "3 hrs ago",
            color: "border-l-blue-400 bg-blue-50"
        },
        {
            type: "dept",
            icon: "📢",
            title: "Department Announcement",
            detail: "Faculty meeting scheduled for September 10, 2026 at 2:00 PM in Room IT-301",
            time: "Yesterday",
            color: "border-l-purple-400 bg-purple-50"
        },
        {
            type: "exam",
            icon: "📝",
            title: "Upcoming Assessment",
            detail: "ICT126 – AI: Midterm Quiz scheduled for September 8, 2026. Please prepare the quiz module.",
            time: "2 days ago",
            color: "border-l-green-400 bg-green-50"
        }
    ];
    const courses = [
        {
            code: "ICT301",
            name: "Information Technology Project 1",
            students: 32,
            upcoming: "Milestone 2 submission due Sep 5",
            color: "#2563eb",
            bg: "bg-blue-50",
            badge: "bg-blue-100 text-blue-700",
            progress: 55
        },
        {
            code: "ICT272",
            name: "Web Design and Development",
            students: 38,
            upcoming: "Lab Exercise 4 due Sep 7",
            color: "#0e9f6e",
            bg: "bg-emerald-50",
            badge: "bg-emerald-100 text-emerald-700",
            progress: 40
        },
        {
            code: "ICT126",
            name: "Artificial Intelligence",
            students: 26,
            upcoming: "Midterm Quiz on Sep 8",
            color: "#7c3aed",
            bg: "bg-purple-50",
            badge: "bg-purple-100 text-purple-700",
            progress: 48
        }
    ];
    const upcomingClasses = [
        {
            course: "ICT301",
            date: "Sep 3, 2026",
            time: "8:00 – 10:00 AM",
            room: "Room IT-201",
            online: false
        },
        {
            course: "ICT272",
            date: "Sep 4, 2026",
            time: "10:00 AM – 12:00 PM",
            room: "Online – Zoom",
            online: true
        },
        {
            course: "ICT126",
            date: "Sep 5, 2026",
            time: "1:00 – 3:00 PM",
            room: "Room IT-304",
            online: false
        },
        {
            course: "ICT301",
            date: "Sep 6, 2026",
            time: "8:00 – 10:00 AM",
            room: "Room IT-201",
            online: false
        }
    ];
    const pendingGrading = [
        {
            name: "Milestone 2 Draft Report",
            course: "ICT301",
            submissions: 28,
            type: "Assignment"
        },
        {
            name: "Lab Exercise 3",
            course: "ICT272",
            submissions: 36,
            type: "Assignment"
        },
        {
            name: "Weekly Quiz 3",
            course: "ICT126",
            submissions: 24,
            type: "Quiz"
        }
    ];
    const recentActivity = [
        {
            dot: "bg-blue-500",
            text: "Marco Reyes submitted Milestone 2 – ICT301",
            time: "5 min ago"
        },
        {
            dot: "bg-green-500",
            text: "New quiz submission received for ICT126 Quiz 3",
            time: "22 min ago"
        },
        {
            dot: "bg-purple-500",
            text: "Course material uploaded: ICT272 Week 5 Lecture Slides",
            time: "1 hr ago"
        },
        {
            dot: "bg-orange-400",
            text: "Sofia Tan enrolled in ICT272 – Web Design and Development",
            time: "2 hrs ago"
        },
        {
            dot: "bg-red-400",
            text: "Liam Garcia submitted late: ICT126 Assignment 2",
            time: "3 hrs ago"
        },
        {
            dot: "bg-teal-500",
            text: "Announcement posted: ICT301 Milestone 2 Rubric Update",
            time: "4 hrs ago"
        },
        {
            dot: "bg-blue-400",
            text: "Aisha Patel requested grade review for ICT272 Lab 2",
            time: "5 hrs ago"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between mb-6 flex-wrap gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-xs text-gray-400 mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Instructor"
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 863,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "/"
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 863,
                                        columnNumber: 36
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Dashboard"
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 864,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 862,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-gray-900",
                                children: [
                                    "Welcome back, ",
                                    greeting,
                                    "!"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 866,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mt-0.5",
                                children: "Here's an overview of your teaching activities."
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 867,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 861,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-sm text-gray-500 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCalendar, {}, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 870,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold text-gray-700",
                                        children: "Semester 1 — 2026"
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 872,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-gray-400",
                                        children: "Term 1 · Sep 2026 – Jan 2027"
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 873,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 871,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 869,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 860,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCard, {
                        title: "My Courses",
                        value: "3",
                        subtitle: "Active Courses",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconBook, {}, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 882,
                            columnNumber: 17
                        }, this),
                        bg: "bg-blue-50 border-blue-100",
                        iconBg: "bg-blue-600",
                        textColor: "text-blue-800",
                        onClick: ()=>setActive("courses")
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 880,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCard, {
                        title: "Total Students",
                        value: "96",
                        subtitle: "Students Enrolled",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconUsers, {}, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 888,
                            columnNumber: 17
                        }, this),
                        bg: "bg-emerald-50 border-emerald-100",
                        iconBg: "bg-emerald-600",
                        textColor: "text-emerald-800",
                        onClick: ()=>setActive("students")
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 886,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCard, {
                        title: "Pending Grading",
                        value: "12",
                        subtitle: "Submissions",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconAssignment, {}, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 894,
                            columnNumber: 17
                        }, this),
                        bg: "bg-amber-50 border-amber-100",
                        iconBg: "bg-amber-500",
                        textColor: "text-amber-800",
                        onClick: ()=>setActive("grades")
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 892,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCard, {
                        title: "Upcoming Classes",
                        value: "4",
                        subtitle: "This Week",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCalendar, {}, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 900,
                            columnNumber: 17
                        }, this),
                        bg: "bg-purple-50 border-purple-100",
                        iconBg: "bg-purple-600",
                        textColor: "text-purple-800",
                        onClick: ()=>setActive("calendar")
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 898,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 879,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-base font-bold text-gray-800 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconAnnouncement, {}, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 912,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Announcements"
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 912,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 911,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActive("announcements"),
                                        className: "text-xs text-blue-600 font-medium hover:underline",
                                        children: "View All"
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 914,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 910,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: announcements.map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `border-l-4 rounded-r-xl px-4 py-3 ${a.color}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-semibold text-gray-800",
                                                            children: [
                                                                a.icon,
                                                                " ",
                                                                a.title
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                            lineNumber: 921,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-600 mt-0.5",
                                                            children: a.detail
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                            lineNumber: 922,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 920,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-gray-400 shrink-0 mt-0.5",
                                                    children: a.time
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 924,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 919,
                                            columnNumber: 19
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 918,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 916,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 909,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-base font-bold text-gray-800 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconBook, {}, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 935,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "My Courses"
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 935,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 934,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActive("courses"),
                                        className: "text-xs text-blue-600 font-medium hover:underline",
                                        children: "Manage All"
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 937,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 933,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid sm:grid-cols-3 gap-4",
                                children: courses.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `rounded-xl border p-4 ${c.bg} border-gray-100 hover:shadow-md transition-shadow cursor-pointer`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 ${c.badge}`,
                                                children: c.code
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 942,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-bold text-gray-800 leading-snug mb-2",
                                                children: c.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 943,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1 text-xs text-gray-500 mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconUsers, {
                                                        className: "w-3 h-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 945,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            c.students,
                                                            " students"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 945,
                                                        columnNumber: 54
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 944,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-[10px] text-gray-500 mb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Progress"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                                lineNumber: 949,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    c.progress,
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                                lineNumber: 949,
                                                                columnNumber: 44
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 948,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressBar, {
                                                        pct: c.progress,
                                                        color: c.color
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 951,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 947,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-gray-500 mb-3 flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconClock, {
                                                        className: "w-3 h-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 954,
                                                        columnNumber: 21
                                                    }, this),
                                                    c.upcoming
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 953,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActive("courses"),
                                                className: "w-full text-xs font-semibold py-1.5 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors",
                                                style: {
                                                    color: c.color
                                                },
                                                children: "View Course"
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 956,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, c.code, true, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 941,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 939,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 932,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid sm:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-sm font-bold text-gray-800 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCalendar, {}, void 0, false, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 974,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Upcoming Classes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 974,
                                                        columnNumber: 35
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 973,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActive("calendar"),
                                                className: "text-xs text-blue-600 font-medium hover:underline",
                                                children: "Calendar"
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 976,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 972,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: upcomingClasses.map((cls, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between gap-2 pb-3 border-b border-gray-50 last:border-0 last:pb-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs font-semibold text-gray-800",
                                                                children: cls.course
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                                lineNumber: 982,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-gray-500",
                                                                children: [
                                                                    cls.date,
                                                                    " · ",
                                                                    cls.time
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                                lineNumber: 983,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-[10px] font-medium mt-0.5 ${cls.online ? "text-blue-600" : "text-gray-500"}`,
                                                                children: cls.room
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                                lineNumber: 984,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 981,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: `shrink-0 text-[10px] font-semibold px-2.5 py-1 rounded-lg transition-colors ${cls.online ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                                        children: cls.online ? "Start Class" : "View Class"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 988,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 980,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 978,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 971,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-sm font-bold text-gray-800 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconAssignment, {}, void 0, false, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 1006,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Pending Grading"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 1006,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 1005,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActive("grades"),
                                                className: "text-xs text-blue-600 font-medium hover:underline",
                                                children: "All Grades"
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 1008,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 1004,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: pendingGrading.map((g, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between gap-2 pb-3 border-b border-gray-50 last:border-0 last:pb-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs font-semibold text-gray-800",
                                                                children: g.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                                lineNumber: 1014,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-gray-500",
                                                                children: [
                                                                    g.course,
                                                                    " · ",
                                                                    g.type
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                                lineNumber: 1015,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] font-semibold text-amber-600 mt-0.5",
                                                                children: [
                                                                    g.submissions,
                                                                    " submissions"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                                lineNumber: 1016,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 1013,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setActive("grades"),
                                                        className: "shrink-0 text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100 transition-colors",
                                                        children: "Grade Now"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 1018,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 1012,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 1010,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 1003,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 969,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 906,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 858,
        columnNumber: 5
    }, this);
}
_c39 = DashboardHome;
const INSTRUCTOR_LEARNING_MATERIALS = [
    {
        id: "mat-ict301-w1-lec",
        title: "Week 1 Lecture: System Analysis & Design",
        course: "ICT301",
        courseName: "Information Technology Project 1",
        type: "Slides",
        category: "Lecture",
        week: 1,
        size: "3.4 MB",
        date: "Aug 18, 2026",
        icon: "📊",
        description: "Foundational lecture slide deck covering systems thinking, stakeholder requirements elicitation, problem framing, and UML domain modeling standards."
    },
    {
        id: "mat-ict301-w1-tut",
        title: "Week 1 Tutorial: Requirements Engineering Worksheet",
        course: "ICT301",
        courseName: "Information Technology Project 1",
        type: "Document",
        category: "Tutorial",
        week: 1,
        size: "1.2 MB",
        date: "Aug 19, 2026",
        icon: "📄",
        description: "Hands-on tutorial worksheet and exercises guiding students through user story authoring, acceptance criteria formulation, and requirements traceability."
    },
    {
        id: "mat-ict301-w2-lec",
        title: "Week 2 Lecture: Project Planning & Estimation",
        course: "ICT301",
        courseName: "Information Technology Project 1",
        type: "Slides",
        category: "Lecture",
        week: 2,
        size: "4.1 MB",
        date: "Aug 25, 2026",
        icon: "📊",
        description: "Lecture presentation on Work Breakdown Structure (WBS), Gantt scheduling, critical path method, PERT estimation, and resource allocation frameworks."
    },
    {
        id: "mat-ict301-w2-tut",
        title: "Week 2 Tutorial: Project Charter & Estimation Template",
        course: "ICT301",
        courseName: "Information Technology Project 1",
        type: "Document",
        category: "Tutorial",
        week: 2,
        size: "850 KB",
        date: "Aug 26, 2026",
        icon: "📋",
        description: "Interactive project charter template and spreadsheet model for sprint velocity planning, milestone cost estimation, and risk assessment matrices."
    },
    {
        id: "mat-ict301-rubric",
        title: "Project Milestone 2 Rubric",
        course: "ICT301",
        courseName: "Information Technology Project 1",
        type: "Document",
        size: "0.5 MB",
        date: "Aug 30, 2026",
        icon: "📋",
        description: "Detailed grading rubric, assessment criteria, and submission checklist for Milestone 2 Preliminary Design & Architecture."
    },
    {
        id: "mat-ict301-agile",
        title: "Agile Methodology Handbook",
        course: "ICT301",
        courseName: "Information Technology Project 1",
        type: "Document",
        size: "2.8 MB",
        date: "Aug 27, 2026",
        icon: "📄",
        description: "Comprehensive guide to Agile workflows, Scrum ceremonies, sprint planning, daily standups, and retrospective practices."
    },
    {
        id: "mat-ict272-w5-lec",
        title: "Week 5 Lecture Slides",
        course: "ICT272",
        courseName: "Web Design and Development",
        type: "Slides",
        category: "Lecture",
        week: 5,
        size: "3.2 MB",
        date: "Sep 2, 2026",
        icon: "📊",
        description: "Lecture slides focusing on React hooks (useState, useEffect), component lifecycle, and state lifting techniques."
    },
    {
        id: "mat-ict272-w5-vid",
        title: "React Tutorial – Week 5",
        course: "ICT272",
        courseName: "Web Design and Development",
        type: "Video",
        category: "Tutorial",
        week: 5,
        size: "480 MB",
        date: "Aug 29, 2026",
        icon: "🎬",
        description: "Guided code-along screen recording building interactive React components and managing state across child views."
    },
    {
        id: "mat-ict272-grid",
        title: "CSS Grid & Flexbox Cheatsheet",
        course: "ICT272",
        courseName: "Web Design and Development",
        type: "Document",
        size: "0.8 MB",
        date: "Aug 26, 2026",
        icon: "📄",
        description: "Visual cheat sheet and quick syntax reference for 2D CSS Grid layouts and 1D Flexbox alignment rules."
    },
    {
        id: "mat-ict126-ethics",
        title: "AI Ethics Reading Guide",
        course: "ICT126",
        courseName: "Artificial Intelligence",
        type: "Document",
        size: "1.1 MB",
        date: "Sep 1, 2026",
        icon: "📄",
        description: "Annotated readings on ethical challenges in autonomous AI, bias detection, fairness constraints, and alignment standards."
    },
    {
        id: "mat-ict126-nn-vid",
        title: "Neural Networks Intro Video",
        course: "ICT126",
        courseName: "Artificial Intelligence",
        type: "Video",
        size: "620 MB",
        date: "Aug 28, 2026",
        icon: "🎬",
        description: "Animated overview explaining biological vs artificial neurons, activation functions, loss gradients, and backpropagation."
    },
    {
        id: "mat-ict126-ml-chart",
        title: "ML Algorithm Comparison Chart",
        course: "ICT126",
        courseName: "Artificial Intelligence",
        type: "Slides",
        size: "4.5 MB",
        date: "Aug 25, 2026",
        icon: "📊",
        description: "Comparative matrix analyzing supervised, unsupervised, and reinforcement learning algorithms and decision boundaries."
    }
];
function MaterialPreviewModal({ material, onClose, onDownload, onNavigateToMaterialsHub }) {
    if (!material) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-xs",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-150",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/70",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl p-1.5 rounded-xl bg-white shadow-xs border border-gray-100",
                                    children: material.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 1215,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-base font-bold text-gray-900 leading-snug",
                                            children: material.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 1217,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-blue-600 font-semibold",
                                            children: [
                                                material.course,
                                                " — ",
                                                material.courseName
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 1218,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 1216,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1214,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer",
                            title: "Close modal",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconX, {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 1226,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1221,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 1213,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 overflow-y-auto space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-2",
                            children: [
                                material.week && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800",
                                    children: [
                                        "Week ",
                                        material.week
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 1235,
                                    columnNumber: 15
                                }, this),
                                material.category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-100 text-purple-800",
                                    children: material.category
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 1240,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-700",
                                    children: material.type
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 1244,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-gray-500 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-200",
                                    children: material.size
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 1247,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-gray-400",
                                    children: [
                                        "Uploaded on ",
                                        material.date
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 1250,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1233,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-50 rounded-xl p-3.5 text-xs text-gray-600 leading-relaxed border border-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-gray-700 mb-1",
                                    children: "Description & Learning Objectives:"
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 1257,
                                    columnNumber: 13
                                }, this),
                                material.description
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1256,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-gray-200 bg-slate-950 text-slate-100 p-4 shadow-inner",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1.5 font-medium text-slate-300 truncate",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "📄"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 1265,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "truncate",
                                                    children: material.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 1265,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 1264,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-slate-800 px-2 py-0.5 rounded text-[11px] text-slate-300 shrink-0",
                                            children: "Preview Mode · Page 1 of 24"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 1267,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 1263,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white text-gray-900 rounded-lg p-6 min-h-[170px] shadow-sm flex flex-col justify-between border border-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-bold uppercase tracking-wider text-blue-600",
                                                            children: [
                                                                material.course,
                                                                " · ",
                                                                material.courseName
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                            lineNumber: 1276,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-gray-400",
                                                            children: "EduFlex Academic LMS"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                            lineNumber: 1279,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 1275,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-base font-bold text-gray-900",
                                                    children: material.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 1281,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-600 mt-2 leading-relaxed",
                                                    children: material.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 1282,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 1274,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-4 mt-3 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-400 flex-wrap gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Instructor: Prof. Sarita Koirala"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 1288,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Term 2, Academic Year 2026"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 1289,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 1287,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 1273,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1262,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 1231,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-gray-50/70 gap-3",
                    children: [
                        onNavigateToMaterialsHub ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onNavigateToMaterialsHub,
                            className: "text-xs text-blue-600 hover:text-blue-800 hover:underline font-medium flex items-center gap-1 cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "View in Learning Materials Hub →"
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 1302,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1298,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1305,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 bg-white border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 1309,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onDownload(material),
                                    className: "flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white transition-colors cursor-pointer",
                                    style: {
                                        background: "#1a3a9e"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconDownload, {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 1320,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Download (",
                                                material.size,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 1321,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 1315,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1308,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 1296,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 1211,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 1210,
        columnNumber: 5
    }, this);
}
_c40 = MaterialPreviewModal;
// ── My Courses Page ───────────────────────────────────────────────────────────
function MyCoursesPage({ setActive }) {
    _s1();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [subView, setSubView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [expandedWeeks, setExpandedWeeks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        1,
        2
    ]);
    const [selectedMaterial, setSelectedMaterial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [downloadToast, setDownloadToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggleWeek = (week)=>{
        setExpandedWeeks((prev)=>prev.includes(week) ? prev.filter((w)=>w !== week) : [
                ...prev,
                week
            ]);
    };
    const handleDownload = (material)=>{
        setDownloadToast(`${material.title} (${material.size})`);
        setTimeout(()=>{
            setDownloadToast(null);
        }, 3500);
    };
    const courses = [
        {
            code: "ICT301",
            name: "Information Technology Project 1",
            credits: 3,
            students: 32,
            schedule: "Mon/Wed 8:00–10:00 AM",
            room: "IT-201",
            progress: 55,
            color: "#2563eb",
            bg: "from-blue-50 to-white",
            badge: "bg-blue-100 text-blue-700",
            borderColor: "border-blue-200",
            topics: [
                "System Analysis & Design",
                "Project Planning",
                "Agile Methodology",
                "Documentation Standards"
            ],
            allTopics: [
                {
                    title: "System Analysis & Design",
                    desc: "Foundational software requirements engineering, problem framing, and system modeling."
                },
                {
                    title: "Project Planning & Estimation",
                    desc: "Gantt charting, milestone breakdown structures, and resource allocation."
                }
            ],
            upcoming: [
                {
                    label: "Milestone 2 Due",
                    date: "Sep 5, 2026",
                    type: "Assignment"
                },
                {
                    label: "Sprint Review",
                    date: "Sep 10, 2026",
                    type: "Class"
                }
            ],
            allUpcoming: [
                {
                    label: "Milestone 2 Due",
                    date: "Sep 5, 2026",
                    type: "Assignment",
                    detail: "ICT301 Preliminary Design & Architecture Submission"
                },
                {
                    label: "ICT301 Lecture: CI/CD Pipelines",
                    date: "Sep 6, 2026",
                    type: "Class",
                    detail: "Room IT-201 · 8:00–10:00 AM"
                },
                {
                    label: "Sprint Review & Milestone Check",
                    date: "Sep 10, 2026",
                    type: "Class",
                    detail: "Room IT-201 · 8:00–10:00 AM"
                },
                {
                    label: "Weekly Quiz 3: Project Management",
                    date: "Sep 12, 2026",
                    type: "Quiz",
                    detail: "Online Quiz · 15 Multiple Choice Questions"
                },
                {
                    label: "Milestone 3 Draft Submissions",
                    date: "Sep 18, 2026",
                    type: "Assignment",
                    detail: "Working software prototype demonstration"
                },
                {
                    label: "Final Project Defense & Showcase",
                    date: "Sep 25, 2026",
                    type: "Class",
                    detail: "Auditorium A · 9:00 AM–1:00 PM"
                }
            ],
            students_list: [
                {
                    name: "Marco Reyes",
                    id: "STU-0231",
                    grade: "B+"
                },
                {
                    name: "Sofia Tan",
                    id: "STU-0198",
                    grade: "A"
                },
                {
                    name: "Liam Garcia",
                    id: "STU-0274",
                    grade: "B"
                }
            ],
            allStudents: [
                {
                    name: "Marco Reyes",
                    id: "STU-0231",
                    email: "m.reyes@student.edu",
                    grade: "B+",
                    status: "Active",
                    submitted: 8,
                    total: 10
                },
                {
                    name: "Liam Garcia",
                    id: "STU-0274",
                    email: "l.garcia@student.edu",
                    grade: "B",
                    status: "Active",
                    submitted: 7,
                    total: 10
                },
                {
                    name: "Luna Santos",
                    id: "STU-0422",
                    email: "l.santos@student.edu",
                    grade: "C+",
                    status: "At Risk",
                    submitted: 5,
                    total: 10
                },
                {
                    name: "Chloe Taylor",
                    id: "STU-0455",
                    email: "c.taylor@student.edu",
                    grade: "A",
                    status: "Active",
                    submitted: 10,
                    total: 10
                },
                {
                    name: "Daniel Lee",
                    id: "STU-0466",
                    email: "d.lee@student.edu",
                    grade: "B+",
                    status: "Active",
                    submitted: 9,
                    total: 10
                },
                {
                    name: "Emily Watson",
                    id: "STU-0477",
                    email: "e.watson@student.edu",
                    grade: "A-",
                    status: "Active",
                    submitted: 9,
                    total: 10
                }
            ]
        },
        {
            code: "ICT272",
            name: "Web Design and Development",
            credits: 3,
            students: 38,
            schedule: "Tue/Thu 10:00 AM–12:00 PM",
            room: "Online – Zoom",
            progress: 40,
            color: "#0e9f6e",
            bg: "from-emerald-50 to-white",
            badge: "bg-emerald-100 text-emerald-700",
            borderColor: "border-emerald-200",
            topics: [
                "HTML5 & CSS3",
                "JavaScript Fundamentals",
                "React.js Basics",
                "Responsive Design"
            ],
            allTopics: [
                {
                    title: "HTML5 & CSS3 Semantics",
                    desc: "Semantic markup, modern layout techniques, and modern styling rules."
                },
                {
                    title: "JavaScript Fundamentals & ES6+",
                    desc: "Arrow functions, destructuring, promises, and async/await."
                },
                {
                    title: "DOM Manipulation & Events",
                    desc: "Browser events, element selectors, and event delegation patterns."
                },
                {
                    title: "Responsive Design & Flexbox/Grid",
                    desc: "Mobile-first layouts, breakpoints, container queries, and fluid typography."
                },
                {
                    title: "React.js Basics & Component Architecture",
                    desc: "JSX, props, unidirectional data flow, and composable UI design."
                },
                {
                    title: "React State Management & Hooks",
                    desc: "useState, useEffect, custom hooks, and shared application state."
                },
                {
                    title: "Web Accessibility (WCAG 2.1)",
                    desc: "ARIA landmarks, screen reader optimization, and color contrast compliance."
                },
                {
                    title: "REST APIs & Client Integration",
                    desc: "Fetching remote datasets, JSON parsing, error boundaries, and loading states."
                }
            ],
            upcoming: [
                {
                    label: "Lab Exercise 4 Due",
                    date: "Sep 7, 2026",
                    type: "Assignment"
                },
                {
                    label: "Online Lecture Week 5",
                    date: "Sep 9, 2026",
                    type: "Class"
                }
            ],
            allUpcoming: [
                {
                    label: "Lab Exercise 3: DOM Manipulation",
                    date: "Sep 3, 2026",
                    type: "Assignment",
                    detail: "Interactive JavaScript task submission"
                },
                {
                    label: "ICT272 Online Lecture: React Hooks",
                    date: "Sep 4, 2026",
                    type: "Class",
                    detail: "Online – Zoom · 10:00 AM–12:00 PM"
                },
                {
                    label: "Lab Exercise 4 Due",
                    date: "Sep 7, 2026",
                    type: "Assignment",
                    detail: "React component building exercise"
                },
                {
                    label: "Online Lecture Week 5: Styling Systems",
                    date: "Sep 9, 2026",
                    type: "Class",
                    detail: "Online – Zoom · 10:00 AM–12:00 PM"
                },
                {
                    label: "Lab Quiz 1: JavaScript & Web Concepts",
                    date: "Sep 10, 2026",
                    type: "Quiz",
                    detail: "Timed online quiz · 20 Questions"
                },
                {
                    label: "Midterm Interactive Prototype Project",
                    date: "Sep 20, 2026",
                    type: "Assignment",
                    detail: "Full responsive Single Page Application"
                }
            ],
            students_list: [
                {
                    name: "Aisha Patel",
                    id: "STU-0312",
                    grade: "A-"
                },
                {
                    name: "Ethan Cruz",
                    id: "STU-0299",
                    grade: "B+"
                },
                {
                    name: "Maya Lopez",
                    id: "STU-0344",
                    grade: "A"
                }
            ],
            allStudents: [
                {
                    name: "Sofia Tan",
                    id: "STU-0198",
                    email: "s.tan@student.edu",
                    grade: "A",
                    status: "Active",
                    submitted: 10,
                    total: 10
                },
                {
                    name: "Aisha Patel",
                    id: "STU-0312",
                    email: "a.patel@student.edu",
                    grade: "A-",
                    status: "Active",
                    submitted: 9,
                    total: 10
                },
                {
                    name: "Ethan Cruz",
                    id: "STU-0299",
                    email: "e.cruz@student.edu",
                    grade: "B+",
                    status: "Active",
                    submitted: 9,
                    total: 10
                },
                {
                    name: "Maya Lopez",
                    id: "STU-0344",
                    email: "m.lopez@student.edu",
                    grade: "A",
                    status: "Active",
                    submitted: 10,
                    total: 10
                },
                {
                    name: "Raj Sharma",
                    id: "STU-0433",
                    email: "r.sharma@student.edu",
                    grade: "B",
                    status: "Active",
                    submitted: 8,
                    total: 10
                },
                {
                    name: "Ben Miller",
                    id: "STU-0488",
                    email: "b.miller@student.edu",
                    grade: "B+",
                    status: "Active",
                    submitted: 8,
                    total: 10
                }
            ]
        },
        {
            code: "ICT126",
            name: "Artificial Intelligence",
            credits: 3,
            students: 26,
            schedule: "Fri 1:00–3:00 PM",
            room: "IT-304",
            progress: 48,
            color: "#7c3aed",
            bg: "from-purple-50 to-white",
            badge: "bg-purple-100 text-purple-700",
            borderColor: "border-purple-200",
            topics: [
                "Introduction to AI",
                "Machine Learning Basics",
                "Neural Networks",
                "Ethical AI"
            ],
            allTopics: [
                {
                    title: "Introduction to AI & Intelligent Agents",
                    desc: "Agent environments, rationality, Turing test, and foundational paradigms."
                },
                {
                    title: "Problem Solving & Search Algorithms",
                    desc: "Uninformed search (BFS, DFS) and informed heuristic search (A* Search)."
                },
                {
                    title: "Machine Learning Basics & Supervised Learning",
                    desc: "Linear regression, logistic regression, and decision tree classifiers."
                },
                {
                    title: "Unsupervised Learning & Clustering",
                    desc: "K-means, dimensionality reduction via PCA, and clustering evaluation."
                },
                {
                    title: "Neural Networks & Deep Learning",
                    desc: "Perceptrons, backpropagation, activation functions, and convolutional layers."
                },
                {
                    title: "Natural Language Processing (NLP)",
                    desc: "Tokenization, bag-of-words, TF-IDF, transformers, and sentiment analysis."
                },
                {
                    title: "Ethical AI, Bias & Fairness",
                    desc: "Algorithmic bias, safety alignment, transparency, and regulation standards."
                },
                {
                    title: "Reinforcement Learning & Future Trends",
                    desc: "Markov decision processes, Q-learning, and autonomous systems outlook."
                }
            ],
            upcoming: [
                {
                    label: "Midterm Quiz",
                    date: "Sep 8, 2026",
                    type: "Quiz"
                },
                {
                    label: "AI Case Study Presentation",
                    date: "Sep 19, 2026",
                    type: "Assignment"
                }
            ],
            allUpcoming: [
                {
                    label: "Assignment 2: ML Algorithm Analysis",
                    date: "Sep 4, 2026",
                    type: "Assignment",
                    detail: "Classifier benchmark comparison report"
                },
                {
                    label: "ICT126 Lab: Neural Network Training",
                    date: "Sep 5, 2026",
                    type: "Class",
                    detail: "Room IT-304 · 1:00–3:00 PM"
                },
                {
                    label: "Midterm Quiz: Core AI Foundations",
                    date: "Sep 8, 2026",
                    type: "Quiz",
                    detail: "Lab Quiz · 25 Multiple Choice & Short Answer"
                },
                {
                    label: "AI Ethics Reading Reflection",
                    date: "Sep 14, 2026",
                    type: "Assignment",
                    detail: "Short paper on algorithmic transparency"
                },
                {
                    label: "AI Case Study Presentation",
                    date: "Sep 19, 2026",
                    type: "Assignment",
                    detail: "Group presentation and slide deck submission"
                },
                {
                    label: "Term Project: Deep Learning Pipeline",
                    date: "Sep 28, 2026",
                    type: "Assignment",
                    detail: "Computer vision classification model submission"
                }
            ],
            students_list: [
                {
                    name: "Noah Kim",
                    id: "STU-0401",
                    grade: "A+"
                },
                {
                    name: "Priya Nair",
                    id: "STU-0388",
                    grade: "B"
                },
                {
                    name: "Carlos Vega",
                    id: "STU-0411",
                    grade: "B+"
                }
            ],
            allStudents: [
                {
                    name: "Noah Kim",
                    id: "STU-0401",
                    email: "n.kim@student.edu",
                    grade: "A+",
                    status: "Active",
                    submitted: 10,
                    total: 10
                },
                {
                    name: "Priya Nair",
                    id: "STU-0388",
                    email: "p.nair@student.edu",
                    grade: "B",
                    status: "Active",
                    submitted: 7,
                    total: 10
                },
                {
                    name: "Carlos Vega",
                    id: "STU-0411",
                    email: "c.vega@student.edu",
                    grade: "B+",
                    status: "Active",
                    submitted: 8,
                    total: 10
                },
                {
                    name: "Zoe Andrade",
                    id: "STU-0444",
                    email: "z.andrade@student.edu",
                    grade: "A-",
                    status: "Active",
                    submitted: 9,
                    total: 10
                },
                {
                    name: "Lucas Scott",
                    id: "STU-0499",
                    email: "l.scott@student.edu",
                    grade: "B",
                    status: "Active",
                    submitted: 7,
                    total: 10
                },
                {
                    name: "Hana Tanaka",
                    id: "STU-0501",
                    email: "h.tanaka@student.edu",
                    grade: "A",
                    status: "Active",
                    submitted: 10,
                    total: 10
                }
            ]
        }
    ];
    const selectedCourse = courses.find((c)=>c.code === selected);
    if (selectedCourse && subView === "topics") {
        const displayTopics = (selectedCourse.allTopics || []).slice(0, 2);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 text-xs text-gray-400 mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setSelected(null);
                                setSubView(null);
                            },
                            className: "hover:text-blue-600 transition-colors",
                            children: "My Courses"
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1482,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "/"
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1483,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSubView(null),
                            className: "hover:text-blue-600 transition-colors",
                            children: selectedCourse.code
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1484,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "/"
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1485,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-600",
                            children: "Course Topics"
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1486,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 1481,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setSubView(null),
                    className: "mb-4 flex items-center gap-1.5 text-sm text-blue-600 hover:underline font-medium cursor-pointer",
                    children: [
                        "← Back to ",
                        selectedCourse.code,
                        " Overview"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 1488,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `rounded-2xl border ${selectedCourse.borderColor} bg-gradient-to-r ${selectedCourse.bg} p-6 mb-6`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-4 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-2 ${selectedCourse.badge}`,
                                        children: selectedCourse.code
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 1495,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-xl font-bold text-gray-900",
                                        children: [
                                            "Course Topics — ",
                                            selectedCourse.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 1496,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500 mt-1",
                                        children: "Active curriculum syllabus and weekly learning materials (Week 1 & Week 2 active)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 1497,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 1494,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-semibold text-gray-500 bg-white border border-gray-200 px-3 py-1.5 rounded-xl",
                                children: [
                                    selectedCourse.credits,
                                    " Credits · ",
                                    selectedCourse.schedule
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 1501,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 1493,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 1492,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-4 pb-3 border-b border-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-sm font-bold text-gray-900",
                                            children: "Weekly Modules"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 1510,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500",
                                            children: "Expand a week to view associated lecture and tutorial learning materials"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 1511,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 1509,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        if (expandedWeeks.length === displayTopics.length) {
                                            setExpandedWeeks([]);
                                        } else {
                                            setExpandedWeeks(displayTopics.map((_, i)=>i + 1));
                                        }
                                    },
                                    className: "text-xs text-blue-600 font-semibold hover:underline cursor-pointer",
                                    children: expandedWeeks.length === displayTopics.length ? "Collapse All" : "Expand All"
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 1513,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1508,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: displayTopics.map((topic, i)=>{
                                const weekNum = i + 1;
                                const isExpanded = expandedWeeks.includes(weekNum);
                                const weekMaterials = INSTRUCTOR_LEARNING_MATERIALS.filter((m)=>m.course === selectedCourse.code && m.week === weekNum);
                                const lectureMaterial = weekMaterials.find((m)=>m.category === "Lecture");
                                const tutorialMaterial = weekMaterials.find((m)=>m.category === "Tutorial");
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-gray-200/80 bg-white overflow-hidden shadow-xs hover:border-gray-300 transition-all",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>toggleWeek(weekNum),
                                            className: "w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-gray-50/70 transition-colors cursor-pointer",
                                            "aria-expanded": isExpanded,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-3.5 flex-1 pr-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5 shadow-xs",
                                                            style: {
                                                                background: selectedCourse.color
                                                            },
                                                            children: weekNum
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                            lineNumber: 1549,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 mb-1 flex-wrap",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100",
                                                                            children: [
                                                                                "Week ",
                                                                                weekNum
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                                            lineNumber: 1557,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "text-sm sm:text-base font-bold text-gray-900",
                                                                            children: [
                                                                                "Week ",
                                                                                weekNum,
                                                                                " — ",
                                                                                topic.title
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                                            lineNumber: 1560,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                                    lineNumber: 1556,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-500 leading-relaxed",
                                                                    children: topic.desc
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                                    lineNumber: 1564,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                            lineNumber: 1555,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 1548,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 shrink-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11px] text-gray-400 font-medium hidden sm:inline-block bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-lg",
                                                            children: weekMaterials.length > 0 ? `${weekMaterials.length} materials` : "2 materials"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                            lineNumber: 1569,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `w-7 h-7 rounded-lg flex items-center justify-center bg-gray-100 text-gray-500 hover:bg-gray-200 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconChevronDown, {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                                lineNumber: 1577,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                            lineNumber: 1572,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 1568,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 1543,
                                            columnNumber: 19
                                        }, this),
                                        isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t border-gray-100 bg-gray-50/40 p-4 sm:p-5 space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 mb-2.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-2 h-2 rounded-full bg-blue-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                                    lineNumber: 1588,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[11px] font-bold uppercase tracking-wider text-gray-600",
                                                                    children: "Lecture Materials"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                                    lineNumber: 1589,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                            lineNumber: 1587,
                                                            columnNumber: 25
                                                        }, this),
                                                        lectureMaterial ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-white rounded-xl border border-gray-200/80 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:shadow-xs hover:border-blue-200 transition-all",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-2xl shrink-0 p-1.5 rounded-xl bg-blue-50 border border-blue-100",
                                                                            children: lectureMaterial.icon
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                                            lineNumber: 1596,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                    className: "text-sm font-bold text-gray-800 hover:text-blue-600 transition-colors",
                                                                                    children: lectureMaterial.title
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                                                    lineNumber: 1600,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center gap-2 mt-1 text-[11px] text-gray-500 flex-wrap",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded",
                                                                                            children: [
                                                                                                lectureMaterial.course,
                                                                                                " — ",
                                                                                                lectureMaterial.courseName
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                                                            lineNumber: 1604,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: "·"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                                                            lineNumber: 1607,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: lectureMaterial.type
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                                                            lineNumber: 1608,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: "·"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                                                            lineNumber: 1609,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: lectureMaterial.size
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                                                            lineNumber: 1610,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: "·"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                                                            lineNumber: 1611,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: [
                                                                                                "Uploaded ",
                                                                                                lectureMaterial.date
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                                                            lineNumber: 1612,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                                                    lineNumber: 1603,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                                            lineNumber: 1599,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                                    lineNumber: 1595,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 shrink-0 self-end sm:self-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>setSelectedMaterial(lectureMaterial),
                                                                            className: "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-pointer",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconEye, {
                                                                                    className: "w-3.5 h-3.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                                                    lineNumber: 1621,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Preview"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                                                    lineNumber: 1622,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                                            lineNumber: 1617,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleDownload(lectureMaterial),
                                                                            className: "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-white transition-colors cursor-pointer",
                                                                            style: {
                                                                                background: "#1a3a9e"
                                                                            },
                                                                            title: "Download Lecture Material",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconDownload, {
                                                                                    className: "w-3.5 h-3.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                                                    lineNumber: 1630,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Download"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                                                    lineNumber: 1631,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                                            lineNumber: 1624,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                                    lineNumber: 1616,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                            lineNumber: 1594,
                                                            columnNumber: 27
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-white rounded-xl border border-dashed border-gray-200 p-4 text-xs text-gray-400 text-center",
                                                            children: "No lecture materials uploaded for this week."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                            lineNumber: 1636,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 1586,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 mb-2.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-2 h-2 rounded-full bg-teal-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                                    lineNumber: 1645,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[11px] font-bold uppercase tracking-wider text-gray-600",
                                                                    children: "Tutorial Materials"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                                    lineNumber: 1646,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                            lineNumber: 1644,
                                                            columnNumber: 25
                                                        }, this),
                                                        tutorialMaterial ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-white rounded-xl border border-gray-200/80 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:shadow-xs hover:border-teal-200 transition-all",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-2xl shrink-0 p-1.5 rounded-xl bg-teal-50 border border-teal-100",
                                                                            children: tutorialMaterial.icon
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                                            lineNumber: 1653,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                    className: "text-sm font-bold text-gray-800 hover:text-teal-700 transition-colors",
                                                                                    children: tutorialMaterial.title
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                                                    lineNumber: 1657,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center gap-2 mt-1 text-[11px] text-gray-500 flex-wrap",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded",
                                                                                            children: [
                                                                                                tutorialMaterial.course,
                                                                                                " — ",
                                                                                                tutorialMaterial.courseName
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                                                            lineNumber: 1661,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: "·"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                                                            lineNumber: 1664,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: tutorialMaterial.type
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                                                            lineNumber: 1665,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: "·"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                                                            lineNumber: 1666,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: tutorialMaterial.size
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                                                            lineNumber: 1667,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: "·"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                                                            lineNumber: 1668,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: [
                                                                                                "Uploaded ",
                                                                                                tutorialMaterial.date
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                                                            lineNumber: 1669,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                                                    lineNumber: 1660,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                                            lineNumber: 1656,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                                    lineNumber: 1652,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 shrink-0 self-end sm:self-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>setSelectedMaterial(tutorialMaterial),
                                                                            className: "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-gray-100 text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors cursor-pointer",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconEye, {
                                                                                    className: "w-3.5 h-3.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                                                    lineNumber: 1678,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Preview"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                                                    lineNumber: 1679,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                                            lineNumber: 1674,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleDownload(tutorialMaterial),
                                                                            className: "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-white transition-colors cursor-pointer",
                                                                            style: {
                                                                                background: "#1a3a9e"
                                                                            },
                                                                            title: "Download Tutorial Material",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconDownload, {
                                                                                    className: "w-3.5 h-3.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                                                    lineNumber: 1687,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Download"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                                                    lineNumber: 1688,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                                            lineNumber: 1681,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                                    lineNumber: 1673,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                            lineNumber: 1651,
                                                            columnNumber: 27
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-white rounded-xl border border-dashed border-gray-200 p-4 text-xs text-gray-400 text-center",
                                                            children: "No tutorial materials uploaded for this week."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                            lineNumber: 1693,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 1643,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 1584,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 1538,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1527,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 1507,
                    columnNumber: 9
                }, this),
                selectedMaterial && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MaterialPreviewModal, {
                    material: selectedMaterial,
                    onClose: ()=>setSelectedMaterial(null),
                    onDownload: handleDownload,
                    onNavigateToMaterialsHub: ()=>{
                        setSelectedMaterial(null);
                        setActive("materials");
                    }
                }, void 0, false, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 1707,
                    columnNumber: 11
                }, this),
                downloadToast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed bottom-6 right-6 z-50 bg-gray-900 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 text-xs animate-in fade-in slide-in-from-bottom-2 duration-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconDownload, {
                                className: "w-3.5 h-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 1721,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1720,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-white",
                                    children: "Downloading file"
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 1724,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 text-[11px]",
                                    children: downloadToast
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 1725,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1723,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 1719,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 1480,
            columnNumber: 7
        }, this);
    }
    if (selectedCourse && subView === "upcoming") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 text-xs text-gray-400 mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setSelected(null);
                                setSubView(null);
                            },
                            className: "hover:text-blue-600 transition-colors",
                            children: "My Courses"
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1737,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "/"
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1738,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSubView(null),
                            className: "hover:text-blue-600 transition-colors",
                            children: selectedCourse.code
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1739,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "/"
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1740,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-600",
                            children: "Upcoming"
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1741,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 1736,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setSubView(null),
                    className: "mb-4 flex items-center gap-1.5 text-sm text-blue-600 hover:underline font-medium cursor-pointer",
                    children: [
                        "← Back to ",
                        selectedCourse.code,
                        " Overview"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 1743,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `rounded-2xl border ${selectedCourse.borderColor} bg-gradient-to-r ${selectedCourse.bg} p-6 mb-6`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-4 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-2 ${selectedCourse.badge}`,
                                        children: selectedCourse.code
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 1750,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-xl font-bold text-gray-900",
                                        children: [
                                            "All Upcoming Items — ",
                                            selectedCourse.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 1751,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500 mt-1",
                                        children: [
                                            "Upcoming assessments, quizzes, and class sessions (",
                                            selectedCourse.allUpcoming.length,
                                            " items scheduled)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 1752,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 1749,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-semibold text-gray-500 bg-white border border-gray-200 px-3 py-1.5 rounded-xl",
                                children: [
                                    selectedCourse.schedule,
                                    " · ",
                                    selectedCourse.room
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 1756,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 1748,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 1747,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: selectedCourse.allUpcoming.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition-colors gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.type === "Assignment" ? "bg-amber-50 text-amber-600" : item.type === "Quiz" ? "bg-purple-50 text-purple-600" : "bg-blue-50 text-blue-600"}`,
                                                children: item.type === "Assignment" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconAssignment, {}, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 1770,
                                                    columnNumber: 51
                                                }, this) : item.type === "Quiz" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconQuiz, {}, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 1770,
                                                    columnNumber: 95
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCalendar, {}, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 1770,
                                                    columnNumber: 110
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 1767,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-bold text-gray-800",
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 1773,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500 mt-0.5",
                                                        children: item.detail
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 1774,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 1772,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 1766,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-xs font-semibold px-2.5 py-1 rounded-full ${item.type === "Assignment" ? "bg-amber-100 text-amber-800" : item.type === "Quiz" ? "bg-purple-100 text-purple-800" : "bg-blue-100 text-blue-800"}`,
                                                children: item.type
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 1778,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 mt-1",
                                                children: item.date
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 1783,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 1777,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 1765,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 1763,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 1762,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 1735,
            columnNumber: 7
        }, this);
    }
    if (selectedCourse && subView === "students") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 text-xs text-gray-400 mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setSelected(null);
                                setSubView(null);
                            },
                            className: "hover:text-blue-600 transition-colors",
                            children: "My Courses"
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1797,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "/"
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1798,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSubView(null),
                            className: "hover:text-blue-600 transition-colors",
                            children: selectedCourse.code
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1799,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "/"
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1800,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-600",
                            children: "Students"
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1801,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 1796,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setSubView(null),
                    className: "mb-4 flex items-center gap-1.5 text-sm text-blue-600 hover:underline font-medium cursor-pointer",
                    children: [
                        "← Back to ",
                        selectedCourse.code,
                        " Overview"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 1803,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `rounded-2xl border ${selectedCourse.borderColor} bg-gradient-to-r ${selectedCourse.bg} p-6 mb-6`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-4 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-2 ${selectedCourse.badge}`,
                                        children: selectedCourse.code
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 1810,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-xl font-bold text-gray-900",
                                        children: [
                                            "All Students — ",
                                            selectedCourse.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 1811,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500 mt-1",
                                        children: [
                                            "Enrolled student roster (",
                                            selectedCourse.allStudents.length,
                                            " students)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 1812,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 1809,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-semibold text-gray-500 bg-white border border-gray-200 px-3 py-1.5 rounded-xl",
                                children: [
                                    selectedCourse.students,
                                    " Total Enrolled"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 1816,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 1808,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 1807,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-left text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-gray-50 text-xs text-gray-500 font-semibold border-b border-gray-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-3.5",
                                                children: "Student"
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 1827,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-3.5",
                                                children: "Student ID"
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 1828,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-3.5",
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 1829,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-3.5",
                                                children: "Submissions"
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 1830,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-3.5",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 1831,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-3.5 text-right",
                                                children: "Current Grade"
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 1832,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 1826,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 1825,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-gray-100 text-gray-700",
                                    children: selectedCourse.allStudents.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-gray-50/70 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0",
                                                            style: {
                                                                background: selectedCourse.color
                                                            },
                                                            children: s.name.split(" ").map((n)=>n[0]).join("")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                            lineNumber: 1839,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-gray-900",
                                                            children: s.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                            lineNumber: 1842,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 1838,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 text-gray-500",
                                                    children: s.id
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 1844,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 text-gray-500",
                                                    children: s.email
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 1845,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 text-gray-600",
                                                    children: [
                                                        s.submitted,
                                                        " / ",
                                                        s.total,
                                                        " submitted"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 1846,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-xs px-2.5 py-1 rounded-full font-semibold ${s.status === "At Risk" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`,
                                                        children: s.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 1848,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 1847,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 text-right font-bold text-gray-900",
                                                    children: s.grade
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 1852,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 1837,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 1835,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1824,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 1823,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 1822,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 1795,
            columnNumber: 7
        }, this);
    }
    if (selectedCourse) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 text-xs text-gray-400 mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setSelected(null);
                                setSubView(null);
                            },
                            className: "hover:text-blue-600 transition-colors",
                            children: "My Courses"
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1867,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "/"
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1868,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-600",
                            children: selectedCourse.code
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1869,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 1866,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        setSelected(null);
                        setSubView(null);
                    },
                    className: "mb-4 flex items-center gap-1.5 text-sm text-blue-600 hover:underline font-medium",
                    children: "← Back to All Courses"
                }, void 0, false, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 1871,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `rounded-2xl border ${selectedCourse.borderColor} bg-gradient-to-r ${selectedCourse.bg} p-6 mb-6`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between gap-4 flex-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-2 ${selectedCourse.badge}`,
                                            children: selectedCourse.code
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 1878,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-xl font-bold text-gray-900",
                                            children: selectedCourse.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 1879,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 mt-1",
                                            children: [
                                                selectedCourse.schedule,
                                                " · ",
                                                selectedCourse.room,
                                                " · ",
                                                selectedCourse.credits,
                                                " Credits"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 1880,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 1877,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActive("assignments"),
                                            className: "px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700",
                                            children: "Assignments"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 1883,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActive("materials"),
                                            className: "px-3 py-1.5 text-xs font-semibold rounded-lg text-white transition-colors",
                                            style: {
                                                background: selectedCourse.color
                                            },
                                            children: "Course Materials"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 1884,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 1882,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1876,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between text-xs text-gray-500 mb-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Semester Progress"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 1889,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                selectedCourse.progress,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 1889,
                                            columnNumber: 45
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 1888,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressBar, {
                                    pct: selectedCourse.progress,
                                    color: selectedCourse.color
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 1891,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1887,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 1875,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid sm:grid-cols-3 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-sm font-bold text-gray-800",
                                            children: "Course Topics"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 1899,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSubView("topics"),
                                            className: "text-xs text-blue-600 font-medium hover:underline cursor-pointer",
                                            children: "View All"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 1900,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 1898,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: selectedCourse.topics.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-sm text-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0",
                                                    style: {
                                                        background: selectedCourse.color
                                                    },
                                                    children: i + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 1905,
                                                    columnNumber: 19
                                                }, this),
                                                t
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 1904,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 1902,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1897,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-sm font-bold text-gray-800",
                                            children: "Upcoming"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 1917,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSubView("upcoming"),
                                            className: "text-xs text-blue-600 font-medium hover:underline cursor-pointer",
                                            children: "View All"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 1918,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 1916,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: selectedCourse.upcoming.map((u, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${u.type === "Assignment" ? "bg-amber-50 text-amber-600" : u.type === "Quiz" ? "bg-purple-50 text-purple-600" : "bg-blue-50 text-blue-600"}`,
                                                    children: u.type === "Assignment" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconAssignment, {}, void 0, false, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 1924,
                                                        columnNumber: 48
                                                    }, this) : u.type === "Quiz" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconQuiz, {}, void 0, false, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 1924,
                                                        columnNumber: 89
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCalendar, {}, void 0, false, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 1924,
                                                        columnNumber: 104
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 1923,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-semibold text-gray-800",
                                                            children: u.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                            lineNumber: 1927,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-gray-500",
                                                            children: [
                                                                u.date,
                                                                " · ",
                                                                u.type
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                            lineNumber: 1928,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 1926,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 1922,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 1920,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1915,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-sm font-bold text-gray-800",
                                            children: "Students"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 1938,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSubView("students"),
                                            className: "text-xs text-blue-600 font-medium hover:underline cursor-pointer",
                                            children: "View All"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 1939,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 1937,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: selectedCourse.students_list.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0",
                                                            style: {
                                                                background: selectedCourse.color
                                                            },
                                                            children: s.name.split(" ").map((n)=>n[0]).join("")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                            lineNumber: 1945,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-semibold text-gray-800",
                                                                    children: s.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                                    lineNumber: 1949,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] text-gray-400",
                                                                    children: s.id
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                                    lineNumber: 1950,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                            lineNumber: 1948,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 1944,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-bold text-gray-700",
                                                    children: s.grade
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 1953,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 1943,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 1941,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 1936,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 1895,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 1865,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-xs text-gray-400 mb-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Instructor"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 1966,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 1966,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-600",
                        children: "My Courses"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 1966,
                        columnNumber: 46
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 1965,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-gray-900",
                    children: "My Courses"
                }, void 0, false, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 1969,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 1968,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
                children: courses.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `rounded-2xl border ${c.borderColor} bg-gradient-to-br ${c.bg} p-5 hover:shadow-md transition-shadow cursor-pointer flex flex-col`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-[10px] font-bold px-2.5 py-1 rounded-full ${c.badge}`,
                                        children: c.code
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 1975,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-gray-500",
                                        children: [
                                            c.credits,
                                            " Credits"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 1976,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 1974,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold text-gray-900 leading-snug mb-2",
                                children: c.name
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 1978,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 text-xs text-gray-500 mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconUsers, {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 1980,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            c.students,
                                            " students"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 1980,
                                        columnNumber: 48
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 1979,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 text-xs text-gray-500 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconClock, {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 1983,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: c.schedule
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 1983,
                                        columnNumber: 48
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 1982,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-[10px] text-gray-500 mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Semester Progress"
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 1987,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    c.progress,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 1987,
                                                columnNumber: 47
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 1986,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressBar, {
                                        pct: c.progress,
                                        color: c.color
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 1989,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 1985,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-auto flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelected(c.code),
                                        className: "flex-1 text-xs font-semibold py-2 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 transition-colors",
                                        style: {
                                            color: c.color
                                        },
                                        children: "View Course"
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 1992,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-3 py-2 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 transition-colors text-gray-500",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconEdit, {}, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2000,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 1999,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 1991,
                                columnNumber: 13
                            }, this)
                        ]
                    }, c.code, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 1973,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 1971,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 1964,
        columnNumber: 5
    }, this);
}
_s1(MyCoursesPage, "99G4sZQ7XehKtfiIT3qm4mjSA8g=");
_c41 = MyCoursesPage;
// ── Students Page ─────────────────────────────────────────────────────────────
function StudentsPage() {
    _s2();
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [viewStudent, setViewStudent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const students = [
        {
            name: "Marco Reyes",
            id: "STU-0231",
            course: "ICT301",
            email: "m.reyes@student.edu",
            grade: "B+",
            status: "Active",
            submitted: 8,
            total: 10
        },
        {
            name: "Sofia Tan",
            id: "STU-0198",
            course: "ICT272",
            email: "s.tan@student.edu",
            grade: "A",
            status: "Active",
            submitted: 10,
            total: 10
        },
        {
            name: "Liam Garcia",
            id: "STU-0274",
            course: "ICT301",
            email: "l.garcia@student.edu",
            grade: "B",
            status: "Active",
            submitted: 7,
            total: 10
        },
        {
            name: "Aisha Patel",
            id: "STU-0312",
            course: "ICT272",
            email: "a.patel@student.edu",
            grade: "A-",
            status: "Active",
            submitted: 9,
            total: 10
        },
        {
            name: "Ethan Cruz",
            id: "STU-0299",
            course: "ICT272",
            email: "e.cruz@student.edu",
            grade: "B+",
            status: "Active",
            submitted: 9,
            total: 10
        },
        {
            name: "Maya Lopez",
            id: "STU-0344",
            course: "ICT272",
            email: "m.lopez@student.edu",
            grade: "A",
            status: "Active",
            submitted: 10,
            total: 10
        },
        {
            name: "Noah Kim",
            id: "STU-0401",
            course: "ICT126",
            email: "n.kim@student.edu",
            grade: "A+",
            status: "Active",
            submitted: 10,
            total: 10
        },
        {
            name: "Priya Nair",
            id: "STU-0388",
            course: "ICT126",
            email: "p.nair@student.edu",
            grade: "B",
            status: "Active",
            submitted: 7,
            total: 10
        },
        {
            name: "Carlos Vega",
            id: "STU-0411",
            course: "ICT126",
            email: "c.vega@student.edu",
            grade: "B+",
            status: "Active",
            submitted: 8,
            total: 10
        },
        {
            name: "Luna Santos",
            id: "STU-0422",
            course: "ICT301",
            email: "l.santos@student.edu",
            grade: "C+",
            status: "At Risk",
            submitted: 5,
            total: 10
        },
        {
            name: "Raj Sharma",
            id: "STU-0433",
            course: "ICT272",
            email: "r.sharma@student.edu",
            grade: "B",
            status: "Active",
            submitted: 8,
            total: 10
        },
        {
            name: "Zoe Andrade",
            id: "STU-0444",
            course: "ICT126",
            email: "z.andrade@student.edu",
            grade: "A-",
            status: "Active",
            submitted: 9,
            total: 10
        }
    ];
    const filtered = students.filter((s)=>{
        const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.id.toLowerCase().includes(search.toLowerCase()) || s.course.toLowerCase().includes(search.toLowerCase());
        const matchFilter = filter === "all" || s.course === filter || s.status === filter;
        return matchSearch && matchFilter;
    });
    const gradeColor = (g)=>{
        if (g.startsWith("A")) return "text-green-700 bg-green-50";
        if (g.startsWith("B")) return "text-blue-700 bg-blue-50";
        if (g.startsWith("C")) return "text-amber-700 bg-amber-50";
        return "text-red-700 bg-red-50";
    };
    if (viewStudent) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setViewStudent(null),
                    className: "mb-4 flex items-center gap-1.5 text-sm text-blue-600 hover:underline font-medium",
                    children: "← Back to Students"
                }, void 0, false, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 2047,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6 flex items-center gap-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0",
                            style: {
                                background: "#1a3a9e"
                            },
                            children: viewStudent.name.split(" ").map((n)=>n[0]).join("")
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 2051,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-gray-900",
                                    children: viewStudent.name
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2055,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500",
                                    children: [
                                        viewStudent.id,
                                        " · ",
                                        viewStudent.email
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2056,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold",
                                            children: viewStudent.course
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2058,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-xs px-2.5 py-1 rounded-full font-semibold ${viewStudent.status === "At Risk" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`,
                                            children: viewStudent.status
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2059,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2057,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 2054,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ml-auto text-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-4xl font-extrabold text-gray-900",
                                    children: viewStudent.grade
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2063,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500 mt-1",
                                    children: "Current Grade"
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2064,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 2062,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 2050,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid sm:grid-cols-3 gap-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-bold text-gray-800 mb-3",
                                    children: "Submission Status"
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2069,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-end gap-2 mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-3xl font-extrabold text-gray-900",
                                            children: viewStudent.submitted
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2071,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-500 mb-1",
                                            children: [
                                                "/ ",
                                                viewStudent.total,
                                                " submitted"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2072,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2070,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressBar, {
                                    pct: viewStudent.submitted / viewStudent.total * 100,
                                    color: "#1a3a9e"
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2074,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 2068,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-bold text-gray-800 mb-3",
                                    children: "Attendance"
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2077,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-end gap-2 mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-3xl font-extrabold text-gray-900",
                                            children: "90%"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2079,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-500 mb-1",
                                            children: "attendance rate"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2080,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2078,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressBar, {
                                    pct: 90,
                                    color: "#0e9f6e"
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2082,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 2076,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-bold text-gray-800 mb-3",
                                    children: "Participation"
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2085,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-end gap-2 mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-3xl font-extrabold text-gray-900",
                                            children: "75%"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2087,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-500 mb-1",
                                            children: "class participation"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2088,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2086,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressBar, {
                                    pct: 75,
                                    color: "#7c3aed"
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2090,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 2084,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 2067,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 2046,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-xs text-gray-400 mb-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Instructor"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2100,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-600",
                        children: "Students"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2100,
                        columnNumber: 46
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 2099,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6 flex-wrap gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "Students"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconSearch, {}, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2106,
                                            columnNumber: 86
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 2106,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: search,
                                        onChange: (e)=>setSearch(e.target.value),
                                        placeholder: "Search students...",
                                        className: "pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 w-56"
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 2107,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 2105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: filter,
                                onChange: (e)=>setFilter(e.target.value),
                                className: "px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "all",
                                        children: "All Courses"
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 2117,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "ICT301",
                                        children: "ICT301"
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 2118,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "ICT272",
                                        children: "ICT272"
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 2119,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "ICT126",
                                        children: "ICT126"
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 2120,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "At Risk",
                                        children: "At Risk"
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 2121,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 2113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 2102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "bg-gray-50 border-b border-gray-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-left px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-500",
                                                children: "Student"
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 2131,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-left px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-500",
                                                children: "Course"
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 2132,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-left px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-500",
                                                children: "Submissions"
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 2133,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-left px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-500",
                                                children: "Grade"
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 2134,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-left px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-500",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 2135,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-right px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-500",
                                                children: "Actions"
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 2136,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 2130,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2129,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-gray-50",
                                    children: filtered.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-gray-50 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-5 py-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0",
                                                                style: {
                                                                    background: "#1a3a9e"
                                                                },
                                                                children: s.name.split(" ").map((n)=>n[0]).join("")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                                lineNumber: 2144,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-semibold text-gray-800",
                                                                        children: s.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                                        lineNumber: 2148,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[10px] text-gray-400",
                                                                        children: s.id
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                                        lineNumber: 2149,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                                lineNumber: 2147,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 2143,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 2142,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-5 py-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700",
                                                        children: s.course
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 2154,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 2153,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-5 py-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-semibold text-gray-700",
                                                                children: [
                                                                    s.submitted,
                                                                    "/",
                                                                    s.total
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                                lineNumber: 2158,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-16",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressBar, {
                                                                    pct: s.submitted / s.total * 100,
                                                                    color: "#1a3a9e"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                                    lineNumber: 2160,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                                lineNumber: 2159,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 2157,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 2156,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-5 py-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-xs font-bold px-2.5 py-1 rounded-full ${gradeColor(s.grade)}`,
                                                        children: s.grade
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 2165,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 2164,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-5 py-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-xs font-semibold px-2.5 py-1 rounded-full ${s.status === "At Risk" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`,
                                                        children: s.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 2168,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 2167,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-5 py-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-end gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setViewStudent(s),
                                                                className: "p-1.5 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors",
                                                                title: "View",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconEye, {}, void 0, false, {
                                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                                    lineNumber: 2175,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                                lineNumber: 2174,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors",
                                                                title: "Message",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconMessage, {}, void 0, false, {
                                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                                    lineNumber: 2178,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                                lineNumber: 2177,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 2173,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 2172,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2141,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2139,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 2128,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-5 py-3 border-t border-gray-100 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500",
                                children: [
                                    "Showing ",
                                    filtered.length,
                                    " of ",
                                    students.length,
                                    " students"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 2188,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    "1",
                                    "2",
                                    "3"
                                ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `w-7 h-7 rounded-lg text-xs font-semibold transition-colors ${p === "1" ? "text-white" : "text-gray-500 hover:bg-gray-100"}`,
                                        style: p === "1" ? {
                                            background: "#1a3a9e"
                                        } : {},
                                        children: p
                                    }, p, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 2191,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 2189,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2187,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 2126,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 2098,
        columnNumber: 5
    }, this);
}
_s2(StudentsPage, "GkWBCZiiR6KrW/TldsyvIKq2GyU=");
_c42 = StudentsPage;
// ── Assignments Page ──────────────────────────────────────────────────────────
function AssignmentsPage({ setActive, courses: externalCourses, setCourses: externalSetCourses }) {
    _s3();
    const [internalCourses, setInternalCourses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(INITIAL_ASSIGNMENT_COURSES);
    const courses = externalCourses ?? internalCourses;
    const setCourses = externalSetCourses ?? setInternalCourses;
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ICT301");
    const [viewAssignment, setViewAssignment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // New Assignment Modal State
    const [isCreateOpen, setIsCreateOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [createCourse, setCreateCourse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ICT301");
    const [createTitle, setCreateTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [createDesc, setCreateDesc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [createDue, setCreateDue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [createMaxScore, setCreateMaxScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("100");
    const [formErrors, setFormErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [toastMessage, setToastMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleCreateAssignment = (e)=>{
        e.preventDefault();
        const errors = {};
        if (!createTitle.trim()) {
            errors.title = "Assignment title is required";
        }
        if (!createDesc.trim()) {
            errors.desc = "Description / instructions are required";
        }
        if (!createDue.trim()) {
            errors.due = "Due date is required";
        }
        const scoreNum = Number(createMaxScore);
        if (!createMaxScore || isNaN(scoreNum) || scoreNum <= 0) {
            errors.maxScore = "Please enter a valid maximum score (greater than 0)";
        }
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }
        const formattedDate = formatDueDate(createDue);
        const courseTotals = {
            ICT301: 32,
            ICT272: 38,
            ICT126: 26
        };
        const newAssignment = {
            id: `assign-${Date.now()}`,
            title: createTitle.trim(),
            due: formattedDate,
            submissions: 0,
            total: courseTotals[createCourse] || 30,
            type: "Assignment",
            graded: false,
            maxScore: scoreNum,
            description: createDesc.trim()
        };
        setCourses((prevCourses)=>prevCourses.map((c)=>{
                if (c.code === createCourse) {
                    return {
                        ...c,
                        assignments: [
                            newAssignment,
                            ...c.assignments
                        ]
                    };
                }
                return c;
            }));
        setOpen(createCourse);
        setToastMessage(`Assignment "${createTitle.trim()}" created successfully for ${createCourse}!`);
        setTimeout(()=>setToastMessage(null), 4000);
        setCreateTitle("");
        setCreateDesc("");
        setCreateDue("");
        setCreateMaxScore("100");
        setFormErrors({});
        setIsCreateOpen(false);
    };
    if (viewAssignment) {
        const pending = viewAssignment.total - viewAssignment.submissions;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setViewAssignment(null),
                    className: "mb-4 flex items-center gap-1.5 text-sm text-blue-600 hover:underline font-medium",
                    children: "← Back to Assignments"
                }, void 0, false, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 2299,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between flex-wrap gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 mb-2 inline-block",
                                            children: viewAssignment.course
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2305,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-bold text-gray-900",
                                            children: viewAssignment.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2306,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 mt-1",
                                            children: [
                                                "Due: ",
                                                viewAssignment.due,
                                                " · ",
                                                viewAssignment.type
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2307,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2304,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActive("grades"),
                                    className: "px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors",
                                    style: {
                                        background: "#1a3a9e"
                                    },
                                    children: "Grade Submissions"
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2309,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 2303,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 gap-4 mt-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center p-3 bg-blue-50 rounded-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-extrabold text-blue-700",
                                            children: viewAssignment.submissions
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2315,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-blue-600 mt-0.5",
                                            children: "Submitted"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2316,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2314,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center p-3 bg-amber-50 rounded-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-extrabold text-amber-700",
                                            children: pending
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2319,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-amber-600 mt-0.5",
                                            children: "Pending"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2320,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2318,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center p-3 bg-gray-50 rounded-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-extrabold text-gray-700",
                                            children: viewAssignment.total
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2323,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 mt-0.5",
                                            children: "Total Students"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2324,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2322,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 2313,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between text-xs text-gray-500 mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Submission rate"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2329,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                Math.round(viewAssignment.submissions / viewAssignment.total * 100),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2330,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2328,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressBar, {
                                    pct: viewAssignment.submissions / viewAssignment.total * 100,
                                    color: "#1a3a9e"
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2332,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 2327,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 2302,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-bold text-gray-800 mb-4",
                            children: "Recent Submissions"
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 2336,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                "Marco Reyes",
                                "Sofia Tan",
                                "Aisha Patel",
                                "Ethan Cruz"
                            ].slice(0, viewAssignment.submissions >= 3 ? 3 : viewAssignment.submissions).map((name, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold",
                                                    style: {
                                                        background: "#1a3a9e"
                                                    },
                                                    children: name.split(" ").map((n)=>n[0]).join("")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 2341,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-semibold text-gray-800",
                                                            children: name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                            lineNumber: 2345,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-gray-400",
                                                            children: [
                                                                "Submitted ",
                                                                i === 0 ? "5 min ago" : i === 1 ? "1 hr ago" : "3 hrs ago"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                            lineNumber: 2346,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 2344,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2340,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActive("grades"),
                                            className: "text-xs font-semibold px-3 py-1.5 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100 transition-colors",
                                            children: "Grade Now"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2349,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2339,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 2337,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 2335,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 2298,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-xs text-gray-400 mb-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Instructor"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2363,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2363,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-600",
                        children: "Assignments"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2363,
                        columnNumber: 46
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 2362,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6 flex-wrap gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "Assignments"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2366,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setIsCreateOpen(true);
                            setFormErrors({});
                        },
                        className: "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors cursor-pointer hover:opacity-95",
                        style: {
                            background: "#1a3a9e"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconPlus, {}, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 2375,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "New Assignment"
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 2375,
                                columnNumber: 23
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2367,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 2365,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: courses.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors",
                                onClick: ()=>setOpen(open === c.code ? null : c.code),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2.5 h-2.5 rounded-full shrink-0",
                                                style: {
                                                    background: c.color
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 2386,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-bold text-gray-800",
                                                        children: [
                                                            c.code,
                                                            " – ",
                                                            c.name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 2388,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500",
                                                        children: [
                                                            c.assignments.length,
                                                            " assignments · ",
                                                            c.assignments.filter((a)=>!a.graded).length,
                                                            " pending grading"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 2389,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 2387,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 2385,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconChevronDown, {
                                        className: `w-4 h-4 text-gray-400 transition-transform duration-200 ${open === c.code ? "rotate-180" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 2392,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 2381,
                                columnNumber: 13
                            }, this),
                            open === c.code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-gray-100",
                                children: c.assignments.map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between px-5 py-3.5 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${a.graded ? "bg-green-50 text-green-600" : "bg-amber-50 text-amber-500"}`,
                                                        children: a.graded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCheck, {}, void 0, false, {
                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                            lineNumber: 2400,
                                                            columnNumber: 37
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconClock, {}, void 0, false, {
                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                            lineNumber: 2400,
                                                            columnNumber: 53
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 2399,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold text-gray-800",
                                                                children: a.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                                lineNumber: 2403,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-500",
                                                                children: [
                                                                    "Due: ",
                                                                    a.due,
                                                                    " · ",
                                                                    a.submissions,
                                                                    "/",
                                                                    a.total,
                                                                    " submitted"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                                lineNumber: 2404,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 2402,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 2398,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    !a.graded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700",
                                                        children: [
                                                            a.submissions - (a.total - a.submissions > 0 ? 0 : 0),
                                                            " to grade"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 2409,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setViewAssignment({
                                                                ...a,
                                                                course: c.code
                                                            }),
                                                        className: "text-xs font-semibold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors",
                                                        children: "View Details"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 2413,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 2407,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 2397,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 2395,
                                columnNumber: 15
                            }, this)
                        ]
                    }, c.code, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2380,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 2378,
                columnNumber: 7
            }, this),
            isCreateOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-xs",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-150",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between pb-4 border-b border-gray-100 mb-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold text-gray-900",
                                            children: "New Assignment"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2434,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 mt-0.5",
                                            children: "Create and publish an assessment for your students"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2435,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2433,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setIsCreateOpen(false);
                                        setFormErrors({});
                                    },
                                    className: "text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconX, {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 2441,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2437,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 2432,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleCreateAssignment,
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-semibold text-gray-700 mb-1.5",
                                            children: [
                                                "Course ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 2449,
                                                    columnNumber: 26
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2448,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: createCourse,
                                            onChange: (e)=>setCreateCourse(e.target.value),
                                            className: "w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "ICT301",
                                                    children: "ICT301 — Information Technology Project 1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 2456,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "ICT272",
                                                    children: "ICT272 — Web Design and Development"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 2457,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "ICT126",
                                                    children: "ICT126 — Artificial Intelligence"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 2458,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2451,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2447,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-semibold text-gray-700 mb-1.5",
                                            children: [
                                                "Assignment Title ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 2465,
                                                    columnNumber: 36
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2464,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: createTitle,
                                            onChange: (e)=>{
                                                setCreateTitle(e.target.value);
                                                if (formErrors.title) setFormErrors((prev)=>({
                                                        ...prev,
                                                        title: ""
                                                    }));
                                            },
                                            placeholder: "e.g. Milestone 3: System Implementation",
                                            className: `w-full px-3.5 py-2.5 bg-gray-50 border rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition ${formErrors.title ? "border-red-400 bg-red-50/30" : "border-gray-200"}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2467,
                                            columnNumber: 17
                                        }, this),
                                        formErrors.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-red-600 mt-1 flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "⚠️"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 2481,
                                                    columnNumber: 21
                                                }, this),
                                                " ",
                                                formErrors.title
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2480,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2463,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-semibold text-gray-700 mb-1.5",
                                            children: [
                                                "Description & Instructions ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 2489,
                                                    columnNumber: 50
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2488,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            rows: 3,
                                            value: createDesc,
                                            onChange: (e)=>{
                                                setCreateDesc(e.target.value);
                                                if (formErrors.desc) setFormErrors((prev)=>({
                                                        ...prev,
                                                        desc: ""
                                                    }));
                                            },
                                            placeholder: "Provide submission guidelines, deliverables, and requirements...",
                                            className: `w-full px-3.5 py-2.5 bg-gray-50 border rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition resize-none ${formErrors.desc ? "border-red-400 bg-red-50/30" : "border-gray-200"}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2491,
                                            columnNumber: 17
                                        }, this),
                                        formErrors.desc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-red-600 mt-1 flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "⚠️"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 2505,
                                                    columnNumber: 21
                                                }, this),
                                                " ",
                                                formErrors.desc
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2504,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2487,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-gray-700 mb-1.5",
                                                    children: [
                                                        "Due Date ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                            lineNumber: 2514,
                                                            columnNumber: 30
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 2513,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    value: createDue,
                                                    onChange: (e)=>{
                                                        setCreateDue(e.target.value);
                                                        if (formErrors.due) setFormErrors((prev)=>({
                                                                ...prev,
                                                                due: ""
                                                            }));
                                                    },
                                                    className: `w-full px-3.5 py-2.5 bg-gray-50 border rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition ${formErrors.due ? "border-red-400 bg-red-50/30" : "border-gray-200"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 2516,
                                                    columnNumber: 19
                                                }, this),
                                                formErrors.due && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-red-600 mt-1 flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "⚠️"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                            lineNumber: 2529,
                                                            columnNumber: 23
                                                        }, this),
                                                        " ",
                                                        formErrors.due
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 2528,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2512,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-gray-700 mb-1.5",
                                                    children: [
                                                        "Maximum Score ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                            lineNumber: 2536,
                                                            columnNumber: 35
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 2535,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: "1",
                                                    max: "1000",
                                                    value: createMaxScore,
                                                    onChange: (e)=>{
                                                        setCreateMaxScore(e.target.value);
                                                        if (formErrors.maxScore) setFormErrors((prev)=>({
                                                                ...prev,
                                                                maxScore: ""
                                                            }));
                                                    },
                                                    placeholder: "100",
                                                    className: `w-full px-3.5 py-2.5 bg-gray-50 border rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition ${formErrors.maxScore ? "border-red-400 bg-red-50/30" : "border-gray-200"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 2538,
                                                    columnNumber: 19
                                                }, this),
                                                formErrors.maxScore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-red-600 mt-1 flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "⚠️"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                            lineNumber: 2554,
                                                            columnNumber: 23
                                                        }, this),
                                                        " ",
                                                        formErrors.maxScore
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 2553,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2534,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2511,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-end gap-3 pt-4 border-t border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                setIsCreateOpen(false);
                                                setFormErrors({});
                                            },
                                            className: "px-4 py-2.5 rounded-xl text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2562,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "px-5 py-2.5 rounded-xl text-xs font-semibold text-white transition-colors cursor-pointer",
                                            style: {
                                                background: "#1a3a9e"
                                            },
                                            children: "Create Assignment"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2569,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2561,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 2445,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 2431,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 2430,
                columnNumber: 9
            }, this),
            toastMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 right-6 z-50 bg-gray-900 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 text-xs animate-in fade-in slide-in-from-bottom-2 duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCheck, {
                            className: "w-3.5 h-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 2586,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2585,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold text-white",
                                children: "Assignment Created"
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 2589,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-300 text-[11px]",
                                children: toastMessage
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 2590,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2588,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 2584,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 2361,
        columnNumber: 5
    }, this);
}
_s3(AssignmentsPage, "0zjWKm1cQVP1OYMuN15rUgX9yN4=");
_c43 = AssignmentsPage;
// ── Quizzes Page ──────────────────────────────────────────────────────────────
function QuizzesPage({ setActive }) {
    _s4();
    const [viewQuiz, setViewQuiz] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const quizzes = [
        {
            title: "Weekly Quiz 1",
            course: "ICT301",
            date: "Aug 19, 2026",
            submissions: 32,
            total: 32,
            status: "Completed",
            avgScore: 82
        },
        {
            title: "Weekly Quiz 2",
            course: "ICT272",
            date: "Aug 26, 2026",
            submissions: 37,
            total: 38,
            status: "Completed",
            avgScore: 78
        },
        {
            title: "Weekly Quiz 3",
            course: "ICT126",
            date: "Sep 2, 2026",
            submissions: 24,
            total: 26,
            status: "Active",
            avgScore: null
        },
        {
            title: "Midterm Quiz",
            course: "ICT126",
            date: "Sep 8, 2026",
            submissions: 0,
            total: 26,
            status: "Upcoming",
            avgScore: null
        },
        {
            title: "Lab Quiz 1",
            course: "ICT272",
            date: "Sep 10, 2026",
            submissions: 0,
            total: 38,
            status: "Upcoming",
            avgScore: null
        },
        {
            title: "Weekly Quiz 3",
            course: "ICT301",
            date: "Sep 3, 2026",
            submissions: 18,
            total: 32,
            status: "Active",
            avgScore: null
        }
    ];
    const statusColor = (s)=>{
        if (s === "Completed") return "bg-green-100 text-green-700";
        if (s === "Active") return "bg-blue-100 text-blue-700";
        return "bg-gray-100 text-gray-500";
    };
    if (viewQuiz) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setViewQuiz(null),
                    className: "mb-4 flex items-center gap-1.5 text-sm text-blue-600 hover:underline font-medium",
                    children: "← Back to Quizzes"
                }, void 0, false, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 2620,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between flex-wrap gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-bold px-2.5 py-1 rounded-full bg-purple-100 text-purple-700 mb-2 inline-block",
                                            children: viewQuiz.course
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2626,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-bold text-gray-900",
                                            children: viewQuiz.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2627,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 mt-1",
                                            children: [
                                                "Scheduled: ",
                                                viewQuiz.date
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2628,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2625,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        viewQuiz.status === "Upcoming" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-4 py-2 rounded-xl text-sm font-semibold text-white",
                                            style: {
                                                background: "#1a3a9e"
                                            },
                                            children: "Edit Quiz"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2632,
                                            columnNumber: 17
                                        }, this),
                                        viewQuiz.status !== "Upcoming" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActive("grades"),
                                            className: "px-4 py-2 rounded-xl text-sm font-semibold text-white",
                                            style: {
                                                background: "#1a3a9e"
                                            },
                                            children: "View Submissions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2635,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2630,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 2624,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 gap-4 mt-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center p-3 bg-blue-50 rounded-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-extrabold text-blue-700",
                                            children: viewQuiz.submissions
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2641,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-blue-600 mt-0.5",
                                            children: "Submitted"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2642,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2640,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center p-3 bg-gray-50 rounded-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-extrabold text-gray-700",
                                            children: viewQuiz.total
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2645,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 mt-0.5",
                                            children: "Total Students"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2646,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2644,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center p-3 bg-green-50 rounded-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-extrabold text-green-700",
                                            children: [
                                                viewQuiz.avgScore ?? "—",
                                                viewQuiz.avgScore ? "%" : ""
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2649,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-green-600 mt-0.5",
                                            children: "Avg Score"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2650,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2648,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 2639,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 2623,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 2619,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-xs text-gray-400 mb-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Instructor"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2661,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2661,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-600",
                        children: "Quizzes"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2661,
                        columnNumber: 46
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 2660,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6 flex-wrap gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "Quizzes & Assessments"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2664,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white",
                        style: {
                            background: "#1a3a9e"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconPlus, {}, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 2666,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "New Quiz"
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 2666,
                                columnNumber: 23
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2665,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 2663,
                columnNumber: 7
            }, this),
            [
                "Active",
                "Upcoming",
                "Completed"
            ].map((section)=>{
                const items = quizzes.filter((q)=>q.status === section);
                if (!items.length) return null;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-sm font-bold text-gray-700 mb-3 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `w-2 h-2 rounded-full inline-block ${section === "Active" ? "bg-blue-500" : section === "Upcoming" ? "bg-gray-400" : "bg-green-500"}`
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2676,
                                    columnNumber: 15
                                }, this),
                                section
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 2675,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-5",
                            children: items.map((q, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700",
                                                    children: q.course
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 2683,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-[10px] font-bold px-2 py-0.5 rounded-full ${statusColor(q.status)}`,
                                                    children: q.status
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 2684,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2682,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-bold text-gray-800 mb-1",
                                            children: q.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2686,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 mb-2",
                                            children: q.date
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2687,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between text-xs mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-500",
                                                    children: [
                                                        q.submissions,
                                                        "/",
                                                        q.total,
                                                        " submitted"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 2689,
                                                    columnNumber: 21
                                                }, this),
                                                q.avgScore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-green-700",
                                                    children: [
                                                        "Avg: ",
                                                        q.avgScore,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 2690,
                                                    columnNumber: 36
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2688,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setViewQuiz(q),
                                            className: "w-full text-xs font-semibold py-1.5 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors",
                                            children: "View Details"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2692,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2681,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 2679,
                            columnNumber: 13
                        }, this)
                    ]
                }, section, true, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 2674,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 2659,
        columnNumber: 5
    }, this);
}
_s4(QuizzesPage, "7BNGFTRojUSAsNdn3SkgXZczBRU=");
_c44 = QuizzesPage;
// ── Learning Materials Page ───────────────────────────────────────────────────
function LearningMaterialsPage() {
    _s5();
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [previewMaterial, setPreviewMaterial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [downloadToast, setDownloadToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const courseColors = {
        ICT301: "bg-blue-100 text-blue-700",
        ICT272: "bg-emerald-100 text-emerald-700",
        ICT126: "bg-purple-100 text-purple-700"
    };
    const handleDownload = (m)=>{
        setDownloadToast(`${m.title} (${m.size})`);
        setTimeout(()=>{
            setDownloadToast(null);
        }, 3500);
    };
    const filtered = filter === "all" ? INSTRUCTOR_LEARNING_MATERIALS : INSTRUCTOR_LEARNING_MATERIALS.filter((m)=>m.course === filter || m.type.toLowerCase() === filter.toLowerCase());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-xs text-gray-400 mb-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Instructor"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2731,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2731,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-600",
                        children: "Learning Materials"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2731,
                        columnNumber: 46
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 2730,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6 flex-wrap gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "Learning Materials"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2734,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white",
                        style: {
                            background: "#1a3a9e"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconUpload, {}, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 2736,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Upload Material"
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 2736,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2735,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 2733,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 mb-5 flex-wrap",
                children: [
                    "all",
                    "ICT301",
                    "ICT272",
                    "ICT126",
                    "Document",
                    "Slides",
                    "Video"
                ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setFilter(f),
                        className: `px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${filter === f ? "text-white" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 cursor-pointer"}`,
                        style: filter === f ? {
                            background: "#1a3a9e"
                        } : {},
                        children: f === "all" ? "All Materials" : f
                    }, f, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2742,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 2740,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
                children: filtered.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>setPreviewMaterial(m),
                        className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition-shadow group cursor-pointer flex flex-col justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl p-1 rounded-lg bg-gray-50",
                                                children: m.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 2762,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[10px] font-bold px-2 py-0.5 rounded-full ${courseColors[m.course] || "bg-gray-100 text-gray-700"}`,
                                                children: m.course
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 2763,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 2761,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-bold text-gray-800 leading-snug mb-1 group-hover:text-blue-600 transition-colors",
                                        children: m.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 2765,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-gray-500 mb-1",
                                        children: [
                                            m.week ? `Week ${m.week} · ` : "",
                                            m.type,
                                            " · ",
                                            m.size
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 2766,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-gray-400 mb-4",
                                        children: [
                                            "Uploaded ",
                                            m.date
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 2769,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 2760,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                onClick: (e)=>e.stopPropagation(),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setPreviewMaterial(m),
                                        className: "flex-1 flex items-center justify-center gap-1 text-xs font-semibold py-1.5 rounded-xl bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconEye, {}, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 2776,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Preview"
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 2776,
                                                columnNumber: 28
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 2772,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleDownload(m),
                                        className: "p-1.5 rounded-xl bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors cursor-pointer",
                                        title: "Download",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconDownload, {}, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2783,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 2778,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 2771,
                                columnNumber: 13
                            }, this)
                        ]
                    }, m.id, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2755,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 2753,
                columnNumber: 7
            }, this),
            previewMaterial && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MaterialPreviewModal, {
                material: previewMaterial,
                onClose: ()=>setPreviewMaterial(null),
                onDownload: handleDownload
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 2791,
                columnNumber: 9
            }, this),
            downloadToast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 right-6 z-50 bg-gray-900 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 text-xs animate-in fade-in slide-in-from-bottom-2 duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconDownload, {
                            className: "w-3.5 h-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 2801,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2800,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold text-white",
                                children: "Downloading file"
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 2804,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-300 text-[11px]",
                                children: downloadToast
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 2805,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2803,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 2799,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 2729,
        columnNumber: 5
    }, this);
}
_s5(LearningMaterialsPage, "+N00UueOureiea74hfErnaOs1Ig=");
_c45 = LearningMaterialsPage;
// ── Grades Page ───────────────────────────────────────────────────────────────
function GradesPage() {
    _s6();
    const [course, setCourse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ICT301");
    const [gradingItem, setGradingItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [scores, setScores] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const courseGrades = {
        ICT301: [
            {
                student: "Marco Reyes",
                assignments: [
                    92,
                    88,
                    null
                ],
                quiz: 85,
                total: null
            },
            {
                student: "Sofia Tan",
                assignments: [
                    95,
                    92,
                    null
                ],
                quiz: 91,
                total: null
            },
            {
                student: "Liam Garcia",
                assignments: [
                    80,
                    75,
                    null
                ],
                quiz: 78,
                total: null
            },
            {
                student: "Luna Santos",
                assignments: [
                    65,
                    60,
                    null
                ],
                quiz: 70,
                total: null
            }
        ],
        ICT272: [
            {
                student: "Aisha Patel",
                assignments: [
                    90,
                    88,
                    85
                ],
                quiz: 87,
                total: "88%"
            },
            {
                student: "Ethan Cruz",
                assignments: [
                    85,
                    82,
                    80
                ],
                quiz: 83,
                total: "83%"
            },
            {
                student: "Maya Lopez",
                assignments: [
                    95,
                    93,
                    91
                ],
                quiz: 94,
                total: "93%"
            },
            {
                student: "Raj Sharma",
                assignments: [
                    80,
                    78,
                    76
                ],
                quiz: 79,
                total: "78%"
            }
        ],
        ICT126: [
            {
                student: "Noah Kim",
                assignments: [
                    98,
                    95
                ],
                quiz: null,
                total: null
            },
            {
                student: "Priya Nair",
                assignments: [
                    80,
                    78
                ],
                quiz: null,
                total: null
            },
            {
                student: "Carlos Vega",
                assignments: [
                    85,
                    82
                ],
                quiz: null,
                total: null
            },
            {
                student: "Zoe Andrade",
                assignments: [
                    90,
                    88
                ],
                quiz: null,
                total: null
            }
        ]
    };
    const assignmentCols = {
        ICT301: [
            "Milestone 1",
            "Milestone 2",
            "Journal 1"
        ],
        ICT272: [
            "Lab Ex 1",
            "Lab Ex 2",
            "Lab Ex 3"
        ],
        ICT126: [
            "Assignment 1",
            "Assignment 2"
        ]
    };
    const data = courseGrades[course];
    const cols = assignmentCols[course];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-xs text-gray-400 mb-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Instructor"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2852,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2852,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-600",
                        children: "Grades"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2852,
                        columnNumber: 46
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 2851,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6 flex-wrap gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "Student Grades"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2855,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: course,
                                onChange: (e)=>setCourse(e.target.value),
                                className: "px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "ICT301",
                                        children: "ICT301 – IT Project 1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 2861,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "ICT272",
                                        children: "ICT272 – Web Design"
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 2862,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "ICT126",
                                        children: "ICT126 – Artificial Intelligence"
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 2863,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 2857,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconDownload, {}, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 2866,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Export"
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 2866,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 2865,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2856,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 2854,
                columnNumber: 7
            }, this),
            gradingItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-xl w-full max-w-sm p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-base font-bold text-gray-900",
                                    children: "Grade Submission"
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2875,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setGradingItem(null),
                                    className: "text-gray-400 hover:text-gray-600",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconX, {}, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 2877,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2876,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 2874,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600 mb-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: gradingItem.student
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 2880,
                                columnNumber: 55
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 2880,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-500 mb-4",
                            children: [
                                gradingItem.assignment,
                                " · ",
                                course
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 2881,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-xs font-semibold text-gray-700 mb-1",
                            children: "Score (0–100)"
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 2882,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "number",
                            min: "0",
                            max: "100",
                            value: scores[`${gradingItem.student}-${gradingItem.assignment}`] ?? "",
                            onChange: (e)=>setScores((prev)=>({
                                        ...prev,
                                        [`${gradingItem.student}-${gradingItem.assignment}`]: e.target.value
                                    })),
                            className: "w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4",
                            placeholder: "Enter score"
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 2883,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-xs font-semibold text-gray-700 mb-1",
                            children: "Feedback (optional)"
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 2890,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            rows: 3,
                            className: "w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4 resize-none",
                            placeholder: "Add feedback..."
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 2891,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setGradingItem(null),
                                    className: "flex-1 py-2 rounded-xl text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2893,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setGradingItem(null),
                                    className: "flex-1 py-2 rounded-xl text-sm font-semibold text-white transition-colors",
                                    style: {
                                        background: "#1a3a9e"
                                    },
                                    children: "Save Grade"
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2894,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 2892,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 2873,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 2872,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-x-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "bg-gray-50 border-b border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "text-left px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-500",
                                            children: "Student"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2905,
                                            columnNumber: 17
                                        }, this),
                                        cols.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-center px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-500",
                                                children: c
                                            }, c, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 2907,
                                                columnNumber: 19
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "text-center px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-500",
                                            children: "Quiz"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2909,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "text-center px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-500",
                                            children: "Total"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 2910,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 2904,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 2903,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                className: "divide-y divide-gray-50",
                                children: data.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "hover:bg-gray-50 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-5 py-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0",
                                                            style: {
                                                                background: "#1a3a9e"
                                                            },
                                                            children: row.student.split(" ").map((n)=>n[0]).join("")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                            lineNumber: 2918,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-semibold text-gray-800",
                                                            children: row.student
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                            lineNumber: 2921,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 2917,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 2916,
                                                columnNumber: 19
                                            }, this),
                                            row.assignments.map((score, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 text-center",
                                                    children: score !== null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-sm font-bold ${score >= 90 ? "text-green-700" : score >= 75 ? "text-blue-700" : "text-amber-700"}`,
                                                        children: score
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 2927,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setGradingItem({
                                                                student: row.student,
                                                                assignment: cols[j]
                                                            }),
                                                        className: "text-xs font-semibold px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100 transition-colors",
                                                        children: "Grade"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 2929,
                                                        columnNumber: 25
                                                    }, this)
                                                }, j, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 2925,
                                                    columnNumber: 21
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3 text-center",
                                                children: row.quiz !== null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-sm font-bold ${row.quiz >= 90 ? "text-green-700" : row.quiz >= 75 ? "text-blue-700" : "text-amber-700"}`,
                                                    children: row.quiz
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 2940,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setGradingItem({
                                                            student: row.student,
                                                            assignment: "Quiz"
                                                        }),
                                                    className: "text-xs font-semibold px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100 transition-colors",
                                                    children: "Grade"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 2942,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 2938,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3 text-center",
                                                children: row.total ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-extrabold text-gray-900",
                                                    children: row.total
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 2952,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-400",
                                                    children: "Pending"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 2954,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 2950,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 2915,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 2913,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2902,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 2901,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 2900,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 2850,
        columnNumber: 5
    }, this);
}
_s6(GradesPage, "F71VCLSW5YbbPVp39fGWaPKGxKE=");
_c46 = GradesPage;
// ── Calendar Page ─────────────────────────────────────────────────────────────
function CalendarPage() {
    _s7();
    const [selectedDay, setSelectedDay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    const events = {
        3: [
            {
                title: "ICT301 Lecture",
                time: "8:00–10:00 AM",
                room: "IT-201",
                color: "#2563eb",
                online: false
            }
        ],
        4: [
            {
                title: "ICT272 Online Lecture",
                time: "10:00 AM–12:00 PM",
                room: "Zoom",
                color: "#0e9f6e",
                online: true
            }
        ],
        5: [
            {
                title: "ICT126 Lab",
                time: "1:00–3:00 PM",
                room: "IT-304",
                color: "#7c3aed",
                online: false
            }
        ],
        6: [
            {
                title: "ICT301 Lecture",
                time: "8:00–10:00 AM",
                room: "IT-201",
                color: "#2563eb",
                online: false
            }
        ],
        8: [
            {
                title: "ICT126 Midterm Quiz",
                time: "1:00–2:00 PM",
                room: "IT-304",
                color: "#7c3aed",
                online: false
            }
        ],
        10: [
            {
                title: "ICT272 Online Lecture",
                time: "10:00 AM–12:00 PM",
                room: "Zoom",
                color: "#0e9f6e",
                online: true
            },
            {
                title: "Faculty Meeting",
                time: "2:00–3:00 PM",
                room: "IT-301",
                color: "#f59e0b",
                online: false
            }
        ],
        12: [
            {
                title: "ICT301 Lecture",
                time: "8:00–10:00 AM",
                room: "IT-201",
                color: "#2563eb",
                online: false
            }
        ],
        13: [
            {
                title: "ICT272 Online Lecture",
                time: "10:00 AM–12:00 PM",
                room: "Zoom",
                color: "#0e9f6e",
                online: true
            }
        ],
        14: [
            {
                title: "ICT126 Lab",
                time: "1:00–3:00 PM",
                room: "IT-304",
                color: "#7c3aed",
                online: false
            }
        ]
    };
    const days = Array.from({
        length: 30
    }, (_, i)=>i + 1);
    const dayNames = [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun"
    ];
    const startOffset = 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-xs text-gray-400 mb-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Instructor"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2991,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2991,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-600",
                        children: "Calendar"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2991,
                        columnNumber: 46
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 2990,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6 flex-wrap gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "Calendar"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2994,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm text-sm font-semibold text-gray-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCalendar, {}, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 2996,
                                columnNumber: 11
                            }, this),
                            " September 2026"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 2995,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 2993,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-7 mb-2",
                                children: dayNames.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center text-[10px] font-bold text-gray-400 uppercase py-1",
                                        children: d
                                    }, d, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 3004,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3002,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-7 gap-1",
                                children: [
                                    Array.from({
                                        length: startOffset
                                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, `empty-${i}`, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 3008,
                                            columnNumber: 64
                                        }, this)),
                                    days.map((d)=>{
                                        const hasEvent = !!events[d];
                                        const isSelected = selectedDay === d;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSelectedDay(d),
                                            className: `aspect-square rounded-xl flex flex-col items-center justify-center text-sm font-semibold transition-all ${isSelected ? "text-white shadow-md" : hasEvent ? "bg-blue-50 text-blue-700 hover:bg-blue-100" : "text-gray-700 hover:bg-gray-100"}`,
                                            style: isSelected ? {
                                                background: "#1a3a9e"
                                            } : {},
                                            children: [
                                                d,
                                                hasEvent && !isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1 h-1 rounded-full bg-blue-500 mt-0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 3022,
                                                    columnNumber: 47
                                                }, this)
                                            ]
                                        }, d, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 3013,
                                            columnNumber: 17
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3007,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3001,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm font-bold text-gray-800 mb-4",
                                children: selectedDay ? `September ${selectedDay}, 2026` : "Select a day"
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3030,
                                columnNumber: 11
                            }, this),
                            selectedDay && events[selectedDay] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: events[selectedDay].map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl p-3 border-l-4",
                                        style: {
                                            borderColor: e.color,
                                            background: `${e.color}10`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-bold text-gray-800",
                                                children: e.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 3037,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 mt-0.5",
                                                children: e.time
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 3038,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-xs font-medium mt-0.5 ${e.online ? "text-blue-600" : "text-gray-500"}`,
                                                children: e.room
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 3039,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "mt-2 text-xs font-semibold px-2.5 py-1 rounded-lg text-white transition-colors",
                                                style: {
                                                    background: e.color
                                                },
                                                children: e.online ? "Start Class" : "View Class"
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 3040,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 3036,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3034,
                                columnNumber: 13
                            }, this) : selectedDay ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-8 text-gray-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCalendar, {}, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 3051,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs mt-2",
                                        children: "No classes scheduled"
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 3052,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3050,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3029,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 3000,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 2989,
        columnNumber: 5
    }, this);
}
_s7(CalendarPage, "cNbnASYFu+Y+3RLdg5sdRLxxGyM=");
_c47 = CalendarPage;
// ── Generic Placeholder Page ──────────────────────────────────────────────────
function PlaceholderPage({ title, icon }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 flex flex-col items-center justify-center min-h-[60vh] text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-16 h-16 rounded-2xl flex items-center justify-center mb-4 text-blue-600",
                style: {
                    background: "#e8effe"
                },
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 3065,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-bold text-gray-800 mb-1",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 3068,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-500",
                children: "This section is coming soon."
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 3069,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 3064,
        columnNumber: 5
    }, this);
}
_c48 = PlaceholderPage;
const iAnnouncements = [
    {
        id: 1,
        title: "Assessment 2 Submission Reminder",
        description: "This is a reminder that Assessment 2 for ICT301 is due on 3 September 2026 at 11:59 PM. Please review the submission checklist before uploading.",
        date: "Aug 30, 2026",
        audience: "ICT301",
        status: "Published"
    },
    {
        id: 2,
        title: "Updated Learning Materials — Week 8",
        description: "Week 8 lecture slides and lab exercise files have been uploaded to the ICT272 course page. Please review them before the next session.",
        date: "Aug 28, 2026",
        audience: "ICT272",
        status: "Published"
    },
    {
        id: 3,
        title: "Important Semester T226 Notice",
        description: "All students must complete their mid-semester feedback survey by 5 September 2026. The link has been sent to your university email address.",
        date: "Sep 1, 2026",
        audience: "All Students",
        status: "Scheduled"
    },
    {
        id: 4,
        title: "Project Submission Guidelines",
        description: "Please ensure your ICT301 final project report follows the provided template and is submitted via the portal. Emailed submissions will not be accepted.",
        date: "Aug 25, 2026",
        audience: "ICT301",
        status: "Draft"
    }
];
const announcementStatusColors = {
    Published: "bg-green-50 text-green-700 border-green-100",
    Draft: "bg-gray-100 text-gray-500 border-gray-200",
    Scheduled: "bg-blue-50 text-blue-700 border-blue-100"
};
function InstructorAnnouncementsPage() {
    _s8();
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const filtered = filter === "All" ? iAnnouncements : iAnnouncements.filter((a)=>a.status === filter);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-xs text-gray-400 mb-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Instructor"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3133,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-600",
                        children: "Announcements"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3133,
                        columnNumber: 46
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 3132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between mb-1 flex-wrap gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-gray-900",
                                children: "Announcements"
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3137,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mt-0.5",
                                children: "Create and manage announcements for your students"
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3138,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors",
                        style: {
                            background: "#1a3a9e"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconPlus, {}, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "New Announcement"
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3141,
                                columnNumber: 23
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 3135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl border border-gray-100 shadow-sm px-4 mb-6 mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1",
                    children: [
                        "All",
                        "Published",
                        "Draft",
                        "Scheduled"
                    ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setFilter(f),
                            className: `relative px-4 py-3.5 text-sm font-medium whitespace-nowrap transition-colors ${filter === f ? "text-blue-700" : "text-gray-500 hover:text-gray-800"}`,
                            children: [
                                f === "All" ? "All Announcements" : f,
                                filter === f && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute bottom-0 left-0 right-0 h-0.5 rounded-t-full bg-blue-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 3155,
                                    columnNumber: 32
                                }, this)
                            ]
                        }, f, true, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 3149,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 3147,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 3146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: filtered.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 flex-wrap mb-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-base font-bold text-gray-900",
                                                    children: a.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 3168,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-[10px] font-semibold px-2.5 py-0.5 rounded-full border shrink-0 ${announcementStatusColors[a.status]}`,
                                                    children: a.status
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 3169,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 3167,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 leading-relaxed mb-3",
                                            children: a.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 3173,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 text-xs text-gray-400 flex-wrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-1.5 h-1.5 rounded-full bg-blue-400 inline-block"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                            lineNumber: 3176,
                                                            columnNumber: 21
                                                        }, this),
                                                        a.audience
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 3175,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: a.date
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 3179,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 3174,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 3166,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "flex items-center gap-1.5 text-xs font-semibold text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-lg transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconEye, {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 3184,
                                                    columnNumber: 19
                                                }, this),
                                                " View"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 3183,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-100 px-3 py-1.5 rounded-lg transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconEdit, {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 3187,
                                                    columnNumber: 19
                                                }, this),
                                                " Edit"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 3186,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "flex items-center gap-1.5 text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 border border-red-100 px-3 py-1.5 rounded-lg transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconX, {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 3190,
                                                    columnNumber: 19
                                                }, this),
                                                " Delete"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 3189,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 3182,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 3165,
                            columnNumber: 13
                        }, this)
                    }, a.id, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3164,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 3162,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 3131,
        columnNumber: 5
    }, this);
}
_s8(InstructorAnnouncementsPage, "aTTAYHvTVp56ZKAOh1/oGfK1+4g=");
_c49 = InstructorAnnouncementsPage;
const iConversations = [
    {
        id: "c1",
        name: "Richard Vitug",
        context: "ICT301 — Student",
        initials: "RV",
        color: "#2563eb",
        lastMsg: "I have submitted my milestone 2 draft. Please let me know if any changes are needed.",
        time: "10:42 AM",
        unread: 2,
        messages: [
            {
                from: "them",
                text: "Good morning Prof. Koirala, I wanted to ask about the Milestone 2 requirements.",
                time: "Mon 9:00 AM"
            },
            {
                from: "me",
                text: "Hi Richard, please refer to the assessment brief uploaded on the course page. All requirements are outlined there.",
                time: "Mon 9:30 AM"
            },
            {
                from: "them",
                text: "Thank you! I have now submitted my Milestone 2 draft. Please let me know if any changes are needed.",
                time: "Today 10:42 AM"
            }
        ]
    },
    {
        id: "c2",
        name: "Sarah Chen",
        context: "ICT272 — Student",
        initials: "SC",
        color: "#0e9f6e",
        lastMsg: "Could you please clarify the marking criteria for Lab Exercise 4?",
        time: "Yesterday",
        unread: 0,
        messages: [
            {
                from: "them",
                text: "Hi Prof. Koirala, could you please clarify the marking criteria for Lab Exercise 4?",
                time: "Aug 29, 11:15 AM"
            },
            {
                from: "me",
                text: "Hi Sarah, the marking rubric is available in the Lab 4 brief. Focus on functionality, code quality, and documentation.",
                time: "Aug 29, 2:00 PM"
            }
        ]
    },
    {
        id: "c3",
        name: "Student Support",
        context: "University Services",
        initials: "SS",
        color: "#7c3aed",
        lastMsg: "Your grade submission deadline is September 20, 2026.",
        time: "Aug 27",
        unread: 0,
        messages: [
            {
                from: "them",
                text: "Dear Prof. Koirala, please note that final grade submissions for Semester T226 are due on September 20, 2026.",
                time: "Aug 27, 9:00 AM"
            },
            {
                from: "me",
                text: "Noted, thank you for the reminder.",
                time: "Aug 27, 9:45 AM"
            }
        ]
    },
    {
        id: "c4",
        name: "Daniel Park",
        context: "ICT126 — Student",
        initials: "DP",
        color: "#ea580c",
        lastMsg: "I had an emergency and could not sit the midterm. Is there a supplementary option?",
        time: "Aug 25",
        unread: 0,
        messages: [
            {
                from: "them",
                text: "Hi Prof. Koirala, I had a medical emergency and could not sit the ICT126 midterm quiz. Is there a supplementary option?",
                time: "Aug 25, 8:30 AM"
            },
            {
                from: "me",
                text: "Hi Daniel, please submit a medical certificate to the student office and they will guide you through the supplementary assessment process.",
                time: "Aug 25, 10:00 AM"
            }
        ]
    }
];
function InstructorMessagesPage({ userName }) {
    _s9();
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("c1");
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const active = iConversations.find((c)=>c.id === activeId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 flex flex-col",
        style: {
            height: "calc(100vh - 64px)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-xs text-gray-400 mb-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Instructor"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3282,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-600",
                        children: "Messages"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3282,
                        columnNumber: 46
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 3281,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "Messages"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3285,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 mt-0.5",
                        children: "Communicate with students and staff"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3286,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 3284,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-5 flex-1 min-h-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-72 shrink-0 flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 border-b border-gray-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconSearch, {}, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 3294,
                                                columnNumber: 88
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 3294,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Search messages...",
                                            className: "w-full pl-9 pr-3 py-2 bg-gray-50 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 border border-gray-200 transition"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 3295,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 3293,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3292,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto divide-y divide-gray-100",
                                children: iConversations.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveId(c.id),
                                        className: `w-full flex items-start gap-3 p-4 text-left transition-colors hover:bg-gray-50 ${activeId === c.id ? "bg-blue-50/60 border-r-2 border-blue-600" : ""}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0",
                                                style: {
                                                    background: c.color
                                                },
                                                children: c.initials
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 3305,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-0.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-sm font-semibold truncate ${activeId === c.id ? "text-blue-700" : "text-gray-800"}`,
                                                                children: c.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                                lineNumber: 3310,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-gray-400 shrink-0 ml-1",
                                                                children: c.time
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                                lineNumber: 3311,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 3309,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-400 truncate",
                                                        children: c.context
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 3313,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500 truncate mt-0.5",
                                                        children: c.lastMsg
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                                        lineNumber: 3314,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 3308,
                                                columnNumber: 17
                                            }, this),
                                            c.unread > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0 mt-0.5",
                                                style: {
                                                    background: "#1a3a9e"
                                                },
                                                children: c.unread
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 3317,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, c.id, true, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 3300,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3298,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3291,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0 flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 px-6 py-4 border-b border-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0",
                                        style: {
                                            background: active.color
                                        },
                                        children: active.initials
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 3329,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold text-gray-800",
                                                children: active.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 3333,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400",
                                                children: active.context
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 3334,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 3332,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3328,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto px-6 py-5 space-y-4",
                                children: active.messages.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex ${m.from === "me" ? "justify-end" : "justify-start"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `max-w-[68%] flex flex-col gap-1 ${m.from === "me" ? "items-end" : "items-start"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `px-4 py-3 rounded-2xl text-sm leading-relaxed ${m.from === "me" ? "text-white rounded-br-sm" : "bg-gray-100 text-gray-800 rounded-bl-sm"}`,
                                                    style: m.from === "me" ? {
                                                        background: "#1a3a9e"
                                                    } : {},
                                                    children: m.text
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 3341,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-gray-400",
                                                    children: m.time
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 3345,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 3340,
                                            columnNumber: 17
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 3339,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3337,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-6 py-4 border-t border-gray-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "text-gray-400 hover:text-blue-600 transition-colors p-2 rounded-xl hover:bg-gray-100",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                className: "w-4 h-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 3354,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 3353,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 3352,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: input,
                                            onChange: (e)=>setInput(e.target.value),
                                            placeholder: "Type a message...",
                                            className: "flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition",
                                            onKeyDown: (e)=>e.key === "Enter" && setInput("")
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 3357,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setInput(""),
                                            className: "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-all",
                                            style: {
                                                background: "#1a3a9e"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    className: "w-4 h-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "22",
                                                            y1: "2",
                                                            x2: "11",
                                                            y2: "13"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                            lineNumber: 3371,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                            points: "22 2 15 22 11 13 2 9 22 2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                                            lineNumber: 3371,
                                                            columnNumber: 58
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 3370,
                                                    columnNumber: 17
                                                }, this),
                                                "Send"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 3365,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                    lineNumber: 3351,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3350,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3327,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 3289,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 3280,
        columnNumber: 5
    }, this);
}
_s9(InstructorMessagesPage, "uqduxG8KuPzOgYhoOcNnKctnL3I=");
_c50 = InstructorMessagesPage;
// ── Instructor Profile Page ────────────────────────────────────────────────────
function InstructorProfilePage({ userName }) {
    const parts = userName.replace(/^Prof\.\s*/i, "").split(" ");
    const initials = parts.map((p)=>p[0]).join("").slice(0, 2).toUpperCase();
    const displayName = userName.startsWith("Prof.") ? userName : `Prof. ${userName}`;
    const personalInfo = [
        {
            label: "Full Name",
            value: displayName
        },
        {
            label: "Email Address",
            value: "sarita.koirala@university.edu.au"
        },
        {
            label: "Phone Number",
            value: "+61 2 9876 5432"
        },
        {
            label: "Office Location",
            value: "Room IT-210, Building C"
        }
    ];
    const instructorInfo = [
        {
            label: "Staff ID",
            value: "STF-00845"
        },
        {
            label: "Department",
            value: "Information Technology"
        },
        {
            label: "Faculty / School",
            value: "School of Information Technology"
        },
        {
            label: "Courses Teaching",
            value: "ICT301, ICT272, ICT126"
        },
        {
            label: "Employment Status",
            value: "Full-time"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-xs text-gray-400 mb-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Instructor"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3407,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3407,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-600",
                        children: "Profile"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3407,
                        columnNumber: 46
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 3406,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between mb-6 flex-wrap gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-gray-900",
                                children: "My Profile"
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3411,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mt-0.5",
                                children: "View and manage your instructor information"
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3412,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3410,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors",
                        style: {
                            background: "#1a3a9e"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconEdit, {}, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3415,
                                columnNumber: 11
                            }, this),
                            " Edit Profile"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3414,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 3409,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-7 mb-6 flex items-center gap-7",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl font-bold shrink-0",
                        style: {
                            background: "#0e9f6e"
                        },
                        children: initials
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3421,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-gray-900 mb-1",
                                children: displayName
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3425,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mb-3",
                                children: "Instructor · School of Information Technology"
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3426,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full",
                                        children: "Full-time"
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 3428,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-500",
                                        children: "STF-00845"
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 3429,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-400",
                                        children: "·"
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 3430,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-500",
                                        children: "sarita.koirala@university.edu.au"
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 3431,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3427,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3424,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 3420,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-base font-bold text-gray-800 mb-5",
                                children: "Personal Information"
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3439,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "divide-y divide-gray-100",
                                children: personalInfo.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between py-3.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-400 w-36 shrink-0",
                                                children: f.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 3443,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-gray-800 text-right",
                                                children: f.value
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 3444,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, f.label, true, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 3442,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3440,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3438,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-base font-bold text-gray-800 mb-5",
                                children: "Instructor Information"
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3452,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "divide-y divide-gray-100",
                                children: instructorInfo.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between py-3.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-400 w-40 shrink-0",
                                                children: f.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 3456,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-sm font-medium text-right ${f.label === "Employment Status" ? "text-emerald-700" : "text-gray-800"}`,
                                                children: f.value
                                            }, void 0, false, {
                                                fileName: "[project]/src/InstructorDashboard.tsx",
                                                lineNumber: 3457,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, f.label, true, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 3455,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3453,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3451,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 3436,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 3405,
        columnNumber: 5
    }, this);
}
_c51 = InstructorProfilePage;
// ── Instructor Settings Page ───────────────────────────────────────────────────
function InstructorSettingsPage() {
    _s10();
    const [saved, setSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("sarita.koirala@university.edu.au");
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("+61 2 9876 5432");
    const [notifs, setNotifs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        messages: true,
        assignments: true,
        quizzes: true,
        announcements: true,
        system: false
    });
    const [twoFactor, setTwoFactor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("English");
    const [timezone, setTimezone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Australia/Sydney (AEST, UTC+10)");
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Light");
    const toggleNotif = (k)=>setNotifs((p)=>({
                ...p,
                [k]: !p[k]
            }));
    const handleSave = ()=>{
        setSaved(true);
        setTimeout(()=>setSaved(false), 2000);
    };
    const Toggle = ({ on, onChange })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onChange,
            className: `relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${on ? "bg-blue-600" : "bg-gray-200"}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform duration-200 ${on ? "translate-x-5" : "translate-x-0.5"}`
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 3497,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 3493,
            columnNumber: 5
        }, this);
    const Section = ({ title, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-base font-bold text-gray-800 mb-4 pb-3 border-b border-gray-100",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 3503,
                    columnNumber: 7
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 3502,
            columnNumber: 5
        }, this);
    const Field = ({ label, sub, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between py-3.5 border-b border-gray-100 last:border-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-medium text-gray-800",
                            children: label
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 3511,
                            columnNumber: 9
                        }, this),
                        sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-400 mt-0.5",
                            children: sub
                        }, void 0, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 3512,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/InstructorDashboard.tsx",
                    lineNumber: 3510,
                    columnNumber: 7
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/InstructorDashboard.tsx",
            lineNumber: 3509,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-xs text-gray-400 mb-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Instructor"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3521,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3521,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-600",
                        children: "Settings"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3521,
                        columnNumber: 46
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 3520,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "Settings"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3524,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 mt-0.5",
                        children: "Manage your account and portal preferences"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3525,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 3523,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                title: "Account",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                        label: "Email Address",
                                        sub: "Used for login and notifications",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value),
                                            className: "text-sm text-gray-700 border border-gray-200 rounded-xl px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 3532,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 3531,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                        label: "Phone Number",
                                        sub: "Optional — for two-factor authentication",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "tel",
                                            value: phone,
                                            onChange: (e)=>setPhone(e.target.value),
                                            className: "text-sm text-gray-700 border border-gray-200 rounded-xl px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 3536,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 3535,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                        label: "Change Password",
                                        sub: "Update your login password",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "flex items-center gap-1.5 text-sm font-semibold text-blue-700 border border-blue-100 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-xl transition-colors",
                                            children: "Change Password"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 3540,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 3539,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3530,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                title: "Preferences",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                        label: "Language",
                                        sub: "Interface display language",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 bg-gray-50 text-sm text-gray-700 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: language
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 3549,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconChevronDown, {
                                                    className: "w-3.5 h-3.5 text-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 3550,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 3548,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 3547,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                        label: "Time Zone",
                                        sub: "Used for scheduling and deadlines",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 bg-gray-50 text-sm text-gray-700 cursor-pointer max-w-[260px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "truncate",
                                                    children: timezone
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 3555,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconChevronDown, {
                                                    className: "w-3.5 h-3.5 text-gray-400 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 3556,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 3554,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 3553,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                        label: "Theme",
                                        sub: "Portal appearance",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                "Light",
                                                "Dark"
                                            ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setTheme(t),
                                                    className: `text-sm font-medium px-4 py-2 rounded-xl border transition-colors ${theme === t ? "border-blue-600 text-blue-700 bg-blue-50" : "border-gray-200 text-gray-600 hover:bg-gray-50"}`,
                                                    children: t
                                                }, t, false, {
                                                    fileName: "[project]/src/InstructorDashboard.tsx",
                                                    lineNumber: 3562,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 3560,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 3559,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3546,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3529,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                title: "Notifications",
                                children: [
                                    [
                                        "messages",
                                        "New Student Messages",
                                        "Be notified when a student sends you a message"
                                    ],
                                    [
                                        "assignments",
                                        "Assignment Submissions",
                                        "Get alerts when students submit assignments"
                                    ],
                                    [
                                        "quizzes",
                                        "Quiz Submissions",
                                        "Get alerts when students submit quizzes"
                                    ],
                                    [
                                        "announcements",
                                        "Announcement Notifications",
                                        "Receive alerts when a new announcement is posted"
                                    ],
                                    [
                                        "system",
                                        "System Notifications",
                                        "Portal maintenance and system updates"
                                    ]
                                ].map(([key, label, sub])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                        label: label,
                                        sub: sub,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                            on: notifs[key],
                                            onChange: ()=>toggleNotif(key)
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 3582,
                                            columnNumber: 17
                                        }, this)
                                    }, key, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 3581,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3573,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                title: "Security",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                        label: "Two-Factor Authentication",
                                        sub: "Add an extra layer of security to your account",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                            on: twoFactor,
                                            onChange: ()=>setTwoFactor((v)=>!v)
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 3589,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 3588,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                        label: "Active Sessions",
                                        sub: "Manage devices signed in to your account",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "flex items-center gap-1.5 text-sm font-semibold text-blue-700 border border-blue-100 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-xl transition-colors",
                                            children: "View Sessions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/InstructorDashboard.tsx",
                                            lineNumber: 3592,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/InstructorDashboard.tsx",
                                        lineNumber: 3591,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3587,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3572,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 3528,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSave,
                        className: "px-6 py-2.5 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-all",
                        style: {
                            background: "#1a3a9e"
                        },
                        children: saved ? "Saved!" : "Save Changes"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3602,
                        columnNumber: 9
                    }, this),
                    saved && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-green-600 font-medium",
                        children: "Your settings have been saved."
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3607,
                        columnNumber: 19
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 3601,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 3519,
        columnNumber: 5
    }, this);
}
_s10(InstructorSettingsPage, "CWltEbeL9+5zyjcEUXkwE5Xf3Ag=");
_c52 = InstructorSettingsPage;
// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "mt-8 border-t border-gray-200 bg-gray-900 text-gray-300 px-8 py-4 flex flex-wrap items-center justify-between gap-3 text-xs",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-6",
                children: [
                    "Home",
                    "Cookies Policy",
                    "About Us",
                    "Contact Us"
                ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "hover:text-white transition-colors",
                        children: l
                    }, l, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3619,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 3617,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Follow Us"
                    }, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3623,
                        columnNumber: 9
                    }, this),
                    [
                        "f",
                        "𝕏",
                        "○",
                        "in"
                    ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "w-6 h-6 bg-gray-700 hover:bg-blue-600 rounded flex items-center justify-center text-xs transition-colors",
                            children: s
                        }, s, false, {
                            fileName: "[project]/src/InstructorDashboard.tsx",
                            lineNumber: 3625,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 3622,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 3616,
        columnNumber: 5
    }, this);
}
_c53 = Footer;
function InstructorDashboard({ onLogout = ()=>{} }) {
    _s11();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dashboard");
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userName, setUserName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Prof. Sarita Koirala");
    const [assignmentCourses, setAssignmentCourses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(INITIAL_ASSIGNMENT_COURSES);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InstructorDashboard.useEffect": ()=>{
            const sessionUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionUser"])();
            if (sessionUser?.name) {
                setUserName(sessionUser.name);
            }
        }
    }["InstructorDashboard.useEffect"], []);
    const userInitials = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitials"])(userName);
    const sidebarPx = collapsed ? "64px" : "224px";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100",
        style: {
            fontFamily: "'Outfit', sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InstructorSidebar, {
                active: active,
                setActive: setActive,
                collapsed: collapsed,
                setCollapsed: setCollapsed,
                onLogout: onLogout
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 3652,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InstructorHeader, {
                sidebarW: sidebarPx,
                userName: userName,
                userInitials: userInitials,
                setActive: setActive,
                assignmentCourses: assignmentCourses
            }, void 0, false, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 3653,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "pt-16 min-h-screen flex flex-col transition-all duration-300",
                style: {
                    marginLeft: sidebarPx
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            active === "dashboard" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardHome, {
                                setActive: setActive,
                                userName: userName
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3663,
                                columnNumber: 42
                            }, this),
                            active === "courses" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MyCoursesPage, {
                                setActive: setActive
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3664,
                                columnNumber: 42
                            }, this),
                            active === "students" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StudentsPage, {}, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3665,
                                columnNumber: 42
                            }, this),
                            active === "assignments" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AssignmentsPage, {
                                setActive: setActive,
                                courses: assignmentCourses,
                                setCourses: setAssignmentCourses
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3667,
                                columnNumber: 13
                            }, this),
                            active === "quizzes" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuizzesPage, {
                                setActive: setActive
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3673,
                                columnNumber: 42
                            }, this),
                            active === "materials" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LearningMaterialsPage, {}, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3674,
                                columnNumber: 42
                            }, this),
                            active === "grades" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GradesPage, {}, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3675,
                                columnNumber: 42
                            }, this),
                            active === "announcements" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InstructorAnnouncementsPage, {}, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3676,
                                columnNumber: 42
                            }, this),
                            active === "calendar" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CalendarPage, {}, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3677,
                                columnNumber: 42
                            }, this),
                            active === "messages" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InstructorMessagesPage, {
                                userName: userName
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3678,
                                columnNumber: 42
                            }, this),
                            active === "profile" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InstructorProfilePage, {
                                userName: userName
                            }, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3679,
                                columnNumber: 42
                            }, this),
                            active === "settings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InstructorSettingsPage, {}, void 0, false, {
                                fileName: "[project]/src/InstructorDashboard.tsx",
                                lineNumber: 3680,
                                columnNumber: 42
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3662,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {}, void 0, false, {
                        fileName: "[project]/src/InstructorDashboard.tsx",
                        lineNumber: 3682,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/InstructorDashboard.tsx",
                lineNumber: 3661,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/InstructorDashboard.tsx",
        lineNumber: 3651,
        columnNumber: 5
    }, this);
}
_s11(InstructorDashboard, "FLDlT/7Wse4HDhQzkSEmTKtw9a4=");
_c54 = InstructorDashboard;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29, _c30, _c31, _c32, _c33, _c34, _c35, _c36, _c37, _c38, _c39, _c40, _c41, _c42, _c43, _c44, _c45, _c46, _c47, _c48, _c49, _c50, _c51, _c52, _c53, _c54;
__turbopack_context__.k.register(_c, "IconGraduationCap");
__turbopack_context__.k.register(_c1, "IconDashboard");
__turbopack_context__.k.register(_c2, "IconBook");
__turbopack_context__.k.register(_c3, "IconUsers");
__turbopack_context__.k.register(_c4, "IconAssignment");
__turbopack_context__.k.register(_c5, "IconQuiz");
__turbopack_context__.k.register(_c6, "IconFolder");
__turbopack_context__.k.register(_c7, "IconGrades");
__turbopack_context__.k.register(_c8, "IconAnnouncement");
__turbopack_context__.k.register(_c9, "IconCalendar");
__turbopack_context__.k.register(_c10, "IconMessage");
__turbopack_context__.k.register(_c11, "IconProfile");
__turbopack_context__.k.register(_c12, "IconSettings");
__turbopack_context__.k.register(_c13, "IconLogout");
__turbopack_context__.k.register(_c14, "IconBell");
__turbopack_context__.k.register(_c15, "IconMail");
__turbopack_context__.k.register(_c16, "IconSearch");
__turbopack_context__.k.register(_c17, "IconChevronsLeft");
__turbopack_context__.k.register(_c18, "IconChevronsRight");
__turbopack_context__.k.register(_c19, "IconChevronRight");
__turbopack_context__.k.register(_c20, "IconChevronDown");
__turbopack_context__.k.register(_c21, "IconCheck");
__turbopack_context__.k.register(_c22, "IconClock");
__turbopack_context__.k.register(_c23, "IconStar");
__turbopack_context__.k.register(_c24, "IconEdit");
__turbopack_context__.k.register(_c25, "IconEye");
__turbopack_context__.k.register(_c26, "IconUpload");
__turbopack_context__.k.register(_c27, "IconVideo");
__turbopack_context__.k.register(_c28, "IconPlus");
__turbopack_context__.k.register(_c29, "IconFilter");
__turbopack_context__.k.register(_c30, "IconBarChart");
__turbopack_context__.k.register(_c31, "IconAlertCircle");
__turbopack_context__.k.register(_c32, "IconX");
__turbopack_context__.k.register(_c33, "IconTrash");
__turbopack_context__.k.register(_c34, "IconDownload");
__turbopack_context__.k.register(_c35, "InstructorSidebar");
__turbopack_context__.k.register(_c36, "InstructorHeader");
__turbopack_context__.k.register(_c37, "SummaryCard");
__turbopack_context__.k.register(_c38, "ProgressBar");
__turbopack_context__.k.register(_c39, "DashboardHome");
__turbopack_context__.k.register(_c40, "MaterialPreviewModal");
__turbopack_context__.k.register(_c41, "MyCoursesPage");
__turbopack_context__.k.register(_c42, "StudentsPage");
__turbopack_context__.k.register(_c43, "AssignmentsPage");
__turbopack_context__.k.register(_c44, "QuizzesPage");
__turbopack_context__.k.register(_c45, "LearningMaterialsPage");
__turbopack_context__.k.register(_c46, "GradesPage");
__turbopack_context__.k.register(_c47, "CalendarPage");
__turbopack_context__.k.register(_c48, "PlaceholderPage");
__turbopack_context__.k.register(_c49, "InstructorAnnouncementsPage");
__turbopack_context__.k.register(_c50, "InstructorMessagesPage");
__turbopack_context__.k.register(_c51, "InstructorProfilePage");
__turbopack_context__.k.register(_c52, "InstructorSettingsPage");
__turbopack_context__.k.register(_c53, "Footer");
__turbopack_context__.k.register(_c54, "InstructorDashboard");
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

//# sourceMappingURL=_0e7szm8._.js.map