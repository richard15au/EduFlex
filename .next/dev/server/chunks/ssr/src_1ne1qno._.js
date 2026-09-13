module.exports = [
"[project]/src/StudentPages.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var e = new Error("Could not parse module '[project]/src/StudentPages.tsx'\n\nExpression expected");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/src/auth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    if ("TURBOPACK compile-time truthy", 1) return SEED_ACCOUNTS;
    //TURBOPACK unreachable
    ;
}
function registerUser(account) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const accounts = undefined;
    const exists = undefined;
}
function loginUser(email, password) {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
    const accounts = undefined;
    const match = undefined;
}
function setSessionUser(user) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function getSessionUser() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
function clearSession() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function getInitials(name) {
    return name.split(" ").filter(Boolean).slice(0, 2).map((w)=>w[0].toUpperCase()).join("");
}
}),
];

//# sourceMappingURL=src_1ne1qno._.js.map