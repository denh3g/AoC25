module.exports = [
"[project]/code/AoC25/app/favicon.ico.mjs { IMAGE => \"[project]/code/AoC25/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/code/AoC25/app/favicon.ico.mjs { IMAGE => \"[project]/code/AoC25/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/code/AoC25/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/code/AoC25/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/code/AoC25/app/components/Answer.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Answer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$AoC25$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/AoC25/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function Answer({ a }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$AoC25$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: a ? `The answer is: ${a}` : "puzzle incomplete"
    }, void 0, false, {
        fileName: "[project]/code/AoC25/app/components/Answer.tsx",
        lineNumber: 2,
        columnNumber: 9
    }, this);
}
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[project]/code/AoC25/app/components/Input.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getInput
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
;
async function getInput({ path }) {
    const input = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].readFile(process.cwd() + `/app/${path}`, 'utf8');
    return input;
}
}),
"[project]/code/AoC25/app/components/DayLayout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DayLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$AoC25$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/AoC25/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$AoC25$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/AoC25/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
function DayLayout({ day, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$AoC25$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-900 py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$AoC25$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$AoC25$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$AoC25$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "inline-flex items-center text-blue-400 hover:text-blue-300 mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$AoC25$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5 mr-2",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$AoC25$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M15 19l-7-7 7-7"
                            }, void 0, false, {
                                fileName: "[project]/code/AoC25/app/components/DayLayout.tsx",
                                lineNumber: 23,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/code/AoC25/app/components/DayLayout.tsx",
                            lineNumber: 17,
                            columnNumber: 21
                        }, this),
                        "Back to Home"
                    ]
                }, void 0, true, {
                    fileName: "[project]/code/AoC25/app/components/DayLayout.tsx",
                    lineNumber: 13,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$AoC25$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$AoC25$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-2xl font-bold mb-4 text-gray-100",
                            children: day
                        }, void 0, false, {
                            fileName: "[project]/code/AoC25/app/components/DayLayout.tsx",
                            lineNumber: 34,
                            columnNumber: 21
                        }, this),
                        children
                    ]
                }, void 0, true, {
                    fileName: "[project]/code/AoC25/app/components/DayLayout.tsx",
                    lineNumber: 33,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/code/AoC25/app/components/DayLayout.tsx",
            lineNumber: 12,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/code/AoC25/app/components/DayLayout.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
}),
"[project]/code/AoC25/app/[day]/solutions/day1.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "solveDay1",
    ()=>solveDay1
]);
async function solveDay1(input) {
    let partA = 0;
    let partB = 0;
    let start = 50;
    const nums = [];
    const instructions = [];
    input.split('\n').forEach((instruction)=>{
        let dir = instruction[0];
        const count = parseInt(instruction.slice(1));
        instructions.push({
            dir,
            count
        });
    });
    instructions.forEach((i)=>{
        for(let x = 0; x < i.count; x++){
            if (i.dir == 'L') {
                start--;
                if (start == -1) {
                    start = 99;
                }
            } else {
                start++;
                if (start == 100) {
                    start = 0;
                }
            }
            if (start === 0) {
                partB++;
            }
        }
        nums.push(start);
    });
    nums.forEach((n)=>{
        if (n === 0) {
            partA = partA + 1;
        }
    });
    return {
        partA,
        partB
    };
}
}),
"[project]/code/AoC25/app/[day]/solutions/day2.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "solveDay2",
    ()=>solveDay2
]);
async function solveDay2(input) {
    let partA = 0;
    let partB = 0;
    // Add your Day 2 solution logic here
    // This is a placeholder based on the existing structure
    return {
        partA,
        partB
    };
}
}),
"[project]/code/AoC25/app/[day]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DayPage,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$AoC25$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/AoC25/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$AoC25$2f$app$2f$components$2f$Answer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/AoC25/app/components/Answer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$AoC25$2f$app$2f$components$2f$Input$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/AoC25/app/components/Input.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$AoC25$2f$app$2f$components$2f$DayLayout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/AoC25/app/components/DayLayout.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$AoC25$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/code/AoC25/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$AoC25$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/AoC25/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
// Import day-specific solution functions
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$AoC25$2f$app$2f5b$day$5d2f$solutions$2f$day1$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/AoC25/app/[day]/solutions/day1.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$AoC25$2f$app$2f5b$day$5d2f$solutions$2f$day2$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/code/AoC25/app/[day]/solutions/day2.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const solvers = {
    "day1": __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$AoC25$2f$app$2f5b$day$5d2f$solutions$2f$day1$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["solveDay1"],
    "day2": __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$AoC25$2f$app$2f5b$day$5d2f$solutions$2f$day2$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["solveDay2"]
};
async function DayPage({ params }) {
    const { day } = await params;
    // Check if the day exists
    if (!solvers[day]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$AoC25$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const input = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$AoC25$2f$app$2f$components$2f$Input$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
        path: `${day}/input.txt`
    });
    const { partA, partB } = await solvers[day](input);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$AoC25$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$AoC25$2f$app$2f$components$2f$DayLayout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        day: `${day.charAt(0).toUpperCase() + day.slice(1)} Page`,
        children: [
            "Part1: ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$AoC25$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$AoC25$2f$app$2f$components$2f$Answer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                a: partA
            }, void 0, false, {
                fileName: "[project]/code/AoC25/app/[day]/page.tsx",
                lineNumber: 30,
                columnNumber: 20
            }, this),
            "Part2: ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$code$2f$AoC25$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$code$2f$AoC25$2f$app$2f$components$2f$Answer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                a: partB
            }, void 0, false, {
                fileName: "[project]/code/AoC25/app/[day]/page.tsx",
                lineNumber: 31,
                columnNumber: 20
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/code/AoC25/app/[day]/page.tsx",
        lineNumber: 29,
        columnNumber: 9
    }, this);
}
async function generateStaticParams() {
    return Object.keys(solvers).map((day)=>({
            day
        }));
}
}),
"[project]/code/AoC25/app/[day]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/code/AoC25/app/[day]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2590a4ce._.js.map