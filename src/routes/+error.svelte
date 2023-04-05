<script lang="ts">
	import { page } from '$app/stores';
	import { isLoading } from '$stores';

	isLoading.set(false);
</script>

<h1>{$page.status}</h1>

<a href="/"> home </a>

<style lang="postcss">
	h1 {
		@apply pt-40 pb-10 text-center text-5xl font-bold md:text-7xl;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}

	a {
		@apply mx-auto block w-fit text-center underline;
	}
</style>
