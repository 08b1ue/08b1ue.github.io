module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/src/components/DotSphere.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DotSphere
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function DotSphere({ size = 44 }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const speed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = ref.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const dpr = window.devicePixelRatio || 1;
        canvas.width = size * dpr;
        canvas.height = size * dpr;
        ctx.scale(dpr, dpr);
        // 斐波那契球面均匀取点
        const N = 260;
        const pts = Array.from({
            length: N
        }, (_, i)=>{
            const y = 1 - i / (N - 1) * 2;
            const r = Math.sqrt(1 - y * y);
            const t = i * Math.PI * (3 - Math.sqrt(5));
            return [
                Math.cos(t) * r,
                y,
                Math.sin(t) * r
            ];
        });
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let angle = 0;
        let raf = 0;
        const R = size * 0.42;
        const c = size / 2;
        const tilt = 0.45;
        const draw = ()=>{
            ctx.clearRect(0, 0, size, size);
            const cosA = Math.cos(angle), sinA = Math.sin(angle);
            const cosT = Math.cos(tilt), sinT = Math.sin(tilt);
            for (const [x, y, z] of pts){
                // 绕 Y 轴旋转，再绕 X 轴倾斜
                const x1 = x * cosA - z * sinA;
                const z1 = x * sinA + z * cosA;
                const y2 = y * cosT - z1 * sinT;
                const z2 = y * sinT + z1 * cosT;
                const depth = (z2 + 1) / 2; // 0 = 后面, 1 = 前面
                ctx.globalAlpha = 0.15 + depth * 0.85;
                ctx.fillStyle = "#fff";
                ctx.beginPath();
                ctx.arc(c + x1 * R, c + y2 * R, 0.35 + depth * 0.75, 0, Math.PI * 2);
                ctx.fill();
            }
            angle += 0.006 * speed.current;
            speed.current += (1 - speed.current) * 0.03;
            if (!reduce) raf = requestAnimationFrame(draw);
        };
        draw();
        return ()=>cancelAnimationFrame(raf);
    }, [
        size
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: ref,
        "aria-hidden": true,
        style: {
            width: size,
            height: size
        },
        onMouseEnter: ()=>speed.current = 8
    }, void 0, false, {
        fileName: "[project]/src/components/DotSphere.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Nav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DotSphere$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DotSphere.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const links = [
    {
        href: "/",
        label: "Work"
    },
    {
        href: "/bio",
        label: "Bio"
    },
    {
        href: "/contact",
        label: "Contact"
    }
];
function Nav() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])();
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(scrollYProgress, {
        stiffness: 200,
        damping: 30
    });
    const isActive = (href)=>href === "/" ? pathname === "/" || pathname.startsWith("/projects") : pathname.startsWith(href);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed inset-x-0 top-0 z-50 bg-black/75 backdrop-blur-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "mx-auto flex h-20 max-w-[1280px] items-center justify-between px-5 sm:px-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-3 sm:gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DotSphere$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                size: 44
                            }, void 0, false, {
                                fileName: "[project]/src/components/Nav.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-dot text-xl sm:text-2xl",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].brand
                            }, void 0, false, {
                                fileName: "[project]/src/components/Nav.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Nav.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "flex gap-6 text-xs sm:gap-12",
                        children: links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: l.href,
                                    className: isActive(l.href) ? "font-bold underline underline-offset-4" : "transition-colors hover:text-accent",
                                    children: l.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Nav.tsx",
                                    lineNumber: 33,
                                    columnNumber: 15
                                }, this)
                            }, l.href, false, {
                                fileName: "[project]/src/components/Nav.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Nav.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Nav.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                style: {
                    scaleX: progress
                },
                className: "absolute inset-x-0 bottom-0 h-px origin-left bg-accent"
            }, void 0, false, {
                fileName: "[project]/src/components/Nav.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Nav.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Providers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$MotionConfig$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$MotionConfig$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MotionConfig"], {
        reducedMotion: "user",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Providers.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/data/site.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bio",
    ()=>bio,
    "projects",
    ()=>projects,
    "site",
    ()=>site
]);
// 站点内容集中在这里：改文字、换图、加作品都只需要编辑这个文件。
const wix = (id)=>`https://static.wixstatic.com/media/${id}`;
const site = {
    brand: "b1ue_08",
    name: "Azure Cui",
    role: "Motion Media Design student at SCAD.",
    email: "ziycui21@student.scad.edu",
    location: "Savannah, GA",
    instagram: "https://www.instagram.com/eruza2005/",
    /** 首页顶部的粒子海浪视频 */ heroVideo: "https://video.wixstatic.com/video/8b3f0c_a8bf1e61f5074864a661bc1a80da6c81/1080p/mp4/file.mp4",
    heroPoster: wix("8b3f0c_a8bf1e61f5074864a661bc1a80da6c81f000.jpg")
};
const bio = {
    concept: "A personal brand between precision and dissolution. One blue, #002AF7, with black, white, and generous negative space — grain, halftone, and particles as its visual language. Like the sea at night: quiet, yet always in motion.",
    mission: "To turn solitude, memory, and emotion into quiet visual spaces, where people can pause, look inward, and accept who they are.",
    about: [
        "Motion Media Design student at SCAD.",
        "I am an observer by nature — the sea, windows glowing at night, strangers passing by. Reading, music, and sociology keep me curious about people, identity, and relationships, and these quiet observations become the grain, particles, and flowing light in my work.",
        "To me, design is a way of listening inward."
    ],
    education: [
        "SCAD",
        "BFA, Motion Media Design"
    ],
    software: [
        "After Effects",
        "Blender",
        "TouchDesigner",
        "Photoshop"
    ],
    /** Bio 页的叠放电视线稿，以及两个屏幕里的画面（位置为相对线稿的百分比） */ tvStack: {
        src: wix("8b3f0c_63f4a36af6b84a5fbbfdd190e6e12157~mv2.png"),
        alt: "Line drawing of two stacked CRT monitors",
        aspect: [
            564,
            564
        ],
        screens: [
            {
                src: wix("8b3f0c_8303739fc845486292da4b8fc5e81996~mv2.png"),
                alt: "Blue particle logo",
                box: {
                    left: 32.6,
                    top: 25,
                    width: 22.9,
                    height: 22.5
                }
            },
            {
                src: wix("8b3f0c_ffd9718994ae41fcbf4710db13cbf535~mv2.png"),
                alt: "Blue abstract artwork",
                box: {
                    left: 19.3,
                    top: 53.7,
                    width: 38.7,
                    height: 28.7
                }
            }
        ]
    }
};
const projects = [
    {
        slug: "chromatic-spirit",
        title: "Chromatic Spirit",
        category: "Color Study",
        course: "FOUN 112 | FALL 2026",
        description: "Building on explorations of color and emotion, this motion design project combines glitch aesthetics with collage techniques, culminating in an animated composition created in Adobe After Effects.",
        cover: {
            src: wix("8b3f0c_839e87b533db49bbaefb4558d3d813ac~mv2.jpg"),
            alt: "Chromatic Spirit cover: a figure orbited by navy moon phases"
        },
        device: {
            src: wix("8b3f0c_b6012b66736b40b7a1d476af1d65b8b5~mv2.png"),
            alt: "Line drawing of a CRT TV",
            aspect: [
                667,
                477
            ],
            screen: {
                left: 8.4,
                top: 7.97,
                width: 83.51,
                height: 63.73
            },
            width: 52
        },
        side: "left"
    },
    {
        slug: "falling-up",
        title: "Falling Up",
        category: "Type in Motion",
        course: "MOME 105 | FALL 2026",
        note: "Lyric video for “Penrose” by Lexie Liu",
        description: "A kinetic typography video for Lexie Liu’s “Penrose,” a song about being trapped on stairs that loop forever. Lyrics climb, fall, and break apart in black, white, and deep-sea blue, cut to the beat until the chorus turns falling into flying.",
        cover: {
            src: wix("8b3f0c_81b502d097394eee9fb32c0b15801bfc~mv2.png"),
            alt: "Falling Up cover: the words FALLING UP repeated in glowing blue type"
        },
        device: {
            src: wix("8b3f0c_c3aa8a8015d74e31b0ed7ee60b5a48fd~mv2.png"),
            alt: "Line drawing of an iPod",
            aspect: [
                325,
                541
            ],
            screen: {
                left: 8.31,
                top: 5.55,
                width: 83.38,
                height: 37.52
            },
            width: 25.4
        },
        side: "right"
    },
    {
        slug: "evolution-of-a-poem",
        title: "Evolution of a Poem",
        category: "Design Exploration",
        course: "FOUN 110 | Winter 2026",
        description: "An exploration of translating poetry into visual form, evolving from 2D compositions to 2.5D, 3D, and time-based experiences.",
        cover: {
            src: wix("8b3f0c_f18028d697cb4883bc3573d7e60eef4a~mv2.jpeg"),
            alt: "Evolution of a Poem cover: white ink splash on black, like a wave breaking"
        },
        device: {
            src: wix("8b3f0c_fc56132895b9428ca3bf8c0584912dea~mv2.png"),
            alt: "Line drawing of a digital camera",
            aspect: [
                656,
                395
            ],
            screen: {
                left: 9.91,
                top: 23.54,
                width: 60.37,
                height: 65.82
            },
            width: 51
        },
        side: "left"
    },
    {
        slug: "paroxysm",
        title: "Paroxysm",
        category: "Process Animation",
        course: "MOME 105 | FALL 2026",
        description: "A 19-second looping motion piece that unfolds inside a single blink, built from the visual symbols of my original character.",
        cover: {
            src: wix("8b3f0c_1ce66f14652f455c883d984dbe65fdae~mv2.png"),
            alt: "Paroxysm cover: red and white radial pattern"
        },
        device: {
            src: wix("8b3f0c_e2a08156af4541e48dd93c452759458c~mv2.png"),
            alt: "Line drawing of a Game Boy Advance SP",
            aspect: [
                416,
                720
            ],
            screen: {
                left: 7.93,
                top: 7.5,
                width: 82.93,
                height: 32.22
            },
            width: 32.5
        },
        side: "right"
    },
    {
        slug: "collage-experiments",
        title: "Collage Experiments",
        category: "Various Courses",
        course: "Fall 2026",
        description: "A collection of collage experiments exploring composition, texture, typography, and visual expression through different techniques and creative approaches.",
        cover: {
            src: wix("8b3f0c_ebed98882d15403eac690d0da8c306a4~mv2.png"),
            alt: "Collage Experiments cover: a bird crossed by blue lines"
        },
        device: {
            src: wix("8b3f0c_f4118e07137148d9ad1138b3ba50bae4~mv2.png"),
            alt: "Line drawing of a CRT monitor",
            aspect: [
                611,
                559
            ],
            screen: {
                left: 21.28,
                top: 19.86,
                width: 57.45,
                height: 44.54
            },
            width: 47.7
        },
        side: "left"
    }
];
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1xojjwe9h7nsy._.js.map