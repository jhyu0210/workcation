<script>
  export let property;
  let size="scale-95";
function toggleSize () {
  // if(size=="scale-95"){size="scale-100"}
  // else {
  //   size="scale-95"
  // }
  size= size=="scale-95" ? "scale-100" :"scale-95"
}
  
  function formattedPrice(price) {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      })
      return formatter.format(price/100);
    }

</script>


<!-- <div class="mt-10 sm:w-80 sm:flex-shrink-0 sm:px-2 sm:mt-0"> -->
  <div class= "relative pb-5/6">
    <img 
      on:mouseenter={toggleSize}
      on:mouseout={toggleSize}
      class="absolute inset-0 h-full w-full object-cover rounded-lg shadow-md transform {size}" src="./images/home1.jpg" alt=""
      >
  </div>
  <div class="relative px-4 py-4 -mt-16">
    <div class="bg-white rounded-lg px-4 py-4 shadow-lg">
      <div class="flex items-baseline">
        <span class="inline-block px-2 py-1 leading-none bg-indigo-200 text-indigo-800 rounded-full font-semibold uppercase tracking-wide text-xs">Plus</span>
        <div class="text-xs text-gray-600 font-semibold uppercase tracking-wide">
          <span class="ml-2">
            {property.beds} {property.beds === 1 ? "bed" : "beds"} &bull; {property.baths} {property.baths === 1 ? "bath": "baths"}</span>
        </div>
      </div>
      <div>
        <h4 class="mt-1 text-gray-900 font-semibold text-lg">{property.shortDescription}</h4>
        <div class='mt-1'>
          <span class='text-gray-900'>{formattedPrice(property.priceRange)}</span>
          <span class='ml-1 text-sm text-gray-600'>/wk</span>
        </div>
        <div class="text-xs text-gray-600 flex items-center">
          <!-- <span>{property.ratings}</span> -->
          {#each {length: 5} as _, i}
            <svg class="h-4 w-4 fill-current {property.ratings >= i+1 ? 'text-yellow-400' : 'text-gray-400'}" width="12" height="11" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 8.84053L9.708 11L8.724 6.93L12 4.19158L7.686 3.83842L6 0L4.314 3.83842L0 4.19158L3.276 6.93L2.292 11L6 8.84053Z"/>
            </svg>
            <!-- <span>{i}</span> -->
          {/each}
          
          <span class="ml-2">{property.reviews} Reviews</span>	
        </div>	
      </div>
    </div>		
  </div>	
<!-- </div> -->