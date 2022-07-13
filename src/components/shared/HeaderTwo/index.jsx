import React from "react";
import "./styles.scss"
import { useState } from "react";
import {  Button } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";

const HeaderTwo=() =>{
    const width=200;
        const [active,setActive] =useState("nav_menue");
        const [toggleIcon,setToggleIcon]=useState("nav_toggler");

        const navToggle=()=>{
            active==='nav_menue' 
            ? setActive('nav_menue nav_active'):
              setActive ("nav_menue");

              toggleIcon==='nav_toggler'
              ? setToggleIcon('nav_toggler toggle')
              : setToggleIcon("nav_toggler")
        }
         

    return(
        <>
        <nav className="navv">
        <StaticImage  href="/"  src="../../../assets/logos/block2logo.png" alt=""  width={width}/>
            {/* <a href="/" className="nav_brand">logo</a> */}
             <ul className={active}>
                <li className="nav_item"><a href="/company" className="nav_link">COMPANY</a></li>
                <li className="nav_item"><a href="/services" className="nav_link">SERVICES</a></li>
                <li className="nav_item"><a href="/projects"className="nav_link">PROJECTS</a></li>
                <li className="nav_item"><a href="/iptv" className="nav_link">IPTV</a></li>
                <li className="nav_item"><a href="/career" className="nav_link">CAREER</a></li>
             </ul>
             <div className="nav text-end">
                <span className="me-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM5 7H15C15.55 7 16 7.45 16 8C16 8.55 15.55 9 15 9H5C4.45 9 4 8.55 4 8C4 7.45 4.45 7 5 7ZM11 12H5C4.45 12 4 11.55 4 11C4 10.45 4.45 10 5 10H11C11.55 10 12 10.45 12 11C12 11.55 11.55 12 11 12ZM15 6H5C4.45 6 4 5.55 4 5C4 4.45 4.45 4 5 4H15C15.55 4 16 4.45 16 5C16 5.55 15.55 6 15 6Z" fill="#14264A"/>
                    </svg>
                </span>
                Request a Quote</div>
			<Button className="headerbtn" onClick={()=>{navigate('/login/')}} >
            <span className="me-2">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M7.50024 20.5714H4.50014C3.67184 20.5714 3.0001 19.8038 3.0001 18.8571V5.14286C3.0001 4.19625 3.67184 3.42857 4.50014 3.42857H7.50024C8.32855 3.42857 9.00029 2.66089 9.00029 1.71429C9.00029 0.767679 8.32995 0 7.50024 0H4.50014C2.01475 0 0 2.3025 0 5.14286V18.8571C0 21.6975 2.01475 24 4.50014 24H7.50024C8.32855 24 9.00029 23.2323 9.00029 22.2857C9.00029 21.3391 8.32995 20.5714 7.50024 20.5714ZM23.5601 10.7893L17.5599 3.93214C16.9735 3.26196 16.0243 3.26304 15.4388 3.93214C14.8528 4.60179 14.8528 5.68661 15.4388 6.35625L18.8818 10.2857H9.00029C8.17057 10.2857 7.50024 11.0518 7.50024 12C7.50024 12.9482 8.17104 13.7143 9.00029 13.7143H18.8818L15.4421 17.6454C14.8561 18.315 14.8561 19.3998 15.4421 20.0695C16.028 20.7391 16.9773 20.7391 17.5632 20.0695L23.5634 13.2123C24.1461 12.5411 24.1461 11.4589 23.5601 10.7893Z" fill="white"/>
									</svg>
							</span>
                Sign In</Button>
             <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
             </div>
        </nav>
        </>
    )
}
export default HeaderTwo;




