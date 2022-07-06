import React from "react"
import * as styles from "./styles.module.scss"
import Footer from "components/shared/Footer"
import Header from "components/shared/Header"
import HeaderSecondary from "components/shared/HeaderSecondary"
import Sidebar from "components/shared/Sidebar"
import { Container, Nav, Navbar, Col, Row, Button } from "react-bootstrap"

import "scss/main.scss"

const LayoutWrapper = ({ path,children }) => {
	console.log('PATH --> ',window.location.href);
	const url=window.location.href;
	return (
		<>
			
			
			{url.includes('login') && 
				<>
					<HeaderSecondary />
					<div className="row m-0" style={{minHeight:'90vh'}}>
						<div  className="col-12 m-0 p-0">
							<div className={styles.content_wrapper}>{children}</div>
						</div>
					</div>
				</>
			}
			{
				
				url.includes('adminPanel') && 
				<>
					<HeaderSecondary />
					<div className="row m-0" style={{minHeight:'90vh'}}>
						<div  className="col-lg-2 col-md-3 col-sm-4 m-0 p-0">
							<Sidebar/>
						</div>
						<div  className="col-lg-10 col-md-9 col-sm-8 m-0 p-0">
							<div className={styles.content_wrapper}>{children}</div>
						</div>
					</div>
				</>
			}
			{
				
				url.includes('adminProject') && 
				<>
					<HeaderSecondary />
					<div className="row m-0" style={{minHeight:'90vh'}}>
						<div  className="col-lg-2 col-md-3 col-sm-4 m-0 p-0">
							<Sidebar/>
						</div>
						<div  className="col-lg-10 col-md-9 col-sm-8 m-0 p-0">
							<div className={styles.content_wrapper}>{children}</div>
						</div>
					</div>
				</>
			}	
			{/* {
				<>
					<Header/>
					<div className={styles.content_wrapper}>{children}</div>
				</>
				
			} */}
			
			<Footer />
		</>
	)
}

export default LayoutWrapper
