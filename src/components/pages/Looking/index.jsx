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
                    </Col>  
                </Row>
            </Container>
            <Row>
                 <Col >
                        <div className={styles.buttonsdiv} sm={2} md={3} lg={4}>
                             <button className={styles.buttons}>Flutter Developer</button>
                             <button className={styles.buttons}>Flutter Developer</button>
                             <button className={styles.buttons}>Flutter Developer</button>
                             <button className={styles.buttons}>Flutter Developer</button>
                         </div>                    
                        <div className={styles.buttonsdiv} sm={2} md={3} lg={4}>
                             <button className={styles.buttons}>Flutter Developer</button>
                             <button className={styles.buttons}>Flutter Developer</button>
                             <button className={styles.buttons}>Flutter Developer</button>
                             <button className={styles.buttons}>Flutter Developer</button>
                         </div>                    
                    </Col>
            </Row>
        </div>

        </>
    )
}
export default Lookingpage;