<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	/* main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	} */
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<footer class="text-center pb-8 bg-gray-800 w-full">
	<p class="text-xs text-gray-200 font-light">Copyright @2020 Inner Circle Inc.</p>
</footer>
