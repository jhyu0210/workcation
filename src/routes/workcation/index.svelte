<svelte:head>
	<title>Workcation</title>
</svelte:head>

<script context="module">
	export function preload() {
		return this.fetch(`workcation.json`).then(r => r.json()).then(properties => {
			return {properties};
		})
	}
</script>


<script>
	import {onDestroy} from "svelte"
	import { filters } from '../../stores/stores.js'
	import PropertyCard from "../../components/PropertyCard.svelte";
	import SearchFilters from "../../components/SearchFilters.svelte";
	import SiteHeader from "../../components/SiteHeader.svelte";
	
	export let properties;
	// console.log(`prloaded properties ${JSON.stringify(properties)}`)
	
	let propertyFilters;
	let filteredProperties;


	const unsubscribe = filters.subscribe(value => {
		
		propertyFilters = value;
		// console.log(`Value:${JSON.stringify(value)}`)
		
  });
	
	$: filteredProperties = properties.filter(
		p => p.beds === propertyFilters.beds 
					&& p.baths === propertyFilters.baths  
					&& p.type === propertyFilters.type );

	
	// $: console.log(`filtered properties ${JSON.stringify(filteredProperties)}`)
	// $: console.log(`filters ${propertyFilters.type}`)
		// let typeFilter = {}
		// let isOpen = true;
	onDestroy(unsubscribe);
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
				<div class="mt-6  sm:overflow-x-auto sm:overflow-y-hidden">
					<div class="px-4 sm:inline-flex sm:pt-2 sm:pb-8 ">
						<div class="sm:w-80 sm:flex-shrink-0 sm:mt-0">
							<div>
								{#each filteredProperties as property, index}
									<PropertyCard {property}/>
								{/each}
							</div>
						</div>
					</div>
				</div>
		</main>
	</div>
</div> 