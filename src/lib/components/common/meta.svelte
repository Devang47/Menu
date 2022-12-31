<script lang="ts">
	import { defaultMeta } from '$utils/constants';

	export const data = {};

	const MetaData = {
		title: defaultMeta.title,
		description: defaultMeta.description,

		ogImage: {
			url: defaultMeta.ogImage,
			alt: defaultMeta.title,
			width: 1200,
			height: 630
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: defaultMeta.twitter.handle,
			site: defaultMeta.twitter.site
		},
		...data
	};
</script>

<svelte:head>
	<meta charSet="utf-8" />
	<meta
		name="viewport"
		content="width=device-width, height=device-height, initial-scale=1, shrink-to-fit=no"
	/>
	<meta name="theme-color" content={'#000000'} />
	<link rel="icon" href="/icons/favicon.png" type="image/png" />
	<link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" />

	<title>{MetaData.title}</title>
	<meta name="description" content={MetaData.description} />
	<meta name="twitter:card" content={MetaData.twitter.cardType} />
	<meta name="twitter:site" content={MetaData.twitter.site} />
	<meta name="twitter:creator" content={MetaData.twitter.site} />
	<meta name="twitter:title" content={MetaData.title} />
	<meta name="twitter:description" content={MetaData.description} />
	<meta name="twitter:image" content={MetaData.ogImage.url} />
	<meta property="og:title" content={MetaData.title} />
	<meta property="og:description" content={MetaData.description} />
	<meta property="og:image" content={MetaData.ogImage.url} />
	<meta property="og:image:alt" content={MetaData.ogImage.alt} />
	<meta property="og:image:width" content={MetaData.ogImage.width + ''} />
	<meta property="og:image:height" content={MetaData.ogImage.height + ''} />
</svelte:head>
