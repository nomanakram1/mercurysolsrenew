import React from "react";
import { Container, Row ,Col} from "react-bootstrap";
import * as styles from "./styles.module.scss";

const Lookingpage=()=>{

    return(
        <>
        <div className={styles.looking_main}>
            <Container>
                <Row>
                    <Col>
                         <h1 className={styles.looking}>LOOKING FOR TALENTED & SKILLED INDIVIDUALS</h1>
                         <p className={styles.paragraph}>We are hiring new talent, come….. join our team </p>
                         <p className={styles.current}>Current Openings</p>
                         <button className={styles.buttons}>Flutter Developer</button>
                    </Col>
                </Row>
            </Container>
        </div>
       

        </>
    )
}
export default Lookingpage;