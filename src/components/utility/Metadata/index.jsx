import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import og_image from "assets/images/og_image.png"
import favicon from "assets/icons/favicon.ico"

const Metadata = ({ pageTitle, schemaMarkup, pageDescription }) => {
	const data = useStaticQuery(graphql`
		query siteInfo {
			site {
				siteMetadata {
					siteName
					siteUrl
					tagline
					title
					description
				}
			}
		}
	`)

	const { title, siteName, description, siteUrl } = data.site.siteMetadata

	return (
		<Helmet
			htmlAttributes={{
				lang: "en",
			}}
		>
			<meta charSet="utf-8" />
			<title>{`${pageTitle ? pageTitle : siteName} - ${title}`}</title>
			<meta name="description" content={pageDescription ? pageDescription : description} />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="icon" type="image/x-icon" href={favicon} />
			<meta property="og:image:width" content="279" />
			<meta property="og:image:height" content="279" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={siteUrl} />
			<meta property="og:image" content={og_image} />
			<meta property="og:type" content="website" />
			<meta name="theme-color" content="#02bfa6" />
			{schemaMarkup && <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>}
		</Helmet>
	)
}

export default Metadata
