require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
	siteMetadata: {
		siteName: "VENRUP",
		siteUrl: "https://venrup.com",
		title: "UI/UX Design, Web & Mobile App Development Agency",
		tagline: "Venture for Disruption",
		description:
			"We are a premium web app development and mobile app development agency. Our development is user-centric and helps you scale your business fast.",
	},

	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		"gatsby-plugin-root-import",
		"gatsby-transformer-sharp",
		"gatsby-plugin-image",

		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				defaults: {
					formats: [`auto`, `webp`],
					placeholder: `blurred`,
					quality: 80,
					breakpoints: [750, 1080, 1366, 1920],
					backgroundColor: `transparent`,
					tracedSVGOptions: {},
					blurredOptions: {},
					jpgOptions: {},
					pngOptions: {},
					webpOptions: {},
					avifOptions: {},
				},
			},
		},

		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`,
			},
		},

		// {
		// 	resolve: "gatsby-plugin-robots-txt",
		// 	options: {
		// 		host: "https://venrup.com",
		// 		sitemap: "https://venrup.com/sitemap/sitemap-index.xml",
		// 		policy: [{ userAgent: "*", allow: "/" }],
		// 		output: "/robots.txt",
		// 	},
		// },

		{
			resolve: "gatsby-plugin-anchor-links",
			options: {
				offset: -20,
				duration: 200,
			},
		},

		// {
		// 	resolve: "gatsby-plugin-google-analytics",
		// 	options: {
		// 		trackingId: "UA-190813325-1",
		// 		head: true,
		// 		anonymize: true,
		// 		respectDNT: true,
		// 		exclude: ["/preview/**", "/do-not-track/me/too/"],
		// 		pageTransitionDelay: 0,
		// 		enableWebVitalsTracking: true,
		// 	},
		// },

		// {
		// 	resolve: "gatsby-plugin-google-tagmanager",
		// 	options: {
		// 		id: "GTM-W9KTPDG",
		// 		includeInDevelopment: false,
		// 		defaultDataLayer: { platform: "gatsby" },
		// 	},
		// },

		{
			resolve: "gatsby-plugin-scroll-reveal",
			options: {
				threshold: 1,
				once: true,
				disable: false,
				selector: "[data-sal]",
				animateClassName: "sal-animate",
				disabledClassName: "sal-disabled",
				rootMargin: "0% 50%",
				enterEventName: "sal:in",
				exitEventName: "sal:out",
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options:{
			  fonts:[
					// `roboto mono` , 
					`muli\:400,400i,700,700i`,
				],
				display: "swap"
			},
		},
	],
}
