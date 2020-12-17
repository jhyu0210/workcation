<script>
	import successkid from 'images/successkid.jpg';
	import FaBars from 'svelte-icons/fa/FaBars.svelte';
	import WiWindDeg from 'svelte-icons/wi/WiWindDeg.svelte';
</script>


<svelte:head>
	<title>Welcome to Inner Circle</title>
</svelte:head>
<!-- <div class="flex justify-between bg-indigo-700  pt-3">
	<div class="mx-5 h-9 flex items-center text-sm text-white " >
			<img width="80" src="https://cdn2.iconfinder.com/data/icons/weather-flat-icons-2/320/8-128.png" alt="rainbow">
			<h1 class="mx-3 text-pink-500 font-bold">InnerCircle</h1>
	</div>
	
	
	<button type="button" class="text-gray-500 sm:hidden">
		<img width="40" src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-128.png" alt="menu">
	</button>
</div> -->
<div class="bg-gray-200 flex flex-col items-center">

	<header  class="bg-indigo-700 w-full px-4 py-3 flex justify-center border-b-4 border-pink-500">
		<div class="max-w-4xl w-full"> 
			
			<div class="my-4">
				<h1 class="text-2xl text-indigo-100">Want to learn Tailwind CSS?</h1>
				<p class="text-sm text-indigo-200">Tailwind is the fastest growing utility-first CSS framework. Let's learn it step by step</p>
			</div>
			<div class="relative mt-4 flex">
				<div>
					<a href="." class="bg-pink-500 text-indigo-100 font-bold mt-2 px-4 
						py-2 rounded-full text-xs uppercase hover:text-indigo-700"
					>Enroll now</a>
				</div>
				<div class="absolute right-0 bg-white rounded-full flex justify-center items-center p-5 border-4 border-pink-500">
					<img class="w-16 h-16" src="/logo-192.png" alt="">
				</div>
			</div>
		</div>
	</header>
	<main class="mt-16 w-full flex flex-col items-center">
		<div class="max-w-4xl mx-4">
			<h2 class="pb-1 font-bold text-xl text-indigo-700 border-b border-indigo-600">How it Works</h2>
			<p class="text-sm mt-4 text-gray-600 ">
				asdfjk asdf sdgfert asdfgjl fasds sjjfkls jdsfkjljkasd. asdfjlkkjlsdf qwere sdyuios dsafzxcvv sdfnsm.
			</p>
			<h2 class="mt-8 pb-1 font-bold text-xl text-indigo-700 border-b border-indigo-600">Advantages</h2>
		
			<div class="flex flex-col sm:flex-row sm:-mx-2">
				<!-- card -->
				<div class="sm:w-1/3 mt-4">
					<div class="h-full bg-white p-8 border-b-4 border-pink-500 rounded-lg flex flex-col items-center sm:mx-2 sm:p-3 md:p-8" >
						<div class="bg-gray-200 text-indigo-700 w-16 rounded-full p-2">
							<div class="h-12 w12">
								<FaBars/>
							</div>
						</div>
						
						<div class="mt-4 font-bold">No Custom Css</div>
						<div class="text-center mt-2 text-gray-600 text-sm">Tailwind's advanced class extraction will leaver your proucet free of custom CSS.</div>
					</div>
				</div>
				
				<div class="sm:w-1/3 mt-4">
					<div class="h-full bg-white p-8 border-b-4 border-pink-500 rounded-lg flex flex-col items-center sm:mx-2 sm:p-3 md:p-8" >
						<div class="bg-gray-200 text-indigo-700 w-16 rounded-full p-2">
							<div class="h-12 w12">
								<WiWindDeg/>
							</div>
						</div>
						
						<div class="mt-4 font-bold">Developer Experience</div>
						<div class="text-center mt-2 text-gray-600 text-sm">Tailwind's advanced class extraction will leaver your proucet free of custom CSS. Tailwind's advanced class extraction will leaver your proucet free of custom CSS.</div>
					</div>
				</div>
				<div class="sm:w-1/3 mt-4">
					<div class="h-full bg-white p-8 border-b-4 border-pink-500 rounded-lg flex flex-col items-center sm:mx-2 sm:p-3 md:p-8" >
						<div class="bg-gray-200 text-indigo-700 w-16 rounded-full p-2">
							<div class="h-12 w12">
								<FaBars/>
							</div>
						</div>
						
						<div class="mt-4 font-bold">Mobile Friendly</div>
						<div class="text-center mt-2 text-gray-600 text-sm">Tailwind's advanced class extraction will leaver your proucet free of custom CSS.</div>
					</div>
				</div>
			</div>
		</div>
		<div class="bg-gray-800 py-12 mt-12 w-full flex flex-col items-center border-t-2 border-black">
			<h2 class="font-bold text-xl text-gray-400">Sign up to download the free PDF </h2>
			<form action="*" method="post"
					class="max-w-xl w-full text-gray-200 mt-4 px-8 md:px-0 "
			>
				<div class="flex flex-col md:flex-row md:-mx-2">
					<label for="first_name" class="sr-only">First Name</label>
					<input 
						type="text" id="first_name" placeholder="First Name"
						class="bg-gray-700 mt-4 border border-gray-600 rounded-lg px-4 py-2 w-full md:mx-2"	
					>
					<label for="first_name" class="sr-only">Last Name</label>
					<input 
						type="text" id="last_name" placeholder="Last Name"
						class="bg-gray-700 mt-4 border border-gray-600 rounded-lg px-4 py-2 w-full md:mx-2"	
					>
				</div>
				<div class="flex flex-col md:flex-row md:-mx-2">
					<label for="email" class="sr-only">Email</label>
					<input 
						type="text" id="email" placeholder="jobn@email.com"
						class="bg-gray-700 mt-4 border border-gray-600 rounded-lg px-4 py-2 w-full md:mx-2"	
					>
					<label for="first_name" class="sr-only">title</label>
					<input 
						type="text" id="title" placeholder="Title"
						class="bg-gray-700 mt-4 border border-gray-600 rounded-lg px-4 py-2 w-full md:mx-2"	
					>
				</div>
				<div class="flex flex-col md:flex-row md:-mx-2">
					<button class ="bg-gray-600 mt-4 text-sm rounded-lg py-2 px-4 w-full md:mx-2">Create Account</button>
				</div>
			</form>
		</div>

	</main>
	
</div>
	
<!-- import FaBars from 'svelte-icons/fa/FaBars.svelte' -->
<!-- import WiWindDeg from 'svelte-icons/wi/WiWindDeg.svelte' -->