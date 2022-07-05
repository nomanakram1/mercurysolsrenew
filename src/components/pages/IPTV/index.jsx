import React from 'react';
import * as styles from "./styles.module.scss";
import { Row,Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

const IPTVPage =() =>{

    return(
        <>
            <div className={styles.mainIptvrow}>
                <Row className={styles.Iptv}>
                    <Col>
                        <h1 className={styles.Iptv_heading}>IPTV Development</h1>
                    </Col>
                </Row>
                <Row  xs={1} md={2} className={styles.mainIptv1}>
                    <Col sm={12} md={4}  className={styles.Iptvpic}>
                        <StaticImage className={styles.picststic} src="../../../assets/images/Web-Development.png"></StaticImage>
                    </Col>
                    <Col className={styles.IptvParagraph} sm={12} md={8}  >
                    <p>Custom web development offers options for businesses who seek to provide a flexible, consistent experience for users across platforms. Leveraging new approaches to web development including progressive web apps, we bring front-end, back-end and architecture ability together to deliver on your business need and maximize delivery speed.</p>
                    </Col>
                </Row>
                <Row className={styles.mainIptv1}>
                    <Col>
                      <p className={styles.Iptvtool} md={4}>Tools and Technique</p>
                    </Col>
                </Row>
                <Row className={styles.mainIptv}  xs={1} sm={2} md={3} lg={4}>
                    <Col lg={3} md={4} sm={6} xs={9}>
                        <div className={styles.Iptvblock}>
                            <StaticImage className={styles.Iptvstatic} src="../../../assets/images/Vector.png"></StaticImage>
                            <p className={styles.IptvHeading}>IPTV MIDDLEWARE DEVELOPMENT</p>
                          
                        </div>      
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={9}>
                        <div className={styles.Iptvblock}>
                        <StaticImage className={styles.Iptvstatic} src="../../../assets/images/Vector (1).png"></StaticImage>
                        <p className={styles.IptvHeading}>PROXIMA IPTV APPLICATION</p>
                        </div>      
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={9}>
                        <div className={styles.Iptvblock}>
                        <StaticImage className={styles.Iptvstatic} src="../../../assets/images/reactTools.png"></StaticImage>
                        <p className={styles.IptvHeading}>IPTV APPLICATION DEVELOPMENT</p>
                        </div>      
                    </Col>
                </Row>
            </div>           
        </>
    )
}
export default IPTVPage;