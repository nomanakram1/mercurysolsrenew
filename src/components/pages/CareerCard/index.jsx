import React,{useState} from "react";
import { Popconfirm,Container,Row,Col,Button,Modal } from "react-bootstrap";
import {Form, Input} from "antd";
import * as styles from './styles.module.scss';
const InfoCard=()=>{
    return(
        <>
        
            <div className={styles.careerMain}>
                <Row>
                    <Col>
                        <div className={styles.icMain}>
                            <div>
                                <h1 className={styles.icTitle}>Node.Js Developer</h1>
                                <h5 className={styles.icExp}>2-5 Years - Experience</h5>
                                <h5 className={styles.icDescHeading}>Job Description</h5>
                            </div>
                            <div className={styles.icListMain}>
                                <ul>
                                    <li className={styles.icListItem}>Knows and have implemented Serverless Architecture</li>
                                    <li className={styles.icListItem}>Worked with NoSQL and AWS Dynamo DB (optional)</li>
                                    <li className={styles.icListItem}>Knows and implemented CI/CD</li>
                                    <li className={styles.icListItem}>Knows and implemented CI/CD</li>
                                    <li className={styles.icListItem}>Other backend expectations like strong DB skills and optimization of code etc</li>
                                    <li className={styles.icListItem}>Good foundations on OOPS</li>
                                    <li className={styles.icListItem}>Knowledge of PHP frameworks like Codeigniter, CakePHP, Laravel</li>
                                    <li className={styles.icListItem}>Good Hands on Server Knowledge</li>
                                </ul>
                            </div>
                            <div className={styles.icBar}>
                                <div className={styles.icBarHead}>
                                    <span  className={styles.icBarTxt}>Key Skills:</span>
                                </div>
                                <div>
                                    <span  className={styles.icBarDescTxt}>Node Js, CI/CD, Typescript, NoSql</span>
                                </div>
                            </div>
                            <div className={styles.icBar}>
                                <div className={styles.icBarHead}>
                                    <span  className={styles.icBarTxt}>Job Location:</span>
                                </div>
                                <div>
                                    <span  className={styles.icBarDescTxt}>Rahim Yar Khan</span>
                                </div>
                            </div>
                            <div className={styles.icBtns}>
                                <button className={styles.icDeleteBtn}>Apply Now</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default InfoCard;