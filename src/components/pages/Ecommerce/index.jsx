import React from 'react';
import * as styles from "./styles.module.scss";
import { Row,Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

const Ecommercepage =() =>{
    const height=300;
    return(
        <>
            <div className={styles.mainCommercerow}>
                <Row className={styles.mainEcommerce1}>
                    <Col>
                        <h1 className={styles.Ecom_heading}>E-Commerce Development</h1>
                    </Col>
                </Row>
                <Row  xs={1} md={2}  style={{justifyContent:"space-between"}} className={styles.mainEcommerce1}>
                    <Col sm={12} md={4}  className={styles.Ecompic}>
                        <StaticImage height={height} className={styles.picststic} src="../../../assets/images/e-commerce.png"></StaticImage>
                    </Col>
                    <Col className={styles.Ecomparagraph} sm={12} md={8}  >
                    <p >Custom web development offers options for businesses who seek to provide a flexible, consistent experience for users across platforms. Leveraging new approaches to web development including progressive web apps, we bring front-end, back-end and architecture ability together to deliver</p>
                    </Col>
                </Row>
                <Row className={styles.mainEcommerce1}>
                    <Col>
                      <p className={styles.Ecomtool} md={4}>Tools and Technique</p>
                    </Col>
                </Row>
                <Row className={styles.mainEcommerce}  xs={1} sm={2} md={3} lg={4}>
                    <Col lg={3} md={4} sm={6} xs={9}>
                        <div className={styles.Ecomblock}>
                            <StaticImage className={styles.Ecomstatic} src="../../../assets/images/development 1.png"></StaticImage>
                            <p className={styles.Ecomheading}>Woocommerce</p>
                          
                        </div>      
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={9}>
                        <div className={styles.Ecomblock}>
                        <StaticImage className={styles.Ecomstatic} src="../../../assets/images/shopify.png"></StaticImage>
                            <p className={styles.Ecomheading}>Shopify</p>
                        </div>      
                    </Col>
                    {/* <Col lg={3} md={4} sm={6} xs={9}>
                        <div className={styles.Ecomblock}>
                        <StaticImage className={styles.Ecomstatic} src="../../../assets/images/e-commerce.png"></StaticImage>
                            <p className={styles.Ecomheading}>Shopify</p>
                        </div>      
                    </Col> */} 
                </Row>
            </div>           
        </>
    )
}
export default Ecommercepage;