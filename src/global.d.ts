interface CustomNotification {
	message: string;
	error: boolean;
}

interface RegisterationData {
	author: string;
	hotel: {
		name: string;
		description: string;
		address: string;
		email: string;
		number: string;
	};
	slug: string;
	currency: 'INR' | 'USD';
	menu: {
		category: string;
		items: {
			name: string;
			description?: string;
			price: string;
		}[];
	}[];
	createdOn?: Date;
	lastVisitedOn?: Date;
}
