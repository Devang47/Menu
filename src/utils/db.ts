import { app } from './firebase';
import {
	collection,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	query,
	setDoc,
	where
} from 'firebase/firestore';

const db = getFirestore();

export const publishHotelMenu = async (data: RegisterationData) => {
	try {
		await setDoc(doc(db, 'hotels', data.slug), {
			...data
		});

		return true;
	} catch (error) {
		console.log(error);
	}
};

export const checkIfSlugIsAlreadyTaken = (slug: string): Promise<boolean> =>
	new Promise((resolve, reject) => {
		try {
			getDoc(doc(db, 'hotels', slug)).then((e) => {
				if (e.exists()) resolve(true);

				resolve(false);
			});
		} catch (error) {
			console.log(error);
			reject(error);
		}
	});

export const getUserHotels = async (uid: string) => {
	const q = query(collection(db, 'hotels'), where('author', '==', uid));

	const querySnapshot = await getDocs(q);
	querySnapshot.forEach((doc) => {
		// doc.data() is never undefined for query doc snapshots
		console.log(doc.id, ' => ', doc.data());
	});
};
