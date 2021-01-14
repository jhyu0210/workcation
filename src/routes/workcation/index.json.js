import properties from './_properties.js';

let filteredString="";
export let selectedBeds = 2;
export let selectedBaths = 1;
export let selectedtypes="apartment";

const contents = JSON.stringify(properties.map(property => {
	return {
    type: property.type,
    beds: property.beds,
    baths: property.baths,
    shortDescription: property.shortDescription,
    description: property.description,
    priceRange: property.priceRange,
    ratings: property.ratings,
    reviews: property.reviews,
	};
}));
// console.log(`Filters::: ${selectedBeds}`)
const filteredContents = JSON.stringify(properties.filter(
  p => p.beds === selectedBeds && p.baths === selectedBaths
).map(property => {

	return {
    types: property.type,
    beds: property.beds,
    baths: property.baths,
    shortDescription: property.shortDescription,
    description: property.description,
    priceRange: property.priceRange,
    ratings: property.ratings,
    reviews: property.reviews,
	};
})
);


// console.log(`Filtered contents ::: ${filteredContents}`);
// console.log(typeof(contents));//string

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}