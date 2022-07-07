import React from "react";
import { Row,Col } from "react-bootstrap";
import JobFormpage from "../JobForm";
import * as styles from "./styles.module.scss"
const Jobapplypage=()=>{

    return(
        <>
            <div className={styles.carrier}>
                <Row className={styles.mainCRow}>
                    <Col>
                        <h2 className={styles.StartcCareer}>Your Career Starts Here</h2>
                        <p className={styles.sendcv}> You can send your resume to hr@mercurysols.org, an we will contact you when a new position opens</p>
                    </Col>
                </Row>
            </div>
            <JobFormpage></JobFormpage>
            
        </>
    )
}
export default Jobapplypage;