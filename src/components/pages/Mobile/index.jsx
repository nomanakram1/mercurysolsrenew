import React from 'react';
import * as styles from "./styles.module.scss";
import { Row,Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

const Mobilepage =() =>{

    return(
        <>
            <div className={styles.mainmobilerow}>
                <Row className={styles.mainmobile1}>
                    <Col>
                        <h1 className={styles.mob_heading}>Mobile App Development</h1>
                    </Col>
                </Row>
                <Row  xs={1} md={2}  className={styles.mainmobile}>
                    <Col sm={12} md={4}  className={styles.mobpic}>
                        <StaticImage className={styles.picststic} src="../../../assets/images/Web.png"></StaticImage>
                    </Col>
                    <Col className={styles.mobparagraph} sm={12} md={8}  >
                    <p >Custom web development offers options for businesses who seek to provide a flexible, consistent experience for users across platforms. Leveraging new approaches to web development including progressive web apps, we bring front-end, back-end and architecture ability together to deliver</p>
                    </Col>
                </Row>
                <Row className={styles.mainmobile1}>
                    <Col>
                      <p className={styles.mobtool} md={4}>Tools and Technique</p>
                    </Col>
                </Row>
                <Row className={styles.mainmobile}   xs={1} sm={2} md={3} lg={4}>
                    <Col lg={3} md={4} sm={6} xs={9}>
                        <div className={styles.mobblock}>
                            <StaticImage className={styles.mobstatic} src="../../../assets/svgs/Web-NodeJS 1.svg"></StaticImage>
                            <p className={styles.webheading}>Flutter</p>
                        </div>      
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={9}>
                        <div className={styles.mobblock}>
                        <StaticImage className={styles.mobstatic} src="../../../assets/svgs/Web-react 1.svg"></StaticImage>
                            <p className={styles.webheading}>React JS</p>
                        </div>      
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={9}>
                        <div className={styles.mobblock}>
                        <StaticImage className={styles.mobstatic} src="../../../assets/svgs/Mobile-IOS 1.svg"></StaticImage>
                            <p className={styles.webheading}>IOS</p>
                        </div>      
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={9}>
                        <div className={styles.mobblock}>
                        <StaticImage className={styles.mobstatic} src="../../../assets/images/android.png "></StaticImage>
                            <p className={styles.webheading}>Android</p>
                        </div>      
                    </Col>
                    
                </Row>
            </div>           
        </>
    )
}
export default Mobilepage;