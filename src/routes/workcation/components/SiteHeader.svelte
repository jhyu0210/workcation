<script>
  export let isOpen = false;
  console.log(isOpen)
  function toggle() {
    isOpen = !isOpen;
    console.log(isOpen)
  }
</script>
<style>
  /* .hide {
    display: none;
  } */
  /* .show {
    display: block;
  } */
</style>

<header class="bg-gray-900 sm:flex sm:items-center sm:justify-between">
  <div class="px-4 py-3 flex justify-between  text-gray-200">
    <div>
      <img class="h-8 w-auto" src="./images/company-logo.svg" alt="">
    </div>
    <div class="flex">
      <button on:click={toggle} class="px-2 text-gray-400 hover:text-white focus:outline-none focus:text-white
        sm:hidden">
        <svg class="h-6 w-6 fill-current " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          {#if isOpen}
            <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
          {:else}
            <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          {/if}
        </svg>
      </button>
    </div>
  </div>
  <!-- {#if !isOpen} -->
  <nav class="sm:flex sm:items-center sm:px-4" class:hidden="{!isOpen}" >
    <div class="px-2 pt-2 pb-5 border-b border-gray-800 sm:flex sm:border-b-0 sm:py-0 sm:px-0">
      <a href="." class="block px-3 py-1 hover:bg-gray-600 rounded font-semibold text-white sm:text-sm">List your property</a>
      <a href="." class="mt-1 block px-3 py-1 hover:bg-gray-500 rounded font-semibold text-white sm:mt-0 sm:text-sm sm:px-2 sm:ml-2">Trips</a>
      <a href="." class="mt-1 block px-3 py-1 hover:bg-gray-500 rounded font-semibold text-white sm:mt-0 sm:text-sm sm:px-2 sm:ml-2">Messages</a>
    </div>
    <div class="px-5 py-5 sm:ml-4 sm:py-0 sm:px-0">
      <div class="flex items-center ">
        <img class="h-10 w-10 object-cover rounded-full border-2 border-gray-600  sm:h-8 sm:w-8"src="./images/photo.jpg" alt="">
        <span class="text-gray-200 ml-2 font-semi-bold sm:hidden">James Yu</span>
      </div>
      <div class="mt-5 sm:hidden">
        <a class="block text-gray-400 hover:text-white" href=".">Account Settings</a>
        <a class="mt-3 block text-gray-400 hover:text-white" href=".">Support</a>
        <a class="mt-3 block text-gray-400 hover:text-white" href=".">Sign out</a>
      </div>
    </div>
  </nav>
  <!-- {/if} -->
</header>