import React from "react";
import * as styles from './styles.module.scss'
import { StaticImage } from "gatsby-plugin-image";
import { Card, Button,Container,Row, Col} from "react-bootstrap";
const Servicepage=()=>{

    return(
        <>
        <div className={styles.serve}>
            <Container>
                <Row>
                    <Col>
                        <h2 className={styles.services}>SERVICES</h2>
                        <h1 className={styles.technology}>Technologies We Serve</h1>
                        <p className={styles.map}> Map a strategy, build a solution or elevate your product experience with focused engagements available as standalone offerings or as a part of your project’s service stack</p>
                    </Col>
                </Row>
            </Container>
        </div>
        <Row className={styles.mainSblock} xs={1} sm={2} md={4} lg={4}>
        {/* <Col lg={3} md={4} sm={6} xs={9}>
                        <div className={styles.Sblock}>
                        <StaticImage className={styles.cardPic} src="../../../assets/images/Web-Development.png" alt="" />
                            <p className={styles.Sheading}>Flutter</p>
                        </div>      
                    </Col> */}
            <Col lg={3} md={3} sm={6} xs={9}>
                <Card className={styles.card} >
                {/* <Card.Img variant="top" src="../../../assets/images/blue_banner.png" /> */}
                    <StaticImage className={styles.cardPic} src="../../../assets/images/Web-Development.png" alt="" />
                    <Card.Body>
                        <Card.Text>
                         Web Development
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={3} md={3} sm={6} xs={9}>
                <Card className={styles.card}>
                <StaticImage className={styles.cardPic} src="../../../assets/images/web.png" alt="" />
                    <Card.Body>
                        <Card.Text>
                            Mobile App Development 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={3} md={3} sm={6} xs={9}>
                <Card className={styles.card} >
                {/* <Card.Img variant="top" src="../../../assets/images/blue_banner.png" /> */}
                <StaticImage className={styles.cardPic} src="../../../assets/images/e-commerce.png" alt="" />
                    <Card.Body>
                        <Card.Text>
                            E-Commerce Development
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={3} md={3} sm={6} xs={9}>
                <Card className={styles.card} >
                {/* <Card.Img variant="top" src="../../../assets/images/blue_banner.png" /> */}
                <StaticImage className={styles.cardPic} src="../../../assets/images/Game-Development.png" alt="" />
                <Card.Body>
                    <Card.Text>
                Game Development
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col lg={3} md={3} sm={6} xs={9}>
            <Card className={styles.card} >
            {/* <Card.Img variant="top" src="../../../assets/images/blue_banner.png" /> */}
            <StaticImage className={styles.cardPic} src="../../../assets/images/webic_ui-ux.png" alt="" />
            <Card.Body>
                <Card.Text>
                User Experiance
                </Card.Text>
            </Card.Body>
            </Card>
            </Col>
 
         </Row>
         <div>
         <Button className={styles.request}>Request a Quote</Button>
         </div>
        </>
    )
}
export default Servicepage;