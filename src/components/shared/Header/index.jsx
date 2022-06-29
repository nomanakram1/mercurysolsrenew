import VenrupLogo from "assets/logos/VenrupLogo"
import React, { useState } from "react"
import { Container, Nav, Navbar, Col, Row, Button } from "react-bootstrap"
import * as styles from "./styles.module.scss"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
	return (
		<>
			<Navbar bg="white" variant="light" sticky="top" style={{ boxShadow: "0px 4px 15px 2px rgb(0 0 0 / 25%)" }}>
				<Container>
					<Navbar.Brand href="/">
						<Col col-sm-6>
							<StaticImage  href="/" className="aaa" src="../../../assets/logos/block2logo.png" alt="" />
						</Col>
					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-evenly">
						<Nav>
							<Nav.Link href="/" className={styles.navlink}></Nav.Link>
							<Nav.Link href="/company" className={styles.navlink}>COMPANY</Nav.Link>
							<Nav.Link href="/services" className={styles.navlink}>SERVICES	</Nav.Link>
							<Nav.Link href="/projects" className={styles.navlink}>PROJECTS	</Nav.Link>
							<Nav.Link href="/iptv" className={styles.navlink}>IPTV</Nav.Link>
							<Nav.Link href="/career" className={styles.navlink}>CAREER</Nav.Link>
						</Nav>
						<div
							className="nav text-end"
							style={{
								fontSize: "16px",
								fontWeight: "500",
								lineHeight: "21px",
								color: "#001c42",
								fontFamily: "Roboto",
								fontStyle: "normal",
							}}
						>
							Request a Quote
						</div>
						<Button style={{ color: "#fff", backgroundColor: "#011c45" }}>Sign In</Button>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		

		 </>
	)
}
export default Header

