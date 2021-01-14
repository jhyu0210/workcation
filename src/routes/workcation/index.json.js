import properties from './_properties.js';

let filteredString="";

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

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
	res.end(contents);
}