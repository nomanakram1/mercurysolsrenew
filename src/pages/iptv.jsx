import React from "react"
import LayoutWrapper from "components/layout/LayoutWrapper"
import {  Container } from "react-bootstrap"
import Lookingpage from "components/pages/Looking"
import Formpage from "components/pages/Form"
const Iptvpage = () => {
	return (
		<>
			<LayoutWrapper>
				<Lookingpage></Lookingpage>
			<Container>
				<h2>Iptv page works...</h2>
				<Formpage></Formpage>
				
			</Container>
		</LayoutWrapper>
		</>
	)
}

export default Iptvpage
