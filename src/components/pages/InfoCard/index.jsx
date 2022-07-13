import React,{useEffect, useState} from "react";
import { Container,Row,Col,Modal } from "react-bootstrap";
import {message} from "antd";
import * as styles from './styles.module.scss';
import firebase from '../../../config/firebase';
const InfoCard=(props)=>{
    const [updateObj,setUpdateObj]=useState({});
    const [showModal,setShowModal]=useState(false);
    const [showConfirm,setShowConfirm]=useState(false);
    const [tempDesc,setTempDesc]=useState(props.jobDescription.split('.'));
    const [tempSkills,setTempSkills]=useState(props.jobKeySkills.split(','));
    useEffect(()=>{
        console.log(updateObj);
    },[updateObj]);
    function handleChange(val) {
        props.onChange(val);
    }
    const handleModalShow=()=>{
        setShowModal(true);
        setUpdateObj({
            recordId:props.recordId,
            jobTitle:props.jobTitle,
            jobExperience:props.jobExperience,
            jobDescription:props.jobDescription,
            jobKeySkills:props.jobKeySkills,
            jobLocation:props.jobLocation,
        })
    }
    const updateTitle = (e) => {
        setUpdateObj(prevState => ({
              ...prevState,
              jobTitle:e.target.value,
        })
        )
    }
    const updateExperience = (e) => {
        setUpdateObj(prevState => ({
              ...prevState,
              jobExperience:e.target.value,
        })
        )
    }
    const updateKeySkills = (e) => {
        setUpdateObj(prevState => ({
              ...prevState,
              jobKeySkills:e.target.value,
        })
        )
    }
    const updateLocation = (e) => {
        setUpdateObj(prevState => ({
              ...prevState,
              jobLocation:e.target.value,
        })
        )
    }
    const updateDescription = (e) => {
        setUpdateObj(prevState => ({
              ...prevState,
              jobDescription:e.target.value,
        })
        )
    }
    const saveChanges=()=>{
        firebase.firestore().collection('jobs').doc(updateObj.recordId).update(updateObj).then(()=>{
            handleChange(Date.now());
            message.info('Record Updated');
        }).catch(()=>{
            message.info("Error Occured! Can't Update the Record");
        });
        setShowModal(false);
        handleChange(Date.now());
    }
    const handleModalDelete=()=>{
        firebase.firestore().collection('jobs').doc(props.recordId).delete().then(()=>{
            message.info('Record Deleted');
        }).catch(()=>{
            message.info("Error Occured! Can't Delete the Record");
        });
        setShowConfirm(false);
        handleChange(Date.now());
    }
    const handleShowConfirm=()=>{
        setShowConfirm(true);
    }
    const handleModalClose=()=>{
      setShowModal(false);
      setUpdateObj({});
    }
    const handleCloseConfirm=()=>{
        setShowConfirm(false);
    }
    console.log('temp data-->',props.jobDescription);
    useEffect(()=>{
        console.log(tempDesc,tempSkills);
    },[tempDesc,tempSkills])
    return(
        <>
        
            <Container>
                <Row>
                    <Col>
                        <div className={styles.icMain}>
                            <div>
                                <h1 className={styles.icTitle}>{props.jobTitle}</h1>
                                <h5 className={styles.icExp}>{props.jobExperience}</h5>
                                <h5 className={styles.icDescHeading}>Job Description</h5>
                            </div>
                            <div className={styles.icListMain}>
                                <ul>{tempDesc.length>0 &&
                                        tempDesc.map(item=>{
                                        return(
                                             <li className={styles.icListItem}>{item}</li>
                                        )})
                                    }
                                </ul>
                            </div>
                            <div className={styles.icBar}>
                                <div className={styles.icBarHead}>
                                    <span  className={styles.icBarTxt}>Key Skills:</span>
                                </div>
                                <div>
                                    <span  className={styles.icBarDescTxt}>
                                        {tempSkills.length>0 &&
                                         tempSkills.map(item=>{
                                            return(item+', ')
                                        })}
                                    </span>
                                </div>
                            </div>
                            <div className={styles.icBar}>
                                <div className={styles.icBarHead}>
                                    <span  className={styles.icBarTxt}>Job Location:</span>
                                </div>
                                <div>
                                    <span  className={styles.icBarDescTxt}>{props.jobLocation}</span>
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
                                                onClick={handleCloseConfirm}
                                            >
                                                <span className="confirmBtnTxt mx-4">Cancel</span>
                                            </button>
                                            <button onClick={handleModalDelete}
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
                                                    <input className="fieldColInput" type='text' defaultValue={updateObj.jobTitle} onChange={updateTitle}/>
                                                </div>
                                            </div>
                                            <div className="fieldCol2">
                                                <div className="fieldColTitle"><span>Experience</span></div>
                                                <div className="fieldColInputMain">
                                                    <input type='text' className="fieldColInput"  defaultValue={updateObj.jobExperience} onChange={updateExperience}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="fieldRow">
                                                <div className="fieldCol">
                                                    <div className="fieldColTitle"><span>Key Skills</span></div>
                                                    <div className="fieldColInputMain">
                                                        <input type='text' className="fieldColInput"  defaultValue={updateObj.jobKeySkills}  onChange={updateKeySkills}/>
                                                    </div>
                                                </div>
                                            <div className="fieldCol2">
                                                <div className="fieldColTitle"><span>Location</span></div>
                                                    <div className="fieldColInputMain">
                                                        <input type='text' className="fieldColInput"  defaultValue={updateObj.jobLocation}  onChange={updateLocation}/>
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
                                                        <textarea
                                                            // contentEditable="true"
                                                            className="textareaMain"
                                                            style={{
                                                            height:'120px',
                                                            background:'#FFFFFF',
                                                            border:'1px solid #323232',
                                                            borderRadius:'5px',
                                                            overflowY:'scroll'
                                                        }}
                                                        value={updateObj.jobDescription}
                                                        onChange={updateDescription}
                                                    >
                                                    </textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer className="border-0">
                                    <button
                                        className="cancelUpdate"
                                        onClick={handleModalClose}
                                    >
                                            <span className="updateJobTxt mx-4">
                                                Cancel
                                            </span>
                                        </button>
                                    <button className="updateJob">
                                        <span className="updateJobTxt mx-4"
                                            onClick={saveChanges}
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