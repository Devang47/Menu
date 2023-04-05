<script lang="ts">
	import clsx from 'clsx';

	export let className: string = '';
	export let text: string = '';
	export let withUnderline: boolean = false;
	export let type: 'h1' | 'h2' | 'h3' | 'h4' = 'h1';
</script>

<div class={clsx('text-2xl font-bold text-light-1', withUnderline && 'half-underline', className)}>
	{@html `<${type}> ${text} </${type}>`}
</div>
