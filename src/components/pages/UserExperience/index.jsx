import React from 'react';
import * as styles from "./styles.module.scss";
import { Row,Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

const UserExppage =() =>{
    const height=250;
    return(
        <>
            <div className={styles.mainExprow}>
                <Row className={styles.UserExp}>
                    <Col>
                        <h1 className={styles.UserExp_heading}>User Experiance</h1>
                    </Col>
                </Row>
                <Row  xs={1} md={2} className={styles.mainUserExp1}>
                    <Col sm={12} md={4}  className={styles.UserExppic}>
                        <StaticImage height={height} className={styles.picststic} src="../../../assets/images/webic_ui-ux.png"></StaticImage>
                    </Col>
                    <Col className={styles.UserExpParagraph} sm={12} md={8}  >
                    <p >Custom web development offers options for businesses who seek to provide a flexible, consistent experience for users across platforms. Leveraging new approaches to web development including progressive web apps, we bring front-end, back-end and architecture ability together to deliver</p>
                    </Col>
                </Row>
                <Row className={styles.mainUserExp1}>
                    <Col>
                      <p className={styles.UserExptool} md={4}>Tools and Technique</p>
                    </Col>
                </Row>
                <Row className={styles.mainUserExp}  xs={1} sm={2} md={3} lg={4}>
                    <Col lg={3} md={4} sm={6} xs={9}>
                        <div className={styles.UserExpblock}>
                            <StaticImage className={styles.UserExpstatic} src="../../../assets/images/UX-Sketch.png"></StaticImage>
                            <p className={styles.UserExpHeading}>Adobe CC</p>
                          
                        </div>      
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={9}>
                        <div className={styles.UserExpblock}>
                        <StaticImage className={styles.UserExpstatic} src="../../../assets/images/UX-SketchD.png"></StaticImage>
                            <p className={styles.UserExpHeading}>Sketch</p>
                        </div>      
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={9}>
                        <div className={styles.UserExpblock}>
                        <StaticImage className={styles.UserExpstatic} src="../../../assets/images/UX-SketchF.png"></StaticImage>
                            <p className={styles.UserExpHeading}>Figma</p>
                        </div>      
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={9}>
                        <div className={styles.UserExpblock}>
                        <StaticImage className={styles.UserExpstatic} src="../../../assets/images/UX-SketchPX.png"></StaticImage>
                            <p className={styles.UserExpHeading}>XD</p>
                        </div>      
                    </Col>
                </Row>
            </div>           
        </>
    )
}
export default UserExppage;