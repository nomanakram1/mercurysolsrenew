export const schema_home = {
	"@context": "http://schema.org",
	"@type": "LocalBusiness",
	name: "VENRUP",
	telephone: "+1 (401) 215 - 7466",
	email: "contact@venrup.com",
	address: {
		"@type": "PostalAddress",
		streetAddress: "55 Perry street",
		addressRegion: "NY",
		postalCode: "10014",
	},
	sameAs: [
		"https://www.linkedin.com/company/venrup/mycompany/",
		"https://web.facebook.com/venrup/",
		"https://www.instagram.com/ven.rup/",
	],
	aggregateRating: {
		"@type": "AggregateRating",
		ratingValue: "5.0",
		reviewCount: "20",
	},
	review: [
		{
			"@type": "Review",
			author: {
				"@type": "Person",
				name: "Justin Campbell",
			},
			reviewBody:
				"Venrup is a great company to work with, this is my second time using their services. The team are fast to react to give their best. I got UI/UX design and Full-Stack Development done for my web app. Communication is on point as well, they always kept me in the loop. Would recommend working with them.",
		},
		{
			"@type": "Review",
			author: {
				"@type": "Person",
				name: "Michael Vecchione",
			},
			reviewBody:
				"VENRUP helped us with Full-Stack Development. They provided quality development and design resources that had a really positive impact on our ability to deliver quality software. We would not be where we are without Venrup and very much recommend Venrup as a provider and partner for technical resources",
		},
		{
			"@type": "Review",
			author: {
				"@type": "Person",
				name: "Ali",
			},
			reviewBody:
				"VENRUP&#39;s deliverables really pleased all the internal stakeholders. The UI/UX designs done by the VENRUP team served as a foundation for the company&#39;s platform and translated into the success of the product. The team has been easy to communicate with, displaying professionalism and exceptional design skills.",
		},
	],
}
