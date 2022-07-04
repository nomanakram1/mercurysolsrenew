import React from "react"
import LayoutWrapper from "components/layout/LayoutWrapper"
import {  Container } from "react-bootstrap";

const Careerpage = () => {
	const input = {
		assets: [
			{
				name: "Example Company",
				type: "COMPANY"
			},
			{
				name: "Example Artwork",
				type: "ARTWORK"
			}
		]
	}
	return (
		<>
		<LayoutWrapper>
			<Container>
				<h2>Career page works...</h2>

			</Container>
		</LayoutWrapper>
			
		</>
	)
}

export default Careerpage;
