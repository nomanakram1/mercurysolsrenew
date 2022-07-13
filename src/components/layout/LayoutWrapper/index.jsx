import React,{useState} from "react"
import * as styles from "./styles.module.scss"
import style from './style.scss';
import Footer from "components/shared/Footer"
import Header from "components/shared/HeaderTwo"
import HeaderSecondary from "components/shared/HeaderSecondary"
import Sidebar from "components/shared/Sidebar"
import { Container, Nav, Navbar, Col, Row, Button } from "react-bootstrap"
// import firebase from './firebase';

import "scss/main.scss"
import { useEffect } from "react"

const LayoutWrapper = ({ path,children }) => {
	const [sideBarOpen, setSideBarOpen] = useState(true);
        function handleSideBarChange(newValue) {
			setSideBarOpen(newValue);
        }
	console.log('PATH --> ',window.location.href);
	const url=window.location.href;
	return (
		<>
			{url.includes('login') && 
				<>
					<Header/>
					<div className="row m-0" style={{minHeight:'90vh'}}>
						<div  className="col-12 m-0 p-0">
							<div className={styles.content_wrapper}>{children}</div>
						</div>
					</div>
				</>
			}
			{url.includes('adminPanel') && 
				<>
					<HeaderSecondary sideBarOpen={sideBarOpen} handleSideBarChange={handleSideBarChange}/>
					<div className="row m-0" style={{minHeight:'90vh'}}>
						<div  className={sideBarOpen?"col-lg-2 col-md-3 col-sm-4 m-0 p-0 height-full":"col-lg-2 col-md-3 col-sm-4 m-0 p-0 height-0"}>
							<Sidebar sideBarOpen={sideBarOpen} handleSideBarChange={handleSideBarChange}/>
						</div>
						<div  className="col-lg-10 col-md-9 col-sm-8 mt-4 p-0 bg-white">
							<div className={styles.content_wrapper}>{children}</div>
						</div>
					</div>
				</>
			}
			{url.includes('adminProject') && 
				<>
					<HeaderSecondary sideBarOpen={sideBarOpen} handleSideBarChange={handleSideBarChange}/>
					<div className="row m-0" style={{minHeight:'90vh'}}>
						<div  className={sideBarOpen?"col-lg-2 col-md-3 col-sm-4 m-0 p-0 height-full":"col-lg-2 col-md-3 col-sm-4 m-0 p-0 height-0"}>
							<Sidebar sideBarOpen={sideBarOpen} handleSideBarChange={handleSideBarChange}/>
						</div>
						<div  className="col-lg-10 col-md-9 col-sm-8 mt-4 p-0 bg-white">
							<div className={styles.content_wrapper}>{children}</div>
						</div>
					</div>
				</>
			}
			{url.includes('career') && 
				<>
					<Header />
					<div className={styles.content_wrapper}>{children}</div>
				</>
			}
			{url.includes('career') && 
				<>
					<Header />
					<div className={styles.content_wrapper}>{children}</div>
				</>
			}
			{url.includes('services') && 
				<>
					<Header />
					<div className={styles.content_wrapper}>{children}</div>
				</>
			}
			{url.includes('projects') && 
				<>
					<Header />
					<div className={styles.content_wrapper}>{children}</div>
				</>
			}
			{url.includes('iptv') && 
				<>
					<Header />
					<div className={styles.content_wrapper}>{children}</div>
				</>
			}
			{url.includes('company') && 
				<>
					<Header />
					<div className={styles.content_wrapper}>{children}</div>
				</>
			}
		
			{(url==='http://localhost:8000/')&&
				<>
					<Header/>
					<div className={styles.content_wrapper}>{children}</div>
				</>
				
			}
			
			<Footer />
		</>
	)
}

export default LayoutWrapper
