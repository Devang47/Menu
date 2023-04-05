<script lang="ts">
	import LoadingIcon from '$lib/icons/LoadingIcon.svelte';
	import Logo from '$lib/icons/Logo.svelte';
	import NavIcon from '$lib/icons/NavIcon.svelte';
	import { fade, fly } from 'svelte/transition';

	import CrossIcon from '$lib/icons/CrossIcon.svelte';
	import clsx from 'clsx';
	import { isLoading, user } from '$stores';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { signOutUser } from '$utils/auth';

	const handleButtonClick = async (btnType: string) => {
		switch (btnType) {
			case 'Home':
				goto('/');
				break;
			case 'Contact':
				window.open('mailto:devangsaklani@gmail.com', '_blank');
				break;
			case 'Report bug':
				window.open('https://github.com/Devang47/Ffmpeg-nextjs/issues', '_blank');
				break;
			case 'Sign out':
				signOutUser();
				break;
			case 'Sign in':
				goto('/login');
				break;
		}
	};

	onMount(() => {
		window.addEventListener('keypress', handleCloseMenuOnKeypress);
		window.addEventListener('scroll', handleNavbarScroll);
	});

	const handleCloseMenuOnKeypress = (e: KeyboardEvent) => {
		if (e.key == 'Escape') {
			e.preventDefault();
			isOpen = false;
		}
	};

	const handleNavbarScroll = () => {
		if (window.scrollY > 50) {
			scrolled = true;
		} else {
			scrolled = false;
		}
	};

	let isOpen = false;
	let scrolled = false;
</script>

<nav>
	<div class="fixed top-0 left-0 z-10 w-full py-4 backdrop-blur">
		<div class="mx-auto flex max-w-large items-center justify-between px-6">
			<button on:click={() => (isOpen = true)} class="logo py-4 px-2">
				<NavIcon />
			</button>
			{#if $isLoading}
				<div class="">
					<LoadingIcon className="w-5 h-5" />
				</div>
			{/if}
		</div>
	</div>

	{#if isOpen}
		<div
			transition:fade={{ duration: 300, easing: (n) => n * n }}
			class="fixed top-0 left-0 z-20 h-screen w-full bg-dark-2/80 text-center backdrop-blur"
		>
			<div class="mx-auto max-w-large">
				<div class="flex items-center justify-between px-4 py-3">
					<Logo className="ml-2" />

					<button on:click={() => (isOpen = false)} class="rounded-lg py-5 px-4">
						<CrossIcon />
					</button>
				</div>

				<div class="mt-32 flex flex-col items-start justify-center gap-8 px-6 text-3xl">
					{#each new Array('Home', 'Contact', 'Report bug', !!$user ? 'Sign out' : 'Sign in') as e, i}
						<button
							in:fly={{ y: 20, easing: (x) => x * x, delay: i * 100 + 200, duration: 150 }}
							on:click={() => handleButtonClick(e)}
							class={clsx('w-full py-2 px-2 text-left', e === 'Sign out' && 'font-bold')}
						>
							{e}
						</button>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</nav>
