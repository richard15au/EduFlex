(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/AdminUserManagement.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INITIAL_PENDING",
    ()=>INITIAL_PENDING,
    "INITIAL_USERS",
    ()=>INITIAL_USERS,
    "default",
    ()=>AdminUserManagement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
// ── Icons ─────────────────────────────────────────────────────────────────────
const IconCamera = ({ className = "w-4 h-4" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 6,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "13",
                r: "4"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 7,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminUserManagement.tsx",
        lineNumber: 5,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = IconCamera;
const IconUsers = ({ className = "w-5 h-5" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 12,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "9",
                cy: "7",
                r: "4"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 12,
                columnNumber: 57
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M23 21v-2a4 4 0 00-3-3.87"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 13,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 3.13a4 4 0 010 7.75"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 13,
                columnNumber: 43
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminUserManagement.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = IconUsers;
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
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 18,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "8.5",
                cy: "7",
                r: "4"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 18,
                columnNumber: 57
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "20",
                y1: "8",
                x2: "20",
                y2: "14"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 19,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "23",
                y1: "11",
                x2: "17",
                y2: "11"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 19,
                columnNumber: 44
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminUserManagement.tsx",
        lineNumber: 17,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = IconUserPlus;
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
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 24,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "21",
                y1: "21",
                x2: "16.65",
                y2: "16.65"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 24,
                columnNumber: 37
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminUserManagement.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = IconSearch;
const IconChevronDown = ({ className = "w-4 h-4" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "6 9 12 15 18 9"
        }, void 0, false, {
            fileName: "[project]/src/AdminUserManagement.tsx",
            lineNumber: 29,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/AdminUserManagement.tsx",
        lineNumber: 28,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = IconChevronDown;
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
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 34,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "3"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 34,
                columnNumber: 62
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminUserManagement.tsx",
        lineNumber: 33,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c5 = IconEye;
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
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 39,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 40,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminUserManagement.tsx",
        lineNumber: 38,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c6 = IconEdit;
const IconPower = ({ className = "w-4 h-4" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18.36 6.64a9 9 0 11-12.73 0"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 45,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "2",
                x2: "12",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 45,
                columnNumber: 46
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminUserManagement.tsx",
        lineNumber: 44,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c7 = IconPower;
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
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 50,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 50,
                columnNumber: 39
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 11v6"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 51,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14 11v6"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 51,
                columnNumber: 26
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 51,
                columnNumber: 47
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminUserManagement.tsx",
        lineNumber: 49,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c8 = IconTrash;
const IconCheck = ({ className = "w-4 h-4" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "20 6 9 17 4 12"
        }, void 0, false, {
            fileName: "[project]/src/AdminUserManagement.tsx",
            lineNumber: 56,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/AdminUserManagement.tsx",
        lineNumber: 55,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c9 = IconCheck;
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
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 61,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 61,
                columnNumber: 43
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminUserManagement.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c10 = IconX;
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
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 66,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "15",
                y1: "9",
                x2: "9",
                y2: "15"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 66,
                columnNumber: 38
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "9",
                y1: "9",
                x2: "15",
                y2: "15"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 66,
                columnNumber: 76
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminUserManagement.tsx",
        lineNumber: 65,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c11 = IconXCircle;
const IconShield = ({ className = "w-5 h-5" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        }, void 0, false, {
            fileName: "[project]/src/AdminUserManagement.tsx",
            lineNumber: 71,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/AdminUserManagement.tsx",
        lineNumber: 70,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c12 = IconShield;
const IconAlertTriangle = ({ className = "w-6 h-6" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 76,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "9",
                x2: "12",
                y2: "13"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 77,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "17",
                x2: "12.01",
                y2: "17"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 77,
                columnNumber: 44
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminUserManagement.tsx",
        lineNumber: 75,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c13 = IconAlertTriangle;
const IconMail = ({ className = "w-4 h-4" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 82,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "22,6 12,13 2,6"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 83,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminUserManagement.tsx",
        lineNumber: 81,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c14 = IconMail;
const IconCalendar = ({ className = "w-4 h-4" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "4",
                width: "18",
                height: "18",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 88,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "16",
                y1: "2",
                x2: "16",
                y2: "6"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 88,
                columnNumber: 55
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "2",
                x2: "8",
                y2: "6"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 89,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "3",
                y1: "10",
                x2: "21",
                y2: "10"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 89,
                columnNumber: 41
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminUserManagement.tsx",
        lineNumber: 87,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c15 = IconCalendar;
const IconPhone = ({ className = "w-4 h-4" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.1 1.22 2 2 0 012.1 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l.91-.91a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 15.18v1.74z"
        }, void 0, false, {
            fileName: "[project]/src/AdminUserManagement.tsx",
            lineNumber: 94,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/AdminUserManagement.tsx",
        lineNumber: 93,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c16 = IconPhone;
const IconFilter = ({ className = "w-4 h-4" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
            points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
        }, void 0, false, {
            fileName: "[project]/src/AdminUserManagement.tsx",
            lineNumber: 99,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/AdminUserManagement.tsx",
        lineNumber: 98,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c17 = IconFilter;
const IconMoreVertical = ({ className = "w-4 h-4" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "5",
                r: "1"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 104,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "1"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 104,
                columnNumber: 36
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "19",
                r: "1"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 104,
                columnNumber: 68
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminUserManagement.tsx",
        lineNumber: 103,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c18 = IconMoreVertical;
const IconClock = ({ className = "w-4 h-4" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 109,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "12 6 12 12 16 14"
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 109,
                columnNumber: 38
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminUserManagement.tsx",
        lineNumber: 108,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c19 = IconClock;
const INITIAL_USERS = [
    {
        id: "STU-20262001",
        name: "Maria Santos",
        email: "m.santos@eduflex.edu.ph",
        role: "Student",
        status: "Active",
        lastActive: "Sep 2, 2026, 10:42 AM",
        joined: "Sep 1, 2026",
        program: "BS Information Technology",
        phone: "+63 917 123 4567",
        courses: [
            "ICT301",
            "ICT272"
        ]
    },
    {
        id: "STU-20262002",
        name: "James Reyes",
        email: "j.reyes@eduflex.edu.ph",
        role: "Student",
        status: "Active",
        lastActive: "Sep 2, 2026, 9:15 AM",
        joined: "Sep 1, 2026",
        program: "BS Information Technology",
        phone: "+63 918 234 5678",
        courses: [
            "ICT301",
            "ICT126"
        ]
    },
    {
        id: "INS-20260034",
        name: "Anna Cruz",
        email: "a.cruz@eduflex.edu.ph",
        role: "Instructor",
        status: "Active",
        lastActive: "Sep 2, 2026, 8:00 AM",
        joined: "Aug 31, 2026",
        department: "School of IT",
        phone: "+63 919 345 6789",
        courses: [
            "ICT272",
            "ICT350"
        ]
    },
    {
        id: "INS-20260035",
        name: "Prof. Eduardo Lim",
        email: "e.lim@eduflex.edu.ph",
        role: "Instructor",
        status: "Active",
        lastActive: "Sep 1, 2026, 4:30 PM",
        joined: "Aug 15, 2026",
        department: "School of IT",
        phone: "+63 920 456 7890",
        courses: [
            "ICT301",
            "ICT126"
        ]
    },
    {
        id: "STU-20262003",
        name: "Carlos Bautista",
        email: "c.bautista@eduflex.edu.ph",
        role: "Student",
        status: "Inactive",
        lastActive: "Aug 20, 2026, 2:11 PM",
        joined: "Aug 30, 2026",
        program: "BS Information Technology",
        phone: "+63 921 567 8901",
        courses: []
    },
    {
        id: "STU-20262004",
        name: "Sophia Dela Torre",
        email: "s.delatorre@eduflex.edu.ph",
        role: "Student",
        status: "Active",
        lastActive: "Sep 2, 2026, 11:03 AM",
        joined: "Aug 28, 2026",
        program: "BS Information Technology",
        phone: "+63 922 678 9012",
        courses: [
            "ICT272"
        ]
    },
    {
        id: "STU-20262005",
        name: "Mark Villanueva",
        email: "m.villanueva@eduflex.edu.ph",
        role: "Student",
        status: "Active",
        lastActive: "Sep 2, 2026, 7:45 AM",
        joined: "Aug 27, 2026",
        program: "BS Information Technology",
        phone: "+63 923 789 0123",
        courses: [
            "ICT126",
            "ICT350"
        ]
    },
    {
        id: "INS-20260036",
        name: "Dr. Rachel Gomez",
        email: "r.gomez@eduflex.edu.ph",
        role: "Instructor",
        status: "Active",
        lastActive: "Sep 1, 2026, 5:00 PM",
        joined: "Jul 10, 2026",
        department: "School of IT",
        phone: "+63 924 890 1234",
        courses: [
            "ICT126"
        ]
    },
    {
        id: "STU-20262006",
        name: "Rico Dela Cruz",
        email: "r.delacruz@eduflex.edu.ph",
        role: "Student",
        status: "Inactive",
        lastActive: "Aug 15, 2026, 9:00 AM",
        joined: "Aug 25, 2026",
        program: "BS Information Technology",
        phone: "+63 925 901 2345",
        courses: []
    },
    {
        id: "STU-20262007",
        name: "Patricia Aquino",
        email: "p.aquino@eduflex.edu.ph",
        role: "Student",
        status: "Active",
        lastActive: "Sep 2, 2026, 10:10 AM",
        joined: "Aug 22, 2026",
        program: "BS Information Technology",
        phone: "+63 926 012 3456",
        courses: [
            "ICT301"
        ]
    },
    {
        id: "STU-20262008",
        name: "Gabriel Mendoza",
        email: "g.mendoza@eduflex.edu.ph",
        role: "Student",
        status: "Active",
        lastActive: "Sep 1, 2026, 3:20 PM",
        joined: "Aug 20, 2026",
        program: "BS Information Technology",
        phone: "+63 927 123 4567",
        courses: [
            "ICT272",
            "ICT126"
        ]
    },
    {
        id: "INS-20260037",
        name: "Prof. Carla Tan",
        email: "c.tan@eduflex.edu.ph",
        role: "Instructor",
        status: "Active",
        lastActive: "Aug 30, 2026, 11:30 AM",
        joined: "Jun 1, 2026",
        department: "School of IT",
        phone: "+63 928 234 5678",
        courses: [
            "ICT350"
        ]
    }
];
const INITIAL_PENDING = [
    {
        id: "PA-001",
        name: "Bea Tolentino",
        initials: "BT",
        role: "Instructor",
        action: "Account Registration",
        email: "b.tolentino@eduflex.edu.ph",
        submitted: "Sep 1, 2026"
    },
    {
        id: "PA-002",
        name: "Karl Navarro",
        initials: "KN",
        role: "Student",
        action: "Late Enrollment – ICT301",
        email: "karl.navarro@eduflex.edu.ph",
        submitted: "Sep 1, 2026"
    },
    {
        id: "PA-003",
        name: "Liza Mendoza",
        initials: "LM",
        role: "Instructor",
        action: "Account Registration",
        email: "l.mendoza@eduflex.edu.ph",
        submitted: "Aug 31, 2026"
    },
    {
        id: "PA-004",
        name: "Nico Aguilar",
        initials: "NA",
        role: "Student",
        action: "Course Override – ICT272",
        email: "n.aguilar@eduflex.edu.ph",
        submitted: "Aug 30, 2026"
    },
    {
        id: "PA-005",
        name: "Danilo Santos",
        initials: "DS",
        role: "Student",
        action: "Account Registration",
        email: "d.santos@eduflex.edu.ph",
        submitted: "Aug 29, 2026"
    }
];
// ── Helpers ───────────────────────────────────────────────────────────────────
function initials(name) {
    return name.replace(/^(Prof\.|Dr\.)\s*/i, "").split(" ").map((n)=>n[0]).join("").slice(0, 2).toUpperCase();
}
function avatarBg(role) {
    return role === "Instructor" ? "#7c3aed" : "#2563eb";
}
// ── Badge ─────────────────────────────────────────────────────────────────────
function RoleBadge({ role }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full ${role === "Instructor" ? "bg-purple-50 text-purple-700" : "bg-blue-50 text-blue-700"}`,
        children: role
    }, void 0, false, {
        fileName: "[project]/src/AdminUserManagement.tsx",
        lineNumber: 178,
        columnNumber: 5
    }, this);
}
_c20 = RoleBadge;
function StatusBadge({ status }) {
    const cfg = {
        Active: {
            dot: "bg-green-500",
            cls: "bg-green-50 text-green-700"
        },
        Inactive: {
            dot: "bg-gray-400",
            cls: "bg-gray-100 text-gray-500"
        },
        Pending: {
            dot: "bg-yellow-400",
            cls: "bg-yellow-50 text-yellow-700"
        }
    }[status];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full ${cfg.cls}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `w-1.5 h-1.5 rounded-full shrink-0 ${cfg.dot}`
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            status
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminUserManagement.tsx",
        lineNumber: 193,
        columnNumber: 5
    }, this);
}
_c21 = StatusBadge;
// ── Modal Backdrop ────────────────────────────────────────────────────────────
function Backdrop({ onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/40 backdrop-blur-sm z-40",
        onClick: onClose
    }, void 0, false, {
        fileName: "[project]/src/AdminUserManagement.tsx",
        lineNumber: 203,
        columnNumber: 5
    }, this);
}
_c22 = Backdrop;
// ── View User Modal ───────────────────────────────────────────────────────────
function ViewUserModal({ user, onClose, onEdit }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Backdrop, {
                onClose: onClose
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-2xl w-full max-w-lg pointer-events-auto overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-4 px-6 pt-6 pb-5 border-b border-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-bold shrink-0 overflow-hidden",
                                    style: {
                                        background: avatarBg(user.role)
                                    },
                                    children: user.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: user.avatar,
                                        alt: user.name,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminUserManagement.tsx",
                                        lineNumber: 222,
                                        columnNumber: 17
                                    }, this) : initials(user.name)
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-bold text-gray-900 truncate",
                                            children: user.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                            lineNumber: 228,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-mono text-gray-400 mt-0.5",
                                            children: user.id
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                            lineNumber: 229,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RoleBadge, {
                                                    role: user.role
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                                                    status: user.status
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                            lineNumber: 230,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                    lineNumber: 227,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconX, {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminUserManagement.tsx",
                                        lineNumber: 236,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                    lineNumber: 235,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminUserManagement.tsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-6 py-5 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Detail, {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconMail, {}, void 0, false, {
                                                fileName: "[project]/src/AdminUserManagement.tsx",
                                                lineNumber: 243,
                                                columnNumber: 29
                                            }, this),
                                            label: "Email",
                                            value: user.email
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                            lineNumber: 243,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Detail, {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconPhone, {}, void 0, false, {
                                                fileName: "[project]/src/AdminUserManagement.tsx",
                                                lineNumber: 244,
                                                columnNumber: 29
                                            }, this),
                                            label: "Phone",
                                            value: user.phone ?? "—"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                            lineNumber: 244,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Detail, {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCalendar, {}, void 0, false, {
                                                fileName: "[project]/src/AdminUserManagement.tsx",
                                                lineNumber: 245,
                                                columnNumber: 29
                                            }, this),
                                            label: "Joined",
                                            value: user.joined
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                            lineNumber: 245,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Detail, {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconClock, {}, void 0, false, {
                                                fileName: "[project]/src/AdminUserManagement.tsx",
                                                lineNumber: 246,
                                                columnNumber: 29
                                            }, this),
                                            label: "Last Active",
                                            value: user.lastActive
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                            lineNumber: 246,
                                            columnNumber: 15
                                        }, this),
                                        user.role === "Student" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Detail, {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconShield, {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminUserManagement.tsx",
                                                lineNumber: 247,
                                                columnNumber: 57
                                            }, this),
                                            label: "Program",
                                            value: user.program ?? "—"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                            lineNumber: 247,
                                            columnNumber: 43
                                        }, this),
                                        user.role === "Instructor" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Detail, {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconShield, {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminUserManagement.tsx",
                                                lineNumber: 248,
                                                columnNumber: 60
                                            }, this),
                                            label: "Department",
                                            value: user.department ?? "—"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                            lineNumber: 248,
                                            columnNumber: 46
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                    lineNumber: 242,
                                    columnNumber: 13
                                }, this),
                                user.courses && user.courses.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2",
                                            children: "Enrolled Courses"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                            lineNumber: 252,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: user.courses.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-semibold bg-blue-50 text-blue-700 px-2.5 py-1 rounded-lg",
                                                    children: c
                                                }, c, false, {
                                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                            lineNumber: 253,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                    lineNumber: 251,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminUserManagement.tsx",
                            lineNumber: 241,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 px-6 pb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onEdit,
                                    className: "flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white transition-colors",
                                    style: {
                                        background: "#1a3a9e"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconEdit, {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                            lineNumber: 268,
                                            columnNumber: 15
                                        }, this),
                                        " Edit User"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                    lineNumber: 263,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "px-5 py-2.5 rounded-xl text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                    lineNumber: 270,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminUserManagement.tsx",
                            lineNumber: 262,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/AdminUserManagement.tsx",
                    lineNumber: 216,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminUserManagement.tsx",
        lineNumber: 213,
        columnNumber: 5
    }, this);
}
_c23 = ViewUserModal;
function Detail({ icon, label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 283,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1.5 text-sm text-gray-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-400 shrink-0",
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/src/AdminUserManagement.tsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "truncate",
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/src/AdminUserManagement.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminUserManagement.tsx",
        lineNumber: 282,
        columnNumber: 5
    }, this);
}
_c24 = Detail;
// ── Add / Edit User Modal ─────────────────────────────────────────────────────
function UserFormModal({ user, onClose, onSave }) {
    _s();
    const isEdit = user !== null;
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(user ?? {
        role: "Student",
        status: "Active",
        courses: []
    });
    const [avatarError, setAvatarError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    function set(field, value) {
        setForm((f)=>({
                ...f,
                [field]: value
            }));
    }
    function handleFileChange(e) {
        const file = e.target.files?.[0];
        if (!file) return;
        if (!file.type.startsWith("image/")) {
            setAvatarError("Please select a valid image file (PNG, JPG, or WebP).");
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            setAvatarError("Image file size must be less than 5MB.");
            return;
        }
        setAvatarError(null);
        const reader = new FileReader();
        reader.onload = ()=>{
            if (typeof reader.result === "string") {
                setForm((f)=>({
                        ...f,
                        avatar: reader.result
                    }));
            }
        };
        reader.readAsDataURL(file);
    }
    function handleRemoveAvatar() {
        setForm((f)=>({
                ...f,
                avatar: undefined
            }));
        setAvatarError(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    }
    function handleSave() {
        if (!form.name?.trim() || !form.email?.trim()) return;
        const now = "Sep 2, 2026";
        onSave({
            id: form.id ?? `STU-${Date.now()}`,
            name: form.name,
            email: form.email,
            role: form.role ?? "Student",
            status: form.status ?? "Active",
            lastActive: form.lastActive ?? "—",
            joined: form.joined ?? now,
            avatar: form.avatar,
            phone: form.phone,
            program: form.program,
            department: form.department,
            courses: form.courses ?? []
        });
    }
    const labelCls = "block text-xs font-semibold text-gray-500 mb-1";
    const inputCls = "w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 transition";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Backdrop, {
                onClose: onClose
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 367,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-2xl w-full max-w-lg pointer-events-auto overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-6 py-5 border-b border-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-base font-bold text-gray-900",
                                            children: isEdit ? "Edit User" : "Add New User"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                            lineNumber: 372,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-400 mt-0.5",
                                            children: isEdit ? `Editing ${user.name}` : "Create a new user account"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                            lineNumber: 373,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                    lineNumber: 371,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconX, {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminUserManagement.tsx",
                                        lineNumber: 376,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                    lineNumber: 375,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminUserManagement.tsx",
                            lineNumber: 370,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-6 py-5 space-y-4 max-h-[60vh] overflow-y-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: labelCls,
                                            children: "Profile Picture"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                            lineNumber: 383,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 p-3 bg-gray-50 border border-gray-200 rounded-xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-14 h-14 rounded-full overflow-hidden shrink-0 flex items-center justify-center text-white text-base font-bold shadow-inner border-2 border-white ring-1 ring-gray-200",
                                                    style: {
                                                        background: avatarBg(form.role ?? "Student")
                                                    },
                                                    children: form.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: form.avatar,
                                                        alt: "Profile preview",
                                                        className: "w-full h-full object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminUserManagement.tsx",
                                                        lineNumber: 390,
                                                        columnNumber: 21
                                                    }, this) : form.name?.trim() ? initials(form.name) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCamera, {
                                                        className: "w-6 h-6 text-white/80"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/AdminUserManagement.tsx",
                                                        lineNumber: 394,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                                    lineNumber: 385,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>fileInputRef.current?.click(),
                                                                    className: "inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 text-xs font-semibold rounded-lg shadow-sm transition-colors cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCamera, {
                                                                            className: "w-3.5 h-3.5 text-gray-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                                                            lineNumber: 405,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        form.avatar ? "Change Photo" : "Upload Photo"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                                                    lineNumber: 400,
                                                                    columnNumber: 21
                                                                }, this),
                                                                form.avatar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: handleRemoveAvatar,
                                                                    className: "inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconX, {
                                                                            className: "w-3.5 h-3.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                                                            lineNumber: 414,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        "Remove"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                                                    lineNumber: 409,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                                            lineNumber: 399,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] text-gray-400 mt-1",
                                                            children: "PNG, JPG, or WebP. Fallback to initials if unset."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                                            lineNumber: 419,
                                                            columnNumber: 19
                                                        }, this),
                                                        avatarError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] text-red-600 font-medium mt-1",
                                                            children: avatarError
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                                            lineNumber: 420,
                                                            columnNumber: 35
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                                    lineNumber: 398,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    ref: fileInputRef,
                                                    type: "file",
                                                    accept: "image/png,image/jpeg,image/jpg,image/webp,image/svg+xml",
                                                    onChange: handleFileChange,
                                                    className: "hidden"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                            lineNumber: 384,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                    lineNumber: 382,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: labelCls,
                                                    children: "Full Name *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: inputCls,
                                                    value: form.name ?? "",
                                                    onChange: (e)=>set("name", e.target.value),
                                                    placeholder: "e.g. Maria Santos"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                                    lineNumber: 436,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                            lineNumber: 434,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: labelCls,
                                                    children: "Email Address *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                                    lineNumber: 439,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: inputCls,
                                                    type: "email",
                                                    value: form.email ?? "",
                                                    onChange: (e)=>set("email", e.target.value),
                                                    placeholder: "user@eduflex.edu.ph"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                                    lineNumber: 440,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                            lineNumber: 438,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                    lineNumber: 433,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: labelCls,
                                                    children: "Role"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                                    lineNumber: 445,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            className: `${inputCls} appearance-none pr-8`,
                                                            value: form.role ?? "Student",
                                                            onChange: (e)=>set("role", e.target.value),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    children: "Student"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                                                    lineNumber: 448,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    children: "Instructor"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                                                    lineNumber: 449,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                                            lineNumber: 447,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconChevronDown, {}, void 0, false, {
                                                                fileName: "[project]/src/AdminUserManagement.tsx",
                                                                lineNumber: 451,
                                                                columnNumber: 115
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                                            lineNumber: 451,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                                    lineNumber: 446,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                            lineNumber: 444,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: labelCls,
                                                    children: "Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                                    lineNumber: 455,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            className: `${inputCls} appearance-none pr-8`,
                                                            value: form.status ?? "Active",
                                                            onChange: (e)=>set("status", e.target.value),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    children: "Active"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                                                    lineNumber: 458,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    children: "Inactive"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                                                    lineNumber: 459,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    children: "Pending"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                                                    lineNumber: 460,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                                            lineNumber: 457,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconChevronDown, {}, void 0, false, {
                                                                fileName: "[project]/src/AdminUserManagement.tsx",
                                                                lineNumber: 462,
                                                                columnNumber: 115
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                                            lineNumber: 462,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                                    lineNumber: 456,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                            lineNumber: 454,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                    lineNumber: 443,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: labelCls,
                                                    children: "Phone"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                                    lineNumber: 468,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: inputCls,
                                                    value: form.phone ?? "",
                                                    onChange: (e)=>set("phone", e.target.value),
                                                    placeholder: "+63 9XX XXX XXXX"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                                    lineNumber: 469,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                            lineNumber: 467,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: labelCls,
                                                    children: form.role === "Instructor" ? "Department" : "Program"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                                    lineNumber: 472,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: inputCls,
                                                    value: form.role === "Instructor" ? form.department ?? "" : form.program ?? "",
                                                    onChange: (e)=>form.role === "Instructor" ? set("department", e.target.value) : set("program", e.target.value),
                                                    placeholder: form.role === "Instructor" ? "e.g. School of IT" : "e.g. BS Information Technology"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                                    lineNumber: 473,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                            lineNumber: 471,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                    lineNumber: 466,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminUserManagement.tsx",
                            lineNumber: 380,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 px-6 pb-6 border-t border-gray-100 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSave,
                                    className: "flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white transition-colors hover:opacity-90",
                                    style: {
                                        background: "#1a3a9e"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCheck, {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                            lineNumber: 488,
                                            columnNumber: 15
                                        }, this),
                                        isEdit ? "Save Changes" : "Create User"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                    lineNumber: 483,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "px-5 py-2.5 rounded-xl text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                    lineNumber: 491,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminUserManagement.tsx",
                            lineNumber: 482,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/AdminUserManagement.tsx",
                    lineNumber: 369,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 368,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminUserManagement.tsx",
        lineNumber: 366,
        columnNumber: 5
    }, this);
}
_s(UserFormModal, "yM/C3h2TDiD+U9RMdeOmdzBxtOA=");
_c25 = UserFormModal;
const CONFIRM_CFG = {
    delete: {
        title: "Delete User Account",
        desc: (n)=>`Are you sure you want to permanently delete ${n}'s account? This action cannot be undone and all associated data will be removed.`,
        action: "Delete Account",
        cls: "bg-red-600 hover:bg-red-700 text-white",
        iconBg: "bg-red-100",
        iconColor: "text-red-600"
    },
    deactivate: {
        title: "Deactivate User Account",
        desc: (n)=>`Are you sure you want to deactivate ${n}'s account? They will lose access to the portal until reactivated.`,
        action: "Deactivate Account",
        cls: "bg-orange-500 hover:bg-orange-600 text-white",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-500"
    },
    activate: {
        title: "Activate User Account",
        desc: (n)=>`Activate ${n}'s account? They will regain full access to the EduFlex portal.`,
        action: "Activate Account",
        cls: "bg-green-600 hover:bg-green-700 text-white",
        iconBg: "bg-green-100",
        iconColor: "text-green-600"
    },
    approve: {
        title: "Approve Request",
        desc: (n)=>`Approve ${n}'s pending request? This will grant them access to the EduFlex portal.`,
        action: "Approve",
        cls: "bg-green-600 hover:bg-green-700 text-white",
        iconBg: "bg-green-100",
        iconColor: "text-green-600"
    },
    reject: {
        title: "Reject Request",
        desc: (n)=>`Reject ${n}'s pending request? They will be notified and their account will not be created.`,
        action: "Reject",
        cls: "bg-red-600 hover:bg-red-700 text-white",
        iconBg: "bg-red-100",
        iconColor: "text-red-600"
    }
};
function ConfirmDialog({ variant, targetName, onConfirm, onClose }) {
    const cfg = CONFIRM_CFG[variant];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Backdrop, {
                onClose: onClose
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 558,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-2xl w-full max-w-sm pointer-events-auto p-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `w-14 h-14 rounded-2xl ${cfg.iconBg} flex items-center justify-center ${cfg.iconColor} mx-auto mb-4`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconAlertTriangle, {
                                className: "w-7 h-7"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminUserManagement.tsx",
                                lineNumber: 562,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/AdminUserManagement.tsx",
                            lineNumber: 561,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-base font-bold text-gray-900 mb-2",
                            children: cfg.title
                        }, void 0, false, {
                            fileName: "[project]/src/AdminUserManagement.tsx",
                            lineNumber: 564,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-500 mb-6 leading-relaxed",
                            children: cfg.desc(targetName)
                        }, void 0, false, {
                            fileName: "[project]/src/AdminUserManagement.tsx",
                            lineNumber: 565,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "flex-1 py-2.5 rounded-xl text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                    lineNumber: 567,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onConfirm,
                                    className: `flex-1 py-2.5 rounded-xl text-sm font-semibold transition-colors ${cfg.cls}`,
                                    children: cfg.action
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                    lineNumber: 570,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/AdminUserManagement.tsx",
                            lineNumber: 566,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/AdminUserManagement.tsx",
                    lineNumber: 560,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 559,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminUserManagement.tsx",
        lineNumber: 557,
        columnNumber: 5
    }, this);
}
_c26 = ConfirmDialog;
// ── Row Actions Dropdown ──────────────────────────────────────────────────────
function RowActions({ user, onView, onEdit, onToggleStatus, onDelete }) {
    _s1();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpen((o)=>!o),
                className: "p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconMoreVertical, {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/AdminUserManagement.tsx",
                    lineNumber: 601,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 597,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-10",
                        onClick: ()=>setOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/src/AdminUserManagement.tsx",
                        lineNumber: 605,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-20 py-1 w-44 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setOpen(false);
                                    onView();
                                },
                                className: "w-full flex items-center gap-2.5 px-3.5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconEye, {
                                        className: "w-4 h-4 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminUserManagement.tsx",
                                        lineNumber: 609,
                                        columnNumber: 15
                                    }, this),
                                    " View Details"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminUserManagement.tsx",
                                lineNumber: 607,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setOpen(false);
                                    onEdit();
                                },
                                className: "w-full flex items-center gap-2.5 px-3.5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconEdit, {
                                        className: "w-4 h-4 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminUserManagement.tsx",
                                        lineNumber: 613,
                                        columnNumber: 15
                                    }, this),
                                    " Edit User"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminUserManagement.tsx",
                                lineNumber: 611,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setOpen(false);
                                    onToggleStatus();
                                },
                                className: `w-full flex items-center gap-2.5 px-3.5 py-2.5 text-sm hover:bg-gray-50 transition-colors ${user.status === "Active" ? "text-orange-600" : "text-green-700"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconPower, {
                                        className: `w-4 h-4 ${user.status === "Active" ? "text-orange-400" : "text-green-500"}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminUserManagement.tsx",
                                        lineNumber: 617,
                                        columnNumber: 15
                                    }, this),
                                    user.status === "Active" ? "Deactivate" : "Activate"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminUserManagement.tsx",
                                lineNumber: 615,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-gray-100 my-1"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminUserManagement.tsx",
                                lineNumber: 620,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setOpen(false);
                                    onDelete();
                                },
                                className: "w-full flex items-center gap-2.5 px-3.5 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconTrash, {
                                        className: "w-4 h-4 text-red-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminUserManagement.tsx",
                                        lineNumber: 623,
                                        columnNumber: 15
                                    }, this),
                                    " Delete User"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminUserManagement.tsx",
                                lineNumber: 621,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminUserManagement.tsx",
                        lineNumber: 606,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 604,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminUserManagement.tsx",
        lineNumber: 596,
        columnNumber: 5
    }, this);
}
_s1(RowActions, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c27 = RowActions;
// ── Stat Card ─────────────────────────────────────────────────────────────────
function StatCard({ title, value, subtitle, icon, bg, iconBg, textColor, onClick, active = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "button",
        tabIndex: 0,
        "aria-label": `${title}: ${value}`,
        onClick: onClick,
        onKeyDown: (e)=>{
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick?.();
            }
        },
        className: `rounded-2xl border shadow-sm p-4 flex items-start gap-3 cursor-pointer select-none transition-all duration-150 hover:shadow-md active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-blue-400/40 ${bg} ${active ? title === "Pending Approvals" ? "ring-2 ring-orange-400/50 shadow-sm" : "ring-2 ring-blue-500/40 shadow-sm" : "hover:border-gray-300"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${iconBg}`,
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 674,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-[10px] font-bold uppercase tracking-wider mb-0.5 ${textColor} opacity-70`,
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/AdminUserManagement.tsx",
                        lineNumber: 678,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-2xl font-extrabold leading-none ${textColor}`,
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/src/AdminUserManagement.tsx",
                        lineNumber: 679,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-xs mt-1 ${textColor} opacity-60 truncate`,
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/src/AdminUserManagement.tsx",
                        lineNumber: 680,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 677,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminUserManagement.tsx",
        lineNumber: 655,
        columnNumber: 5
    }, this);
}
_c28 = StatCard;
function AdminUserManagement({ users: controlledUsers, setUsers: controlledSetUsers, pending: controlledPending, setPending: controlledSetPending, initialModal = null } = {}) {
    _s2();
    const [internalUsers, setInternalUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(INITIAL_USERS);
    const [internalPending, setInternalPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(INITIAL_PENDING);
    const users = controlledUsers ?? internalUsers;
    const setUsers = controlledSetUsers ?? setInternalUsers;
    const pending = controlledPending ?? internalPending;
    const setPending = controlledSetPending ?? setInternalPending;
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [roleFilter, setRoleFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All Roles");
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All Status");
    const [modal, setModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialModal);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminUserManagement.useEffect": ()=>{
            if (initialModal) {
                setModal(initialModal);
            }
        }
    }["AdminUserManagement.useEffect"], [
        initialModal
    ]);
    // Toast notification
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    function showToast(msg) {
        const key = Date.now();
        setToast({
            msg,
            key
        });
        setTimeout(()=>setToast(null), 3000);
    }
    // Filtered users
    const filtered = users.filter((u)=>{
        const q = search.toLowerCase();
        const matchSearch = !q || u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || u.id.toLowerCase().includes(q);
        const matchRole = roleFilter === "All Roles" || u.role === roleFilter;
        const matchStatus = statusFilter === "All Status" || u.status === statusFilter;
        return matchSearch && matchRole && matchStatus;
    });
    // Filtered pending items
    const filteredPending = pending.filter((p)=>{
        const q = search.toLowerCase();
        const matchSearch = !q || p.name.toLowerCase().includes(q) || p.email.toLowerCase().includes(q) || p.id.toLowerCase().includes(q) || p.action.toLowerCase().includes(q);
        const matchRole = roleFilter === "All Roles" || p.role === roleFilter;
        return matchSearch && matchRole;
    });
    const handleTotalUsersClick = ()=>{
        setRoleFilter("All Roles");
        setStatusFilter("All Status");
        setSearch("");
    };
    const handleStudentsClick = ()=>{
        setRoleFilter("Student");
        if (statusFilter === "Pending") {
            setStatusFilter("All Status");
        }
    };
    const handleInstructorsClick = ()=>{
        setRoleFilter("Instructor");
        if (statusFilter === "Pending") {
            setStatusFilter("All Status");
        }
    };
    const handlePendingApprovalsClick = ()=>{
        setStatusFilter("Pending");
        setRoleFilter("All Roles");
    };
    function handleSaveUser(u) {
        setUsers((prev)=>{
            const idx = prev.findIndex((x)=>x.id === u.id);
            if (idx >= 0) {
                const next = [
                    ...prev
                ];
                next[idx] = u;
                return next;
            }
            return [
                u,
                ...prev
            ];
        });
        setModal(null);
        showToast(modal?.type === "edit" ? `${u.name}'s profile updated.` : `${u.name} added successfully.`);
    }
    function handleConfirm() {
        if (!modal) return;
        if (modal.type === "confirm") {
            const { variant, userId, name } = modal;
            if (variant === "delete") {
                setUsers((prev)=>prev.filter((u)=>u.id !== userId));
                showToast(`${name}'s account has been deleted.`);
            } else if (variant === "deactivate") {
                setUsers((prev)=>prev.map((u)=>u.id === userId ? {
                            ...u,
                            status: "Inactive"
                        } : u));
                showToast(`${name}'s account deactivated.`);
            } else if (variant === "activate") {
                setUsers((prev)=>prev.map((u)=>u.id === userId ? {
                            ...u,
                            status: "Active"
                        } : u));
                showToast(`${name}'s account activated.`);
            }
        } else if (modal.type === "confirmPending") {
            const { variant, pendingId, name } = modal;
            if (variant === "approve") {
                const item = pending.find((p)=>p.id === pendingId);
                if (item) {
                    const newUser = {
                        id: `${item.role === "Instructor" ? "INS" : "STU"}-2026${Math.floor(1000 + Math.random() * 9000)}`,
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
                    setUsers((prev)=>[
                            newUser,
                            ...prev
                        ]);
                }
            }
            setPending((prev)=>prev.filter((p)=>p.id !== pendingId));
            showToast(variant === "approve" ? `${name}'s request approved.` : `${name}'s request rejected.`);
        }
        setModal(null);
    }
    const totalStudents = users.filter((u)=>u.role === "Student").length;
    const totalInstructors = users.filter((u)=>u.role === "Instructor").length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 relative",
        children: [
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 right-6 z-[60] bg-gray-900 text-white text-sm font-medium px-4 py-3 rounded-xl shadow-xl flex items-center gap-2 animate-fade-in-up",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCheck, {
                        className: "w-4 h-4 text-green-400 shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/src/AdminUserManagement.tsx",
                        lineNumber: 845,
                        columnNumber: 11
                    }, this),
                    toast.msg
                ]
            }, toast.key, true, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 844,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-xs text-gray-400 mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Admin"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminUserManagement.tsx",
                                lineNumber: 853,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminUserManagement.tsx",
                                lineNumber: 853,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-600",
                                children: "User Management"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminUserManagement.tsx",
                                lineNumber: 854,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminUserManagement.tsx",
                        lineNumber: 852,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold text-gray-900",
                                        children: "User Management"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminUserManagement.tsx",
                                        lineNumber: 858,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500 mt-0.5",
                                        children: "Manage students, instructors, and user accounts."
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminUserManagement.tsx",
                                        lineNumber: 859,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminUserManagement.tsx",
                                lineNumber: 857,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setModal({
                                        type: "add"
                                    }),
                                className: "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity",
                                style: {
                                    background: "#1a3a9e"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconUserPlus, {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminUserManagement.tsx",
                                        lineNumber: 866,
                                        columnNumber: 13
                                    }, this),
                                    "Add New User"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminUserManagement.tsx",
                                lineNumber: 861,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminUserManagement.tsx",
                        lineNumber: 856,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 851,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        title: "Total Users",
                        value: `${users.length.toLocaleString()}`,
                        subtitle: "All registered accounts",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconUsers, {}, void 0, false, {
                            fileName: "[project]/src/AdminUserManagement.tsx",
                            lineNumber: 878,
                            columnNumber: 17
                        }, this),
                        bg: "bg-white border-gray-200",
                        iconBg: "bg-blue-50 text-blue-600",
                        textColor: "text-gray-800",
                        onClick: handleTotalUsersClick,
                        active: roleFilter === "All Roles" && statusFilter === "All Status"
                    }, void 0, false, {
                        fileName: "[project]/src/AdminUserManagement.tsx",
                        lineNumber: 874,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        title: "Students",
                        value: totalStudents.toLocaleString(),
                        subtitle: "+23 this semester",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconUsers, {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/AdminUserManagement.tsx",
                            lineNumber: 889,
                            columnNumber: 17
                        }, this),
                        bg: "bg-white border-gray-200",
                        iconBg: "bg-indigo-50 text-indigo-600",
                        textColor: "text-gray-800",
                        onClick: handleStudentsClick,
                        active: roleFilter === "Student" && statusFilter !== "Pending"
                    }, void 0, false, {
                        fileName: "[project]/src/AdminUserManagement.tsx",
                        lineNumber: 885,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        title: "Instructors",
                        value: totalInstructors.toLocaleString(),
                        subtitle: "2 pending approval",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconShield, {}, void 0, false, {
                            fileName: "[project]/src/AdminUserManagement.tsx",
                            lineNumber: 900,
                            columnNumber: 17
                        }, this),
                        bg: "bg-white border-gray-200",
                        iconBg: "bg-purple-50 text-purple-600",
                        textColor: "text-gray-800",
                        onClick: handleInstructorsClick,
                        active: roleFilter === "Instructor" && statusFilter !== "Pending"
                    }, void 0, false, {
                        fileName: "[project]/src/AdminUserManagement.tsx",
                        lineNumber: 896,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        title: "Pending Approvals",
                        value: `${pending.length}`,
                        subtitle: "Requires review",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconFilter, {}, void 0, false, {
                            fileName: "[project]/src/AdminUserManagement.tsx",
                            lineNumber: 911,
                            columnNumber: 17
                        }, this),
                        bg: "bg-orange-50 border-orange-100",
                        iconBg: "bg-orange-100 text-orange-500",
                        textColor: "text-orange-700",
                        onClick: handlePendingApprovalsClick,
                        active: statusFilter === "Pending"
                    }, void 0, false, {
                        fileName: "[project]/src/AdminUserManagement.tsx",
                        lineNumber: 907,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 873,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl border border-gray-200 shadow-sm px-4 py-3.5 mb-4 flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-1 min-w-48",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconSearch, {}, void 0, false, {
                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                    lineNumber: 923,
                                    columnNumber: 84
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/AdminUserManagement.tsx",
                                lineNumber: 923,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search users...",
                                value: search,
                                onChange: (e)=>setSearch(e.target.value),
                                className: "w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminUserManagement.tsx",
                                lineNumber: 924,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminUserManagement.tsx",
                        lineNumber: 922,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: roleFilter,
                                onChange: (e)=>setRoleFilter(e.target.value),
                                className: "appearance-none pl-3 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition",
                                children: [
                                    "All Roles",
                                    "Student",
                                    "Instructor"
                                ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: r
                                    }, r, false, {
                                        fileName: "[project]/src/AdminUserManagement.tsx",
                                        lineNumber: 940,
                                        columnNumber: 64
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/AdminUserManagement.tsx",
                                lineNumber: 935,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconChevronDown, {}, void 0, false, {
                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                    lineNumber: 942,
                                    columnNumber: 107
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/AdminUserManagement.tsx",
                                lineNumber: 942,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminUserManagement.tsx",
                        lineNumber: 934,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: statusFilter,
                                onChange: (e)=>setStatusFilter(e.target.value),
                                className: "appearance-none pl-3 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition",
                                children: [
                                    "All Status",
                                    "Active",
                                    "Inactive",
                                    "Pending"
                                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: s
                                    }, s, false, {
                                        fileName: "[project]/src/AdminUserManagement.tsx",
                                        lineNumber: 952,
                                        columnNumber: 73
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/AdminUserManagement.tsx",
                                lineNumber: 947,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconChevronDown, {}, void 0, false, {
                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                    lineNumber: 954,
                                    columnNumber: 107
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/AdminUserManagement.tsx",
                                lineNumber: 954,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminUserManagement.tsx",
                        lineNumber: 946,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-auto text-xs text-gray-400 font-medium shrink-0",
                        children: statusFilter === "Pending" ? `${filteredPending.length} of ${pending.length} pending request${pending.length === 1 ? "" : "s"}` : `${filtered.length} of ${users.length} users`
                    }, void 0, false, {
                        fileName: "[project]/src/AdminUserManagement.tsx",
                        lineNumber: 957,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 921,
                columnNumber: 7
            }, this),
            (statusFilter !== "Pending" || filtered.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid bg-gray-50 border-b border-gray-100 px-5 py-3 gap-3",
                        style: {
                            gridTemplateColumns: "2fr 1fr 2fr 1fr 1.4fr 80px"
                        },
                        children: [
                            "User",
                            "Role",
                            "Email",
                            "Status",
                            "Last Active",
                            "Actions"
                        ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-bold text-gray-400 uppercase tracking-wider",
                                children: h
                            }, h, false, {
                                fileName: "[project]/src/AdminUserManagement.tsx",
                                lineNumber: 971,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/AdminUserManagement.tsx",
                        lineNumber: 968,
                        columnNumber: 11
                    }, this),
                    filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-16 text-gray-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconUsers, {
                                className: "w-10 h-10 mx-auto mb-3 opacity-30"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminUserManagement.tsx",
                                lineNumber: 977,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium",
                                children: "No users match your filters"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminUserManagement.tsx",
                                lineNumber: 978,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminUserManagement.tsx",
                        lineNumber: 976,
                        columnNumber: 13
                    }, this) : filtered.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid items-center px-5 py-3.5 border-b border-gray-100 last:border-0 hover:bg-blue-50/20 transition-colors gap-3",
                            style: {
                                gridTemplateColumns: "2fr 1fr 2fr 1fr 1.4fr 80px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2.5 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 overflow-hidden",
                                            style: {
                                                background: avatarBg(u.role)
                                            },
                                            children: u.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: u.avatar,
                                                alt: u.name,
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminUserManagement.tsx",
                                                lineNumber: 992,
                                                columnNumber: 23
                                            }, this) : initials(u.name)
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                            lineNumber: 989,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold text-gray-800 truncate",
                                                    children: u.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                                    lineNumber: 998,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-gray-400 font-mono",
                                                    children: u.id
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                                    lineNumber: 999,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                            lineNumber: 997,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                    lineNumber: 988,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RoleBadge, {
                                        role: u.role
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminUserManagement.tsx",
                                        lineNumber: 1004,
                                        columnNumber: 22
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                    lineNumber: 1004,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500 truncate",
                                    children: u.email
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                    lineNumber: 1007,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                                        status: u.status
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminUserManagement.tsx",
                                        lineNumber: 1010,
                                        columnNumber: 22
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                    lineNumber: 1010,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-400 truncate",
                                    children: u.lastActive
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                    lineNumber: 1013,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setModal({
                                                    type: "view",
                                                    user: u
                                                }),
                                            className: "p-1.5 rounded-lg text-gray-400 hover:text-blue-700 hover:bg-blue-50 transition-colors",
                                            title: "View user",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconEye, {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminUserManagement.tsx",
                                                lineNumber: 1022,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                            lineNumber: 1017,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setModal({
                                                    type: "edit",
                                                    user: u
                                                }),
                                            className: "p-1.5 rounded-lg text-gray-400 hover:text-blue-700 hover:bg-blue-50 transition-colors",
                                            title: "Edit user",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconEdit, {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/AdminUserManagement.tsx",
                                                lineNumber: 1029,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                            lineNumber: 1024,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RowActions, {
                                            user: u,
                                            onView: ()=>setModal({
                                                    type: "view",
                                                    user: u
                                                }),
                                            onEdit: ()=>setModal({
                                                    type: "edit",
                                                    user: u
                                                }),
                                            onToggleStatus: ()=>setModal({
                                                    type: "confirm",
                                                    variant: u.status === "Active" ? "deactivate" : "activate",
                                                    userId: u.id,
                                                    name: u.name
                                                }),
                                            onDelete: ()=>setModal({
                                                    type: "confirm",
                                                    variant: "delete",
                                                    userId: u.id,
                                                    name: u.name
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                            lineNumber: 1031,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                    lineNumber: 1016,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, u.id, true, {
                            fileName: "[project]/src/AdminUserManagement.tsx",
                            lineNumber: 982,
                            columnNumber: 15
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 966,
                columnNumber: 9
            }, this),
            statusFilter === "Pending" && filtered.length === 0 && filteredPending.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl border border-gray-200 shadow-sm p-12 text-center text-gray-400 mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconFilter, {
                        className: "w-10 h-10 mx-auto mb-3 opacity-30 text-orange-400"
                    }, void 0, false, {
                        fileName: "[project]/src/AdminUserManagement.tsx",
                        lineNumber: 1055,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold text-gray-600",
                        children: "No pending approvals or requests requiring review"
                    }, void 0, false, {
                        fileName: "[project]/src/AdminUserManagement.tsx",
                        lineNumber: 1056,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-400 mt-1",
                        children: "All user accounts and registration requests have been reviewed."
                    }, void 0, false, {
                        fileName: "[project]/src/AdminUserManagement.tsx",
                        lineNumber: 1057,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 1054,
                columnNumber: 9
            }, this),
            (statusFilter === "All Status" || statusFilter === "Pending") && (statusFilter === "Pending" ? filteredPending.length > 0 : pending.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl border border-orange-200 shadow-sm overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-5 py-4 border-b border-orange-100 bg-orange-50/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-bold text-orange-600 uppercase tracking-widest",
                                        children: "Pending Approvals"
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminUserManagement.tsx",
                                        lineNumber: 1066,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold bg-orange-500 text-white px-2 py-0.5 rounded-full",
                                        children: statusFilter === "Pending" ? filteredPending.length : pending.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminUserManagement.tsx",
                                        lineNumber: 1067,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/AdminUserManagement.tsx",
                                lineNumber: 1065,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-orange-500",
                                children: "These accounts require your review"
                            }, void 0, false, {
                                fileName: "[project]/src/AdminUserManagement.tsx",
                                lineNumber: 1071,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/AdminUserManagement.tsx",
                        lineNumber: 1064,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid bg-gray-50/80 border-b border-gray-100 px-5 py-3 gap-3",
                        style: {
                            gridTemplateColumns: "2fr 1fr 2fr 1fr 180px"
                        },
                        children: [
                            "Name",
                            "Role",
                            "Request",
                            "Submitted",
                            "Actions"
                        ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-bold text-gray-400 uppercase tracking-wider",
                                children: h
                            }, h, false, {
                                fileName: "[project]/src/AdminUserManagement.tsx",
                                lineNumber: 1078,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/AdminUserManagement.tsx",
                        lineNumber: 1075,
                        columnNumber: 11
                    }, this),
                    (statusFilter === "Pending" ? filteredPending : pending).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid items-center px-5 py-3.5 border-b border-gray-100 last:border-0 hover:bg-orange-50/20 transition-colors gap-3",
                            style: {
                                gridTemplateColumns: "2fr 1fr 2fr 1fr 180px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2.5 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 text-xs font-bold shrink-0",
                                            children: p.initials
                                        }, void 0, false, {
                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                            lineNumber: 1090,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold text-gray-800 truncate",
                                                    children: p.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                                    lineNumber: 1094,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-gray-400 truncate",
                                                    children: p.email
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                                    lineNumber: 1095,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                            lineNumber: 1093,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                    lineNumber: 1089,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RoleBadge, {
                                        role: p.role
                                    }, void 0, false, {
                                        fileName: "[project]/src/AdminUserManagement.tsx",
                                        lineNumber: 1100,
                                        columnNumber: 20
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                    lineNumber: 1100,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600 truncate",
                                    children: p.action
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                    lineNumber: 1103,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-400",
                                    children: p.submitted
                                }, void 0, false, {
                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                    lineNumber: 1106,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setModal({
                                                    type: "confirmPending",
                                                    variant: "approve",
                                                    pendingId: p.id,
                                                    name: p.name
                                                }),
                                            className: "flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-green-50 hover:bg-green-100 text-green-700 text-xs font-semibold transition-colors shrink-0 whitespace-nowrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCheck, {
                                                    className: "w-3.5 h-3.5 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                                    lineNumber: 1114,
                                                    columnNumber: 19
                                                }, this),
                                                " Approve"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                            lineNumber: 1110,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setModal({
                                                    type: "confirmPending",
                                                    variant: "reject",
                                                    pendingId: p.id,
                                                    name: p.name
                                                }),
                                            className: "flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 text-xs font-semibold transition-colors shrink-0 whitespace-nowrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconXCircle, {
                                                    className: "w-3.5 h-3.5 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                                    lineNumber: 1120,
                                                    columnNumber: 19
                                                }, this),
                                                " Reject"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/AdminUserManagement.tsx",
                                            lineNumber: 1116,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/AdminUserManagement.tsx",
                                    lineNumber: 1109,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, p.id, true, {
                            fileName: "[project]/src/AdminUserManagement.tsx",
                            lineNumber: 1083,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 1063,
                columnNumber: 9
            }, this),
            modal?.type === "view" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ViewUserModal, {
                user: modal.user,
                onClose: ()=>setModal(null),
                onEdit: ()=>setModal({
                        type: "edit",
                        user: modal.user
                    })
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 1130,
                columnNumber: 9
            }, this),
            (modal?.type === "add" || modal?.type === "edit") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UserFormModal, {
                user: modal.type === "edit" ? modal.user : null,
                onClose: ()=>setModal(null),
                onSave: handleSaveUser
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 1138,
                columnNumber: 9
            }, this),
            modal?.type === "confirm" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConfirmDialog, {
                variant: modal.variant,
                targetName: modal.name,
                onConfirm: handleConfirm,
                onClose: ()=>setModal(null)
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 1146,
                columnNumber: 9
            }, this),
            modal?.type === "confirmPending" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConfirmDialog, {
                variant: modal.variant,
                targetName: modal.name,
                onConfirm: handleConfirm,
                onClose: ()=>setModal(null)
            }, void 0, false, {
                fileName: "[project]/src/AdminUserManagement.tsx",
                lineNumber: 1155,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/AdminUserManagement.tsx",
        lineNumber: 841,
        columnNumber: 5
    }, this);
}
_s2(AdminUserManagement, "kvv7GhTwfGsQvQYX031L1SD80o4=");
_c29 = AdminUserManagement;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29;
__turbopack_context__.k.register(_c, "IconCamera");
__turbopack_context__.k.register(_c1, "IconUsers");
__turbopack_context__.k.register(_c2, "IconUserPlus");
__turbopack_context__.k.register(_c3, "IconSearch");
__turbopack_context__.k.register(_c4, "IconChevronDown");
__turbopack_context__.k.register(_c5, "IconEye");
__turbopack_context__.k.register(_c6, "IconEdit");
__turbopack_context__.k.register(_c7, "IconPower");
__turbopack_context__.k.register(_c8, "IconTrash");
__turbopack_context__.k.register(_c9, "IconCheck");
__turbopack_context__.k.register(_c10, "IconX");
__turbopack_context__.k.register(_c11, "IconXCircle");
__turbopack_context__.k.register(_c12, "IconShield");
__turbopack_context__.k.register(_c13, "IconAlertTriangle");
__turbopack_context__.k.register(_c14, "IconMail");
__turbopack_context__.k.register(_c15, "IconCalendar");
__turbopack_context__.k.register(_c16, "IconPhone");
__turbopack_context__.k.register(_c17, "IconFilter");
__turbopack_context__.k.register(_c18, "IconMoreVertical");
__turbopack_context__.k.register(_c19, "IconClock");
__turbopack_context__.k.register(_c20, "RoleBadge");
__turbopack_context__.k.register(_c21, "StatusBadge");
__turbopack_context__.k.register(_c22, "Backdrop");
__turbopack_context__.k.register(_c23, "ViewUserModal");
__turbopack_context__.k.register(_c24, "Detail");
__turbopack_context__.k.register(_c25, "UserFormModal");
__turbopack_context__.k.register(_c26, "ConfirmDialog");
__turbopack_context__.k.register(_c27, "RowActions");
__turbopack_context__.k.register(_c28, "StatCard");
__turbopack_context__.k.register(_c29, "AdminUserManagement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_AdminUserManagement_tsx_01004my._.js.map