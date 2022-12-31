export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["fonts/.DS_Store","fonts/inter/Inter-italic.var.woff2","fonts/inter/Inter-roman.var.woff2","fonts/neuemontreal/NeueMontreal-Bold.woff2","fonts/neuemontreal/NeueMontreal-Medium.woff2","fonts/neuemontreal/NeueMontreal-Regular.woff2","icons/favicon.png","icons/favicon.svg","service-worker.js"]),
	mimeTypes: {".woff2":"font/woff2",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-90eed2b9.js","imports":["_app/immutable/start-90eed2b9.js","_app/immutable/chunks/index-bdfca9c1.js","_app/immutable/chunks/singletons-b819b431.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/components",
				pattern: /^\/components\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/edit",
				pattern: /^\/edit\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
