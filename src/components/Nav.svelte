<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav class="flex items-center bg-gray-800">
		<div class="mx-5 h-9 flex items-center text-sm text-white " >
			<img width="80" src="https://cdn2.iconfinder.com/data/icons/weather-flat-icons-2/320/8-128.png" alt="rainbow">
			<h1 class="mx-3 text-pink-500 font-bold">InnerCircle</h1>
		</div>
	
	
		<!-- <button type="button" class="text-gray-500 sm:hidden">
			<img class="text-white"width="40" src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-128.png" alt="menu">
		</button> -->
	<ul class="text-gray-300">
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>
		<li><a aria-current="{segment === 'employee_card' ? 'page' : undefined}" href="employee_card">employee_card</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
	</ul>
</nav>
