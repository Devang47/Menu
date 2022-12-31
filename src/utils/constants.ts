export const siteURL = new URL(import.meta.env.VITE_SITE_URL);
export const siteOrigin = siteURL.origin;

// TODO: update this data
export const defaultMeta = {
	title: 'Online Menu | Devang Saklani',
	description: `Create online menu for your restaurant.`,
	ogImage: `${siteOrigin}/og.png`,
	twitter: {
		handle: '@devangsaklani',
		site: '@devangsaklani'
	}
};

// TODO: add variable (NEXT_PUBLIC_GA_TRACKING_ID) to env if necessary
export const gaTrackingId = import.meta.env.VITE_GA_TRACKING_ID;
