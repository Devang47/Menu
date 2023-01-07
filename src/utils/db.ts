import { app } from './firebase';
import {
	collection,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	query,
	QuerySnapshot,
	setDoc,
	where,
	type DocumentData
} from 'firebase/firestore';
import { cardsByUser } from '$stores';

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

				console.log('here', e);
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

	const docs: any[] = [];

	querySnapshot.forEach((doc) => {
		docs.push(doc.data());
	});

	cardsByUser.set(docs);
	return;
};

export const getHotelData = async (slug: string): Promise<DocumentData> =>
	new Promise((resolve, reject) => {
		const q = query(collection(db, 'hotels'), where('slug', '==', slug));

		getDocs(q).then((querySnapshot) => {
			if (querySnapshot.empty) {
				reject(404);
			}

			querySnapshot.forEach((doc) => {
				if (!doc.data()) {
					reject(404);
				}

				resolve(doc.data());
			});
		});
	});
