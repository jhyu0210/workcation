<svelte:head>
	<title>Workcation</title>
</svelte:head>

<script>
	import PropertyCard from "./components/PropertyCard.svelte";
	import SearchFilters from "./components/SearchFilters.svelte";
	import SiteHeader from "./components/SiteHeader.svelte";
	let tests = [1,2,3,4] ;
		// let isOpen = true;
</script>


<style>
	/* .bg-teal-200 { background-color: #b2f5ea; }
	.topM {
		margin-top: 40px,
	} */
</style>

<div class="min-h-screen bg-gray-200 antialiased xl:flex xl:flex-col xl:h-screen">
	<SiteHeader class="xl:flex-shrink-0"/>
	
	<div class="xl:flex-1 xl:flex  xl:overflow-y-hidden">
		
		<SearchFilters />

		<main class="py-6 xl:flex-1 xl:overflow-x-hidden">
			<div class="px-4">
				<h3 class="text-gray-900 text-xl">Los Angeles</h3>
				<p class="text-gray-600 mb-2">Live the stars in these luxurious Southern 	Caifornia estates.
				</p>
			</div>
			<!-- <div class="p-2 bg-gray-300 rounded-lg flex-col items-center"> -->
				<div class="mt-6  sm:overflow-x-auto ">
					<div class="px-4 -mt-8 sm:pb-8  sm:inline-flex sm:-ml-2">
						{#each tests as test, index}
							<PropertyCard/>
						{/each}
	
					</div>
					</div>
		</main>
	</div>
</div> 