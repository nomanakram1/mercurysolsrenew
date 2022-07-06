import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import LayoutWrapper from "components/layout/LayoutWrapper"

const NotFound = () => {
	return (
		<>
			<LayoutWrapper>
				<h1>Not found</h1>
				<p>Oops, page not found</p>
			</LayoutWrapper>
		</>
	)
}

export default NotFound
