import React from "react"
import * as styles from "./styles.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import Facebook from "assets/icons/Facebook"
import Instagram from "assets/icons/Instagram"
import Pinterest from "assets/icons/Pinterest"
import YouTube from "assets/icons/YouTube"
import { StaticImage } from "gatsby-plugin-image"


const Footer = () => {
	return (
		<Container fluid className="h-50 text-white py-3 " style={{ background: "#02285B" }}>
			<Container>
				<Row>
					<Col>
						<div>
							<StaticImage style={{ color: "white",marginTop:"22px" }} src="../../../assets/logos/LogoWhite.png" alt="" />
						</div>
						<Row>
							<Col>
								<div style={{ justifyContent: "center", padding: "25px 0px" }}>
									<a href="#" target="_blank" className={styles.social_icon}>
										<Facebook />
									</a>
									<a href="#" target="_blank" className={styles.social_icon}>
										<YouTube />
									</a>
									<a href="#" target="_blank" className={styles.social_icon}>
										<Instagram />
									</a>
									<a href="#" target="_blank" className={styles.social_icon}>
										<Pinterest />
									</a>
								</div>
							</Col>
							<div className={styles.mercury}	>MercurySols © 2022</div>
						</Row>
					</Col>
					<Col className="text-end">
						<div style={{ marginTop: "20px", text: "white" }} class="justify-content-start">
							<div>
								<h1 className={styles.lists}>Contact Us</h1>
							</div>
							<div class="d-flex">
									<StaticImage className={styles.picc} src="../../../assets/images/email.png" alt="" />
								<a href="mailto:hr@mercurysols.org" className={styles.lists}>
									hr@mercurysols.org
								</a>
							</div>
							<div class="d-flex">
								<StaticImage className={styles.picc} src="../../../assets/images/email.png" alt="" />
								<a className={styles.lists} href="mailto:info@mercurysols.org">
									info@mercurysols.org
								</a>
							</div>
							<div class="d-flex">
								<div>
									<StaticImage className={styles.picc} src="../../../assets/images/phone.png" alt="" />
								</div>
								<a href="tel:+92 300 6777686" className={styles.lists}>+92 300 6777686</a>
							</div>
							<div class="d-flex ">
								<div>
									<StaticImage className={styles.picc} src="../../../assets/images/phone2.png" alt="" />
								</div>
								<a href="tel:+92 68 5905990" className={styles.lists}>+92 68 5905990</a>
							</div>
						</div>
					</Col>
					<Col className="text-center">
						<StaticImage style={{ color: "white",marginTop:"22px" }} src="../../../assets/images/location.png" alt="" />
						<div>
							<div
								style={{
									fontFamily: "Roboto",
									fontStyle: "normal",
									fontWeight: "300",
									fontSize: "18px",
									lineHeight: "28px",
									color: "#ffffff",
								}}
							>
								Mercury Sols, Abbasia Town Main Road, Rahim Yar Khan, Punjab 64200, Pakistan
							</div>
							<router-link to="/">
								<div
									style={{
										width: "80%",
										background: "#e29e4e",
										borderRadius: "5px",
										margin: "auto",
										marginTop: "40px",
									}}
								>
									<div
										style={{
											fontFamily: "Roboto",
											fontStyle: "normal",
											fontWeight: "300",
											fontSize: "18px",
											lineHeight: "28px",
											color: "#ffffff",
										}}
									>
										Request A Quote
									</div>
								</div>
							</router-link>
						</div>
					</Col>
				</Row>
			</Container>
		</Container>
	)
}

export default Footer
