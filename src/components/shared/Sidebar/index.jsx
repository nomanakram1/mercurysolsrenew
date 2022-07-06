import VenrupLogo from "assets/logos/VenrupLogo"
import React, { useState } from "react"
import { Container, Nav, Navbar, Col, Row, Button } from "react-bootstrap"
import * as styles from "./styles.module.scss"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
	return (
		<>
		<div className={styles.sbMain}>
			<div className={styles.sbItem}><span className={styles.sbItemTxt}>Jobs</span></div>
			<div className={styles.sbItem}><span className={styles.sbItemTxt}>Projects</span></div>
			<div className={styles.sbItem}><span className={styles.sbItemTxt}>Projects</span></div>
		</div>
		 </>
	)
}
export default Header

