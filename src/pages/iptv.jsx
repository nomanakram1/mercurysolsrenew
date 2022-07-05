import React from "react"
import LayoutWrapper from "components/layout/LayoutWrapper"
import {  Container } from "react-bootstrap"
import Lookingpage from "components/pages/Looking"
import Formpage from "components/pages/Form"
import IPTVPage from "components/pages/IPTV"
const Iptvpage = () => {
	return (
		<>
			<LayoutWrapper>
			<Lookingpage></Lookingpage>
			<IPTVPage></IPTVPage>
			<Container>
				<Formpage></Formpage>
			</Container>
		</LayoutWrapper>
		</>
	)
}

export default Iptvpage
