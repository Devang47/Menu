<script lang="ts">
	import clsx from 'clsx';

	export let placeholder: string = 'Enter text here...';
	export let className = '';
	export let label: string = '';
	export let isTextarea: boolean = false;
	export let error: boolean = false;
	export let maxLength: number = 100;
	export let id: string = '';
	export let value: string = '';
	export let type: string = 'text';
	export let trailingAddon: string = '';

	function typeAction(node: HTMLInputElement) {
		node.type = type;
	}
</script>

<div class="w-full">
	{#if label}
		<div class="text-[12px] md:text-xs font-semibold text-light-2 mb-1.5">
			{label}
		</div>
	{/if}

	{#if isTextarea}
		<textarea
			bind:value
			class={clsx(
				'py-2.5 px-5 text-base md:text-sm rounded bg-dark-1 text-white placeholder-light-4 border border-light-4 focus:border-highlight outline-none w-full duration-75 resize-y max-h-[400px] min-h-[50px]',
				className
			)}
			on:change
			maxlength={maxLength}
			{placeholder}
			name={id}
			title={id}
			{id}
			cols={30}
			rows={10}
		/>
	{:else}
		<div
			class={clsx(
				'text-base md:text-sm rounded bg-dark-1 text-white placeholder-light-4 border border-light-4 focus-within:border-highlight outline-none w-full duration-75 flex items-center justify-start overflow-hidden',
				error && '!border-red-500'
			)}
		>
			{#if trailingAddon}
				<span class="py-2.5 pl-5 pr-0 text-light-3"> {trailingAddon} </span>
			{/if}
			<input
				bind:value
				on:change
				{id}
				aria-label={id}
				title={id || placeholder}
				maxlength={maxLength}
				class={clsx(
					'py-2.5 px-5 outline-none border-none bg-transparent w-full',
					className,
					trailingAddon && 'pl-0'
				)}
				{placeholder}
				use:typeAction
			/>
		</div>
	{/if}
</div>
