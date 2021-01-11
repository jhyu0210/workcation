<svelte:head>
	<title>Workcation</title>
</svelte:head>

<script>
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
						<div class="mt-10 sm:w-80 sm:flex-shrink-0 sm:px-2 sm:mt-0">
							<div class= "relative pb-5/6">
								<img class="absolute inset-0 h-full object-cover rounded-lg shadow-md " src="./images/home.jpg" alt="">
							</div>
							<div class="relative px-4 -mt-16">
										<div class="bg-white rounded-lg px-4 py-4 shadow-lg">
										
											<div class="flex items-center">
												<span class="inline-block px-2 py-1 leading-none bg-indigo-200 text-indigo-800 rounded-full font-semibold uppercase tracking-wide text-xs">Plus</span>
												<div class="text-xs text-gray-600 font-semibold uppercase tracking-wide">
													<span class="ml-2">3 beds &bull; 2 baths</span>
												</div>
											</div>
		
		
											<div>
												<h4 class="mt-1 text-gray-900 font-semibold text-lg">Modern home in city center</h4>
												<div class='mt-1'>
													<span class='text-gray-900'>$1,400</span>
													<span class='ml-1 text-sm text-gray-600'>/wk</span>
												</div>
												<div class="text-xs text-gray-600 flex items-center">
													<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M6 8.84053L9.708 11L8.724 6.93L12 4.19158L7.686 3.83842L6 0L4.314 3.83842L0 4.19158L3.276 6.93L2.292 11L6 8.84053Z" fill="#1C73C2"/>
														</svg>
														<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M6 8.84053L9.708 11L8.724 6.93L12 4.19158L7.686 3.83842L6 0L4.314 3.83842L0 4.19158L3.276 6.93L2.292 11L6 8.84053Z" fill="#1C73C2"/>
															</svg>
														<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M6 8.84053L9.708 11L8.724 6.93L12 4.19158L7.686 3.83842L6 0L4.314 3.83842L0 4.19158L3.276 6.93L2.292 11L6 8.84053Z" fill="#1C73C2"/>
																</svg>
																<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path d="M6 8.84053L9.708 11L8.724 6.93L12 4.19158L7.686 3.83842L6 0L4.314 3.83842L0 4.19158L3.276 6.93L2.292 11L6 8.84053Z" fill="#1C73C2"/>
																	</svg>
														<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M6 8.84053L9.708 11L8.724 6.93L12 4.19158L7.686 3.83842L6 0L4.314 3.83842L0 4.19158L3.276 6.93L2.292 11L6 8.84053Z" fill="#1C73C2"/>
																		</svg>
													<span class="ml-2">34 Reviews</span>	
												</div>	
											</div>
										</div>		
									</div>	
								</div>
								{/each}
	
					</div>
					</div>
			<!-- </div> -->
			
		</main>
	</div>

</div> 