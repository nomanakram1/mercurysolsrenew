import VenrupLogo from "assets/logos/VenrupLogo"
import React, { useState } from "react"
import { Container, Nav, Navbar, Col, Row, Button } from "react-bootstrap"
import * as styles from "./styles.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import Image from "react-bootstrap";
const Header = () => {
	const width=200;
	return (
		<>
			<Navbar bg="white" variant="light" sticky="top" style={{ boxShadow: "0px 4px 15px 2px rgb(0 0 0 / 25%)"}}>
				{/* <Container> */}
				<div>
					<Navbar.Brand href="/">
						<Col>
							{/* <Image src="../../../assets/logos/mercurysolsLogo.svg"></Image> */}
							<StaticImage  href="/"  src="../../../assets/logos/block2logo.png" alt=""  width={width}/>
						</Col>
					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-evenly">
						<Nav>
							{/* <Nav.Link href="/" className={styles.navlink}></Nav.Link> */}
							<Nav.Link href="/company" className={styles.mainNavlink}>COMPANY</Nav.Link>
							<Nav.Link href="/services" className={styles.mainNavlink}>SERVICES	</Nav.Link>
							<Nav.Link href="/projects" className={styles.mainNavlink}>PROJECTS	</Nav.Link>
							<Nav.Link href="/iptv" className={styles.mainNavlink}>IPTV</Nav.Link>
							<Nav.Link href="/career" className={styles.mainNavlink}>CAREER</Nav.Link>
						</Nav>
						<div
							className="nav text-end">
							Request a Quote
						</div>
						<Button className={styles.headerbtn} >Sign In</Button>
					</Navbar.Collapse>
				{/* </Container> */}
				</div>
			</Navbar>
		

		 </>
	)
}
export default Header

