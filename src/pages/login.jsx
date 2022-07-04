import React from "react"
import LayoutWrapper from "components/layout/LayoutWrapper"
import {  Container } from "react-bootstrap"
import LoginForm from "components/pages/LoginForm"
const Login = () => {
	return (
		<>
			<LayoutWrapper>
			<Container>
				<LoginForm/>
			</Container>
		</LayoutWrapper>
		</>
	)
}

export default Login;
