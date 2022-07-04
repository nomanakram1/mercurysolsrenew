import Bootstrap from "assets/svgs/bootstrap";
import React from "react";
import * as styles from "./styles.module.scss";
import { Row,Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
const Webpage =() =>{

    return(
        <>  
            <div className={styles.mainWeb}>
                <Row className={styles.mainRow1}>
                    <Col>
                        <h1 className={styles.web_heading}>Web Development</h1>
                    </Col>
                </Row>
                <Row  xs={1} md={2} className={styles.mainRow}>
                    <Col sm={12} md={4}  className={styles.Webpic}>
                        <StaticImage className={styles.picststic} src="../../../assets/images/Web-Development.png"></StaticImage>
                    </Col>
                    <Col className={styles.Webparagraph} sm={12} md={8}  >
                    <p >Custom web development offers options for businesses who seek to provide a flexible, consistent experience for users across platforms. Leveraging new approaches to web development including progressive web apps, we bring front-end, back-end and architecture ability together to deliver</p>
                    </Col>
                </Row>
                <Row className={styles.mainRow}>
                    <Col>
                      <p className={styles.webtool} md={4}>Tools and Technique</p>
                    </Col>
                </Row>
                <Row className={styles.mainRow}   xs={1} sm={2} md={3} lg={4}>
                    <Col lg={3} md={4} sm={6} xs={9}   >
                        <div className={styles.webblock}>
                        <StaticImage className={styles.webstatic} src="../../../assets/images/Web-nodeJS 1.png"></StaticImage>
                            <p className={styles.webheading}>NodeJS</p>
                        </div>      
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={9}  >
                        <div className={styles.webblock}>
                        <StaticImage className={styles.webstatic} src="../../../assets/images/Web-React 1.png"></StaticImage>
                            <p className={styles.webheading}>React JS</p>
                        </div>      
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={9}  >
                        <div className={styles.webblock}>
                        <StaticImage className={styles.webstatic} src="../../../assets/images/Web-Firebase.png"></StaticImage>
                        <p className={styles.webheading}>Firebase</p>
                        </div>      
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={9}>
                        <div className={styles.webblock}>
                        <StaticImage className={styles.webstatic} src="../../../assets/images/Web-mongoDB 1.png"></StaticImage>
                            <p className={styles.webheading}>Mongo DB</p>
                        </div>      
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={9}>
                        <div className={styles.webblock}>
                        <StaticImage className={styles.webstatic} src="../../../assets/images/Web-CSS3 1.png"></StaticImage>
                            <p className={styles.webheading}>CSS 3</p>
                        </div>      
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={9}>
                        <div className={styles.webblock}>
                        <StaticImage className={styles.webstatic} src="../../../assets/svgs/Web-HTML5 1.svg"></StaticImage>
                            <p className={styles.webheading}>HTML</p>
                        </div>      
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={9}>
                        <div className={styles.webblock}>
                             <svg width="184" height="100" viewBox="0 0 184 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="183.333" height="100" fill="url(#pattern0)"/>
                            <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use href="#image0_268_2518" transform="scale(0.00227273 0.00416667)"/>
                            </pattern>
                            <image id="image0_268_2518" width="440" height="240" href="data:image/png;base64,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"/>
                            </defs>
                            </svg>
                            {/* <Bootstrap /> */}
                             {/* <StaticImage className={styles.webstatic} src="../../../assets/svgs/Web-Bootstrap 1.svg"></StaticImage> */}
                            <p className={styles.webheading}>Bootstrap</p>
                        </div>      
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={9}>
                        <div className={styles.webblock}>
                        <StaticImage className={styles.webstatic} src="../../../assets/svgs/django 1 (1).svg"></StaticImage>
                            <p className={styles.webheading}>Dijango</p>
                        </div>      
                    </Col>
                    
                    {/* <Col  >
                        <Row>
                            <Col className={styles.webblock}>
                            <StaticImage className={styles.webstatic} src="../../../assets/svgs/Web-MongoDB 1.svg"></StaticImage>
                            <p className={styles.webheading}>Mongo DB</p>
                            </Col>
                        </Row>   <StaticImage className={styles.webstatic} src="../../../assets/svgs/Web-Firebase 1.svg"></StaticImage>
                            <p className={styles.webheading}>Firebase</p>
                    </Col>
                    <Col >
                        <Row>
                            <Col className={styles.webblock}>
                            <StaticImage className={styles.webstatic} src="../../../assets/svgs/Web-react 1.svg"></StaticImage>
                            <p className={styles.webheading}>React JS</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col  >
                        <Row>
                            <Col className={styles.webblock}>
                         
                            </Col>
                        </Row>
                    </Col>
                    <Col >
                        <Row>
                            <Col className={styles.webblock}>
                            <StaticImage className={styles.webstatic} src="../../../assets/svgs/Web-Bootstrap 1.svg"></StaticImage>
                            <p className={styles.webheading}>Bootstrap</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col >
                        <Row>
                            <Col className={styles.webblock}>
                            <StaticImage className={styles.webstatic} src="../../../assets/svgs/Web-CSS3 1.svg"></StaticImage>
                            <p className={styles.webheading}>CSS 3</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col >
                        <Row>
                            <Col className={styles.webblock}>
                            <StaticImage className={styles.webstatic} src="../../../assets/svgs/Web-HTML5 1.svg"></StaticImage>
                            <p className={styles.webheading}>HTML</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col >
                        <Row>
                            <Col className={styles.webblock}>
                            <StaticImage className={styles.webstatic} src="../../../assets/svgs/Web-Bootstrap 1.svg"></StaticImage>
                            <p className={styles.webheading}>Bootstrap</p>
                            </Col>
                        </Row>
                    </Col> */}
                   
                </Row>
            </div>       
        </>
    )
}
export default Webpage;