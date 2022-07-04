import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Row,Col } from "react-bootstrap";
import * as styles from './styles.module.scss';
const Customepage = () =>{

    return(
        <>
            <div className={styles.custome_div}>
                <Row>
                    <Col>
                    <h2 className={styles.project}>Project</h2>
                    <h1 className={styles.soft}>Custom Software Development</h1>
                   <p className={styles.quality}> We use quality-driven processes to build and implement industry-specific solutions to get maximum ROI</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={3} className={styles.one}>
                    <StaticImage class={styles.C_images} src="../../../assets/images/Choosee_main.png"></StaticImage>
                    </Col>
                    <Col xs={12} md={3}  className={styles.two}>
                    <StaticImage class={styles.C_images} src="../../../assets/images/Choosee_main.png"></StaticImage>
                    </Col>
                    <Col xs={10} md={{ span: 3 }} className={styles.four}>
                    <StaticImage class={styles.C_images} src="../../../assets/images/Choosee_main.png"></StaticImage>
                    </Col>
                    <Col xs={10} md={{ span: 3 }} className={styles.one}>
                    <StaticImage class={styles.C_images} src="../../../assets/images/Choosee_main.png"></StaticImage>
                    </Col>
                   
                </Row>
                <Row>
                    <Col xs={12} md={3} className={styles.three}>
                    <StaticImage class={styles.C_images} src="../../../assets/images/Choosee_main.png"></StaticImage>
                    </Col>
                    <Col xs={12} md={3}  className={styles.one}>
                    <StaticImage class={styles.C_images} src="../../../assets/images/Choosee_main.png"></StaticImage>
                    </Col>
                    <Col xs={10}    md={{ span: 3, offset: 3 }} className={styles.three}>
                    <StaticImage class={styles.C_images} src="../../../assets/images/Choosee_main.png"></StaticImage>
                    </Col>
                </Row>
                {/* <Row>
                  
                    <Col xs={10}    md={{ span: 3, offset: 5 }} className={styles.four}>
                    <StaticImage class={styles.C_images} src="../../../assets/images/Choosee_main.png"></StaticImage>
                    </Col>
                </Row> */}
            </div>
        </>
    )
} 
export default Customepage;