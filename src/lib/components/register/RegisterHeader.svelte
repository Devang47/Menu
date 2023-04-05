<script lang="ts">
	import clsx from 'clsx';
	import Heading from '../common/Heading.svelte';

	export let step = 1;
	export let totalSteps = 4;
	export let className: string = '';
</script>

<header class={clsx(className, 'flex w-full items-center justify-between')}>
	<Heading withUnderline type="h1" text="Register" />

	<div class="progress text-sm font-bold text-light-3">{step}/{totalSteps}</div>
</header>
