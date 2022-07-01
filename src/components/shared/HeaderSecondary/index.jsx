// import VenrupLogo from "assets/logos/VenrupLogo"
import React from "react"
import { Container, Nav, Navbar, Col, Row, Button } from "react-bootstrap"
import * as styles from "./styles.module.scss"
import { StaticImage } from "gatsby-plugin-image"

const HeaderSecondary = () => {
	return (
		<>
		<div className={styles.hsWrapper}>
            <div className={styles.hSMain}>
                <div className={styles.hSInner}>
                    <div>
                        <div>
							<StaticImage  href="/" className="" src="../../../assets/logos/block2logo.png" alt="Mercury Sols Logo" />
                        </div>
                    </div>
				    <div>
                        <div className={styles.hSLogout}>
							<span>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M7.50024 20.5714H4.50014C3.67184 20.5714 3.0001 19.8038 3.0001 18.8571V5.14286C3.0001 4.19625 3.67184 3.42857 4.50014 3.42857H7.50024C8.32855 3.42857 9.00029 2.66089 9.00029 1.71429C9.00029 0.767679 8.32995 0 7.50024 0H4.50014C2.01475 0 0 2.3025 0 5.14286V18.8571C0 21.6975 2.01475 24 4.50014 24H7.50024C8.32855 24 9.00029 23.2323 9.00029 22.2857C9.00029 21.3391 8.32995 20.5714 7.50024 20.5714ZM23.5601 10.7893L17.5599 3.93214C16.9735 3.26196 16.0243 3.26304 15.4388 3.93214C14.8528 4.60179 14.8528 5.68661 15.4388 6.35625L18.8818 10.2857H9.00029C8.17057 10.2857 7.50024 11.0518 7.50024 12C7.50024 12.9482 8.17104 13.7143 9.00029 13.7143H18.8818L15.4421 17.6454C14.8561 18.315 14.8561 19.3998 15.4421 20.0695C16.028 20.7391 16.9773 20.7391 17.5632 20.0695L23.5634 13.2123C24.1461 12.5411 24.1461 11.4589 23.5601 10.7893Z" fill="white"/>
									</svg>
							</span>
							<span className={styles.hSLogoutTxt}>Log Out</span>
                        </div>
                    </div>
                </div>
            </div>
		</div>
		 </>
	)
}
export default HeaderSecondary;

