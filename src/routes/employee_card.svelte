<svelte:head>
	<title>Employee-card</title>
</svelte:head>

<script>
	let employees=[
		{
			name: "Victor Roderigez",
			age: 32,
			title: "manager",
			process: "under review",
			open_date:" May 14, 2021",
			comment: "Here is a short comment about this emplyee.this is for testing the layout",
			initial: "VG"
		},
		{
			name: "James Yu",
			age: 42,
			title: "vice president",
			process: "employeed",
			open_date:" April 1, 2021",
			comment: "Very nice and cool",
			initial: "JY"
		},
		{
			name: "Victor Roderigez",
			age: 32,
			title: "manager",
			process: "under review",
			open_date:" May 14, 2021",
			comment: "Here is a short comment about this emplyee.",
			initial: "VG"
		},
		{
			name: "Victor Roderigez",
			age: 32,
			title: "manager",
			process: "under review",
			open_date:" May 14, 2021",
			comment: "Here is a short comment about this emplyee.",
			initial: "VG"
		},
		{
			name: "James Yu",
			age: 42,
			title: "vice president",
			process: "employeed",
			open_date:" April 1, 2021",
			comment: "Very nice and cool",
			initial: "JY"
		},
	]
</script>

<!-- <div class="flex justify-between bg-indigo-700  pt-3">
	<div class="mx-5 h-9 flex items-center text-sm text-white " >
			<img width="80" src="https://cdn2.iconfinder.com/data/icons/weather-flat-icons-2/320/8-128.png" alt="rainbow">
			<h1 class="mx-3 text-pink-500 font-bold">InnerCircle</h1>
	</div>
	
	
	<button type="button" class="text-gray-500 sm:hidden">
		<img width="40" src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-128.png" alt="menu">
	</button>
</div> -->

<div class="max-w-7xl m-auto sm:grid sm:grid-cols-3 sm:gap-1 ">
{#each employees as person}
	<div class="m-2 p-2 bg-gray-100 shadow-lg rounded-lg w-full shadow-lg border border-indigo-400">
		<div class="bg-blue text-gray-700 text-lg px-6 py-4">
			The title of the card here
		</div>
		<div class="flex justify-between items-center  px-6 py-4 ">
			<div class="bg-yellow-600 text-xs uppercase px-2 py-1 rounded-full
						border-gray-200 text-gray-200 font-bold">
						{person.process}
			</div>
			<div class="text-sm text-gray-800">
				{person.open_date}
			</div>
		</div>
		
		<div class="px-6 py-4  bg-gray-200">
			<div class="uppercase text-xs text-gray-600 font-bold">
				Employee
			</div>
			<div class="flex items-center pt-3">
				<div class="bg-blue-700 w-12 h-12 flex justify-center 
					items-center rounded-full font-bold text-gray-100 uppercase">
					{person.initial}
				</div>
				<div class="ml-4">
					<p class="font-bold">{person.name}</p>
					<p class="text-sm font-bold text-gray-700">{person.title}</p>
				</div>
			</div>
		</div>
		<div class="px-6 py-4 border-t border-gray-200">
			<div class="border rounded-lg py-4 px-6 bg-gray-200 ">
				{person.comment}
			</div>
		</div>
	</div>

	{/each}
</div>