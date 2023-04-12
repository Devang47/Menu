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
			goto('/dashboard');
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
		const protectedPages = ['/h', '/register', '/dashboard'];

		if (userData) {
			isLoading.set(true);
			user.set(userData);
			isLoading.set(false);
			if (get(page).route?.id === '/login') {
				goto('/dashboard');
			}
		} else {
			if (protectedPages.includes(get(page).route?.id || '/dashboard')) {
				goto('/login');
			}
		}

		return userData;
	});
};
