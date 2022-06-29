import React from "react";
import * as styles from './styles.module.scss';
import { Container ,Row,Col} from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

const Aboutpage=() =>{

    return(
        <>
        <div className={styles.Aboutmain}>
            <Container>
                <Row>
                    <Col>
                        <h1 className={styles.heading1}>About Us</h1>
                        <p className={styles.graph}>We are one of the largest and among the most trusted Web Development Companies that has been offering quality solutions to global clients since 2016.</p>
                        <p className={styles.graph}> we always believe in work quality and long term relationship with clients. "One Happy Customer will bring 100 more customer " This is our goal and we are keep trying to make all our customers happy with our services.</p>
                        <p className={styles.graphh}>We embrace the latest technologies to deliver solutions that address our clients business challenges and aim to provide competitively priced, with high quality software solutions that increase business value and improve business processes.</p>
                    </Col>
                </Row>
            </Container>
         </div>
           <StaticImage src="../../../assets/images/do-something.png"></StaticImage> 
        </>
    )
}
export default Aboutpage;