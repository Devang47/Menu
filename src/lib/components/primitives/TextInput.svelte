<script lang="ts">
	import clsx from 'clsx';

	export let placeholder: string = 'Enter text here...';
	export let divClassName = '';
	export let className = '';
	export let label: string = '';
	export let isTextarea: boolean = false;
	export let error: boolean = false;
	export let maxLength: number = 100;
	export let id: string = '';
	export let value: string = '';
	export let type: string = 'text';
	export let trailingAddon: string = '';
	export let required: boolean = false;

	function typeAction(node: HTMLInputElement) {
		node.type = type;
	}
</script>

<div class="w-full">
	{#if label}
		<div class="mb-1.5 text-[12px] font-semibold text-light-2">
			{label}
		</div>
	{/if}

	{#if isTextarea}
		<textarea
			bind:value
			class={clsx(
				'max-h-[400px] min-h-[50px] w-full resize-y rounded border border-light-4 bg-dark-1 py-2.5 px-5 text-base text-white placeholder-light-4 outline-none duration-75 focus:border-highlight',
				className,
				divClassName
			)}
			{required}
			on:change
			on:keypress
			on:keydown
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
				'flex w-full items-center justify-start overflow-hidden rounded border border-light-4 bg-dark-1 text-base text-white placeholder-light-4 outline-none duration-75 focus-within:border-highlight',
				divClassName,
				error && '!border-red-500'
			)}
		>
			{#if trailingAddon}
				<span class="py-2.5 pl-5 pr-0 text-light-3"> {trailingAddon} </span>
			{/if}
			<input
				{required}
				bind:value
				on:change
				on:keydown
				on:keyup
				on:keypress
				{id}
				aria-label={id}
				title={id || placeholder}
				maxlength={maxLength}
				class={clsx(
					'w-full border-none bg-transparent py-2.5 px-5 outline-none',
					className,
					trailingAddon && 'pl-0'
				)}
				{placeholder}
				use:typeAction
			/>
		</div>
	{/if}
</div>
