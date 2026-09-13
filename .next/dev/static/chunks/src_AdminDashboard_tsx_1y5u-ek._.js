(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/AdminDashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$AdminUserManagement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/AdminUserManagement.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$adminData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/adminData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature();
"use client";
;
;
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
            fileName: "[project]/src/AdminDashboard.tsx",
            lineNumber: 29,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 28,
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
            fileName: "[project]/src/AdminDashboard.tsx",
            lineNumber: 34,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 33,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = IconDashboard;
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
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 39,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "9",
                cy: "7",
                r: "4"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 39,
                columnNumber: 57
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M23 21v-2a4 4 0 00-3-3.87"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 40,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 3.13a4 4 0 010 7.75"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 40,
                columnNumber: 43
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 38,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = IconUsers;
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
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 45,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 45,
                columnNumber: 47
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 44,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = IconBook;
const IconEnrollment = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: "w-5 h-5 shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 50,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "14 2 14 8 20 8"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 50,
                columnNumber: 71
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "16",
                y1: "13",
                x2: "8",
                y2: "13"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 51,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "16",
                y1: "17",
                x2: "8",
                y2: "17"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 51,
                columnNumber: 44
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "10 9 9 9 8 9"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 51,
                columnNumber: 83
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 49,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = IconEnrollment;
const IconBarChart = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: "w-5 h-5 shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "18",
                y1: "20",
                x2: "18",
                y2: "10"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 56,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "20",
                x2: "12",
                y2: "4"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 56,
                columnNumber: 45
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "6",
                y1: "20",
                x2: "6",
                y2: "14"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 56,
                columnNumber: 84
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "2",
                y1: "20",
                x2: "22",
                y2: "20"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 57,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 55,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c5 = IconBarChart;
const IconAnnouncement = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: "w-5 h-5 shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 62,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15.54 8.46a5 5 0 010 7.07"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 63,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19.07 4.93a10 10 0 010 14.14"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 64,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 61,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c6 = IconAnnouncement;
const IconX = ({ className = "w-4 h-4" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 69,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 69,
                columnNumber: 43
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 68,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c7 = IconX;
const IconMessage = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: "w-5 h-5 shrink-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
        }, void 0, false, {
            fileName: "[project]/src/AdminDashboard.tsx",
            lineNumber: 74,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 73,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c8 = IconMessage;
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
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 79,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 79,
                columnNumber: 37
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 78,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c9 = IconSettings;
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
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 84,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "16 17 21 12 16 7"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 84,
                columnNumber: 54
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "21",
                y1: "12",
                x2: "9",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 84,
                columnNumber: 92
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 83,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c10 = IconLogout;
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
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 89,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "22,6 12,13 2,6"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 89,
                columnNumber: 93
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 88,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c11 = IconMail;
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
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 94,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "21",
                y1: "21",
                x2: "16.65",
                y2: "16.65"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 94,
                columnNumber: 37
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 93,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c12 = IconSearch;
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
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 99,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "18 17 13 12 18 7"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 99,
                columnNumber: 42
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 98,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c13 = IconChevronsLeft;
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
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 104,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "6 17 11 12 6 7"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 104,
                columnNumber: 43
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 103,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c14 = IconChevronsRight;
const IconChevronRight = ({ className = "w-4 h-4" } = {})=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "9 18 15 12 9 6"
        }, void 0, false, {
            fileName: "[project]/src/AdminDashboard.tsx",
            lineNumber: 109,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 108,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c15 = IconChevronRight;
const IconChevronLeft = ({ className = "w-4 h-4" } = {})=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "15 18 9 12 15 6"
        }, void 0, false, {
            fileName: "[project]/src/AdminDashboard.tsx",
            lineNumber: 114,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 113,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c16 = IconChevronLeft;
const IconUserPlus = ({ className = "w-5 h-5" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 119,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "8.5",
                cy: "7",
                r: "4"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 119,
                columnNumber: 57
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "20",
                y1: "8",
                x2: "20",
                y2: "14"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 120,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "23",
                y1: "11",
                x2: "17",
                y2: "11"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 120,
                columnNumber: 44
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 118,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c17 = IconUserPlus;
const IconCheckCircle = ({ className = "w-5 h-5" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 11.08V12a10 10 0 11-5.93-9.14"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 125,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "22 4 12 14.01 9 11.01"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 125,
                columnNumber: 51
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 124,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c18 = IconCheckCircle;
const IconAlertCircle = ({ className = "w-5 h-5" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 130,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "8",
                x2: "12",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 130,
                columnNumber: 38
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "16",
                x2: "12.01",
                y2: "16"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 130,
                columnNumber: 77
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 129,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c19 = IconAlertCircle;
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
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 135,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "12 6 12 12 16 14"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 135,
                columnNumber: 38
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 134,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c20 = IconClock;
const IconShield = ({ className = "w-5 h-5" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        }, void 0, false, {
            fileName: "[project]/src/AdminDashboard.tsx",
            lineNumber: 140,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 139,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c21 = IconShield;
const IconTrendingUp = ({ className = "w-5 h-5" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "23 6 13.5 15.5 8.5 10.5 1 18"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 145,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "17 6 23 6 23 12"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 145,
                columnNumber: 55
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 144,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c22 = IconTrendingUp;
const IconXCircle = ({ className = "w-4 h-4" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 150,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "15",
                y1: "9",
                x2: "9",
                y2: "15"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 150,
                columnNumber: 38
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "9",
                y1: "9",
                x2: "15",
                y2: "15"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 150,
                columnNumber: 76
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 149,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c23 = IconXCircle;
const IconCheck = ({ className = "w-4 h-4" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "20 6 9 17 4 12"
        }, void 0, false, {
            fileName: "[project]/src/AdminDashboard.tsx",
            lineNumber: 155,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 154,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c24 = IconCheck;
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
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 160,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "16",
                y1: "2",
                x2: "16",
                y2: "6"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 160,
                columnNumber: 55
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "2",
                x2: "8",
                y2: "6"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 161,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "3",
                y1: "10",
                x2: "21",
                y2: "10"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 161,
                columnNumber: 41
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 159,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c25 = IconCalendar;
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
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 166,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19 6l-1 14H6L5 6"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 166,
                columnNumber: 39
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 11v6M14 11v6"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 166,
                columnNumber: 69
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 6V4h6v2"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 166,
                columnNumber: 98
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 165,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c26 = IconTrash;
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
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 171,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 172,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 170,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c27 = IconEdit;
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
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 177,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "3"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 177,
                columnNumber: 62
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 176,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c28 = IconEye;
const IconPaperclip = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: "w-4 h-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"
        }, void 0, false, {
            fileName: "[project]/src/AdminDashboard.tsx",
            lineNumber: 182,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 181,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c29 = IconPaperclip;
const IconSend = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 187,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "22 2 15 22 11 13 2 9 22 2"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 187,
                columnNumber: 44
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 186,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c30 = IconSend;
const IconPlus = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5",
        className: "w-4 h-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "5",
                x2: "12",
                y2: "19"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 192,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "5",
                y1: "12",
                x2: "19",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 192,
                columnNumber: 44
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 191,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c31 = IconPlus;
// ── Nav Items ─────────────────────────────────────────────────────────────────
const adminNavItems = [
    {
        label: "Dashboard",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconDashboard, {}, void 0, false, {
            fileName: "[project]/src/AdminDashboard.tsx",
            lineNumber: 198,
            columnNumber: 39
        }, ("TURBOPACK compile-time value", void 0)),
        id: "dashboard"
    },
    {
        label: "User Management",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconUsers, {}, void 0, false, {
            fileName: "[project]/src/AdminDashboard.tsx",
            lineNumber: 199,
            columnNumber: 39
        }, ("TURBOPACK compile-time value", void 0)),
        id: "users"
    },
    {
        label: "Course Management",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconBook, {}, void 0, false, {
            fileName: "[project]/src/AdminDashboard.tsx",
            lineNumber: 200,
            columnNumber: 39
        }, ("TURBOPACK compile-time value", void 0)),
        id: "courses"
    },
    {
        label: "Enrollment",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconEnrollment, {}, void 0, false, {
            fileName: "[project]/src/AdminDashboard.tsx",
            lineNumber: 201,
            columnNumber: 39
        }, ("TURBOPACK compile-time value", void 0)),
        id: "enrollment"
    },
    {
        label: "Reports & Analytics",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconBarChart, {}, void 0, false, {
            fileName: "[project]/src/AdminDashboard.tsx",
            lineNumber: 202,
            columnNumber: 40
        }, ("TURBOPACK compile-time value", void 0)),
        id: "reports"
    },
    {
        label: "System Settings",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconSettings, {}, void 0, false, {
            fileName: "[project]/src/AdminDashboard.tsx",
            lineNumber: 203,
            columnNumber: 39
        }, ("TURBOPACK compile-time value", void 0)),
        id: "settings"
    }
];
// ── Sidebar ───────────────────────────────────────────────────────────────────
function AdminSidebar({ active, setActive, collapsed, setCollapsed, onLogout }) {
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
                    className: "text-white hover:text-blue-200 transition-colors flex flex-col items-center gap-1 cursor-pointer",
                    title: "Expand sidebar",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconGraduationCap, {
                            className: "w-7 h-7"
                        }, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 230,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[8px] font-bold tracking-wider text-blue-300",
                            children: "EF"
                        }, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 231,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 225,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconGraduationCap, {
                            className: "w-6 h-6 text-white shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 235,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white font-bold text-base tracking-tight leading-none truncate",
                                    children: "EduFlex"
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 237,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-blue-200 text-[10px] mt-0.5 truncate",
                                    children: "Administration Portal"
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 238,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 236,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setCollapsed(true),
                            className: "text-blue-200 hover:text-white transition-colors ml-1 p-1 rounded hover:bg-white/10 cursor-pointer",
                            title: "Collapse sidebar",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconChevronsLeft, {}, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 245,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 240,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 234,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 px-2 py-3 overflow-y-auto space-y-0.5",
                children: adminNavItems.map((item)=>{
                    const isActive = active === item.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActive(item.id),
                        title: collapsed ? item.label : undefined,
                        className: `w-full flex items-center rounded-lg transition-all duration-150 text-left cursor-pointer
                ${collapsed ? "justify-center px-0 py-3" : "gap-3 px-3 py-2.5"}
                ${isActive ? "bg-white/20 text-white font-semibold" : "text-blue-100 hover:bg-white/10 hover:text-white"}`,
                        children: [
                            item.icon,
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm truncate",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 265,
                                columnNumber: 30
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 256,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 252,
                columnNumber: 7
            }, this),
            collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-2 py-3 border-t border-white/10 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setCollapsed(false),
                    className: "text-blue-200 hover:text-white transition-colors p-2 rounded hover:bg-white/10 cursor-pointer",
                    title: "Expand",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconChevronsRight, {}, void 0, false, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 279,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 274,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 273,
                columnNumber: 9
            }, this),
            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-2 py-4 border-t border-white/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onLogout,
                    className: "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/10 hover:text-white transition-all duration-150 cursor-pointer",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconLogout, {}, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 288,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Logout"
                        }, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 289,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 287,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 286,
                columnNumber: 9
            }, this),
            collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-2 py-4 border-t border-white/10 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onLogout,
                    className: "text-blue-100 hover:text-white hover:bg-white/10 transition-all p-2 rounded-lg cursor-pointer",
                    title: "Logout",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconLogout, {}, void 0, false, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 296,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 295,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 294,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 218,
        columnNumber: 5
    }, this);
}
_c32 = AdminSidebar;
// ── Header ────────────────────────────────────────────────────────────────────
function AdminHeader({ sidebarW, userName, userInitials, setActive, searchPool, unreadMessagesCount }) {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const searchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const trimmed = query.trim().toLowerCase();
    const matches = trimmed.length > 0 ? searchPool.filter((item)=>{
        return item.title.toLowerCase().includes(trimmed) || item.subtitle.toLowerCase().includes(trimmed) || item.category.toLowerCase().includes(trimmed);
    }) : [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminHeader.useEffect": ()=>{
            function handleClickOutside(e) {
                if (searchRef.current && !searchRef.current.contains(e.target)) {
                    setIsOpen(false);
                }
            }
            function handleKeyDown(e) {
                if (e.key === "Escape") {
                    setIsOpen(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleKeyDown);
            return ({
                "AdminHeader.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                    document.removeEventListener("keydown", handleKeyDown);
                }
            })["AdminHeader.useEffect"];
        }
    }["AdminHeader.useEffect"], []);
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
        className: "fixed top-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 gap-4 z-20 transition-all duration-300",
        style: {
            left: sidebarW
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 relative max-w-2xl min-w-[240px]",
                ref: searchRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: (e)=>{
                            e.preventDefault();
                            if (matches.length > 0) {
                                handleSelect(matches[0]);
                            }
                        },
                        className: "relative w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconSearch, {}, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 399,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 398,
                                columnNumber: 11
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
                                placeholder: "Search users, courses, enrollments, reports, messages...",
                                className: "w-full pl-9 pr-24 py-2 bg-gray-100 rounded-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 401,
                                columnNumber: 11
                            }, this),
                            query.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    setQuery("");
                                    setIsOpen(false);
                                },
                                className: "absolute right-20 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 rounded-full cursor-pointer",
                                title: "Clear search",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconX, {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 425,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 416,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "absolute right-1.5 top-1/2 -translate-y-1/2 px-4 py-1 bg-[#1a3a9e] hover:bg-[#102d80] text-white text-xs font-bold rounded-full transition-colors shadow-sm cursor-pointer",
                                children: "Search"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 428,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 389,
                        columnNumber: 9
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
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 439,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Press Enter to select top result"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 440,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 438,
                                columnNumber: 13
                            }, this),
                            matches.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "py-1",
                                children: matches.slice(0, 8).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleSelect(item),
                                        className: "w-full px-4 py-3 text-left flex items-center justify-between gap-3 hover:bg-blue-50/60 transition-colors cursor-pointer group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${item.badgeColor}`,
                                                        children: item.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 452,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors truncate",
                                                                children: item.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                                lineNumber: 456,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-500 truncate",
                                                                children: item.subtitle
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                                lineNumber: 459,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 455,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 451,
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
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 465,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconChevronRight, {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 466,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 464,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 446,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 444,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 text-center text-gray-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 mx-auto mb-2 rounded-full bg-gray-100 flex items-center justify-center text-gray-400",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconSearch, {}, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 474,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 473,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-gray-700",
                                        children: "No results found"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 476,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400 mt-1",
                                        children: [
                                            "No matching results found for “",
                                            query,
                                            "”. Try searching for users, courses, reports, or settings."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 477,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 472,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 437,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 388,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setActive && setActive("calendar"),
                        className: "relative text-gray-500 hover:text-blue-700 transition-colors p-1.5 rounded-full hover:bg-gray-100 cursor-pointer",
                        title: "Academic Calendar",
                        "aria-label": "Academic Calendar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCalendar, {}, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 494,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 487,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setActive && setActive("announcements"),
                        className: "relative text-gray-500 hover:text-blue-700 transition-colors p-1.5 rounded-full hover:bg-gray-100 cursor-pointer",
                        title: "Announcements",
                        "aria-label": "Announcements",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconAnnouncement, {}, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 503,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 504,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 496,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setActive && setActive("messages"),
                        className: "relative text-gray-500 hover:text-blue-700 transition-colors p-1.5 rounded-full hover:bg-gray-100 cursor-pointer",
                        title: "Messages",
                        "aria-label": "Messages",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconMail, {}, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 513,
                                columnNumber: 11
                            }, this),
                            unreadMessagesCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute -top-1 -right-1 min-w-4 h-4 px-1 bg-blue-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center border border-white",
                                children: unreadMessagesCount
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 515,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 506,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setActive && setActive("settings"),
                        className: "flex items-center gap-2 pl-3 border-l border-gray-200 hover:opacity-80 transition-opacity cursor-pointer text-left",
                        title: "System Settings & Profile",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-gray-800 leading-tight",
                                        children: userName
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 527,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500",
                                        children: "Administrator"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 528,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 526,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0",
                                style: {
                                    background: "#7c3aed"
                                },
                                children: userInitials
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 530,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 520,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 486,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 384,
        columnNumber: 5
    }, this);
}
_s(AdminHeader, "C6/TrvvancCH04F1U/f0P3GPHMI=");
_c33 = AdminHeader;
// ── Progress Bar ──────────────────────────────────────────────────────────────
function ProgressBar({ pct, color }) {
    const safePct = Math.min(Math.max(pct, 0), 100);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-2 rounded-full bg-gray-200 overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full rounded-full transition-all duration-500",
            style: {
                width: `${safePct}%`,
                background: color
            }
        }, void 0, false, {
            fileName: "[project]/src/AdminDashboard.tsx",
            lineNumber: 544,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 543,
        columnNumber: 5
    }, this);
}
_c34 = ProgressBar;
// ── Page Header helper ────────────────────────────────────────────────────────
function PageHeader({ breadcrumb, title, subtitle, action }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-start justify-between mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-xs text-gray-400 mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Admin"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 559,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 559,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-600",
                                children: breadcrumb
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 560,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 558,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 562,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 mt-0.5",
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 563,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 557,
                columnNumber: 7
            }, this),
            action && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0",
                children: action
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 565,
                columnNumber: 18
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 556,
        columnNumber: 5
    }, this);
}
_c35 = PageHeader;
function Badge({ label, variant = "blue" }) {
    const map = {
        blue: "bg-blue-50 text-blue-700",
        green: "bg-green-50 text-green-700",
        yellow: "bg-yellow-50 text-yellow-700",
        red: "bg-red-50 text-red-600",
        purple: "bg-purple-50 text-purple-700",
        orange: "bg-orange-50 text-orange-700",
        gray: "bg-gray-100 text-gray-600"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `text-xs font-semibold px-2.5 py-0.5 rounded-full ${map[variant] ?? map.gray}`,
        children: label
    }, void 0, false, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 581,
        columnNumber: 10
    }, this);
}
_c36 = Badge;
function Th({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        className: "text-left text-[10px] font-bold text-gray-400 uppercase tracking-wider py-2.5 px-4 bg-gray-50 first:rounded-tl-xl last:rounded-tr-xl",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 585,
        columnNumber: 10
    }, this);
}
_c37 = Th;
function Td({ children, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        className: `py-3.5 px-4 text-sm text-gray-700 border-b border-gray-100 ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 588,
        columnNumber: 10
    }, this);
}
_c38 = Td;
// ── 1. Admin Dashboard Home ───────────────────────────────────────────────────
function AdminDashboardHome({ userName, setActive, users, pending, courses, enrollments, announcements, onApprovePending, onRejectPending, onQuickAction }) {
    const firstName = userName.split(" ")[0];
    const totalStudents = users.filter((u)=>u.role === "Student").length;
    const activeCourses = courses.filter((c)=>c.status === "Active").length;
    const totalInstructors = users.filter((u)=>u.role === "Instructor").length;
    const pendingRequestsCount = pending.length;
    const latestAnnouncement = announcements.find((a)=>a.status === "Published") ?? announcements[0];
    const quickActions = [
        {
            label: "Add New User",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconUserPlus, {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 625,
                columnNumber: 41
            }, this),
            bg: "bg-blue-50 text-blue-700",
            action: ()=>onQuickAction("addUser")
        },
        {
            label: "Create Course",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconBook, {}, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 626,
                columnNumber: 41
            }, this),
            bg: "bg-purple-50 text-purple-700",
            action: ()=>onQuickAction("createCourse")
        },
        {
            label: "Post Announcement",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconAnnouncement, {}, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 627,
                columnNumber: 41
            }, this),
            bg: "bg-orange-50 text-orange-600",
            action: ()=>onQuickAction("postAnnouncement")
        },
        {
            label: "Generate Report",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconBarChart, {}, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 628,
                columnNumber: 41
            }, this),
            bg: "bg-green-50 text-green-700",
            action: ()=>onQuickAction("generateReport")
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-xs text-gray-400 mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Admin"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 636,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 636,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-600",
                                children: "Dashboard Overview"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 637,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 635,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold text-gray-900",
                                        children: "Admin Dashboard"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 641,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500 mt-0.5",
                                        children: [
                                            "Welcome back, ",
                                            firstName,
                                            ". Here's what's happening today."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 642,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 640,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-sm text-gray-500 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconClock, {
                                        className: "w-4 h-4 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 645,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Sep 2, 2026 — Trimester 2, 2026"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 646,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 644,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 639,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 634,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl flex items-center gap-4 px-5 py-4 mb-6 overflow-hidden cursor-pointer shadow-sm hover:opacity-95 transition-opacity",
                style: {
                    background: "#1a3a9e"
                },
                onClick: ()=>setActive("announcements"),
                role: "button",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shrink-0 w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-yellow-900",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconAlertCircle, {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 659,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 658,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white font-semibold text-sm mb-0.5",
                                children: "Admin Notice"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 662,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "marquee-text text-blue-200 text-sm",
                                    children: [
                                        latestAnnouncement?.title ? `${latestAnnouncement.title}: ${latestAnnouncement.desc}` : "Semester enrollment is now open — 47 new enrollment requests pending review.",
                                        "    ",
                                        pending.length,
                                        " pending approvals requiring review.    LMS platform operational."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 664,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 663,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 661,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "shrink-0 text-blue-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconChevronRight, {}, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 670,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 669,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 652,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActive("users"),
                        className: "w-full text-left bg-white border border-gray-200 shadow-sm rounded-2xl p-4 flex items-start gap-3 hover:shadow-md hover:border-blue-300 transition-all cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-blue-50 text-blue-600",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconUsers, {}, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 681,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 680,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5",
                                        children: "Total Students"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 684,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-extrabold text-gray-900 leading-none",
                                        children: totalStudents
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 685,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mt-1",
                                        children: "Active student accounts"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 686,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 683,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 676,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActive("courses"),
                        className: "w-full text-left bg-white border border-gray-200 shadow-sm rounded-2xl p-4 flex items-start gap-3 hover:shadow-md hover:border-purple-300 transition-all cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-purple-50 text-purple-600",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconBook, {}, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 695,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 694,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5",
                                        children: "Active Courses"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 698,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-extrabold text-gray-900 leading-none",
                                        children: activeCourses
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 699,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mt-1",
                                        children: "Trimester 2, 2026"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 700,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 697,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 690,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActive("users"),
                        className: "w-full text-left bg-white border border-gray-200 shadow-sm rounded-2xl p-4 flex items-start gap-3 hover:shadow-md hover:border-green-300 transition-all cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-green-50 text-green-600",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconShield, {}, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 709,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 708,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5",
                                        children: "Instructors"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 712,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-extrabold text-gray-900 leading-none",
                                        children: totalInstructors
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 713,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mt-1",
                                        children: "Teaching faculty"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 714,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 711,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 704,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActive("enrollment"),
                        className: "w-full text-left bg-orange-50 border border-orange-200 shadow-sm rounded-2xl p-4 flex items-start gap-3 hover:shadow-md hover:border-orange-300 transition-all cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-orange-100 text-orange-600",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconEnrollment, {}, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 723,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 722,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-bold uppercase tracking-wider text-orange-700 opacity-70 mb-0.5",
                                        children: "Pending Approvals"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 726,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-extrabold text-orange-800 leading-none",
                                        children: pendingRequestsCount
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 727,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-orange-600 mt-1",
                                        children: "Requires review"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 728,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 725,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 718,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 675,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl border border-gray-200 shadow-sm p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-3",
                                children: "Quick Actions"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 737,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 md:grid-cols-4 gap-3",
                                children: quickActions.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: a.action,
                                        className: `flex flex-col items-center gap-2 py-4 rounded-xl border border-transparent hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer ${a.bg}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: a.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 745,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-semibold text-center leading-tight",
                                                children: a.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 746,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, a.label, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 740,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 738,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 736,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between px-5 py-4 border-b border-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-bold text-blue-700 uppercase tracking-widest",
                                                children: "Pending Approvals"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 756,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-800",
                                                children: pending.length
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 757,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 755,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActive("users"),
                                        className: "text-xs text-blue-600 hover:underline font-medium cursor-pointer",
                                        children: "View All >"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 759,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 754,
                                columnNumber: 11
                            }, this),
                            pending.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-8 text-center text-gray-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCheckCircle, {
                                        className: "w-8 h-8 mx-auto text-green-500 mb-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 768,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-gray-800",
                                        children: "No pending approval requests"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 769,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400 mt-0.5",
                                        children: "All accounts and registrations have been reviewed."
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 770,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 767,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid px-5 py-2.5 bg-gray-50 border-b border-gray-100 gap-4",
                                        style: {
                                            gridTemplateColumns: "2fr 1fr 2fr 1fr 100px"
                                        },
                                        children: [
                                            "Name",
                                            "Role",
                                            "Request",
                                            "Submitted",
                                            "Action"
                                        ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-bold text-gray-400 uppercase tracking-wider",
                                                children: h
                                            }, h, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 779,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 774,
                                        columnNumber: 15
                                    }, this),
                                    pending.slice(0, 5).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid items-center px-5 py-3.5 border-b border-gray-100 last:border-0 hover:bg-blue-50/30 transition-colors gap-4",
                                            style: {
                                                gridTemplateColumns: "2fr 1fr 2fr 1fr 100px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2.5 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold shrink-0",
                                                            children: item.initials
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 789,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-semibold text-gray-800 truncate",
                                                            children: item.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 792,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 788,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-xs font-semibold px-2 py-0.5 rounded-full w-fit ${item.role === "Instructor" ? "bg-purple-50 text-purple-700" : "bg-blue-50 text-blue-700"}`,
                                                    children: item.role
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 794,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600 truncate",
                                                    children: item.action
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 797,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-400",
                                                    children: item.submitted
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 798,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>onApprovePending(item.id),
                                                            className: "w-7 h-7 rounded-lg bg-green-50 hover:bg-green-100 text-green-600 flex items-center justify-center transition-colors cursor-pointer",
                                                            title: "Approve",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCheck, {
                                                                className: "w-3.5 h-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                                lineNumber: 805,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 800,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>onRejectPending(item.id),
                                                            className: "w-7 h-7 rounded-lg bg-red-50 hover:bg-red-100 text-red-500 flex items-center justify-center transition-colors cursor-pointer",
                                                            title: "Reject",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconXCircle, {
                                                                className: "w-3.5 h-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                                lineNumber: 812,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 807,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 799,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 783,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 773,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 753,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between px-5 py-4 border-b border-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-bold text-blue-700 uppercase tracking-widest",
                                        children: "Recent User Registrations"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 824,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActive("users"),
                                        className: "text-xs text-blue-600 hover:underline font-medium cursor-pointer",
                                        children: "View All >"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 825,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 823,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid px-5 py-2.5 bg-gray-50 border-b border-gray-100 gap-4",
                                style: {
                                    gridTemplateColumns: "2fr 1.5fr 1fr 1fr 1fr"
                                },
                                children: [
                                    "Name",
                                    "User ID",
                                    "Role",
                                    "Status",
                                    "Joined"
                                ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-bold text-gray-400 uppercase tracking-wider",
                                        children: h
                                    }, h, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 837,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 832,
                                columnNumber: 11
                            }, this),
                            users.slice(0, 5).map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid items-center px-5 py-3.5 border-b border-gray-100 last:border-0 hover:bg-blue-50/30 transition-colors gap-4",
                                    style: {
                                        gridTemplateColumns: "2fr 1.5fr 1fr 1fr 1fr"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2.5 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 text-white overflow-hidden ${u.role === "Instructor" ? "bg-purple-500" : "bg-blue-500"}`,
                                                    children: u.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: u.avatar,
                                                        alt: u.name,
                                                        className: "w-full h-full object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 849,
                                                        columnNumber: 21
                                                    }, this) : u.name.split(" ").map((n)=>n[0]).join("").slice(0, 2)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 847,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold text-gray-800 truncate",
                                                    children: u.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 854,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 846,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-mono text-gray-500 truncate",
                                            children: u.id
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 856,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-xs font-semibold px-2 py-0.5 rounded-full w-fit ${u.role === "Instructor" ? "bg-purple-50 text-purple-700" : "bg-blue-50 text-blue-700"}`,
                                            children: u.role
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 857,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full w-fit ${u.status === "Active" ? "bg-green-50 text-green-700" : "bg-yellow-50 text-yellow-700"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `w-1.5 h-1.5 rounded-full ${u.status === "Active" ? "bg-green-500" : "bg-yellow-400"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 861,
                                                    columnNumber: 17
                                                }, this),
                                                u.status
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 860,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-400",
                                            children: u.joined
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 864,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, u.id, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 841,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 822,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl border border-gray-200 shadow-sm p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-bold text-blue-700 uppercase tracking-widest",
                                        children: "Course Enrollment Overview"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 872,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActive("courses"),
                                        className: "text-xs text-blue-600 hover:underline font-medium cursor-pointer",
                                        children: "Manage Courses >"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 873,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 871,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: courses.slice(0, 4).map((c, i)=>{
                                    const pct = Math.round(c.students / Math.max(c.capacity, 1) * 100);
                                    const colors = [
                                        "#2563eb",
                                        "#16a34a",
                                        "#db2777",
                                        "#7c3aed"
                                    ];
                                    const color = colors[i % colors.length];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-bold text-gray-500",
                                                                children: c.code
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                                lineNumber: 889,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-semibold text-gray-800",
                                                                children: c.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                                lineNumber: 890,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 888,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 text-xs text-gray-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold",
                                                                style: {
                                                                    color
                                                                },
                                                                children: c.students
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                                lineNumber: 893,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "/ ",
                                                                    c.capacity,
                                                                    " enrolled"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                                lineNumber: 894,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-gray-700",
                                                                children: [
                                                                    pct,
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                                lineNumber: 895,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 892,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 887,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressBar, {
                                                pct: pct,
                                                color: color
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 898,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, c.code, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 886,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 880,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 870,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 734,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 632,
        columnNumber: 5
    }, this);
}
_c39 = AdminDashboardHome;
// ── 2. Course Management ───────────────────────────────────────────────────────
function AdminCourseManagement({ courses, setCourses, instructors, initialAction, onClearInitialAction, onShowToast }) {
    _s1();
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [semesterFilter, setSemesterFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All Semesters");
    const [facultyFilter, setFacultyFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All Faculties");
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All Status");
    const [instructorFilter, setInstructorFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All Instructors");
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    // Modals: create, edit, view, delete
    const [modalState, setModalState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialAction === "create" ? {
        type: "create"
    } : null);
    // Form state
    const [formCode, setFormCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [formName, setFormName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [formFaculty, setFormFaculty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("School of ICT");
    const [formInstructor, setFormInstructor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [formCapacity, setFormCapacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(120);
    const [formSemester, setFormSemester] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("T2 2026");
    const [formStatus, setFormStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Active");
    const [formDesc, setFormDesc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [formError, setFormError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminCourseManagement.useEffect": ()=>{
            if (initialAction === "create") {
                openCreateModal();
                if (onClearInitialAction) onClearInitialAction();
            }
        }
    }["AdminCourseManagement.useEffect"], [
        initialAction
    ]);
    const openCreateModal = ()=>{
        setFormCode("");
        setFormName("");
        setFormFaculty("School of ICT");
        setFormInstructor(instructors[0]?.name || "Prof. Sarita Koirala");
        setFormCapacity(120);
        setFormSemester("T2 2026");
        setFormStatus("Active");
        setFormDesc("");
        setFormError("");
        setModalState({
            type: "create"
        });
    };
    const openEditModal = (c)=>{
        setFormCode(c.code);
        setFormName(c.name);
        setFormFaculty(c.faculty);
        setFormInstructor(c.instructor);
        setFormCapacity(c.capacity);
        setFormSemester(c.semester);
        setFormStatus(c.status);
        setFormDesc(c.description || "");
        setFormError("");
        setModalState({
            type: "edit",
            course: c
        });
    };
    const handleSaveCourse = (e)=>{
        e.preventDefault();
        if (!formCode.trim() || !formName.trim()) {
            setFormError("Course code and course name are required.");
            return;
        }
        if (modalState?.type === "create") {
            // Check duplicate
            if (courses.some((c)=>c.code.toLowerCase() === formCode.trim().toLowerCase())) {
                setFormError(`Course code ${formCode.trim()} already exists.`);
                return;
            }
            const newCourse = {
                code: formCode.trim().toUpperCase(),
                name: formName.trim(),
                faculty: formFaculty,
                instructor: formInstructor || "Prof. Sarita Koirala",
                students: 0,
                capacity: Number(formCapacity) || 100,
                semester: formSemester,
                status: formStatus,
                description: formDesc.trim()
            };
            setCourses([
                newCourse,
                ...courses
            ]);
            onShowToast(`Course ${newCourse.code} created successfully.`);
        } else if (modalState?.type === "edit" && modalState.course) {
            const updated = courses.map((c)=>c.code === modalState.course.code ? {
                    ...c,
                    name: formName.trim(),
                    faculty: formFaculty,
                    instructor: formInstructor,
                    capacity: Number(formCapacity) || 100,
                    semester: formSemester,
                    status: formStatus,
                    description: formDesc.trim()
                } : c);
            setCourses(updated);
            onShowToast(`Course ${modalState.course.code} updated successfully.`);
        }
        setModalState(null);
    };
    const handleDeleteCourse = (code)=>{
        setCourses((prev)=>prev.filter((c)=>c.code !== code));
        setModalState(null);
        onShowToast(`Course ${code} has been deleted.`);
    };
    // Filtered
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdminCourseManagement.useMemo[filtered]": ()=>{
            return courses.filter({
                "AdminCourseManagement.useMemo[filtered]": (c)=>{
                    const q = search.trim().toLowerCase();
                    const matchSearch = !q || c.code.toLowerCase().includes(q) || c.name.toLowerCase().includes(q) || c.instructor.toLowerCase().includes(q) || c.faculty.toLowerCase().includes(q);
                    const matchSemester = semesterFilter === "All Semesters" || c.semester === semesterFilter;
                    const matchFaculty = facultyFilter === "All Faculties" || c.faculty === facultyFilter;
                    const matchStatus = statusFilter === "All Status" || c.status === statusFilter;
                    const matchInstructor = instructorFilter === "All Instructors" || c.instructor === instructorFilter;
                    return matchSearch && matchSemester && matchFaculty && matchStatus && matchInstructor;
                }
            }["AdminCourseManagement.useMemo[filtered]"]);
        }
    }["AdminCourseManagement.useMemo[filtered]"], [
        courses,
        search,
        semesterFilter,
        facultyFilter,
        statusFilter,
        instructorFilter
    ]);
    const pageSize = 7;
    const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
    const pageItems = filtered.slice((page - 1) * pageSize, page * pageSize);
    const statusVariant = {
        Active: "green",
        Draft: "yellow",
        Archived: "gray"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHeader, {
                breadcrumb: "Course Management",
                title: "Course Management",
                subtitle: "Create, manage, and organize academic courses",
                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: openCreateModal,
                    className: "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors hover:opacity-90 cursor-pointer shadow-sm",
                    style: {
                        background: "#1a3a9e"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-base leading-none",
                            children: "+"
                        }, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 1072,
                            columnNumber: 13
                        }, this),
                        " Create Course"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 1067,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 1062,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl border border-gray-200 shadow-sm px-4 py-3 mb-5 flex flex-wrap gap-3 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-1 min-w-48",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconSearch, {}, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 1081,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 1080,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: search,
                                onChange: (e)=>{
                                    setSearch(e.target.value);
                                    setPage(1);
                                },
                                placeholder: "Search courses by code, title, instructor...",
                                className: "w-full pl-9 pr-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 1083,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 1079,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: semesterFilter,
                        onChange: (e)=>{
                            setSemesterFilter(e.target.value);
                            setPage(1);
                        },
                        className: "px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 border-none cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "All Semesters"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 1100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "T2 2026"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 1101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "T1 2026"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 1102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "T3 2025"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 1103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 1095,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: facultyFilter,
                        onChange: (e)=>{
                            setFacultyFilter(e.target.value);
                            setPage(1);
                        },
                        className: "px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 border-none cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "All Faculties"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 1111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "School of ICT"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 1112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "School of Business"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 1113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "School of Engineering"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 1114,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 1106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: statusFilter,
                        onChange: (e)=>{
                            setStatusFilter(e.target.value);
                            setPage(1);
                        },
                        className: "px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 border-none cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "All Status"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 1122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "Active"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 1123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "Draft"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 1124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "Archived"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 1125,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 1117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: instructorFilter,
                        onChange: (e)=>{
                            setInstructorFilter(e.target.value);
                            setPage(1);
                        },
                        className: "px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 border-none cursor-pointer max-w-xs truncate",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "All Instructors"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 1133,
                                columnNumber: 11
                            }, this),
                            Array.from(new Set(courses.map((c)=>c.instructor))).map((inst)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: inst,
                                    children: inst
                                }, inst, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 1135,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 1128,
                        columnNumber: 9
                    }, this),
                    (search || semesterFilter !== "All Semesters" || facultyFilter !== "All Faculties" || statusFilter !== "All Status" || instructorFilter !== "All Instructors") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setSearch("");
                            setSemesterFilter("All Semesters");
                            setFacultyFilter("All Faculties");
                            setStatusFilter("All Status");
                            setInstructorFilter("All Instructors");
                            setPage(1);
                        },
                        className: "text-xs text-blue-600 hover:underline px-2 py-1 cursor-pointer font-medium",
                        children: "Reset Filters"
                    }, void 0, false, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 1140,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 1078,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full border-collapse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Th, {
                                            children: "Course Code"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1161,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Th, {
                                            children: "Course Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1162,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Th, {
                                            children: "Faculty/School"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1163,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Th, {
                                            children: "Instructor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1164,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Th, {
                                            children: "Students"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1165,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Th, {
                                            children: "Semester"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1166,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Th, {
                                            children: "Status"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1167,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Th, {
                                            children: "Actions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1168,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 1160,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 1159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: pageItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: 8,
                                        className: "text-center py-12 text-gray-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold",
                                                children: "No courses match your criteria"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 1175,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400 mt-1",
                                                children: "Try adjusting your filters or search query."
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 1176,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 1174,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 1173,
                                    columnNumber: 15
                                }, this) : pageItems.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "hover:bg-blue-50/30 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Td, {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono font-bold text-blue-700 text-xs",
                                                    children: c.code
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 1183,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 1182,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Td, {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-gray-800",
                                                    children: c.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 1186,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 1185,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Td, {
                                                className: "text-gray-500",
                                                children: c.faculty
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 1188,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Td, {
                                                className: "text-gray-700",
                                                children: c.instructor
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 1189,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Td, {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold",
                                                        children: c.students
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 1191,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-gray-400",
                                                        children: [
                                                            "/",
                                                            c.capacity
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 1192,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 1190,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Td, {
                                                className: "text-gray-500",
                                                children: c.semester
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 1194,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Td, {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                    label: c.status,
                                                    variant: statusVariant[c.status]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 1195,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 1195,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Td, {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setModalState({
                                                                    type: "view",
                                                                    course: c
                                                                }),
                                                            className: "text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer",
                                                            children: "View"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 1198,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>openEditModal(c),
                                                            className: "text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 transition-colors cursor-pointer",
                                                            children: "Edit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 1204,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setModalState({
                                                                    type: "delete",
                                                                    course: c
                                                                }),
                                                            className: "text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 transition-colors cursor-pointer",
                                                            title: "Delete Course",
                                                            children: "Delete"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 1210,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 1197,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 1196,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, c.code, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 1181,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 1171,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 1158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-5 py-3.5 border-t border-gray-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-400",
                                children: [
                                    "Showing ",
                                    filtered.length > 0 ? (page - 1) * pageSize + 1 : 0,
                                    " to",
                                    " ",
                                    Math.min(page * pageSize, filtered.length),
                                    " of ",
                                    filtered.length,
                                    " courses"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 1227,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        disabled: page <= 1,
                                        onClick: ()=>setPage((p)=>p - 1),
                                        className: `text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${page <= 1 ? "bg-gray-50 text-gray-300 cursor-not-allowed" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
                                        children: "Previous"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 1232,
                                        columnNumber: 13
                                    }, this),
                                    Array.from({
                                        length: totalPages
                                    }, (_, i)=>i + 1).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setPage(p),
                                            className: `text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${p === page ? "text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
                                            style: p === page ? {
                                                background: "#1a3a9e"
                                            } : {},
                                            children: p
                                        }, p, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1242,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        disabled: page >= totalPages,
                                        onClick: ()=>setPage((p)=>p + 1),
                                        className: `text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${page >= totalPages ? "bg-gray-50 text-gray-300 cursor-not-allowed" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
                                        children: "Next"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 1253,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 1231,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 1226,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 1157,
                columnNumber: 7
            }, this),
            (modalState?.type === "create" || modalState?.type === "edit") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-lg p-6 animate-in fade-in zoom-in-95",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-4 pb-3 border-b border-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-bold text-gray-900",
                                    children: modalState.type === "create" ? "Create New Course" : `Edit Course: ${modalState.course?.code}`
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 1271,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setModalState(null),
                                    className: "w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconX, {}, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 1278,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 1274,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 1270,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSaveCourse,
                            className: "space-y-4",
                            children: [
                                formError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 font-medium",
                                    children: formError
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 1284,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-gray-700 mb-1",
                                                    children: "Course Code *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 1291,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: formCode,
                                                    disabled: modalState.type === "edit",
                                                    onChange: (e)=>setFormCode(e.target.value),
                                                    placeholder: "e.g. ICT450",
                                                    className: "w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50 disabled:opacity-60"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 1292,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1290,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-gray-700 mb-1",
                                                    children: "Semester"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 1302,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: formSemester,
                                                    onChange: (e)=>setFormSemester(e.target.value),
                                                    className: "w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "T2 2026"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 1308,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "T1 2026"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 1309,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "T3 2025"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 1310,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 1303,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1301,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 1289,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-semibold text-gray-700 mb-1",
                                            children: "Course Name *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1316,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formName,
                                            onChange: (e)=>setFormName(e.target.value),
                                            placeholder: "e.g. Cloud Architecture and Operations",
                                            className: "w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1317,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 1315,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-gray-700 mb-1",
                                                    children: "Faculty/School"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 1328,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: formFaculty,
                                                    onChange: (e)=>setFormFaculty(e.target.value),
                                                    className: "w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "School of ICT"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 1334,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "School of Business"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 1335,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "School of Engineering"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 1336,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 1329,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1327,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-gray-700 mb-1",
                                                    children: "Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 1340,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: formStatus,
                                                    onChange: (e)=>setFormStatus(e.target.value),
                                                    className: "w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Active"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 1346,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Draft"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 1347,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Archived"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 1348,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 1341,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1339,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 1326,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-gray-700 mb-1",
                                                    children: "Assigned Instructor"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 1355,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: formInstructor,
                                                    onChange: (e)=>setFormInstructor(e.target.value),
                                                    className: "w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50",
                                                    children: instructors.map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: i.name,
                                                            children: i.name
                                                        }, i.id, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 1362,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 1356,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1354,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-gray-700 mb-1",
                                                    children: "Class Capacity"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 1367,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: 10,
                                                    max: 500,
                                                    value: formCapacity,
                                                    onChange: (e)=>setFormCapacity(Number(e.target.value)),
                                                    className: "w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 1368,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1366,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 1353,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-semibold text-gray-700 mb-1",
                                            children: "Course Description"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1380,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            rows: 3,
                                            value: formDesc,
                                            onChange: (e)=>setFormDesc(e.target.value),
                                            placeholder: "Overview of syllabus, prerequisites, and learning objectives...",
                                            className: "w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50 resize-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1381,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 1379,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 pt-3 border-t border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setModalState(null),
                                            className: "flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1391,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-opacity cursor-pointer",
                                            style: {
                                                background: "#1a3a9e"
                                            },
                                            children: modalState.type === "create" ? "Create Course" : "Save Changes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1398,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 1390,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 1282,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 1269,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 1268,
                columnNumber: 9
            }, this),
            modalState?.type === "view" && modalState.course && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-lg p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between pb-3 border-b border-gray-100 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-mono font-bold text-blue-700",
                                            children: modalState.course.code
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1417,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-bold text-gray-900",
                                            children: modalState.course.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1418,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 1416,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setModalState(null),
                                    className: "w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconX, {}, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 1424,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 1420,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 1415,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between py-1 border-b border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400",
                                            children: "Faculty / Department"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1430,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-gray-800",
                                            children: modalState.course.faculty
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1431,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 1429,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between py-1 border-b border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400",
                                            children: "Lead Instructor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1434,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-gray-800",
                                            children: modalState.course.instructor
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1435,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 1433,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between py-1 border-b border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400",
                                            children: "Enrolled Students"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1438,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-gray-800",
                                            children: [
                                                modalState.course.students,
                                                " of ",
                                                modalState.course.capacity,
                                                " (",
                                                Math.round(modalState.course.students / Math.max(modalState.course.capacity, 1) * 100),
                                                "%)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1439,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 1437,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between py-1 border-b border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400",
                                            children: "Semester Offering"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1445,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-gray-800",
                                            children: modalState.course.semester
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1446,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 1444,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between py-1 border-b border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400",
                                            children: "Status"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1449,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                            label: modalState.course.status,
                                            variant: statusVariant[modalState.course.status]
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1450,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 1448,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-semibold text-gray-400 block mb-1",
                                            children: "Course Description"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1453,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-600 bg-gray-50 p-3 rounded-xl leading-relaxed",
                                            children: modalState.course.description || "No specific course description recorded."
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1454,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 1452,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 1428,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2 mt-5 pt-3 border-t border-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>openEditModal(modalState.course),
                                    className: "px-4 py-2 rounded-xl text-xs font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100 cursor-pointer",
                                    children: "Edit Course"
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 1461,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setModalState(null),
                                    className: "px-4 py-2 rounded-xl text-xs font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 1467,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 1460,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 1414,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 1413,
                columnNumber: 9
            }, this),
            modalState?.type === "delete" && modalState.course && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-sm p-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 mx-auto rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconTrash, {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 1483,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 1482,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-base font-bold text-gray-900 mb-1",
                            children: "Delete Course"
                        }, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 1485,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-500 mb-5",
                            children: [
                                "Are you sure you want to remove ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: [
                                        modalState.course.code,
                                        " – ",
                                        modalState.course.name
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 1487,
                                    columnNumber: 47
                                }, this),
                                "? This action cannot be undone."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 1486,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setModalState(null),
                                    className: "flex-1 py-2.5 rounded-xl text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 1490,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleDeleteCourse(modalState.course.code),
                                    className: "flex-1 py-2.5 rounded-xl text-sm font-semibold text-white bg-red-600 hover:bg-red-700 cursor-pointer",
                                    children: "Confirm Delete"
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 1496,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 1489,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 1481,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 1480,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 1061,
        columnNumber: 5
    }, this);
}
_s1(AdminCourseManagement, "YR5m8waJ2cnH2wLu6eNo/+a+d2Y=");
_c40 = AdminCourseManagement;
// ── 3. Enrollment ──────────────────────────────────────────────────────────────
function AdminEnrollment({ enrollments, setEnrollments, students, courses, setCourses, onShowToast }) {
    _s2();
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [courseFilter, setCourseFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All Courses");
    const [semesterFilter, setSemesterFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All Semesters");
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All Status");
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    // Modal states
    const [showEnrollModal, setShowEnrollModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [viewRecord, setViewRecord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Enrollment modal workflow states
    const [selectedStudentId, setSelectedStudentId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedCourseCode, setSelectedCourseCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedSemester, setSelectedSemester] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("T2 2026");
    const [eligibilityResult, setEligibilityResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const resetEnrollWorkflow = ()=>{
        setSelectedStudentId("");
        setSelectedCourseCode("");
        setSelectedSemester("T2 2026");
        setEligibilityResult(null);
    };
    const checkEligibility = ()=>{
        if (!selectedStudentId || !selectedCourseCode) {
            setEligibilityResult({
                checked: true,
                eligible: false,
                reason: "Please select both a student and a course to verify eligibility."
            });
            return;
        }
        const student = students.find((s)=>s.id === selectedStudentId);
        const course = courses.find((c)=>c.code === selectedCourseCode);
        // 1. Check if already enrolled in this course for this semester
        const alreadyEnrolled = enrollments.some((e)=>e.studentId === selectedStudentId && e.courseCode === selectedCourseCode && e.semester === selectedSemester && e.status === "Enrolled");
        if (alreadyEnrolled) {
            setEligibilityResult({
                checked: true,
                eligible: false,
                reason: `Student ${student?.name} is ALREADY enrolled in ${course?.code} for ${selectedSemester}.`
            });
            return;
        }
        // 2. Check course capacity
        if (course && course.students >= course.capacity) {
            setEligibilityResult({
                checked: true,
                eligible: false,
                reason: `Course ${course.code} is currently at full capacity (${course.students}/${course.capacity}).`
            });
            return;
        }
        // 3. Eligible
        setEligibilityResult({
            checked: true,
            eligible: true,
            reason: `Eligibility Verified: ${student?.name} meets prerequisites for ${course?.name}. Open capacity available (${course?.students}/${course?.capacity}).`
        });
    };
    const handleConfirmEnrollment = ()=>{
        const student = students.find((s)=>s.id === selectedStudentId);
        const course = courses.find((c)=>c.code === selectedCourseCode);
        if (!student || !course) return;
        const newRecord = {
            id: `ENR-${String(Date.now()).slice(-4)}`,
            studentName: student.name,
            studentId: student.id,
            courseName: course.name,
            courseCode: course.code,
            semester: selectedSemester,
            date: "Sep 2, 2026",
            status: "Enrolled"
        };
        setEnrollments([
            newRecord,
            ...enrollments
        ]);
        // Increment enrolled students in courses
        setCourses((prev)=>prev.map((c)=>c.code === course.code ? {
                    ...c,
                    students: c.students + 1
                } : c));
        setShowEnrollModal(false);
        resetEnrollWorkflow();
        onShowToast(`Successfully enrolled ${student.name} in ${course.code}!`);
    };
    const handleToggleStatus = (id, newStatus)=>{
        setEnrollments((prev)=>prev.map((e)=>{
                if (e.id === id) {
                    const prevStatus = e.status;
                    if (prevStatus === "Enrolled" && newStatus === "Dropped") {
                        setCourses((clist)=>clist.map((c)=>c.code === e.courseCode ? {
                                    ...c,
                                    students: Math.max(0, c.students - 1)
                                } : c));
                    } else if (prevStatus !== "Enrolled" && newStatus === "Enrolled") {
                        setCourses((clist)=>clist.map((c)=>c.code === e.courseCode ? {
                                    ...c,
                                    students: c.students + 1
                                } : c));
                    }
                    return {
                        ...e,
                        status: newStatus
                    };
                }
                return e;
            }));
        onShowToast(`Enrollment status updated to ${newStatus}.`);
    };
    const handleApproveEnrollment = (id)=>{
        handleToggleStatus(id, "Enrolled");
    };
    const handleRejectEnrollment = (id)=>{
        handleToggleStatus(id, "Dropped");
    };
    // Filtered
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdminEnrollment.useMemo[filtered]": ()=>{
            return enrollments.filter({
                "AdminEnrollment.useMemo[filtered]": (r)=>{
                    const q = search.trim().toLowerCase();
                    const matchSearch = !q || r.studentName.toLowerCase().includes(q) || r.studentId.toLowerCase().includes(q) || r.courseName.toLowerCase().includes(q) || r.courseCode.toLowerCase().includes(q);
                    const matchCourse = courseFilter === "All Courses" || r.courseCode === courseFilter;
                    const matchSemester = semesterFilter === "All Semesters" || r.semester === semesterFilter;
                    const matchStatus = statusFilter === "All Status" || r.status === statusFilter;
                    return matchSearch && matchCourse && matchSemester && matchStatus;
                }
            }["AdminEnrollment.useMemo[filtered]"]);
        }
    }["AdminEnrollment.useMemo[filtered]"], [
        enrollments,
        search,
        courseFilter,
        semesterFilter,
        statusFilter
    ]);
    const pageSize = 7;
    const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
    const pageItems = filtered.slice((page - 1) * pageSize, page * pageSize);
    const activeEnrolledCount = enrollments.filter((e)=>e.status === "Enrolled").length;
    const statusVariant = {
        Enrolled: "green",
        Dropped: "red",
        Pending: "yellow"
    };
    const courseSelectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleTotalStudentsClick = ()=>{
        setSearch("");
        setCourseFilter("All Courses");
        setSemesterFilter("All Semesters");
        setStatusFilter("All Status");
        setPage(1);
    };
    const handleActiveEnrollmentsClick = ()=>{
        setStatusFilter("Enrolled");
        setPage(1);
    };
    const handleCoursesClick = ()=>{
        if (courseFilter === "All Courses" && courses.length > 0) {
            setCourseFilter(courses[0].code);
        } else if (courses.length > 0) {
            const currentIndex = courses.findIndex((c)=>c.code === courseFilter);
            if (currentIndex >= 0 && currentIndex < courses.length - 1) {
                setCourseFilter(courses[currentIndex + 1].code);
            } else {
                setCourseFilter(courses[0].code);
            }
        }
        setPage(1);
        setTimeout(()=>{
            courseSelectRef.current?.focus();
        }, 50);
    };
    const handleCurrentSemesterClick = ()=>{
        setSemesterFilter("T2 2026");
        setPage(1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHeader, {
                breadcrumb: "Enrollment",
                title: "Enrollment",
                subtitle: "Enroll students into courses and manage their course enrollment",
                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        resetEnrollWorkflow();
                        setShowEnrollModal(true);
                    },
                    className: "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors hover:opacity-90 cursor-pointer shadow-sm",
                    style: {
                        background: "#1a3a9e"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-base leading-none",
                            children: "+"
                        }, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 1735,
                            columnNumber: 13
                        }, this),
                        " Enroll Student"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 1727,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 1722,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6",
                children: [
                    {
                        label: "Total Students",
                        value: String(students.length),
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconUsers, {}, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 1746,
                            columnNumber: 19
                        }, this),
                        bg: "bg-blue-50 text-blue-600",
                        onClick: handleTotalStudentsClick,
                        active: courseFilter === "All Courses" && semesterFilter === "All Semesters" && statusFilter === "All Status" && !search
                    },
                    {
                        label: "Active Enrollments",
                        value: String(activeEnrolledCount),
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCheckCircle, {}, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 1754,
                            columnNumber: 19
                        }, this),
                        bg: "bg-green-50 text-green-600",
                        onClick: handleActiveEnrollmentsClick,
                        active: statusFilter === "Enrolled"
                    },
                    {
                        label: "Courses",
                        value: String(courses.length),
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconBook, {}, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 1762,
                            columnNumber: 19
                        }, this),
                        bg: "bg-purple-50 text-purple-600",
                        onClick: handleCoursesClick,
                        active: courseFilter !== "All Courses"
                    },
                    {
                        label: "Current Semester",
                        value: "T2 2026",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCalendar, {}, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 1770,
                            columnNumber: 19
                        }, this),
                        bg: "bg-orange-50 text-orange-500",
                        onClick: handleCurrentSemesterClick,
                        active: semesterFilter === "T2 2026"
                    }
                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "button",
                        tabIndex: 0,
                        "aria-label": `${s.label}: ${s.value}`,
                        onClick: s.onClick,
                        onKeyDown: (e)=>{
                            if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                s.onClick();
                            }
                        },
                        className: `bg-white rounded-2xl border border-gray-200 shadow-sm p-4 flex items-center gap-3 cursor-pointer select-none transition-all duration-150 hover:shadow-md hover:border-gray-300 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-blue-400/40 ${s.active ? "ring-2 ring-blue-500/40 shadow-sm" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${s.bg}`,
                                children: s.icon
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 1792,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5",
                                        children: s.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 1794,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl font-extrabold text-gray-900 leading-none",
                                        children: s.value
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 1795,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 1793,
                                columnNumber: 13
                            }, this)
                        ]
                    }, s.label, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 1776,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 1741,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-5 py-4 border-b border-gray-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-3",
                                children: "Student Enrollments"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 1804,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex-1 min-w-48",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconSearch, {}, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 1808,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 1807,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: search,
                                                onChange: (e)=>{
                                                    setSearch(e.target.value);
                                                    setPage(1);
                                                },
                                                placeholder: "Search by student name, ID, or course...",
                                                className: "w-full pl-9 pr-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 1810,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 1806,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        ref: courseSelectRef,
                                        value: courseFilter,
                                        onChange: (e)=>{
                                            setCourseFilter(e.target.value);
                                            setPage(1);
                                        },
                                        className: "px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 border-none cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "All Courses"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 1824,
                                                columnNumber: 15
                                            }, this),
                                            courses.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: c.code,
                                                    children: c.code
                                                }, c.code, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 1826,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 1818,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: semesterFilter,
                                        onChange: (e)=>{
                                            setSemesterFilter(e.target.value);
                                            setPage(1);
                                        },
                                        className: "px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 border-none cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "All Semesters"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 1834,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "T2 2026"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 1835,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "T1 2026"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 1836,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "T3 2025"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 1837,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 1829,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: statusFilter,
                                        onChange: (e)=>{
                                            setStatusFilter(e.target.value);
                                            setPage(1);
                                        },
                                        className: "px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 border-none cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "All Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 1844,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Enrolled"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 1845,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Dropped"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 1846,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Pending"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 1847,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 1839,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 1805,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 1803,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full border-collapse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Th, {
                                            children: "Student"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1855,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Th, {
                                            children: "Student ID"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1856,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Th, {
                                            children: "Course"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1857,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Th, {
                                            children: "Course Code"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1858,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Th, {
                                            children: "Semester"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1859,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Th, {
                                            children: "Enrollment Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1860,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Th, {
                                            children: "Status"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1861,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Th, {
                                            children: "Actions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1862,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 1854,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 1853,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: pageItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: 8,
                                        className: "text-center py-12 text-gray-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold",
                                                children: "No enrollment records found"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 1869,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400 mt-1",
                                                children: "Try adjusting your search or filters."
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 1870,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 1868,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 1867,
                                    columnNumber: 15
                                }, this) : pageItems.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "hover:bg-blue-50/30 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Td, {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold shrink-0",
                                                            children: r.studentName.split(" ").map((n)=>n[0]).join("").slice(0, 2)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 1878,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-gray-800",
                                                            children: r.studentName
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 1881,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 1877,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 1876,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Td, {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-xs text-gray-500",
                                                    children: r.studentId
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 1884,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 1884,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Td, {
                                                className: "text-gray-700",
                                                children: r.courseName
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 1885,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Td, {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono font-bold text-blue-700 text-xs",
                                                    children: r.courseCode
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 1886,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 1886,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Td, {
                                                className: "text-gray-500",
                                                children: r.semester
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 1887,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Td, {
                                                className: "text-gray-500",
                                                children: r.date
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 1888,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Td, {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                    label: r.status,
                                                    variant: statusVariant[r.status]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 1889,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 1889,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Td, {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setViewRecord(r),
                                                            className: "text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer",
                                                            children: "View"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 1892,
                                                            columnNumber: 23
                                                        }, this),
                                                        r.status === "Pending" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleApproveEnrollment(r.id),
                                                                    className: "text-xs font-semibold px-2 py-1 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 cursor-pointer",
                                                                    children: "Approve"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                                    lineNumber: 1900,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleRejectEnrollment(r.id),
                                                                    className: "text-xs font-semibold px-2 py-1 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 cursor-pointer",
                                                                    children: "Reject"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                                    lineNumber: 1906,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 1899,
                                                            columnNumber: 25
                                                        }, this) : r.status === "Enrolled" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleToggleStatus(r.id, "Dropped"),
                                                            className: "text-xs font-semibold px-2 py-1 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 cursor-pointer",
                                                            children: "Drop"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 1914,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleToggleStatus(r.id, "Enrolled"),
                                                            className: "text-xs font-semibold px-2 py-1 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 cursor-pointer",
                                                            children: "Re-enroll"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 1921,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 1891,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 1890,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, r.id, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 1875,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 1865,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 1852,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-5 py-3.5 border-t border-gray-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-400",
                                children: [
                                    "Showing ",
                                    filtered.length > 0 ? (page - 1) * pageSize + 1 : 0,
                                    " to",
                                    " ",
                                    Math.min(page * pageSize, filtered.length),
                                    " of ",
                                    filtered.length,
                                    " enrollments"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 1938,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        disabled: page <= 1,
                                        onClick: ()=>setPage((p)=>p - 1),
                                        className: `text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${page <= 1 ? "bg-gray-50 text-gray-300 cursor-not-allowed" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
                                        children: "Previous"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 1943,
                                        columnNumber: 13
                                    }, this),
                                    Array.from({
                                        length: totalPages
                                    }, (_, i)=>i + 1).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setPage(p),
                                            className: `text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${p === page ? "text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
                                            style: p === page ? {
                                                background: "#1a3a9e"
                                            } : {},
                                            children: p
                                        }, p, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1953,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        disabled: page >= totalPages,
                                        onClick: ()=>setPage((p)=>p + 1),
                                        className: `text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${page >= totalPages ? "bg-gray-50 text-gray-300 cursor-not-allowed" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
                                        children: "Next"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 1964,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 1942,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 1937,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 1802,
                columnNumber: 7
            }, this),
            showEnrollModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-lg p-6 animate-in fade-in zoom-in-95",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-5 pb-3 border-b border-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-base font-bold text-gray-900",
                                            children: "Enroll Student in Course"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1983,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-400 mt-0.5",
                                            children: "Select a student and course, verify eligibility, and confirm enrollment."
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1984,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 1982,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowEnrollModal(false),
                                    className: "w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconX, {}, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 1990,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 1986,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 1981,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-semibold text-gray-600 mb-1.5",
                                            children: "Select Student *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1996,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: selectedStudentId,
                                            onChange: (e)=>{
                                                setSelectedStudentId(e.target.value);
                                                setEligibilityResult(null);
                                            },
                                            className: "w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Choose a student..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 2005,
                                                    columnNumber: 19
                                                }, this),
                                                students.filter((s)=>s.role === "Student").map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: s.id,
                                                        children: [
                                                            s.name,
                                                            " — ",
                                                            s.id,
                                                            " (",
                                                            s.status,
                                                            ")"
                                                        ]
                                                    }, s.id, true, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 2009,
                                                        columnNumber: 23
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 1997,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 1995,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-semibold text-gray-600 mb-1.5",
                                            children: "Select Course *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2017,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: selectedCourseCode,
                                            onChange: (e)=>{
                                                setSelectedCourseCode(e.target.value);
                                                setEligibilityResult(null);
                                            },
                                            className: "w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Choose a course..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 2026,
                                                    columnNumber: 19
                                                }, this),
                                                courses.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: c.code,
                                                        children: [
                                                            c.code,
                                                            " — ",
                                                            c.name,
                                                            " (",
                                                            c.students,
                                                            "/",
                                                            c.capacity,
                                                            " enrolled)"
                                                        ]
                                                    }, c.code, true, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 2028,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2018,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2016,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-semibold text-gray-600 mb-1.5",
                                            children: "Semester"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2036,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: selectedSemester,
                                            onChange: (e)=>setSelectedSemester(e.target.value),
                                            className: "w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Trimester 2, 2026"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 2042,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Trimester 1, 2026"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 2043,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Trimester 3, 2025"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 2044,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2037,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2035,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: checkEligibility,
                                            className: "w-full py-2 rounded-xl text-xs font-bold border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors cursor-pointer flex items-center justify-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCheckCircle, {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 2055,
                                                    columnNumber: 19
                                                }, this),
                                                " Check Course Eligibility"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2050,
                                            columnNumber: 17
                                        }, this),
                                        eligibilityResult?.checked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `mt-3 p-3.5 rounded-xl border text-xs leading-relaxed flex items-start gap-2.5 ${eligibilityResult.eligible ? "bg-green-50 border-green-200 text-green-800" : "bg-red-50 border-red-200 text-red-700"}`,
                                            children: [
                                                eligibilityResult.eligible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCheckCircle, {
                                                    className: "w-4 h-4 text-green-600 shrink-0 mt-0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 2067,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconAlertCircle, {
                                                    className: "w-4 h-4 text-red-500 shrink-0 mt-0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 2069,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-bold",
                                                            children: eligibilityResult.eligible ? "Eligible to Enroll" : "Enrollment Blocked"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 2072,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-0.5",
                                                            children: eligibilityResult.reason
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 2073,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 2071,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2059,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2049,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 1994,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 mt-6 pt-3 border-t border-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowEnrollModal(false),
                                    className: "flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2081,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleConfirmEnrollment,
                                    disabled: !selectedStudentId || !selectedCourseCode || eligibilityResult !== null && !eligibilityResult.eligible,
                                    className: "flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
                                    style: {
                                        background: "#1a3a9e"
                                    },
                                    children: "Confirm Enrollment"
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2087,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 2080,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 1980,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 1979,
                columnNumber: 9
            }, this),
            viewRecord && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-md p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between pb-3 border-b border-gray-100 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-base font-bold text-gray-900",
                                    children: [
                                        "Enrollment Record: ",
                                        viewRecord.id
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2105,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setViewRecord(null),
                                    className: "w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconX, {}, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 2107,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2106,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 2104,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between py-1 border-b border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400",
                                            children: "Student Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2112,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-gray-800",
                                            children: viewRecord.studentName
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2113,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2111,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between py-1 border-b border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400",
                                            children: "Student ID"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2116,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-gray-700",
                                            children: viewRecord.studentId
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2117,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2115,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between py-1 border-b border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400",
                                            children: "Course"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2120,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-gray-800",
                                            children: viewRecord.courseName
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2121,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2119,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between py-1 border-b border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400",
                                            children: "Course Code"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2124,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono font-bold text-blue-700",
                                            children: viewRecord.courseCode
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2125,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2123,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between py-1 border-b border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400",
                                            children: "Semester"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2128,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-800",
                                            children: viewRecord.semester
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2129,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2127,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between py-1 border-b border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400",
                                            children: "Enrollment Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2132,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-800",
                                            children: viewRecord.date
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2133,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2131,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between py-1 border-b border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400",
                                            children: "Status"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2136,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                            label: viewRecord.status,
                                            variant: statusVariant[viewRecord.status]
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2137,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2135,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 2110,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2 mt-5 pt-3 border-t border-gray-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setViewRecord(null),
                                className: "px-4 py-2 rounded-xl text-xs font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 2141,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 2140,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 2103,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 2102,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 1721,
        columnNumber: 5
    }, this);
}
_s2(AdminEnrollment, "wJ2HPtJrsER//KuO6nSRKSTcBmM=");
_c41 = AdminEnrollment;
// ── 4. Reports & Analytics ────────────────────────────────────────────────────
function SimpleLineChart() {
    const points = [
        30,
        45,
        40,
        60,
        55,
        80,
        75,
        95,
        88,
        110,
        102,
        124
    ];
    const max = Math.max(...points);
    const w = 600;
    const h = 120;
    const pad = 10;
    const xs = points.map((_, i)=>pad + i / (points.length - 1) * (w - pad * 2));
    const ys = points.map((v)=>h - pad - v / max * (h - pad * 2));
    const d = xs.map((x, i)=>`${i === 0 ? "M" : "L"}${x},${ys[i]}`).join(" ");
    const fill = xs.map((x, i)=>`${i === 0 ? "M" : "L"}${x},${ys[i]}`).join(" ") + ` L${xs[xs.length - 1]},${h} L${xs[0]},${h} Z`;
    const months = [
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: `0 0 ${w} ${h + 20}`,
        className: "w-full h-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "lgLine",
                    x1: "0",
                    y1: "0",
                    x2: "0",
                    y2: "1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: "#1a3a9e",
                            stopOpacity: "0.15"
                        }, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 2169,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: "#1a3a9e",
                            stopOpacity: "0"
                        }, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 2170,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 2168,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 2167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: fill,
                fill: "url(#lgLine)"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 2173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: d,
                fill: "none",
                stroke: "#1a3a9e",
                strokeWidth: "2.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 2174,
                columnNumber: 7
            }, this),
            xs.map((x, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: x,
                    y: h + 16,
                    textAnchor: "middle",
                    fontSize: "10",
                    fill: "#9ca3af",
                    children: months[i]
                }, i, false, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 2176,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 2166,
        columnNumber: 5
    }, this);
}
_c42 = SimpleLineChart;
function SimpleBarChart({ courses }) {
    const bars = courses.slice(0, 5).map((c, idx)=>{
        const defaultVals = [
            84,
            91,
            74,
            68,
            79
        ];
        const colors = [
            "#2563eb",
            "#16a34a",
            "#db2777",
            "#7c3aed",
            "#ea580c"
        ];
        return {
            label: c.code,
            value: defaultVals[idx % defaultVals.length],
            color: colors[idx % colors.length]
        };
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-end gap-4 h-32 px-2",
        children: bars.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col items-center gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-bold",
                        style: {
                            color: b.color
                        },
                        children: [
                            b.value,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 2197,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full rounded-t-md transition-all duration-500",
                        style: {
                            background: b.color,
                            height: `${b.value / 100 * 96}px`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 2198,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] text-gray-500 font-semibold truncate",
                        children: b.label
                    }, void 0, false, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 2199,
                        columnNumber: 11
                    }, this)
                ]
            }, b.label, true, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 2196,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 2194,
        columnNumber: 5
    }, this);
}
_c43 = SimpleBarChart;
function AdminReports({ courses, users, enrollments, initialAction, onClearInitialAction, onShowToast }) {
    _s3();
    const [semester, setSemester] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("T2 2026");
    const [showGenerateModal, setShowGenerateModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialAction === "generate");
    const [reportType, setReportType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Academic Performance Audit");
    const [reportFormat, setReportFormat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("CSV Spreadsheet");
    const [generating, setGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminReports.useEffect": ()=>{
            if (initialAction === "generate") {
                setShowGenerateModal(true);
                if (onClearInitialAction) onClearInitialAction();
            }
        }
    }["AdminReports.useEffect"], [
        initialAction
    ]);
    const totalStudents = users.filter((u)=>u.role === "Student").length;
    const activeCourses = courses.filter((c)=>c.status === "Active").length;
    const instructorsCount = users.filter((u)=>u.role === "Instructor").length;
    const handleExportCSV = ()=>{
        const headers = "Course Code,Course Name,Faculty,Instructor,Enrolled Students,Capacity,Status,Semester\n";
        const rows = courses.map((c)=>`"${c.code}","${c.name}","${c.faculty}","${c.instructor}",${c.students},${c.capacity},"${c.status}","${c.semester}"`).join("\n");
        const blob = new Blob([
            headers + rows
        ], {
            type: "text/csv;charset=utf-8;"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `EduFlex_Course_Enrollment_Report_${semester.replace(/\s+/g, "_")}.csv`;
        a.click();
        URL.revokeObjectURL(url);
        onShowToast("Report exported successfully to CSV!");
    };
    const handleGenerateReportSubmit = (e)=>{
        e.preventDefault();
        setGenerating(true);
        setTimeout(()=>{
            setGenerating(false);
            setShowGenerateModal(false);
            handleExportCSV();
        }, 1200);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHeader, {
                breadcrumb: "Reports & Analytics",
                title: "Reports & Analytics",
                subtitle: "Monitor academic activity and system performance",
                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleExportCSV,
                            className: "px-4 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors shadow-sm cursor-pointer",
                            children: "Export Report"
                        }, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 2274,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowGenerateModal(true),
                            className: "px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors hover:opacity-90 cursor-pointer shadow-sm",
                            style: {
                                background: "#1a3a9e"
                            },
                            children: "Generate Report"
                        }, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 2280,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 2273,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 2268,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end mb-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: semester,
                    onChange: (e)=>{
                        setSemester(e.target.value);
                        onShowToast(`Switched report view to ${e.target.value}`);
                    },
                    className: "px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer shadow-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "T2 2026",
                            children: "Semester T2 2026"
                        }, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 2300,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "T1 2026",
                            children: "Semester T1 2026"
                        }, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 2301,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "T3 2025",
                            children: "Semester T3 2025"
                        }, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 2302,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 2292,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 2291,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6",
                children: [
                    {
                        label: "Total Students",
                        value: String(totalStudents),
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconUsers, {}, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 2308,
                            columnNumber: 84
                        }, this),
                        bg: "bg-blue-50 text-blue-600"
                    },
                    {
                        label: "Active Courses",
                        value: String(activeCourses),
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconBook, {}, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 2309,
                            columnNumber: 85
                        }, this),
                        bg: "bg-purple-50 text-purple-600"
                    },
                    {
                        label: "Instructors",
                        value: String(instructorsCount),
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconShield, {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 2310,
                            columnNumber: 88
                        }, this),
                        bg: "bg-green-50 text-green-600"
                    },
                    {
                        label: "Avg Student Performance",
                        value: "84.2%",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconTrendingUp, {}, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 2311,
                            columnNumber: 71
                        }, this),
                        bg: "bg-orange-50 text-orange-500"
                    }
                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl border border-gray-200 shadow-sm p-4 flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${s.bg}`,
                                children: s.icon
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 2314,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5",
                                        children: s.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 2316,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-extrabold text-gray-900 leading-none",
                                        children: s.value
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 2317,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 2315,
                                columnNumber: 13
                            }, this)
                        ]
                    }, s.label, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 2313,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 2306,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl border border-gray-200 shadow-sm p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-bold text-blue-700 uppercase tracking-widest",
                                        children: "Enrollment Trends"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 2326,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-400",
                                        children: "12-month timeline"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 2327,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 2325,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimpleLineChart, {}, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 2329,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 2324,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl border border-gray-200 shadow-sm p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-bold text-blue-700 uppercase tracking-widest",
                                        children: "Student Performance by Course"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 2333,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-400",
                                        children: "Average pass rate"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 2334,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 2332,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimpleBarChart, {
                                courses: courses
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 2336,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 2331,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 2323,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl border border-gray-200 shadow-sm p-5 mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-4",
                        children: "Course Enrollment Capacities"
                    }, void 0, false, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 2342,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: courses.map((c, i)=>{
                            const pct = Math.round(c.students / Math.max(c.capacity, 1) * 100);
                            const colors = [
                                "#16a34a",
                                "#2563eb",
                                "#db2777",
                                "#ea580c",
                                "#7c3aed"
                            ];
                            const color = colors[i % colors.length];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-bold text-gray-500 font-mono",
                                                        children: c.code
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 2352,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-700 font-medium",
                                                        children: c.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 2353,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 2351,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-500",
                                                children: [
                                                    c.students,
                                                    "/",
                                                    c.capacity,
                                                    " — ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold",
                                                        style: {
                                                            color
                                                        },
                                                        children: [
                                                            pct,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 2356,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 2355,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 2350,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressBar, {
                                        pct: pct,
                                        color: color
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 2359,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, c.code, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 2349,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 2343,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 2341,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl border border-gray-200 shadow-sm p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-4",
                        children: "System Activity Overview"
                    }, void 0, false, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 2368,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
                        children: [
                            {
                                label: "Active Users",
                                value: String(Math.round(users.length * 0.8)),
                                sub: "active sessions today"
                            },
                            {
                                label: "Assignments Submitted",
                                value: "3,210",
                                sub: "this semester"
                            },
                            {
                                label: "Quiz Attempts",
                                value: "1,876",
                                sub: "attempts completed"
                            },
                            {
                                label: "System Reliability",
                                value: "99.9%",
                                sub: "uptime guarantee"
                            }
                        ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl bg-gray-50 border border-gray-100 p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mb-1",
                                        children: s.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 2377,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-extrabold text-gray-900",
                                        children: s.value
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 2378,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400 mt-0.5",
                                        children: s.sub
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 2379,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, s.label, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 2376,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 2369,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 2367,
                columnNumber: 7
            }, this),
            showGenerateModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-md p-6 animate-in fade-in zoom-in-95",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between pb-3 border-b border-gray-100 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-base font-bold text-gray-900",
                                    children: "Generate Academic Report"
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2390,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowGenerateModal(false),
                                    className: "w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconX, {}, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 2395,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2391,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 2389,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleGenerateReportSubmit,
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-semibold text-gray-700 mb-1",
                                            children: "Report Type"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2401,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: reportType,
                                            onChange: (e)=>setReportType(e.target.value),
                                            className: "w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Academic Performance Audit"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 2407,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Enrollment Trends & Statistics"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 2408,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Course Completion & Pass Rates"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 2409,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "System Health & Platform Activity"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 2410,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2402,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2400,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-semibold text-gray-700 mb-1",
                                            children: "Academic Term"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2415,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: semester,
                                            onChange: (e)=>setSemester(e.target.value),
                                            className: "w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "T2 2026",
                                                    children: "Trimester 2, 2026 (Current)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 2421,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "T1 2026",
                                                    children: "Trimester 1, 2026"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 2422,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "T3 2025",
                                                    children: "Trimester 3, 2025"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 2423,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2416,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2414,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-semibold text-gray-700 mb-1",
                                            children: "Export Format"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2428,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: reportFormat,
                                            onChange: (e)=>setReportFormat(e.target.value),
                                            className: "w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "CSV Spreadsheet (.csv)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 2434,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Adobe PDF Document (.pdf)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 2435,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Microsoft Excel (.xlsx)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 2436,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2429,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2427,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 pt-3 border-t border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowGenerateModal(false),
                                            className: "flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2441,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: generating,
                                            className: "flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90 cursor-pointer disabled:opacity-50",
                                            style: {
                                                background: "#1a3a9e"
                                            },
                                            children: generating ? "Generating..." : "Download Report"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2448,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2440,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 2399,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 2388,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 2387,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 2267,
        columnNumber: 5
    }, this);
}
_s3(AdminReports, "0YshQvmC8R30tdAxqaK2T7v3V9s=");
_c44 = AdminReports;
// ── 5. Announcements ──────────────────────────────────────────────────────────
function AdminAnnouncements({ announcements, setAnnouncements, courses, initialAction, onClearInitialAction, onShowToast }) {
    _s4();
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All Status");
    const [audienceFilter, setAudienceFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All Audiences");
    const [modalState, setModalState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialAction === "create" ? {
        type: "create"
    } : null);
    // Form states
    const [formTitle, setFormTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [formDesc, setFormDesc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [formAudience, setFormAudience] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All Users");
    const [formStatus, setFormStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Published");
    const [formCourse, setFormCourse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [formError, setFormError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminAnnouncements.useEffect": ()=>{
            if (initialAction === "create") {
                openCreate();
                if (onClearInitialAction) onClearInitialAction();
            }
        }
    }["AdminAnnouncements.useEffect"], [
        initialAction
    ]);
    const openCreate = ()=>{
        setFormTitle("");
        setFormDesc("");
        setFormAudience("All Users");
        setFormStatus("Published");
        setFormCourse("");
        setFormError("");
        setModalState({
            type: "create"
        });
    };
    const openEdit = (a)=>{
        setFormTitle(a.title);
        setFormDesc(a.desc);
        setFormAudience(a.audience);
        setFormStatus(a.status);
        setFormCourse(a.course || "");
        setFormError("");
        setModalState({
            type: "edit",
            announcement: a
        });
    };
    const handleSaveAnnouncement = (e)=>{
        e.preventDefault();
        if (!formTitle.trim() || !formDesc.trim()) {
            setFormError("Title and announcement message are required.");
            return;
        }
        if (modalState?.type === "create") {
            const newAnn = {
                id: `ANN-${String(Date.now()).slice(-4)}`,
                title: formTitle.trim(),
                desc: formDesc.trim(),
                date: "Sep 2, 2026",
                author: "Admin Office",
                audience: formAudience,
                status: formStatus,
                course: formCourse || undefined
            };
            setAnnouncements([
                newAnn,
                ...announcements
            ]);
            onShowToast(`Announcement "${newAnn.title}" created successfully.`);
        } else if (modalState?.type === "edit" && modalState.announcement) {
            const updated = announcements.map((a)=>a.id === modalState.announcement.id ? {
                    ...a,
                    title: formTitle.trim(),
                    desc: formDesc.trim(),
                    audience: formAudience,
                    status: formStatus,
                    course: formCourse || undefined
                } : a);
            setAnnouncements(updated);
            onShowToast(`Announcement updated.`);
        }
        setModalState(null);
    };
    const handleDeleteAnnouncement = (id)=>{
        setAnnouncements((prev)=>prev.filter((a)=>a.id !== id));
        setModalState(null);
        onShowToast("Announcement deleted.");
    };
    const filtered = announcements.filter((item)=>{
        const q = search.trim().toLowerCase();
        const matchSearch = !q || item.title.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q) || item.author.toLowerCase().includes(q);
        const matchStatus = statusFilter === "All Status" || item.status === statusFilter;
        const matchAudience = audienceFilter === "All Audiences" || item.audience === audienceFilter;
        return matchSearch && matchStatus && matchAudience;
    });
    const statusVariant = {
        Published: "green",
        Draft: "yellow",
        Scheduled: "blue"
    };
    const audienceVariant = {
        "All Users": "purple",
        Students: "blue",
        Instructors: "orange"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHeader, {
                breadcrumb: "Announcements",
                title: "Announcements",
                subtitle: "Create and manage announcements across the institution",
                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: openCreate,
                    className: "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors hover:opacity-90 cursor-pointer shadow-sm",
                    style: {
                        background: "#1a3a9e"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-base leading-none",
                            children: "+"
                        }, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 2596,
                            columnNumber: 13
                        }, this),
                        " New Announcement"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 2591,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 2586,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl border border-gray-200 shadow-sm px-4 py-3 mb-5 flex flex-wrap gap-3 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-1 min-w-48",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconSearch, {}, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2604,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 2603,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: search,
                                onChange: (e)=>setSearch(e.target.value),
                                placeholder: "Search announcements by title or keyword...",
                                className: "w-full pl-9 pr-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 2606,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 2602,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: statusFilter,
                        onChange: (e)=>setStatusFilter(e.target.value),
                        className: "px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 border-none cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "All Status"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 2619,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "Published"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 2620,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "Draft"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 2621,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "Scheduled"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 2622,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 2614,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: audienceFilter,
                        onChange: (e)=>setAudienceFilter(e.target.value),
                        className: "px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 border-none cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "All Audiences"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 2629,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "All Users"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 2630,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "Students"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 2631,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "Instructors"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 2632,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 2624,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 2601,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl border border-gray-200 p-12 text-center text-gray-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconAnnouncement, {}, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 2639,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold text-gray-800 mt-2",
                            children: "No announcements found"
                        }, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 2640,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-400 mt-1",
                            children: "Try adjusting your filters or search terms."
                        }, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 2641,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 2638,
                    columnNumber: 11
                }, this) : filtered.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl border border-gray-200 shadow-sm p-5 hover:shadow-md transition-shadow",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
                                    style: {
                                        background: "#eef2ff"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconAnnouncement, {}, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 2648,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2647,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between gap-4 mb-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-bold text-gray-900",
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 2652,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5 shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                        label: item.status,
                                                        variant: statusVariant[item.status]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 2654,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 2653,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2651,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 mb-3 leading-relaxed",
                                            children: item.desc
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2657,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4 text-xs text-gray-400 flex-wrap",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: item.date
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 2660,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "By ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold text-gray-600",
                                                                    children: item.author
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                                    lineNumber: 2661,
                                                                    columnNumber: 32
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 2661,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                            label: item.audience,
                                                            variant: audienceVariant[item.audience] ?? "gray"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 2662,
                                                            columnNumber: 23
                                                        }, this),
                                                        item.course && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-blue-700 font-bold",
                                                            children: item.course
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 2663,
                                                            columnNumber: 39
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 2659,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setModalState({
                                                                    type: "view",
                                                                    announcement: item
                                                                }),
                                                            className: "w-8 h-8 rounded-lg bg-gray-100 hover:bg-blue-50 text-gray-500 hover:text-blue-600 flex items-center justify-center transition-colors cursor-pointer",
                                                            title: "View Announcement",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconEye, {}, void 0, false, {
                                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                                lineNumber: 2671,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 2666,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>openEdit(item),
                                                            className: "w-8 h-8 rounded-lg bg-gray-100 hover:bg-purple-50 text-gray-500 hover:text-purple-600 flex items-center justify-center transition-colors cursor-pointer",
                                                            title: "Edit Announcement",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconEdit, {}, void 0, false, {
                                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                                lineNumber: 2678,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 2673,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setModalState({
                                                                    type: "delete",
                                                                    announcement: item
                                                                }),
                                                            className: "w-8 h-8 rounded-lg bg-gray-100 hover:bg-red-50 text-gray-500 hover:text-red-500 flex items-center justify-center transition-colors cursor-pointer",
                                                            title: "Delete Announcement",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconTrash, {}, void 0, false, {
                                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                                lineNumber: 2685,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 2680,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 2665,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2658,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2650,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 2646,
                            columnNumber: 15
                        }, this)
                    }, item.id, false, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 2645,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 2636,
                columnNumber: 7
            }, this),
            (modalState?.type === "create" || modalState?.type === "edit") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-lg p-6 animate-in fade-in zoom-in-95",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-4 pb-3 border-b border-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-base font-bold text-gray-900",
                                    children: modalState.type === "create" ? "Post New Announcement" : "Edit Announcement"
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2701,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setModalState(null),
                                    className: "w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconX, {}, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 2708,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2704,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 2700,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSaveAnnouncement,
                            className: "space-y-4",
                            children: [
                                formError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 font-medium",
                                    children: formError
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2714,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-semibold text-gray-700 mb-1",
                                            children: "Title *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2720,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formTitle,
                                            onChange: (e)=>setFormTitle(e.target.value),
                                            placeholder: "e.g. Campus Library Extended Hours",
                                            className: "w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2721,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2719,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-gray-700 mb-1",
                                                    children: "Target Audience"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 2732,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: formAudience,
                                                    onChange: (e)=>setFormAudience(e.target.value),
                                                    className: "w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "All Users"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 2738,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Students"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 2739,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Instructors"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 2740,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 2733,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2731,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-gray-700 mb-1",
                                                    children: "Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 2744,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: formStatus,
                                                    onChange: (e)=>setFormStatus(e.target.value),
                                                    className: "w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Published"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 2750,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Draft"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 2751,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Scheduled"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 2752,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 2745,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2743,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2730,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-semibold text-gray-700 mb-1",
                                            children: "Target Course (Optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2758,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: formCourse,
                                            onChange: (e)=>setFormCourse(e.target.value),
                                            className: "w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "None (University-wide)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 2764,
                                                    columnNumber: 19
                                                }, this),
                                                courses.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: c.code,
                                                        children: [
                                                            c.code,
                                                            " – ",
                                                            c.name
                                                        ]
                                                    }, c.code, true, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 2766,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2759,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2757,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-semibold text-gray-700 mb-1",
                                            children: "Announcement Body *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2772,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            rows: 4,
                                            value: formDesc,
                                            onChange: (e)=>setFormDesc(e.target.value),
                                            placeholder: "Detailed announcement information...",
                                            className: "w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50 resize-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2773,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2771,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 pt-3 border-t border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setModalState(null),
                                            className: "flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2783,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold text-white hover:opacity-90 cursor-pointer",
                                            style: {
                                                background: "#1a3a9e"
                                            },
                                            children: modalState.type === "create" ? "Publish Announcement" : "Save Changes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2790,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2782,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 2712,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 2699,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 2698,
                columnNumber: 9
            }, this),
            modalState?.type === "view" && modalState.announcement && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-lg p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between pb-3 border-b border-gray-100 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                    label: modalState.announcement.status,
                                    variant: statusVariant[modalState.announcement.status]
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2808,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setModalState(null),
                                    className: "w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconX, {}, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 2813,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2809,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 2807,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-bold text-gray-900 mb-2",
                            children: modalState.announcement.title
                        }, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 2816,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 text-xs text-gray-400 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Posted ",
                                        modalState.announcement.date
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2818,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "By ",
                                        modalState.announcement.author
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2819,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-blue-700",
                                    children: [
                                        "Audience: ",
                                        modalState.announcement.audience
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2820,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 2817,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-700 bg-gray-50 p-4 rounded-xl leading-relaxed whitespace-pre-wrap",
                            children: modalState.announcement.desc
                        }, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 2822,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2 mt-5 pt-3 border-t border-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>openEdit(modalState.announcement),
                                    className: "px-4 py-2 rounded-xl text-xs font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100 cursor-pointer",
                                    children: "Edit"
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2826,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setModalState(null),
                                    className: "px-4 py-2 rounded-xl text-xs font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2832,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 2825,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 2806,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 2805,
                columnNumber: 9
            }, this),
            modalState?.type === "delete" && modalState.announcement && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-sm p-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 mx-auto rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconTrash, {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 2848,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 2847,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-base font-bold text-gray-900 mb-1",
                            children: "Delete Announcement"
                        }, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 2850,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-500 mb-5",
                            children: [
                                "Are you sure you want to delete “",
                                modalState.announcement.title,
                                "”?"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 2851,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setModalState(null),
                                    className: "flex-1 py-2.5 rounded-xl text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2855,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleDeleteAnnouncement(modalState.announcement.id),
                                    className: "flex-1 py-2.5 rounded-xl text-sm font-semibold text-white bg-red-600 hover:bg-red-700 cursor-pointer",
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2861,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 2854,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 2846,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 2845,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 2585,
        columnNumber: 5
    }, this);
}
_s4(AdminAnnouncements, "qQdVacrUuCEYdIZvNViO8pX6yZ4=");
_c45 = AdminAnnouncements;
// ── 6. Messages ───────────────────────────────────────────────────────────────
function AdminMessages({ conversations, setConversations, onShowToast }) {
    _s5();
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(conversations[0]?.id || "conv-1");
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [inputMsg, setInputMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selectedConv = conversations.find((c)=>c.id === selectedId) || conversations[0];
    const handleSelectConv = (id)=>{
        setSelectedId(id);
        // Mark conversation as read
        setConversations((prev)=>prev.map((c)=>c.id === id ? {
                    ...c,
                    unread: 0
                } : c));
    };
    const handleSendMessage = (e)=>{
        e.preventDefault();
        const text = inputMsg.trim();
        if (!text || !selectedConv) return;
        const newMsg = {
            id: `msg-${Date.now()}`,
            from: "Me",
            text,
            time: "Just now",
            mine: true
        };
        setConversations((prev)=>prev.map((c)=>c.id === selectedConv.id ? {
                    ...c,
                    preview: text,
                    time: "Just now",
                    messages: [
                        ...c.messages,
                        newMsg
                    ]
                } : c));
        setInputMsg("");
        // Simulate realistic reply after 1.5 seconds
        setTimeout(()=>{
            const replies = [
                "Thank you, I will look into this right away.",
                "Understood, thanks for the quick follow-up!",
                "Acknowledged. I'll update the records accordingly."
            ];
            const replyText = replies[Math.floor(Math.random() * replies.length)];
            const replyMsg = {
                id: `reply-${Date.now()}`,
                from: selectedConv.name,
                text: replyText,
                time: "Just now",
                mine: false
            };
            setConversations((clist)=>clist.map((c)=>c.id === selectedConv.id ? {
                        ...c,
                        preview: replyText,
                        time: "Just now",
                        messages: [
                            ...c.messages,
                            replyMsg
                        ]
                    } : c));
        }, 1500);
    };
    const filteredConversations = conversations.filter((c)=>{
        const q = search.trim().toLowerCase();
        return !q || c.name.toLowerCase().includes(q) || c.preview.toLowerCase().includes(q);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHeader, {
                breadcrumb: "Messages",
                title: "Messages",
                subtitle: "Communicate with students, instructors, and staff"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 2965,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex",
                style: {
                    height: "calc(100vh - 220px)",
                    minHeight: 480
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-72 shrink-0 border-r border-gray-100 flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 border-b border-gray-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconSearch, {}, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 2979,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2978,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: search,
                                            onChange: (e)=>setSearch(e.target.value),
                                            placeholder: "Search messages...",
                                            className: "w-full pl-9 pr-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 2981,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 2977,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 2976,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto",
                                children: filteredConversations.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleSelectConv(c.id),
                                        className: `w-full px-4 py-3.5 flex items-start gap-3 border-b border-gray-50 text-left transition-colors cursor-pointer ${selectedConv?.id === c.id ? "bg-blue-50/70" : "hover:bg-gray-50"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-9 h-9 rounded-full ${c.color} flex items-center justify-center text-white text-xs font-bold shrink-0`,
                                                children: c.initials
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 2999,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-0.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-semibold text-gray-800 truncate",
                                                                children: c.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                                lineNumber: 3004,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-gray-400 shrink-0 ml-1",
                                                                children: c.time
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                                lineNumber: 3005,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3003,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500 mb-0.5",
                                                        children: c.role
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3007,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-400 truncate",
                                                        children: c.preview
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3008,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3002,
                                                columnNumber: 17
                                            }, this),
                                            c.unread > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-5 h-5 rounded-full text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5",
                                                style: {
                                                    background: "#1a3a9e"
                                                },
                                                children: c.unread
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3011,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, c.id, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 2992,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 2990,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 2975,
                        columnNumber: 9
                    }, this),
                    selectedConv ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-5 py-3.5 border-b border-gray-100 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-9 h-9 rounded-full ${selectedConv.color} flex items-center justify-center text-white text-xs font-bold shrink-0`,
                                                children: selectedConv.initials
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3028,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-bold text-gray-800",
                                                        children: selectedConv.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3032,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500",
                                                        children: selectedConv.role
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3033,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3031,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3027,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setConversations((prev)=>prev.map((c)=>c.id === selectedConv.id ? {
                                                        ...c,
                                                        unread: 1
                                                    } : c));
                                            onShowToast(`Marked conversation with ${selectedConv.name} as unread`);
                                        },
                                        className: "text-xs text-gray-500 hover:text-blue-700 cursor-pointer font-medium",
                                        children: "Mark as Unread"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3036,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 3026,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto px-5 py-4 space-y-4 bg-gray-50/50",
                                children: [
                                    selectedConv.messages.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `flex ${m.mine ? "justify-end" : "justify-start"}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `max-w-xs lg:max-w-md px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-2xs ${m.mine ? "text-white rounded-br-sm" : "bg-white border border-gray-200 text-gray-800 rounded-bl-sm"}`,
                                                style: m.mine ? {
                                                    background: "#1a3a9e"
                                                } : {},
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: m.text
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3058,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-[10px] mt-1 ${m.mine ? "text-blue-200" : "text-gray-400"}`,
                                                        children: m.time
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3059,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3052,
                                                columnNumber: 19
                                            }, this)
                                        }, m.id, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 3051,
                                            columnNumber: 17
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: messagesEndRef
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3063,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 3049,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSendMessage,
                                className: "px-4 py-3 border-t border-gray-100 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>onShowToast("Attachments feature: file selection active."),
                                        className: "w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center transition-colors shrink-0 cursor-pointer",
                                        title: "Attach file",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconPaperclip, {}, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 3073,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3067,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: inputMsg,
                                        onChange: (e)=>setInputMsg(e.target.value),
                                        placeholder: "Type a message and press Enter...",
                                        className: "flex-1 px-4 py-2.5 bg-gray-100 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3075,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: !inputMsg.trim(),
                                        className: "w-9 h-9 rounded-xl flex items-center justify-center text-white shrink-0 transition-opacity hover:opacity-90 disabled:opacity-50 cursor-pointer",
                                        style: {
                                            background: "#1a3a9e"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconSend, {}, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 3088,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3082,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 3066,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 3025,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex items-center justify-center text-gray-400 text-sm",
                        children: "Select a conversation to begin messaging"
                    }, void 0, false, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 3093,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 2970,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 2964,
        columnNumber: 5
    }, this);
}
_s5(AdminMessages, "v0b2z1+PQ1cUGwFThfEMgYdXcn0=");
_c46 = AdminMessages;
// ── 7. Academic Calendar ──────────────────────────────────────────────────────
function AdminCalendar({ calendarEvents, setCalendarEvents, onShowToast }) {
    _s6();
    const [year, setYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2026);
    const [month, setMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(8); // September = 8 (0-indexed)
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("2026-09-08");
    // Add / Edit / View event modals
    const [showAddModal, setShowAddModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeEvent, setActiveEvent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Form states
    const [eventTitle, setEventTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [eventDate, setEventDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("2026-09-08");
    const [eventCategory, setEventCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Academic Date");
    const [eventTime, setEventTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("9:00 AM");
    const [eventColor, setEventColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#1a3a9e");
    const [eventDesc, setEventDesc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const dayNames = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];
    const categoryColorMap = {
        "Academic Date": "#1a3a9e",
        "Enrollment": "#16a34a",
        "Assessment": "#ea580c",
        "Quiz": "#2563eb",
        "School Break": "#7c3aed",
        "Public Holiday": "#059669",
        "Exam": "#db2777"
    };
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells = Array(firstDay).fill(null);
    for(let d = 1; d <= daysInMonth; d++)cells.push(d);
    while(cells.length % 7 !== 0)cells.push(null);
    const prev = ()=>{
        if (month === 0) {
            setMonth(11);
            setYear((y)=>y - 1);
        } else setMonth((m)=>m - 1);
    };
    const next = ()=>{
        if (month === 11) {
            setMonth(0);
            setYear((y)=>y + 1);
        } else setMonth((m)=>m + 1);
    };
    const openAddModal = (dateStr)=>{
        const target = dateStr || selectedDate;
        setEventTitle("");
        setEventDate(target);
        setEventCategory("Academic Date");
        setEventTime("9:00 AM");
        setEventColor("#1a3a9e");
        setEventDesc("");
        setShowAddModal(true);
    };
    const handleSaveEvent = (e)=>{
        e.preventDefault();
        if (!eventTitle.trim() || !eventDate.trim()) return;
        const newEvt = {
            id: `ce-${Date.now()}`,
            title: eventTitle.trim(),
            label: eventTitle.trim(),
            date: eventDate,
            category: eventCategory,
            color: categoryColorMap[eventCategory] || eventColor,
            time: eventTime,
            description: eventDesc.trim()
        };
        setCalendarEvents((prev)=>{
            const existing = prev[eventDate] || [];
            return {
                ...prev,
                [eventDate]: [
                    ...existing,
                    newEvt
                ]
            };
        });
        setShowAddModal(false);
        onShowToast(`Event "${newEvt.title}" added to calendar.`);
    };
    const handleDeleteEvent = (evtId, dateStr)=>{
        setCalendarEvents((prev)=>{
            const list = prev[dateStr] || [];
            const updated = list.filter((e)=>e.id !== evtId);
            return {
                ...prev,
                [dateStr]: updated
            };
        });
        setActiveEvent(null);
        onShowToast("Event removed from calendar.");
    };
    // Events on selected date
    const selectedDayEvents = calendarEvents[selectedDate] || [];
    // Flatten upcoming events
    const allEventsList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdminCalendar.useMemo[allEventsList]": ()=>{
            const list = [];
            Object.keys(calendarEvents).sort().forEach({
                "AdminCalendar.useMemo[allEventsList]": (dateKey)=>{
                    list.push(...calendarEvents[dateKey]);
                }
            }["AdminCalendar.useMemo[allEventsList]"]);
            return list;
        }
    }["AdminCalendar.useMemo[allEventsList]"], [
        calendarEvents
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHeader, {
                breadcrumb: "Academic Calendar",
                title: "Academic Calendar",
                subtitle: "Manage important academic dates, term schedules, and university events",
                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>openAddModal(),
                    className: "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors hover:opacity-90 cursor-pointer shadow-sm",
                    style: {
                        background: "#1a3a9e"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconPlus, {}, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 3228,
                            columnNumber: 13
                        }, this),
                        " Add Event"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 3223,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 3218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: prev,
                                                className: "w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors cursor-pointer",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconChevronLeft, {}, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 3242,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3238,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-base font-bold text-gray-900",
                                                children: [
                                                    monthNames[month],
                                                    " ",
                                                    year
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3244,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: next,
                                                className: "w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors cursor-pointer",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconChevronRight, {}, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 3251,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3247,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3237,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-3 py-1.5 text-xs font-semibold rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 transition-colors cursor-pointer",
                                        onClick: ()=>{
                                            setYear(2026);
                                            setMonth(8);
                                            setSelectedDate("2026-09-08");
                                        },
                                        children: "Today"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3254,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 3236,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-7 mb-2",
                                children: dayNames.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center text-[10px] font-bold text-gray-400 uppercase py-2",
                                        children: d
                                    }, d, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3268,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 3266,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-7 gap-1",
                                children: cells.map((day, i)=>{
                                    if (!day) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-20"
                                    }, i, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3276,
                                        columnNumber: 32
                                    }, this);
                                    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                                    const dayEvents = calendarEvents[dateStr] ?? [];
                                    const isSelected = selectedDate === dateStr;
                                    const isToday = year === 2026 && month === 8 && day === 8;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>setSelectedDate(dateStr),
                                        className: `h-20 rounded-xl p-1.5 border transition-all cursor-pointer hover:bg-blue-50/40 overflow-hidden flex flex-col justify-between ${isSelected ? "border-blue-600 bg-blue-50/70 shadow-xs" : isToday ? "border-blue-300 bg-blue-50/30" : "border-gray-100"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full ${isToday ? "text-white" : isSelected ? "text-blue-700 font-extrabold" : "text-gray-700"}`,
                                                        style: isToday ? {
                                                            background: "#1a3a9e"
                                                        } : {},
                                                        children: day
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3295,
                                                        columnNumber: 21
                                                    }, this),
                                                    dayEvents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-1.5 h-1.5 rounded-full bg-blue-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3308,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3294,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-0.5 overflow-hidden",
                                                children: [
                                                    dayEvents.slice(0, 2).map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            onClick: (ev)=>{
                                                                ev.stopPropagation();
                                                                setSelectedDate(dateStr);
                                                                setActiveEvent(e);
                                                            },
                                                            className: "text-[9px] font-semibold truncate px-1 py-0.5 rounded text-white shadow-2xs hover:opacity-90",
                                                            style: {
                                                                background: e.color
                                                            },
                                                            title: e.title,
                                                            children: e.label
                                                        }, e.id, false, {
                                                            fileName: "[project]/src/AdminDashboard.tsx",
                                                            lineNumber: 3313,
                                                            columnNumber: 23
                                                        }, this)),
                                                    dayEvents.length > 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[8px] font-bold text-gray-500 pl-0.5",
                                                        children: [
                                                            "+",
                                                            dayEvents.length - 2,
                                                            " more"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3328,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3311,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3283,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 3274,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 3235,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl border border-gray-200 shadow-sm p-5 flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-3 pb-2 border-b border-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-bold text-blue-700 uppercase tracking-widest",
                                                children: "Events on Date"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3344,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-bold text-gray-800 mt-0.5",
                                                children: selectedDate
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3345,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3343,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>openAddModal(selectedDate),
                                        className: "text-xs font-semibold px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 cursor-pointer",
                                        children: "+ Add"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3347,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 3342,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 mb-5",
                                children: selectedDayEvents.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 rounded-xl bg-gray-50 border border-gray-100 text-center text-xs text-gray-400",
                                    children: "No events scheduled on this date."
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 3358,
                                    columnNumber: 15
                                }, this) : selectedDayEvents.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>setActiveEvent(e),
                                        className: "p-3 rounded-xl border border-gray-100 bg-gray-50/70 hover:bg-blue-50/40 transition-colors flex items-start justify-between gap-2 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2.5 h-2.5 rounded-full mt-1 shrink-0",
                                                        style: {
                                                            background: e.color
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3369,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs font-bold text-gray-800",
                                                                children: e.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                                lineNumber: 3371,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] text-gray-500",
                                                                children: [
                                                                    e.category,
                                                                    " · ",
                                                                    e.time || "All Day"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                                lineNumber: 3372,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3370,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3368,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: (ev)=>{
                                                    ev.stopPropagation();
                                                    handleDeleteEvent(e.id, selectedDate);
                                                },
                                                className: "text-gray-400 hover:text-red-500 p-1 rounded cursor-pointer",
                                                title: "Delete Event",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconX, {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 3383,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3375,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, e.id, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3363,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 3356,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-3",
                                children: "Upcoming Calendar Events"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 3391,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2.5 flex-1 max-h-60 overflow-y-auto pr-1",
                                children: allEventsList.slice(0, 8).map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>{
                                            setSelectedDate(e.date);
                                            setActiveEvent(e);
                                        },
                                        className: "flex items-start gap-2.5 p-2 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 rounded-full mt-1 shrink-0",
                                                style: {
                                                    background: e.color
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3402,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-semibold text-gray-800 truncate",
                                                        children: e.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3404,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-gray-400",
                                                        children: [
                                                            e.date,
                                                            " · ",
                                                            e.category
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3405,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3403,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, e.id, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3394,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 3392,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5 pt-4 border-t border-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-3",
                                        children: "Category Legend"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3413,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2 text-[11px] text-gray-600",
                                        children: Object.entries(categoryColorMap).map(([cat, col])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2.5 h-2.5 rounded-sm shrink-0",
                                                        style: {
                                                            background: col
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3417,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "truncate",
                                                        children: cat
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3418,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, cat, true, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3416,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3414,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 3412,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 3340,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 3233,
                columnNumber: 7
            }, this),
            showAddModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-md p-6 animate-in fade-in zoom-in-95",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between pb-3 border-b border-gray-100 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-base font-bold text-gray-900",
                                    children: "Add Academic Event"
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 3431,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowAddModal(false),
                                    className: "w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconX, {}, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3433,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 3432,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 3430,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSaveEvent,
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-semibold text-gray-700 mb-1",
                                            children: "Event Title *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 3438,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            required: true,
                                            value: eventTitle,
                                            onChange: (e)=>setEventTitle(e.target.value),
                                            placeholder: "e.g. Assessment 1 Due Date",
                                            className: "w-full px-3 py-2 rounded-xl border border-gray-200 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 3439,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 3437,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-gray-700 mb-1",
                                                    children: "Date *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 3450,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    required: true,
                                                    value: eventDate,
                                                    onChange: (e)=>setEventDate(e.target.value),
                                                    className: "w-full px-3 py-2 rounded-xl border border-gray-200 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 3451,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 3449,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-gray-700 mb-1",
                                                    children: "Time"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 3460,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: eventTime,
                                                    onChange: (e)=>setEventTime(e.target.value),
                                                    placeholder: "e.g. 10:00 AM / All Day",
                                                    className: "w-full px-3 py-2 rounded-xl border border-gray-200 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 3461,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 3459,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 3448,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-semibold text-gray-700 mb-1",
                                            children: "Category"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 3471,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: eventCategory,
                                            onChange: (e)=>setEventCategory(e.target.value),
                                            className: "w-full px-3 py-2 rounded-xl border border-gray-200 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Academic Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 3477,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Enrollment"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 3478,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Assessment"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 3479,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Quiz"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 3480,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "School Break"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 3481,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Public Holiday"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 3482,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Exam"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 3483,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 3472,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 3470,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-semibold text-gray-700 mb-1",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 3487,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            rows: 3,
                                            value: eventDesc,
                                            onChange: (e)=>setEventDesc(e.target.value),
                                            placeholder: "Notes, locations, or academic requirements...",
                                            className: "w-full px-3 py-2 rounded-xl border border-gray-200 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 3488,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 3486,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 pt-3 border-t border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowAddModal(false),
                                            className: "flex-1 py-2.5 rounded-xl text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 3497,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "flex-1 py-2.5 rounded-xl text-sm font-semibold text-white hover:opacity-90 cursor-pointer",
                                            style: {
                                                background: "#1a3a9e"
                                            },
                                            children: "Add Event"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 3504,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 3496,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 3436,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 3429,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 3428,
                columnNumber: 9
            }, this),
            activeEvent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-md p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between pb-3 border-b border-gray-100 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-bold px-2.5 py-0.5 rounded-full text-white",
                                    style: {
                                        background: activeEvent.color
                                    },
                                    children: activeEvent.category
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 3522,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveEvent(null),
                                    className: "w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconX, {}, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3526,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 3525,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 3521,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-base font-bold text-gray-900 mb-1",
                            children: activeEvent.title
                        }, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 3529,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-400 mb-3",
                            children: [
                                activeEvent.date,
                                " · ",
                                activeEvent.time || "All Day"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 3530,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-600 bg-gray-50 p-3 rounded-xl leading-relaxed mb-4",
                            children: activeEvent.description || "No specific notes for this academic event."
                        }, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 3531,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between gap-2 pt-2 border-t border-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleDeleteEvent(activeEvent.id, activeEvent.date),
                                    className: "px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-50 text-red-600 hover:bg-red-100 cursor-pointer",
                                    children: "Delete Event"
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 3535,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveEvent(null),
                                    className: "px-4 py-1.5 rounded-lg text-xs font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 3541,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 3534,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 3520,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 3519,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 3217,
        columnNumber: 5
    }, this);
}
_s6(AdminCalendar, "gRFuIuajdikgkh4yKu0zhih/d6E=");
_c47 = AdminCalendar;
// ── 8. System Settings ────────────────────────────────────────────────────────
function AdminSystemSettings({ onShowToast }) {
    _s7();
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$adminData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_ADMIN_SETTINGS"]);
    const [savedFeedback, setSavedFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminSystemSettings.useEffect": ()=>{
            try {
                const stored = localStorage.getItem("eduflex_admin_settings");
                if (stored) {
                    setSettings({
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$adminData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_ADMIN_SETTINGS"],
                        ...JSON.parse(stored)
                    });
                }
            } catch  {}
        }
    }["AdminSystemSettings.useEffect"], []);
    const handleSave = (e)=>{
        e.preventDefault();
        try {
            localStorage.setItem("eduflex_admin_settings", JSON.stringify(settings));
        } catch  {}
        setSavedFeedback(true);
        onShowToast("System settings saved successfully!");
        setTimeout(()=>setSavedFeedback(false), 3000);
    };
    const updateSetting = (key, val)=>{
        setSettings((prev)=>({
                ...prev,
                [key]: val
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHeader, {
                breadcrumb: "System Settings",
                title: "System Settings",
                subtitle: "Manage system configuration, security policies, and institution preferences"
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 3589,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSave,
                className: "space-y-5",
                children: [
                    savedFeedback && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm font-semibold flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCheckCircle, {
                                className: "w-5 h-5 text-green-600"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 3598,
                                columnNumber: 13
                            }, this),
                            "Settings saved successfully! Preferences have been updated and persisted locally."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 3597,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl border border-gray-200 shadow-sm p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-4",
                                children: "General Settings"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 3605,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-semibold text-gray-600 mb-1.5",
                                                children: "Institution Name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3608,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: settings.institutionName,
                                                onChange: (e)=>updateSetting("institutionName", e.target.value),
                                                className: "w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3609,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3607,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-semibold text-gray-600 mb-1.5",
                                                children: "Institution Email"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3617,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                value: settings.institutionEmail,
                                                onChange: (e)=>updateSetting("institutionEmail", e.target.value),
                                                className: "w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3618,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3616,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-semibold text-gray-600 mb-1.5",
                                                children: "Contact Number"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3626,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: settings.contactNumber,
                                                onChange: (e)=>updateSetting("contactNumber", e.target.value),
                                                className: "w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3627,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3625,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-semibold text-gray-600 mb-1.5",
                                                children: "Time Zone"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3635,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: settings.timezone,
                                                onChange: (e)=>updateSetting("timezone", e.target.value),
                                                className: "w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Asia/Manila (UTC+8)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3641,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Australia/Sydney (AEST, UTC+10)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3642,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "UTC"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3643,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "America/New_York (EST, UTC-5)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3644,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3636,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3634,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 3606,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 3604,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl border border-gray-200 shadow-sm p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-4",
                                children: "Academic Settings"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 3652,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-semibold text-gray-600 mb-1.5",
                                                children: "Current Semester"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3655,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: settings.currentSemester,
                                                onChange: (e)=>updateSetting("currentSemester", e.target.value),
                                                className: "w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Trimester 2, 2026"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3661,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Trimester 1, 2026"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3662,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Trimester 3, 2025"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3663,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3656,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3654,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-semibold text-gray-600 mb-1.5",
                                                children: "Enrollment Window"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3667,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: settings.enrollmentPeriod,
                                                onChange: (e)=>updateSetting("enrollmentPeriod", e.target.value),
                                                className: "w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3668,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3666,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-semibold text-gray-600 mb-1.5",
                                                children: "Semester Start Date"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3676,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                value: settings.semesterStartDate,
                                                onChange: (e)=>updateSetting("semesterStartDate", e.target.value),
                                                className: "w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3677,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3675,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-semibold text-gray-600 mb-1.5",
                                                children: "Semester End Date"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3685,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                value: settings.semesterEndDate,
                                                onChange: (e)=>updateSetting("semesterEndDate", e.target.value),
                                                className: "w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3686,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3684,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 3653,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 3651,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl border border-gray-200 shadow-sm p-5 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-4",
                                children: "Notifications"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 3698,
                                columnNumber: 11
                            }, this),
                            [
                                {
                                    key: "emailNotifications",
                                    label: "Email Notifications",
                                    sub: "Send system emails and alerts to administrators"
                                },
                                {
                                    key: "studentNotifications",
                                    label: "Student Notifications",
                                    sub: "Notify students of published announcements and deadlines"
                                },
                                {
                                    key: "instructorNotifications",
                                    label: "Instructor Notifications",
                                    sub: "Notify instructors of course changes and enrollments"
                                },
                                {
                                    key: "systemAlerts",
                                    label: "System Maintenance Alerts",
                                    sub: "Receive critical server infrastructure and LMS warnings"
                                }
                            ].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex items-center justify-between py-1 ${idx !== 0 ? "border-t border-gray-100 pt-3" : ""}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold text-gray-800",
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 3707,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-400 mt-0.5",
                                                    children: item.sub
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminDashboard.tsx",
                                                    lineNumber: 3708,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 3706,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>updateSetting(item.key, !settings[item.key]),
                                            className: `w-11 h-6 rounded-full transition-colors duration-200 relative shrink-0 cursor-pointer ${settings[item.key] ? "bg-blue-600" : "bg-gray-200"}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${settings[item.key] ? "translate-x-5" : "translate-x-0.5"}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3717,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 3710,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, item.key, true, {
                                    fileName: "[project]/src/AdminDashboard.tsx",
                                    lineNumber: 3705,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 3697,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl border border-gray-200 shadow-sm p-5 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-4",
                                children: "Security"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 3729,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-semibold text-gray-600 mb-1.5",
                                                children: "Password Policy"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3732,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: settings.passwordPolicy,
                                                onChange: (e)=>updateSetting("passwordPolicy", e.target.value),
                                                className: "w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Strong (8+ chars, uppercase, digit, symbol)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3738,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Moderate (8+ chars, mixed)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3739,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Basic (6+ chars)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3740,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3733,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3731,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-semibold text-gray-600 mb-1.5",
                                                children: "Session Timeout"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3744,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: settings.sessionTimeout,
                                                onChange: (e)=>updateSetting("sessionTimeout", e.target.value),
                                                className: "w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "30 minutes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3750,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "1 hour"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3751,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "4 hours"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3752,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "8 hours"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3753,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3745,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3743,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 3730,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-gray-100 pt-3 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold text-gray-800",
                                                children: "Two-Factor Authentication (2FA)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3759,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400 mt-0.5",
                                                children: "Require 2FA authentication for administrator logins"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3760,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3758,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>updateSetting("twoFactorAuth", !settings.twoFactorAuth),
                                        className: `w-11 h-6 rounded-full transition-colors duration-200 relative shrink-0 cursor-pointer ${settings.twoFactorAuth ? "bg-blue-600" : "bg-gray-200"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${settings.twoFactorAuth ? "translate-x-5" : "translate-x-0.5"}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 3769,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3762,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 3757,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-gray-100 pt-3 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold text-gray-800",
                                                children: "Account Lockout Protection"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3778,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400 mt-0.5",
                                                children: "Lock user accounts automatically after 5 failed login attempts"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3779,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3777,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>updateSetting("loginSecurity", !settings.loginSecurity),
                                        className: `w-11 h-6 rounded-full transition-colors duration-200 relative shrink-0 cursor-pointer ${settings.loginSecurity ? "bg-blue-600" : "bg-gray-200"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${settings.loginSecurity ? "translate-x-5" : "translate-x-0.5"}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminDashboard.tsx",
                                            lineNumber: 3788,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3781,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 3776,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 3728,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl border border-gray-200 shadow-sm p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-4",
                                children: "System Preferences"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 3799,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-semibold text-gray-600 mb-1.5",
                                                children: "Language"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3802,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: settings.language,
                                                onChange: (e)=>updateSetting("language", e.target.value),
                                                className: "w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "English (US)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3808,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "English (UK)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3809,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Filipino"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3810,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3803,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3801,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-semibold text-gray-600 mb-1.5",
                                                children: "Date Format"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3814,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: settings.dateFormat,
                                                onChange: (e)=>updateSetting("dateFormat", e.target.value),
                                                className: "w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "MMM D, YYYY"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3820,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "DD/MM/YYYY"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3821,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "MM/DD/YYYY"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3822,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "YYYY-MM-DD"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminDashboard.tsx",
                                                        lineNumber: 3823,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/AdminDashboard.tsx",
                                                lineNumber: 3815,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/AdminDashboard.tsx",
                                        lineNumber: 3813,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminDashboard.tsx",
                                lineNumber: 3800,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 3798,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end pt-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90 shadow-sm cursor-pointer",
                            style: {
                                background: "#1a3a9e"
                            },
                            children: "Save Changes"
                        }, void 0, false, {
                            fileName: "[project]/src/AdminDashboard.tsx",
                            lineNumber: 3830,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 3829,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 3595,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 3588,
        columnNumber: 5
    }, this);
}
_s7(AdminSystemSettings, "gAAYdwSaHNVGiUp0OUcGPTFz95o=");
_c48 = AdminSystemSettings;
function AdminDashboard({ onLogout = ()=>{} }) {
    _s8();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dashboard");
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userName, setUserName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Rojit Munankarmi");
    // Shared Admin State
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$adminData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_ADMIN_USERS"]);
    const [pending, setPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$adminData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_ADMIN_PENDING"]);
    const [courses, setCourses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$adminData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_ADMIN_COURSES"]);
    const [enrollments, setEnrollments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$adminData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_ADMIN_ENROLLMENTS"]);
    const [announcements, setAnnouncements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$adminData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_ADMIN_ANNOUNCEMENTS"]);
    const [conversations, setConversations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$adminData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_ADMIN_CONVERSATIONS"]);
    const [calendarEvents, setCalendarEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$adminData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_ADMIN_CALENDAR_EVENTS"]);
    // Quick Action transition triggers
    const [userModalAction, setUserModalAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [courseAction, setCourseAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [announcementAction, setAnnouncementAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [reportAction, setReportAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Toast feedback
    const [toastMessage, setToastMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const showToast = (msg)=>{
        setToastMessage(msg);
        setTimeout(()=>setToastMessage(null), 3200);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDashboard.useEffect": ()=>{
            const sessionUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionUser"])();
            if (sessionUser?.name) {
                setUserName(sessionUser.name);
            }
        }
    }["AdminDashboard.useEffect"], []);
    const userInitials = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitials"])(userName);
    const sidebarW = collapsed ? "4rem" : "14rem";
    // Compute total unread messages count
    const unreadMessagesCount = conversations.reduce((acc, c)=>acc + (c.unread || 0), 0);
    // Dynamic search pool across all admin data
    const searchPool = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdminDashboard.useMemo[searchPool]": ()=>{
            const pool = [];
            // Users
            users.forEach({
                "AdminDashboard.useMemo[searchPool]": (u)=>{
                    pool.push({
                        id: `user-${u.id}`,
                        category: "User",
                        title: u.name,
                        subtitle: `${u.id} · ${u.role} · ${u.status}`,
                        badgeColor: u.role === "Instructor" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700",
                        targetPage: "users"
                    });
                }
            }["AdminDashboard.useMemo[searchPool]"]);
            // Courses
            courses.forEach({
                "AdminDashboard.useMemo[searchPool]": (c)=>{
                    pool.push({
                        id: `course-${c.code}`,
                        category: "Course",
                        title: `${c.code} – ${c.name}`,
                        subtitle: `${c.students}/${c.capacity} Enrolled · ${c.instructor} · ${c.status}`,
                        badgeColor: "bg-indigo-100 text-indigo-700",
                        targetPage: "courses"
                    });
                }
            }["AdminDashboard.useMemo[searchPool]"]);
            // Enrollments
            enrollments.forEach({
                "AdminDashboard.useMemo[searchPool]": (e)=>{
                    pool.push({
                        id: `enr-${e.id}`,
                        category: "Enrollment",
                        title: `${e.studentName} – ${e.courseCode}`,
                        subtitle: `${e.semester} · Status: ${e.status}`,
                        badgeColor: "bg-amber-100 text-amber-700",
                        targetPage: "enrollment"
                    });
                }
            }["AdminDashboard.useMemo[searchPool]"]);
            // Announcements
            announcements.forEach({
                "AdminDashboard.useMemo[searchPool]": (a)=>{
                    pool.push({
                        id: `ann-${a.id}`,
                        category: "Announcement",
                        title: a.title,
                        subtitle: `${a.date} · Audience: ${a.audience} · ${a.status}`,
                        badgeColor: "bg-rose-100 text-rose-700",
                        targetPage: "announcements"
                    });
                }
            }["AdminDashboard.useMemo[searchPool]"]);
            // Messages
            conversations.forEach({
                "AdminDashboard.useMemo[searchPool]": (conv)=>{
                    pool.push({
                        id: `msg-${conv.id}`,
                        category: "Message",
                        title: `Message with ${conv.name}`,
                        subtitle: `${conv.role} · "${conv.preview}"`,
                        badgeColor: "bg-cyan-100 text-cyan-700",
                        targetPage: "messages"
                    });
                }
            }["AdminDashboard.useMemo[searchPool]"]);
            // Calendar
            Object.keys(calendarEvents).forEach({
                "AdminDashboard.useMemo[searchPool]": (dateKey)=>{
                    calendarEvents[dateKey].forEach({
                        "AdminDashboard.useMemo[searchPool]": (evt)=>{
                            pool.push({
                                id: `cal-${evt.id}`,
                                category: "Calendar",
                                title: evt.title,
                                subtitle: `${evt.date} · ${evt.category} · ${evt.time || "All Day"}`,
                                badgeColor: "bg-orange-100 text-orange-700",
                                targetPage: "calendar"
                            });
                        }
                    }["AdminDashboard.useMemo[searchPool]"]);
                }
            }["AdminDashboard.useMemo[searchPool]"]);
            // Settings
            pool.push({
                id: "set-1",
                category: "Settings",
                title: "Institution & Academic Settings",
                subtitle: "System configuration, semester terms, and contact info",
                badgeColor: "bg-gray-100 text-gray-700",
                targetPage: "settings"
            });
            pool.push({
                id: "set-2",
                category: "Settings",
                title: "Security & Authentication Policies",
                subtitle: "Password strength, session timeout, and 2FA",
                badgeColor: "bg-gray-100 text-gray-700",
                targetPage: "settings"
            });
            return pool;
        }
    }["AdminDashboard.useMemo[searchPool]"], [
        users,
        courses,
        enrollments,
        announcements,
        conversations,
        calendarEvents
    ]);
    // Handle approving pending approval from Dashboard
    const handleApprovePending = (id)=>{
        const item = pending.find((p)=>p.id === id);
        if (!item) return;
        setPending((prev)=>prev.filter((p)=>p.id !== id));
        // If registration, activate or add user
        if (item.action.toLowerCase().includes("registration")) {
            setUsers((prev)=>{
                const existingIdx = prev.findIndex((u)=>u.email.toLowerCase() === item.email.toLowerCase());
                if (existingIdx >= 0) {
                    const next = [
                        ...prev
                    ];
                    next[existingIdx] = {
                        ...next[existingIdx],
                        status: "Active"
                    };
                    return next;
                }
                const newUser = {
                    id: item.role === "Instructor" ? `INS-202600${Math.floor(10 + Math.random() * 90)}` : `STU-202620${Math.floor(10 + Math.random() * 90)}`,
                    name: item.name,
                    email: item.email,
                    role: item.role,
                    status: "Active",
                    lastActive: "Just now",
                    joined: "Sep 2, 2026",
                    department: item.role === "Instructor" ? "School of IT" : undefined,
                    program: item.role === "Student" ? "BS Information Technology" : undefined,
                    courses: []
                };
                return [
                    newUser,
                    ...prev
                ];
            });
        }
        showToast(`Approved registration for ${item.name}`);
    };
    const handleRejectPending = (id)=>{
        const item = pending.find((p)=>p.id === id);
        if (!item) return;
        setPending((prev)=>prev.filter((p)=>p.id !== id));
        showToast(`Rejected request for ${item.name}`);
    };
    const handleQuickAction = (action)=>{
        if (action === "addUser") {
            setUserModalAction({
                type: "add"
            });
            setActive("users");
        } else if (action === "createCourse") {
            setCourseAction("create");
            setActive("courses");
        } else if (action === "postAnnouncement") {
            setAnnouncementAction("create");
            setActive("announcements");
        } else if (action === "generateReport") {
            setReportAction("generate");
            setActive("reports");
        }
    };
    const renderPage = ()=>{
        switch(active){
            case "dashboard":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdminDashboardHome, {
                    userName: userName,
                    setActive: setActive,
                    users: users,
                    pending: pending,
                    courses: courses,
                    enrollments: enrollments,
                    announcements: announcements,
                    onApprovePending: handleApprovePending,
                    onRejectPending: handleRejectPending,
                    onQuickAction: handleQuickAction
                }, void 0, false, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 4045,
                    columnNumber: 11
                }, this);
            case "users":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$AdminUserManagement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    users: users,
                    setUsers: setUsers,
                    pending: pending,
                    setPending: setPending,
                    initialModal: userModalAction
                }, void 0, false, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 4060,
                    columnNumber: 11
                }, this);
            case "courses":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdminCourseManagement, {
                    courses: courses,
                    setCourses: setCourses,
                    instructors: users.filter((u)=>u.role === "Instructor"),
                    initialAction: courseAction,
                    onClearInitialAction: ()=>setCourseAction(null),
                    onShowToast: showToast
                }, void 0, false, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 4070,
                    columnNumber: 11
                }, this);
            case "enrollment":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdminEnrollment, {
                    enrollments: enrollments,
                    setEnrollments: setEnrollments,
                    students: users.filter((u)=>u.role === "Student"),
                    courses: courses,
                    setCourses: setCourses,
                    onShowToast: showToast
                }, void 0, false, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 4081,
                    columnNumber: 11
                }, this);
            case "reports":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdminReports, {
                    courses: courses,
                    users: users,
                    enrollments: enrollments,
                    initialAction: reportAction,
                    onClearInitialAction: ()=>setReportAction(null),
                    onShowToast: showToast
                }, void 0, false, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 4092,
                    columnNumber: 11
                }, this);
            case "announcements":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdminAnnouncements, {
                    announcements: announcements,
                    setAnnouncements: setAnnouncements,
                    courses: courses,
                    initialAction: announcementAction,
                    onClearInitialAction: ()=>setAnnouncementAction(null),
                    onShowToast: showToast
                }, void 0, false, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 4103,
                    columnNumber: 11
                }, this);
            case "messages":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdminMessages, {
                    conversations: conversations,
                    setConversations: setConversations,
                    onShowToast: showToast
                }, void 0, false, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 4114,
                    columnNumber: 11
                }, this);
            case "calendar":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdminCalendar, {
                    calendarEvents: calendarEvents,
                    setCalendarEvents: setCalendarEvents,
                    onShowToast: showToast
                }, void 0, false, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 4122,
                    columnNumber: 11
                }, this);
            case "settings":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdminSystemSettings, {
                    onShowToast: showToast
                }, void 0, false, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 4129,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdminDashboardHome, {
                    userName: userName,
                    setActive: setActive,
                    users: users,
                    pending: pending,
                    courses: courses,
                    enrollments: enrollments,
                    announcements: announcements,
                    onApprovePending: handleApprovePending,
                    onRejectPending: handleRejectPending,
                    onQuickAction: handleQuickAction
                }, void 0, false, {
                    fileName: "[project]/src/AdminDashboard.tsx",
                    lineNumber: 4132,
                    columnNumber: 11
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 text-gray-900",
        style: {
            fontFamily: "'Outfit', sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdminSidebar, {
                active: active,
                setActive: setActive,
                collapsed: collapsed,
                setCollapsed: setCollapsed,
                onLogout: onLogout
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 4150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdminHeader, {
                sidebarW: sidebarW,
                userName: userName,
                userInitials: userInitials,
                setActive: setActive,
                searchPool: searchPool,
                unreadMessagesCount: unreadMessagesCount
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 4157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "pt-16 min-h-screen transition-all duration-300",
                style: {
                    marginLeft: sidebarW
                },
                children: renderPage()
            }, void 0, false, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 4165,
                columnNumber: 7
            }, this),
            toastMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-gray-900 text-white rounded-xl shadow-2xl text-xs font-semibold animate-in fade-in slide-in-from-bottom-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCheckCircle, {
                        className: "w-4 h-4 text-green-400"
                    }, void 0, false, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 4175,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: toastMessage
                    }, void 0, false, {
                        fileName: "[project]/src/AdminDashboard.tsx",
                        lineNumber: 4176,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/AdminDashboard.tsx",
                lineNumber: 4174,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminDashboard.tsx",
        lineNumber: 4149,
        columnNumber: 5
    }, this);
}
_s8(AdminDashboard, "QnbnUk1Bmj48b4OmEfwFduyv39k=");
_c49 = AdminDashboard;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29, _c30, _c31, _c32, _c33, _c34, _c35, _c36, _c37, _c38, _c39, _c40, _c41, _c42, _c43, _c44, _c45, _c46, _c47, _c48, _c49;
__turbopack_context__.k.register(_c, "IconGraduationCap");
__turbopack_context__.k.register(_c1, "IconDashboard");
__turbopack_context__.k.register(_c2, "IconUsers");
__turbopack_context__.k.register(_c3, "IconBook");
__turbopack_context__.k.register(_c4, "IconEnrollment");
__turbopack_context__.k.register(_c5, "IconBarChart");
__turbopack_context__.k.register(_c6, "IconAnnouncement");
__turbopack_context__.k.register(_c7, "IconX");
__turbopack_context__.k.register(_c8, "IconMessage");
__turbopack_context__.k.register(_c9, "IconSettings");
__turbopack_context__.k.register(_c10, "IconLogout");
__turbopack_context__.k.register(_c11, "IconMail");
__turbopack_context__.k.register(_c12, "IconSearch");
__turbopack_context__.k.register(_c13, "IconChevronsLeft");
__turbopack_context__.k.register(_c14, "IconChevronsRight");
__turbopack_context__.k.register(_c15, "IconChevronRight");
__turbopack_context__.k.register(_c16, "IconChevronLeft");
__turbopack_context__.k.register(_c17, "IconUserPlus");
__turbopack_context__.k.register(_c18, "IconCheckCircle");
__turbopack_context__.k.register(_c19, "IconAlertCircle");
__turbopack_context__.k.register(_c20, "IconClock");
__turbopack_context__.k.register(_c21, "IconShield");
__turbopack_context__.k.register(_c22, "IconTrendingUp");
__turbopack_context__.k.register(_c23, "IconXCircle");
__turbopack_context__.k.register(_c24, "IconCheck");
__turbopack_context__.k.register(_c25, "IconCalendar");
__turbopack_context__.k.register(_c26, "IconTrash");
__turbopack_context__.k.register(_c27, "IconEdit");
__turbopack_context__.k.register(_c28, "IconEye");
__turbopack_context__.k.register(_c29, "IconPaperclip");
__turbopack_context__.k.register(_c30, "IconSend");
__turbopack_context__.k.register(_c31, "IconPlus");
__turbopack_context__.k.register(_c32, "AdminSidebar");
__turbopack_context__.k.register(_c33, "AdminHeader");
__turbopack_context__.k.register(_c34, "ProgressBar");
__turbopack_context__.k.register(_c35, "PageHeader");
__turbopack_context__.k.register(_c36, "Badge");
__turbopack_context__.k.register(_c37, "Th");
__turbopack_context__.k.register(_c38, "Td");
__turbopack_context__.k.register(_c39, "AdminDashboardHome");
__turbopack_context__.k.register(_c40, "AdminCourseManagement");
__turbopack_context__.k.register(_c41, "AdminEnrollment");
__turbopack_context__.k.register(_c42, "SimpleLineChart");
__turbopack_context__.k.register(_c43, "SimpleBarChart");
__turbopack_context__.k.register(_c44, "AdminReports");
__turbopack_context__.k.register(_c45, "AdminAnnouncements");
__turbopack_context__.k.register(_c46, "AdminMessages");
__turbopack_context__.k.register(_c47, "AdminCalendar");
__turbopack_context__.k.register(_c48, "AdminSystemSettings");
__turbopack_context__.k.register(_c49, "AdminDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_AdminDashboard_tsx_1y5u-ek._.js.map