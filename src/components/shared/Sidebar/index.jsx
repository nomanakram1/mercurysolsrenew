import VenrupLogo from "assets/logos/VenrupLogo"
import React, { useState,useEffect } from "react"
import { Container, Nav, Navbar, Col, Row, Button } from "react-bootstrap"
import * as styles from "./styles.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import {navigate} from 'gatsby';

const SideBar = (props) => {
	const [currentPage,setCurrentPage]=useState(0);
	return (
		<>
		{/* <div className={styles.sbMain}> */}
		<div className={props.sideBarOpen ? styles['sbMain','sbMainClr'] : styles['sbMain']}>
			<div className={styles.sbItem}><a href="/adminPanel" className={styles.sbItemTxt}>Jobs</a></div>
			<div className={styles.sbItem}><a href="/adminProject" className={styles.sbItemTxt}>Projects</a></div>
			<div className={styles.sbItem}><a href="/adminProject" className={styles.sbItemTxt}>Projects</a></div>
		</div>
		 </>
	)
}
export default SideBar

