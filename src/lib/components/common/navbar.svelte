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
				goto('mailto:devangsaklani@gmail.com');
				break;
			case 'Report bug':
				goto('https://github.com/Devang47/Ffmpeg-nextjs/issues');
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
	<div class="fixed top-0 left-0 w-full py-4 z-10 backdrop-blur">
		<div class="max-w-large mx-auto flex items-center justify-between w-10/12">
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
			class="fixed top-0 left-0 bg-dark-2/80 text-center w-full h-screen z-20 backdrop-blur"
		>
			<div class="max-w-large mx-auto">
				<div class="flex items-center justify-between px-4 py-3">
					<Logo className="ml-2" />

					<button on:click={() => (isOpen = false)} class="rounded-lg py-5 px-4">
						<CrossIcon />
					</button>
				</div>

				<div class="flex flex-col items-start justify-center mt-32 text-3xl px-6 gap-8">
					{#each new Array('Home', 'Contact', 'Report bug', !!$user ? 'Sign out' : 'Sign in') as e, i}
						<button
							in:fly={{ y: 20, easing: (x) => x * x, delay: i * 100 + 200, duration: 150 }}
							on:click={() => handleButtonClick(e)}
							class={clsx('text-left py-2 px-2 w-full', e === 'Sign out' && 'font-bold')}
						>
							{e}
							{i}
						</button>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</nav>
