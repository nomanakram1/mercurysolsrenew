import React from "react";
import { Container,Row,Col,Button } from "react-bootstrap";
import {Form, Input} from "antd";
import * as styles from './styles.module.scss';
const LoginForm=(props)=>{

    return(
        <>
            <Container>
                <div className={styles.lFMain}>
                    <div className={styles.lFSub}>
                        <Form className={styles.lFClass}>
                            <div className={styles.lFHeadingDiv}>
                                <h1 className={styles.lFHeading}>Admin Login</h1>
                            </div>
                            <Form.Item
                                className={styles.lFformItem}
                                label="Email *"
                                name="email"
                                rules={[
                                {
                                    // required: true,
                                    // message: 'Please enter your email!',
                                },
                                ]}
                            >
                                <Input className={styles.lFinput}/>
                            </Form.Item>
                            <Form.Item
                                className={styles.lFformItem}
                                label="Password *"
                                name="password"
                                rules={[
                                {
                                    // required: true,
                                    // message: 'Please enter your password!',
                                },
                                ]}
                            >
                                <Input className={styles.lFinput}/>
                            </Form.Item>
                            <div className={styles.lFbtnDiv}>
                                <button className={styles.lFbtn}>
                                    Login
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default LoginForm;