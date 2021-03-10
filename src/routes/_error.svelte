<script>
	export let status;
	export let error;
	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
	.wrapper {
		@apply h-full flex flex-col justify-center items-center;
	} 

	h1, p {
		margin: 0 auto;
	}
	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}
	p {
		margin: 1em auto;
	}
	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<div class="wrapper">
	<h1>{status}</h1>
	
	<!-- <p>{error.message}</p> -->
	
	{#if dev && error.stack}
		<pre>{error.stack}</pre>
	{/if}
</div>