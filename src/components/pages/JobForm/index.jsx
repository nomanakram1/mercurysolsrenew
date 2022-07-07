import React from "react";
import { Container,Row,Col,Form,Button } from "react-bootstrap";
import FormGroup from "react-bootstrap";
import * as styles from './styles.module.scss';

const JobFormpage=()=>{

    return(
        <>
            <Container>
                
                <Row className={styles.applyborder}>
                    <Form >
                        <Row >
                            <Col>
                                <h2 className={styles.getapply}>You are applying for <span className={styles.projectname}> Project Name</span></h2>
                            </Col> 
                        </Row>
                        <Row className="m-5" xs={1} md={2}>
                            <Form.Group sm={12} md={6}  controlId="formFName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control className={styles.Jobform_control} type="firstname" placeholder="" />
                            </Form.Group>
                            <Form.Group sm={12} md={6}  controlId="formLName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control className={styles.Jobform_control} type="lastname" placeholder="" />
                            </Form.Group>
                           
                        </Row>
                        <Row className="m-5"  xs={1} md={2}>
                             <Form.Group  sm={12} md={6}  className="mb-3" controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control className={styles.Jobform_control}  type="email"  placeholder="" />
                            </Form.Group>
                            <Form.Group sm={12} md={6}  className="mb-3" controlId="formPhno">
                                <Form.Label>Phone No</Form.Label>
                                <Form.Control className={styles.Jobform_control} type="phno" placeholder="" />
                            </Form.Group>
                        </Row>
                        <Row className="m-5"  xs={1} md={2}>
                             <Form.Group  sm={12} md={6}  className="mb-3" controlId="formEmail">
                                <Form.Label>Are you currently working?</Form.Label>
                                     {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check   inline  label="Yes" name="group1" type={type} id={`inline-${type}-1`} />
                                            <Form.Check  inline label="No"   name="group1"  type={type}  id={`inline-${type}-2`} />
                                        </div>
                                    ))}
                            </Form.Group>
                            <Form.Group sm={12} md={6}  className="mb-3" controlId="formPhno">
                                <Form.Label>What is the notice period?</Form.Label>
                                <Form.Control className={styles.Jobform_control} type="phno" placeholder="" />
                            </Form.Group>
                        </Row>
                        <Row className="m-5"  xs={1} md={2}>
                             <Form.Group  sm={12} md={6}  className="mb-3" controlId="formEmail">
                             <Form.Label>Are you currently working?</Form.Label>
                                     {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check   inline  label="Yes" name="group1" type={type} id={`inline-${type}-1`} />
                                            <Form.Check  inline label="No"   name="group1"  type={type}  id={`inline-${type}-2`} />
                                        </div>
                                    ))}
                            </Form.Group>
                            <Form.Group sm={12} md={6}  className="mb-3" controlId="formPhno">
                                <Form.Label>What is Your last working day?</Form.Label>
                                <Form.Control className={styles.Jobform_control} type="phno" placeholder="" />
                            </Form.Group>
                        </Row>
                        <Row className="m-5" sm={12}>
                             <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Uplaod your CV</Form.Label>
                                <svg className={styles.svg} width="40" height="41" viewBox="0 0 45 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M40.7812 6.4375H23.9062L18.2812 0.8125H4.21875C1.88965 0.8125 0 2.70215 0 5.03125V35.9688C0 38.2979 1.88965 40.1875 4.21875 40.1875H40.7812C43.1104 40.1875 45 38.2979 45 35.9688V10.6562C45 8.32715 43.1104 6.4375 40.7812 6.4375ZM29.5312 25.3428H24.6094V30.2646C24.5303 31.5127 23.6689 32.4531 22.5 32.4531C21.3337 32.4531 20.4697 31.5092 20.4697 30.4229V25.3428H15.3896C14.2998 25.3428 13.3594 24.4814 13.3594 23.3125C13.3594 22.1471 14.3033 21.2822 15.3896 21.2822H20.3115V16.2021C20.3906 15.1123 21.3311 14.1719 22.5 14.1719C23.6689 14.1719 24.5303 15.1158 24.5303 16.2021V21.2031H29.4521C30.7002 21.2031 31.6406 22.1436 31.6406 23.3125C31.6406 24.4814 30.7002 25.3428 29.5312 25.3428Z" fill="#3E5E7E"/>
                                </svg>
                                <Form.Control className={styles.Jobform_control1} type="msg" placeholder="" />
                                
                            </Form.Group>
                        </Row>
                        <Row className="m-5" sm={12}>
                             <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Description</Form.Label>
                                <Form.Control className={styles.Jobform_control1} type="msg" placeholder="" />
                            </Form.Group>
                        </Row>
                        <div className={styles.divvv} >
                            <button className={styles.Jobbutton} variant="primary" type="submit">
                              Apply Now
                            </button>
                        </div>
                        </Form>
                </Row>
            </Container>
        </>
    )
}
export default JobFormpage;