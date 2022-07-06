import React from "react";
import { Container,Row,Col,Form,Button } from "react-bootstrap";
import FormGroup from "react-bootstrap";
import * as styles from './styles.module.scss';

const Formpage=()=>{

    return(
        <>
            <Container>
                <Row>
                    <Col>
                        <h2 className={styles.get}>Get In Touch</h2>
                    </Col> 
                </Row>
                <Row>
                    <Form>
                        <Row className="m-5">
                            <Form.Group as={Col} controlId="formFName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control className={styles.form_control} type="firstname" placeholder="" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formLName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control className={styles.form_control} type="lastname" placeholder="" />
                            </Form.Group>
                           
                        </Row>
                        <Row className="m-5">
                             <Form.Group  as={Col} className="mb-3" controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control className={styles.form_control}  type="email"  placeholder="" />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3" controlId="formPhno">
                                <Form.Label>Phone No</Form.Label>
                                <Form.Control className={styles.form_control} type="phno" placeholder="" />
                            </Form.Group>
                        </Row>
                        <Row className="m-5">
                             <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Message</Form.Label>
                                <Form.Control className={styles.form_control} type="msg" placeholder="" />
                            </Form.Group>
                        </Row>
                       

                        <button className={styles.button} variant="primary" type="submit">
                            Send Message
                        </button>
                        </Form>
                </Row>
            </Container>
        </>
    )
}
export default Formpage;