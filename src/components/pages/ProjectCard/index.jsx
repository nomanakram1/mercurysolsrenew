import React from "react";
import { Container,Row,Col,Button } from "react-bootstrap";
import {Form, Input,Modal} from "antd";
import * as styles from './styles.module.scss';
import { StaticImage } from "gatsby-plugin-image"
const ProjectCard=()=>{

    return(
        <>
        
            <Container>
                <Row className={styles.rowMain}>
                    <Col className="p-0">
                        <div className={styles.pcMain}>
                            <div>
                                <h1 className={styles.pcTitle}>Project Name</h1>
                                <h5 className={styles.pcExp}>Category</h5>
                                <h5 className={styles.pcDescHeading}>Description</h5>
                            </div>
                            <div className={styles.pcListMain}>
                                <p className={styles.pcListItem}>
                                    Know and have implemented serverless architecture Know and have implemented serverless architecture Know and have implemented serverless architecture Know and have implemented serverless architecture Know and have implemented serverless architecture 
                                </p>
                            </div>
                            <div className={styles.pcListMain}>
                                <ul>
                                    <li className={styles.pcListItem}>Worked with NoSQL and AWS Dynamo DB (optional)</li>
                                    <li className={styles.pcListItem}>Knows and implemented CI/CD</li>
                                    <li className={styles.pcListItem}>Other backend expectations like strong DB skills and optimization of code etc</li>
                                    <li className={styles.pcListItem}>Experience in Design patterns</li>
                                </ul>
                            </div>
                            <div className={styles.pcListMain}>
                                <p className={styles.pcListItem}>
                                    Know and have implemented serverless architecture Know and have implemented serverless architecture Know and have implemented serverless architecture Know and have implemented serverless architecture Know and have implemented serverless architecture 
                                </p>
                            </div>
                            <div className={styles.pcImgMain}>
                                <div className={styles.pcImg}>
                                    <StaticImage  href="/" className="" src="../../../assets/images/Choosee_main_5.png" alt="Mercury Sols Logo" />
                                </div>
                                <div  className={styles.pcImg}>
                                    <StaticImage  href="/" className="" src="../../../assets/images/Choosee_main_5.png" alt="Mercury Sols Logo" />
                                </div>
                            </div>
                            <div className={styles.pcBar}>
                                <div className={styles.pcBarHead}>
                                    <span  className={styles.pcBarTxt}>Tags:</span>
                                </div>
                                <div className={styles.pcBarTagMain}>
                                    <div className={styles.pcBarTag}>
                                        <span  className={styles.pcBarDescTxt}>Node Js</span>
                                    </div>
                                    <div className={styles.pcBarTag}>
                                        <span  className={styles.pcBarDescTxt}>Node Js</span>
                                    </div>
                                    <div className={styles.pcBarTag}>
                                        <span  className={styles.pcBarDescTxt}>Node Js</span>
                                    </div>
                                    <div className={styles.pcBarTag}>
                                        <span  className={styles.pcBarDescTxt}>Node Js</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.pcBar}>
                                <div className={styles.pcBarHead}>
                                    <span  className={styles.pcBarTxt}>Technology</span>
                                </div>
                                <div className={styles.pcBarTagMain}>
                                    <div className={styles.pcBarTag}>
                                        <span  className={styles.pcBarDescTxt}>Node Js</span>
                                    </div>
                                    <div className={styles.pcBarTag}>
                                        <span  className={styles.pcBarDescTxt}>Node Js</span>
                                    </div>
                                    <div className={styles.pcBarTag}>
                                        <span  className={styles.pcBarDescTxt}>Node Js</span>
                                    </div>
                                    <div className={styles.pcBarTag}>
                                        <span  className={styles.pcBarDescTxt}>Node Js</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.pcBtns}>
                                <button className={styles.pcDeleteBtn}>Delete Job</button>
                                <button className={styles.pcUpdateBtn}>Update Job</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default ProjectCard;