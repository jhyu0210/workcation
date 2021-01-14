<script>
  export let isOpen = false;
  // console.log(isOpen)
  function toggle() {
    isOpen = !isOpen;
    // console.log(isOpen)
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

<header class="bg-gray-900 sm:flex sm:items-center sm:justify-between xl:bg-white">
  <div class="px-4 py-3 flex justify-between  text-gray-200  xl:bg-gray-900 xl:w-72 xl:justify-center xl:py-5">
    <div>
      <img class="h-8 w-auto" src="./images/company-logo.svg" alt="">
    </div>
    <div class="flex sm:hidden">
      <button on:click={toggle} class="px-2 text-gray-400 hover:text-white focus:outline-none focus:text-white
        ">
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
  <nav class="sm:flex sm:items-center sm:px-4 xl:flex-1 xl:justify-between" class:hidden="{!isOpen}" >
    <div class='hidden xl:relative xl:max-w-xs xl:w-full  xl:block'>
      <div class="absolute inset-y-0 left-0 flex items-center pl-3">
        <svg class="h-6 w-6 fill-current text-gray-500" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/></svg>
      </div>
      <input class="block w-full bg-gray-200 border border-trasparent focus:outline-none focus:bg-white focus:border-gray-300 text-gray-900 rounded-lg pl-11 pr-4 py-2" type="text" placeholder="Search by keywords">
    </div>
    <!-- <div class="">
    </div> -->
    <div class="sm:flex sm:items-center " >
      <div class="px-2 pt-2 pb-5 border-b border-gray-800 sm:flex sm:border-b-0 sm:py-0 sm:px-0 ">
        <a href="." class="block px-3 py-1 hover:bg-gray-600 rounded font-semibold text-white sm:text-sm xl:text-gray-900">List your property</a>
        <a href="." class="mt-1 block px-3 py-1 hover:bg-gray-500 rounded font-semibold text-white sm:mt-0 sm:text-sm sm:px-2 sm:ml-2 xl:text-gray-900">Trips</a>
        <a href="." class="mt-1 block px-3 py-1 hover:bg-gray-500 rounded font-semibold text-white sm:mt-0 sm:text-sm sm:px-2 sm:ml-2 xl:text-gray-900">Messages</a>
      </div>
      <div class="px-5 py-5 sm:ml-4 sm:py-0 sm:px-0">
        <div class="flex items-center ">
          <img class="h-10 w-10 object-cover rounded-full border-2 border-gray-600  sm:h-8 sm:w-8 xl:border-gray-300"src="./images/photo.jpg" alt="">
          <span class="text-gray-200 ml-2 font-semi-bold sm:hidden">James Yu</span>
        </div>
        <div class="mt-5 sm:hidden">
          <a class="block text-gray-400 hover:text-white" href=".">Account Settings</a>
          <a class="mt-3 block text-gray-400 hover:text-white" href=".">Support</a>
          <a class="mt-3 block text-gray-400 hover:text-white" href=".">Sign out</a>
        </div>
      </div>

    </div>
  </nav>
  <!-- {/if} -->
</header>