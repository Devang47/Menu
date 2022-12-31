<script lang="ts">
	import { page } from '$app/stores';
	import { isLoading } from '$stores';

	isLoading.set(false);
</script>

<h1>{$page.status}</h1>

<a href="/"> home </a>

<style lang="postcss">
	h1 {
		@apply text-center text-5xl md:text-7xl font-bold pt-40 pb-10;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}

	a {
		@apply underline w-fit block mx-auto text-center;
	}
</style>
