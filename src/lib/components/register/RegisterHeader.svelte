<script lang="ts">
	import clsx from 'clsx';
	import Heading from '../common/Heading.svelte';

	export let step = 1;
	export let totalSteps = 4;
	export let className: string = '';
</script>

<header class={clsx(className, 'flex items-center justify-between w-full')}>
	<Heading withUnderline type="h1" text="Register" />

	<div class="progress text-sm text-light-3 font-bold">{step}/{totalSteps}</div>
</header>
