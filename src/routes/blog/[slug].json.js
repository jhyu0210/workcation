import posts from './_posts.js';

const lookup = new Map();
posts.forEach(post => {
	// console.log(typeof(post));
	lookup.set(post.slug, JSON.stringify(post));
});
console.log(`type of lookup::: ${typeof(lookup)}`);

// const test=new Map();
// test.set("hello", "James")
// console.log(`Test::: ${test.has("hello")}`)

export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;
	console.log(typeof(slug))
	
	if (lookup.has(slug)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(slug));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
