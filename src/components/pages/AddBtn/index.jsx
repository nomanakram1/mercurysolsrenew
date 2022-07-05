import React from "react";
import { Container,Row,Col,Button } from "react-bootstrap";
import {Form, Input} from "antd";
import * as styles from './styles.module.scss';
const LoginForm=(props)=>{

    return(
        <>
            <Container style={{margin:'0!important'}} className={styles.abContainer}>
                <div className={styles.abMain}>
                    <div className={styles.abHeading}>
                        <span className={styles.abHeadingTxt}>{props.title}</span>
                    </div>
                    <div className={styles.abBtnMain}>
                    <button className={styles.abBtn}>
                        <div className={styles.abBtnInner}>
                            <span  className={styles.abBtnIcon}>
                                <svg width="28" height="28" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M38.0714 19.0938C38.0714 20.7176 36.76 22.0322 35.1429 22.0322H21.9643V35.2509C21.9643 36.8748 20.6528 38.1875 19.0357 38.1875C17.4186 38.1875 16.1071 36.8748 16.1071 35.2509V22.0322H2.92857C1.31145 22.0322 0 20.7176 0 19.0938C0 17.4699 1.31145 16.1572 2.92857 16.1572H16.1071V2.93842C16.1071 1.31453 17.4186 0 19.0357 0C20.6528 0 21.9643 1.31453 21.9643 2.93842V16.1572H35.1429C36.7627 16.1562 38.0714 17.4689 38.0714 19.0938Z" fill="white"/>
                                </svg>
                            </span>
                            <span  className={styles.abBtnTxt}>Add New {props.btnTitle}</span>
                        </div>
                    </button>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default LoginForm;