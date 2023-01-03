<script lang="ts">
	import GoogleIcon from '$icons/GoogleIcon.svelte';
	import Logo from '$icons/Logo.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import Button from '$lib/components/primitives/Button.svelte';
	import Card from '$lib/components/primitives/Card.svelte';
	import { signInWithGoogle } from '$utils/auth';
</script>

<Container className="max-w-[400px]" centered>
	<Card className="!py-16 max-w-md mx-auto">
		<div class="flex flex-col items-center justify-center">
			<Logo />

			<h1 class="text-center text-[28px] mt-8 font-ne">
				Sign in to <span class="font-bold">Menyū</span>
			</h1>

			<Button
				on:click={signInWithGoogle}
				label="login-with-goole"
				className="mt-16 !font-medium px-8 gap-2 bg-white/5 hover:bg-[#fff1] border-opacity-30 backdrop-blur-sm"
			>
				<GoogleIcon /> Continue with Google
			</Button>
		</div>
	</Card>
</Container>
