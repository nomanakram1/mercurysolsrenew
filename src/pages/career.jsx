import React from "react"
import LayoutWrapper from "components/layout/LayoutWrapper"
import {  Container } from "react-bootstrap";
import Jobapplypage from "components/pages/jobapply";

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
			<Jobapplypage></Jobapplypage>
			<Container>
				

			</Container>
		</LayoutWrapper>
			
		</>
	)
}

export default Careerpage;
