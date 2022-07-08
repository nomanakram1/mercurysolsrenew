import React from "react"
import LayoutWrapper from "components/layout/LayoutWrapper"
import {  Container } from "react-bootstrap"
import Projectslide from "components/pages/Project"
import Formpage from "components/pages/Form"
const Projectpage = () => {
	return (
		<>
		<LayoutWrapper>
			<Projectslide></Projectslide>
			<Formpage></Formpage>
		</LayoutWrapper>
			
		</>
	)
}

export default Projectpage;