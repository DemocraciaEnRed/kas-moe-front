<script>
	export let segment = "";
	// eslint-disable-next-line no-empty
	import Nav from '../components/Nav.svelte';
	import { stores } from "@sapper/app";

	const { page, session } = stores();

	$: path = $page.path.slice(1);
</script>

<svelte:head>
	<title>
		{path ? path.charAt(0).toUpperCase() + path.slice(1) : "Index"}
	</title>
</svelte:head>

{#if !$page.path.includes('auth') && !$page.path.includes('logout')}
	<Nav>
		<main class="flex-1 max-h-full p-5 overflow-hidden overflow-y-scroll">
			<slot />
		</main>
	</Nav>
{:else}
	<slot />
{/if}
