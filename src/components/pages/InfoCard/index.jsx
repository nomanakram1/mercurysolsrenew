import React,{useState} from "react";
import { Popconfirm,Container,Row,Col,Button,Modal } from "react-bootstrap";
import {Form, Input} from "antd";
import * as styles from './styles.module.scss';
const InfoCard=()=>{
    const [showModal,setShowModal]=useState(false);
    const [showConfirm,setShowConfirm]=useState(false);
    const handleModalShow=()=>{
      setShowModal(true);
    }
    const handleShowConfirm=()=>{
        setShowConfirm(true);
    }
    const handleModalClose=()=>{
      setShowModal(false);
    }
    const handleCloseConfirm=()=>{
        setShowConfirm(false);
    }

    return(
        <>
        
            <Container>
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
                                <button onClick={handleShowConfirm} className={styles.icDeleteBtn}>Delete Job</button>
                                <button onClick={handleModalShow} className={styles.icUpdateBtn}>Update Job</button>
                                <Modal
                                    centered
                                    show={showConfirm}
                                    onHide={handleCloseConfirm}
                                    dialogClassName="m-0 mx-auto confirmModalMain"
                                    size='md'
                                >
                                    <Modal.Dialog
                                        className="m-0"
                                        size='xl'>
                                        <Modal.Header className="border-0 m-2 p-0 pt-2 pe-2" style={{}} closeButton>
                                        </Modal.Header>
                                        <Modal.Body className="py-0">
                                            <div className="d-flex justify-content-start align-item-center px-3">
                                                <span>
                                                    <svg width="60" height="50" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M58.3834 42.9688L33.7852 2.34375C31.902 -0.78125 27.1496 -0.78125 25.2537 2.34375L0.667176 42.9688C-1.22525 46.0826 1.13181 50 4.92485 50H54.1211C57.899 50 60.2631 46.0938 58.3834 42.9688ZM26.7506 15.1786C26.7506 13.6998 27.9903 12.5 29.5183 12.5C31.0464 12.5 32.2861 13.7054 32.2861 15.1786V29.4643C32.2861 30.9431 31.0464 32.1429 29.6221 32.1429C28.1979 32.1429 26.7506 30.9487 26.7506 29.4643V15.1786ZM29.5183 42.8571C27.5164 42.8571 25.8926 41.2857 25.8926 39.3482C25.8926 37.4107 27.5152 35.8393 29.5183 35.8393C31.5215 35.8393 33.1441 37.4107 33.1441 39.3482C33.1394 41.2835 31.5249 42.8571 29.5183 42.8571Z" fill="#C92020"/>
                                                    </svg>
                                                </span>
                                                <span className="confirmTxt">Are You Sure You Want to delete it</span>
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer className="border-0 mt-5 mb-3">
                                        <div className="d-flex mb-2">
                                            <button
                                                className="cancelConfirm"
                                                onClick={handleModalClose}
                                            >
                                                <span className="confirmBtnTxt mx-4">Cancel</span>
                                            </button>
                                            <button
                                                className="deleteConfirm"
                                            >
                                                <span className="confirmBtnTxt mx-4">Delete</span>
                                            </button>
                                        </div>
                                </Modal.Footer>
                                </Modal.Dialog>
                            </Modal>
                            </div>
                            <Modal
                                centered
                                show={showModal}
                                onHide={handleModalClose}
                                // dialogClassName="modalMain"
                                size='xl'
                            >
                                <Modal.Dialog
                                className="m-0"
                                size='xl'>
                                <Modal.Header className="border-0 m-2" style={{}} closeButton>
                                    <Modal.Title
                                        className="modalTitle"
                                        style={{
                                            
                                            }}>Update Modal</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <div className="mx-lg-3 mx-0 bodyMain">
                                        <div className="fieldRow">
                                            <div className="fieldCol">
                                                <div className="fieldColTitle"><span>Job Name</span></div>
                                                <div className="fieldColInputMain">
                                                    <input className="fieldColInput" type='text'/>
                                                </div>
                                            </div>
                                            <div className="fieldCol2">
                                                <div className="fieldColTitle"><span>Experience</span></div>
                                                <div className="fieldColInputMain">
                                                    <input type='text' className="fieldColInput"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="fieldRow">
                                                <div className="fieldCol">
                                                    <div className="fieldColTitle"><span>Key Skills</span></div>
                                                    <div className="fieldColInputMain">
                                                        <input type='text' className="fieldColInput"/>
                                                    </div>
                                                </div>
                                            <div className="fieldCol2">
                                                <div className="fieldColTitle"><span>Location</span></div>
                                                    <div className="fieldColInputMain">
                                                        <input type='text' className="fieldColInput"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fieldRow">
                                                <div className="textareaCol justify-content-between">
                                                    <div
                                                        className="fieldColTitle">
                                                            <span>
                                                               Description
                                                            </span>
                                                        </div>
                                                    <div className="textareaCont">
                                                        <div
                                                            contentEditable="true"
                                                            className="textareaMain"
                                                            style={{
                                                            // width:'300px',
                                                            height:'120px',
                                                            background:'#FFFFFF',
                                                            border:'1px solid #323232',
                                                            borderRadius:'5px',
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer className="border-0">
                                    <button
                                        className="cancelUpdate"
                                        // className="border-0 py-2 px-5"
                                        style={{
                                        // background:'#928F8F',
                                        // borderRadius:'5px'
                                        }}
                                        onClick={handleModalClose}
                                    >
                                            <span className="updateJobTxt mx-4"
                                            style={{
                                                // fontWeight:'400',
                                                // fontSize:'16px',
                                                // textAlign:'center',
                                                // color:'#FFFFFF',
                                            }}
                                            >
                                                Cancel
                                            </span>
                                        </button>
                                    <button
                                        className="updateJob"
                                        // className="border-0 py-2 px-4"
                                        style={{
                                        // background:'#04A8F5',
                                        // borderRadius:'5px'
                                    }}
                                    >
                                        <span className="updateJobTxt mx-4"
                                            style={{
                                                // fontWeight:'400',
                                                // fontSize:'16px',
                                                // textAlign:'center',
                                                // color:'#FFFFFF',
                                            }}
                                            >
                                                Save Changes
                                            </span>
                                    </button>
                                </Modal.Footer>
                                </Modal.Dialog>
                            </Modal>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default InfoCard;