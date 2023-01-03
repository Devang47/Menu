export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9')];

export const server_loads = [];

export const dictionary = {
	"/": [2],
	"/components": [3],
	"/dashboard": [4],
	"/edit": [5],
	"/h": [6],
	"/h/[id]": [7],
	"/login": [8],
	"/register": [9]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};