<script>
  import { filters } from "../stores/stores.js";
  import { onDestroy } from 'svelte'
  let openFilters = true;
  function filtersToggle(){
    openFilters = !openFilters;
  }

  let propertyFilter = {};

  const unsubscribe = filters.subscribe(value =>{
    propertyFilter = value;
  });

  let selectedBeds = propertyFilter.beds;
  let selectedBaths = propertyFilter.baths;
  let selectedType = propertyFilter.type;

  $:console.log(`selected values :::${selectedBeds}, ${selectedBaths}, ${selectedType}`);
  
  function handleSubmit(){
    console.log(`handle Submit Type::: ${selectedType}`)
   filters.set(
     {
       beds:selectedBeds, 
       baths:selectedBaths, 
       type:selectedType
      });
  }
  onDestroy(unsubscribe);

  let bedrooms=[1,2,3,4,5];
  let bathrooms=[1,2,3,4,5];
  let ptypes=["apartment","house","townhouse","loft"];

</script>

<section class="bg-gray-800 xl:w-72" >
  <div class="flex justify-between px-4 py-3 xl:hidden">
    <div class='relative max-w-xs w-full'>
      <div class="absolute inset-y-0 left-0 flex items-center pl-3">
        <svg class="h-6 w-6 fill-current text-gray-500" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/></svg>
      </div>
      <input class="block w-full bg-gray-900 focus:outline-none focus:bg-white focus:text-gray-900 text-white rounded-lg pl-11 pr-4 py-2" type="text" placeholder="Search by keywords">
    </div>
  
  
    <button on:click={filtersToggle} type="button" 
    class="ml-4 hover:bg-gray-600 focus:outline-none focus:shadow-outline focus:text-gray-900 inline-flex bg-gray-900 rounded-lg shadow pr-4 pl-3 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current text-gray-400"viewBox="0 0 24 24" ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg>
      <span class="ml-1 text-white font-medium">Filters</span>
    </button>
  </div>
  <!-- {#if openFilters} -->
  <form on:submit|preventDefault = {handleSubmit}
    class="xl:h-full xl:flex xl:flex-col xl:justify-between" class:hidden="{!openFilters}">
    <div class="lg:flex xl:block xl:overflow-y-auto">
      <!-- First selection -->
      <div class="px-4 py-4 border-t border-gray-900 lg:w-1/3 xl:border-t-0 xl:w-full">
        
        <!-- bedrooms and bathroooms -->
        <div class="flex flex-wrap -mx-2">
          <!-- <div class="flex -mx-2 sm:w-1/2 sm:mx-0"> -->
            <label class="block w-1/2 px-2 sm:w-1/4 lg:w-1/2 xl:w-1/2">
              <span class="text-sm font-semibold text-gray-500 ">Bedrooms</span>
              <select
                bind:value={selectedBeds} 
                id="bedrooms"
                class="form-select mt-1 bg-gray-700 block w-full rounded text-white shadow focus:bg-gray-500" name="bedrooms">
                {#each bedrooms as bed}
                <option name="">{bed}</option>
                {/each}
              </select>
            </label>
            <label class="block w-1/2 px-2 sm:w-1/4 lg:w-1/2 xl:w-1/2">
              <span class="text-sm font-semibold text-gray-500">Bathrooms</span>
              <select 
                id="bathrooms"
                bind:value = {selectedBaths}
                class="form-select bg-gray-700  mt-1 block w-full rounded text-white shadow focus:bg-gray-500" name="bathrooms">
                {#each bathrooms as bath}
                <option value={bath}>{bath}</option>
                {/each}
              </select>
            </label>
          <!-- </div> -->
          <!-- Bedrooms and Bathrooms -->
        
          <!-- Price Range -->
          <!-- <div class="mt-4 sm:w-1/2 sm:mt-0 px-2 w-full -mx-2 sm:mx-0"> -->
            <label class="block w-full px-2 mt-4 sm:w-1/2 sm:mt-0 lg:w-full lg:mt-4">
              <span class="text-sm font-semibold text-gray-500">Price Range</span>
              <select class="form-select bg-gray-700 mt-1  block w-full rounded text-white shadow" name="pricerange" id="">
                <option value="">Up to $2,000/wk</option>
              </select>
            </label>
          <!-- </div> -->
        </div>
        <!-- Price Range -->
      </div>
      <!-- first selection -->
      <!-- second selection -->
      <div  class="px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l xl:w-full"> 
        <span class="block text-sm font-semibold text-gray-500">Property Type</span>
        <div class="sm:flex sm:-mx-2 lg:block lg:mx-0">
          {#each ptypes as ptype}
            <label class=" mt-1  flex items-center sm:w-1/4 sm:p-2  lg:w-full lg:px-0">
              <input 
              bind:group = {selectedType} value={ptype}
              class="form-radio bg-gray-900 focus:bg-gray-700" type="radio" name="propertyType">
              <span class="ml-2 text-white">{ptype}</span>
            </label>
          {/each}
          <!-- <label class=" mt-1  flex items-center sm:w-1/4 sm:p-2  lg:w-full lg:px-0">
            <input class="form-radio bg-gray-900 focus:bg-gray-700" type="radio" name="propertyType" value="apartment">
            <span class="ml-2 text-white">Apartment</span>
    
          </label>
          <label class=" mt-1  flex items-center sm:w-1/4 sm:p-2  lg:w-full lg:px-0">
            <input class="form-radio bg-gray-900 focus:bg-gray-700" type="radio" name="propertyType" value="loft">
            <span class="ml-2 text-white">Loft</span>
    
          </label>
          <label class=" mt-1  flex items-center sm:w-1/4 sm:p-2  lg:w-full lg:px-0">
            <input class="form-radio bg-gray-900 focus:bg-gray-700" type="radio" name="propertyType" value="townhouse">
            <span class="ml-2 text-white">Townhouse</span>
          </label> -->
        </div>
      </div>
      <!-- second selection -->
  
      <!-- Third selection -->
      <div class="px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l xl:w-full"> 
        <span class="block text-sm font-semibold text-gray-500">Amenities</span>
        <div class="sm:flex sm:flex-wrap sm:-mx-2">
          <label class="mt-2 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
            <input class="form-checkbox focus:bg-gray-700 bg-gray-900" type="checkbox" name="balcony">
            <span class="ml-2 text-white">Balcony</span>
          </label>
          <label class="mt-2 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
            <input class="form-checkbox focus:bg-gray-700 bg-gray-900" type="checkbox"  name="pool">
            <span class="ml-2 text-white">Pool</span>        
          </label>
          <label class="mt-2 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
            <input class="form-checkbox focus:bg-gray-700 bg-gray-900" type="checkbox"  name="beach">
            <span class="ml-2 text-white">Beach</span>
          </label>
          <label class="mt-2 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
            <input class="form-checkbox focus:bg-gray-700 bg-gray-900" type="checkbox"  name="petFriendly">
            <span class="ml-2 text-white">Pet friendly</span>
          </label>
          <label class="mt-2 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
            <input  class="form-checkbox bg-gray-900" type="checkbox"  name="kidFriendly">
            <span class="ml-2 text-white">Kid friendly</span>
          </label>
          <label class="mt-2 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
            <input class="form-checkbox focus:bg-gray-700 bg-gray-900" type="checkbox"  name="parking">
            <span class="ml-2 text-white">Parking</span>
          </label>
          <label class="mt-2 flex items-center sm:w-1/2 sm:px-2 lg:w-full">
            <input class="form-checkbox focus:bg-gray-700 bg-gray-900" type="checkbox"  name="airConditioning">
            <span class="ml-2 text-white">Air conditioning</span>
          </label>
        </div>
      </div>
    </div>
    <div class="bg-gray-900 px-4 py-4 sm:text-right">
      <button type="submit" class="block px-4 py-2 bg-indigo-500 font-semibold text-white w-full hover:bg-indigo-400 rounded-lg sm:inline-block sm:w-auto xl:block xl:w-full">Update Results</button>
    </div>

  </form>
  <!-- {/if} -->
</section>