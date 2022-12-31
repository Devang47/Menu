interface CustomNotification {
	data: string;
	error: boolean;
}

interface RegisterationData {
	author: string;
	hotel: {
		name: string;
		tagline: string;
		address: string;
	};
	slug: string;
	currency: 'INR' | 'USD';
	menu: {
		category: string;
		items: {
			name: string;
			description: string;
			price: string;
		}[];
	}[];
}
