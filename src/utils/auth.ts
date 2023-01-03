import { isLoading, user } from '$stores';
import {
	signInWithPopup,
	GoogleAuthProvider,
	getAuth,
	onAuthStateChanged,
	signOut
} from 'firebase/auth';
import { addNotification } from './notifications';
import { app } from './firebase';
import { goto } from '$app/navigation';
import { page } from '$app/stores';
import { get } from 'svelte/store';

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export const signInWithGoogle = async () => {
	await signInWithPopup(auth, provider)
		.then((result) => {
			user.set(result.user);
			console.log(result.user);
		})
		.catch((error) => {
			addNotification(error.message, true);
			console.log(error);
		});
};

export const signOutUser = async () => {
	try {
		isLoading.set(true);
		await signOut(auth);
		goto('/login');
		isLoading.set(false);
	} catch (e) {
		console.log(e);
	}
};

export const getCurrentUser = () => {
	onAuthStateChanged(auth, (userData) => {
		const notProtectedPages = ['/', '/login'];

		if (userData) {
			if (notProtectedPages.includes(get(page).route?.id || '/')) {
				isLoading.set(true);
				console.log('goto');
				goto('/dashboard');
				isLoading.set(false);
			}
			user.set(userData);
		} else {
			if (get(page).route.id !== '/') {
				goto('/login');
			}
		}

		return userData;
	});
};
