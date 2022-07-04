import React from "react";
import { Container,Row, Col } from "react-bootstrap";
import * as styles from './styles.module.scss'
// import { StaticImage } from "gatsby-plugin-image";
const Welcome=()=>{
    

    return(
        <>
        <div className={styles.maindiv} >
            <Container>
                <Row>
                    <Col>
                        <h1 className={styles.wel}>Welcome to Mercury Sols</h1>
                        <p className={styles.best}>Best Global IT Consulting Solution and Custom Software Development Company</p>
                        <p className={styles.mercurysols}> Mercurysols is one of the business solution IT Company incorporated in Pakistan with 50+ technology experts which provide world class IT solution to clients. Our moto is to provide best solutions, productive in reasonably price to all our customers.</p>
                    </Col>
                </Row>
            </Container>
           
        </div>
        </>
    )
}
export default Welcome;