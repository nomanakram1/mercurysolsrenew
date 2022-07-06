import React from "react";
import * as styles from './styles.module.scss'
import { StaticImage } from "gatsby-plugin-image";
import { Card, Button} from "react-bootstrap";
const Servicepage=()=>{

    return(
        <>
        <div className={styles.serve}>
            <h2 className={styles.services}>Services</h2>
            <h1 className={styles.technology}>Technologies We Serve</h1>
            <p className={styles.map}> Map a strategy, build a solution or elevate your product experience with focused engagements available as standalone offerings or as a part of your project’s service stack</p>
        </div>
        <div className={styles.carddiv} >
            <Card className={styles.card}>
            {/* <Card.Img variant="top" src="../../../assets/images/blue_banner.png" /> */}
            <StaticImage className={styles.cardPic} src="../../../assets/images/Web-Development.png" alt="" />
            <Card.Body>
                <Card.Text>
                Web Development
                </Card.Text>
            </Card.Body>
            </Card>
            <Card className={styles.card}>
            {/* <Card.Img variant="top" src="../../../assets/images/blue_banner.png" /> */}
            <StaticImage className={styles.cardPic} src="../../../assets/images/web.png" alt="" />
            <Card.Body>
                <Card.Text>
                Mobile App Development 
                </Card.Text>
            </Card.Body>
            </Card>
            <Card className={styles.card} >
            {/* <Card.Img variant="top" src="../../../assets/images/blue_banner.png" /> */}
            <StaticImage className={styles.cardPic} src="../../../assets/images/e-commerce.png" alt="" />
            <Card.Body>
                <Card.Text>
               E-Commerce Development
                </Card.Text>
            </Card.Body>
            </Card>
            <Card className={styles.card} >
            {/* <Card.Img variant="top" src="../../../assets/images/blue_banner.png" /> */}
            <StaticImage className={styles.cardPic} src="../../../assets/images/Game-Development.png" alt="" />
            <Card.Body>
                <Card.Text>
               Game Development
                </Card.Text>
            </Card.Body>
            </Card>
            <Card className={styles.card} >
            {/* <Card.Img variant="top" src="../../../assets/images/blue_banner.png" /> */}
            <StaticImage className={styles.cardPic} src="../../../assets/images/webic_ui-ux.png" alt="" />
            <Card.Body>
                <Card.Text>
                User Experiance
                </Card.Text>
            </Card.Body>
            </Card>
         </div>
         <div>
         <Button className={styles.request}>Request a Quote</Button>
         </div>
        </>
    )
}
export default Servicepage;