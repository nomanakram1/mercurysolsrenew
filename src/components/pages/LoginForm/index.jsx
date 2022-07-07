import React,{useState,useEffect} from "react";
import {Form,message,Spin  } from "antd";
import * as styles from './styles.module.scss';
import firebase from '../../../config/firebase';
import { navigate } from "gatsby";
const LoginForm=(props)=>{
    const [authEmail,setAuthEmail]=useState('');
    const [authPassword,setAuthPassword]=useState('');
    const [loading,setLoading]=useState(false);
    const loginHandler=()=>{
        setLoading(true);
        firebase.firestore().collection('admin').get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                if(authEmail.length>=0 && authPassword.length>=0){
                    if(authEmail===data.email && authPassword===data.password){
                        setLoading(false);
                        message.info('Login Succesfuly');
                        navigate("/adminPanel/")
                    }
                    else{
                        setLoading(false);
                        message.info('Incorrect Email OR Password');
                        // navigate("/404/")
                    }
                }
                else{
                    setLoading(false);
                    message.info('Email OR Password is missing');
                    // navigate("/404/")
                }  
            });
        })
    }
    function emailInputHandler(e){
        setAuthEmail(e.target.value);
    } 
    function passwordInputHandler(e){
        setAuthPassword(e.target.value);
    }  
    return(
        <>
                <Spin spinning={loading}><div  className={styles.lFMain}>
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
                                <input onChange={emailInputHandler} className={styles.lFinput}/>
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
                                <input onChange={passwordInputHandler} className={styles.lFinput}/>
                            </Form.Item>
                            <div className={styles.lFbtnDiv}>
                                <button onClick={loginHandler} className={styles.lFbtn}>
                                    Login
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
                </Spin>
        </>
    )
}
export default LoginForm;