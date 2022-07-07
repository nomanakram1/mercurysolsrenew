import React,{useState} from "react";
import { Container,Row,Col,Button,Modal } from "react-bootstrap";
import {Form, Input} from "antd";
import * as styles from './styles.module.scss';
import firebase from '../../../config/firebase';
const LoginForm=(props)=>{
    const [showJobModal,setShowJobModal]=useState(false);
    const [jobObj,setJobObj]=useState({});
    const [showProjectModal,setShowProjectModal]=useState(false);
    const [projectObj,setProjectObj]=useState({});
    function handleChange(val) {
        props.onChange(val);
    }
    const handleJobModalClose=()=>{
        setShowJobModal(false);
        setJobObj({});   
    }
    const handleProjectModalClose=()=>{
        setShowProjectModal(false);
        setProjectObj({});   
    }
    // const handleModalShow=()=>{
    // }
    const saveJobChanges=()=>{
        setShowJobModal(false);
        firebase.firestore().collection('jobs').add(jobObj)
        handleChange(Date.now());
        setJobObj({});  
    }
    const saveProjectChanges=()=>{
        setShowProjectModal(false);
        firebase.firestore().collection('projects').add(projectObj)
        handleChange(Date.now());
        setProjectObj({});  
    }
    const updateJobTitle=(e)=>{
        setJobObj(prevState => ({
            ...prevState,
            jobTitle:e.target.value,
      })
      )
    }
    const updatejobExperience=(e)=>{
        setJobObj(prevState => ({
            ...prevState,
            jobExperience:e.target.value,
      })
      )
    }
    const updatejobDescription=(e)=>{
        setJobObj(prevState => ({
            ...prevState,
            jobDescription:e.target.value,
      })
      )
    }
    const updateJobKeySkills=(e)=>{
        setJobObj(prevState => ({
            ...prevState,
            jobKeySkills:e.target.value,
      })
      )
    }
    const updateJobLocation=(e)=>{
        setJobObj(prevState => ({
            ...prevState,
            jobLocation:e.target.value,
      })
      )
    }
    const updateProjectTitle=(e)=>{
        setProjectObj(prevState => ({
            ...prevState,
            projectTitle:e.target.value,
      })
      )
    }
    const updateProjectCategory=(e)=>{
        setProjectObj(prevState => ({
            ...prevState,
            projectCategory:e.target.value,
      })
      )
    }
    const updateProjectDescription=(e)=>{
        setProjectObj(prevState => ({
            ...prevState,
            projectDescription:e.target.value,
      })
      )
    }
    const updateProjectTags=(e)=>{
        setProjectObj(prevState => ({
            ...prevState,
            projectTags:e.target.value,
      })
      )
    }
    const updateProjectTechnology=(e)=>{
        setProjectObj(prevState => ({
            ...prevState,
            projectTechnology:e.target.value,
      })
      )
    }
    const addJobData=()=>{
        if(props.title==='Jobs'){
            setShowJobModal(true);
            setJobObj({
                jobTitle:'',
                jobExperience:'',
                jobDescription:'',
                jobKeySkills:'',
                jobLocation:'',
            })
        }
        else if(props.title==='Projects'){
            setShowProjectModal(true);
            setProjectObj({
                projectTitle:'',
                projectCategory:'',
                projectDescription:'',
                projectTags:'',
                projectTechnology:'',
            })
        //     firebase.firestore().collection('projects').add({
        //         projectTitle:'Project Name',
        //         projectCategory:'2-5 Years - Experience',
        //         projectDescription:'Know and have implemented serverless architecture. Worked with NoSQL and AWS Dynamo DB (optional).Knows and implemented CI/CD.Other backend expectations like strong DB skills and optimization of code etc.Experience in Design patterns.',
        //         projectTags:'Node js, MongoDB',
        //         projectTechnology:'Nodejs,Reactjs',
        //     })
        }
    }

    return(
        <>
            <Container style={{margin:'0!important'}} className={styles.abContainer}>
                <div className={styles.abMain}>
                    <div className={styles.abHeading}>
                        <span className={styles.abHeadingTxt}>{props.title}</span>
                    </div>
                    <div className={styles.abBtnMain}>
                    <button onClick={addJobData} className={styles.abBtn}>
                        <div className={styles.abBtnInner}>
                            <span  className={styles.abBtnIcon}>
                                <svg width="28" height="28" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M38.0714 19.0938C38.0714 20.7176 36.76 22.0322 35.1429 22.0322H21.9643V35.2509C21.9643 36.8748 20.6528 38.1875 19.0357 38.1875C17.4186 38.1875 16.1071 36.8748 16.1071 35.2509V22.0322H2.92857C1.31145 22.0322 0 20.7176 0 19.0938C0 17.4699 1.31145 16.1572 2.92857 16.1572H16.1071V2.93842C16.1071 1.31453 17.4186 0 19.0357 0C20.6528 0 21.9643 1.31453 21.9643 2.93842V16.1572H35.1429C36.7627 16.1562 38.0714 17.4689 38.0714 19.0938Z" fill="white"/>
                                </svg>
                            </span>
                            <span  className={styles.abBtnTxt}>Add New {props.btnTitle}</span>
                        </div>
                    </button>
                    <Modal
                                centered
                                show={showJobModal}
                                onHide={handleJobModalClose}
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
                                            
                                            }}>Job</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <div className="mx-lg-3 mx-0 bodyMain">
                                        <div className="fieldRow">
                                            <div className="fieldCol">
                                                <div className="fieldColTitle"><span>Job Name</span></div>
                                                <div className="fieldColInputMain">
                                                    <input className="fieldColInput" type='text' defaultValue={jobObj.jobTitle} onChange={updateJobTitle}/>
                                                </div>
                                            </div>
                                            <div className="fieldCol2">
                                                <div className="fieldColTitle"><span>Experience</span></div>
                                                <div className="fieldColInputMain">
                                                    <input type='text' className="fieldColInput"  defaultValue={jobObj.jobExperience} onChange={updatejobExperience}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="fieldRow">
                                                <div className="fieldCol">
                                                    <div className="fieldColTitle"><span>Key Skills</span></div>
                                                    <div className="fieldColInputMain">
                                                        <input type='text' className="fieldColInput"  defaultValue={jobObj.jobKeySkills}  onChange={updateJobKeySkills}/>
                                                    </div>
                                                </div>
                                            <div className="fieldCol2">
                                                <div className="fieldColTitle"><span>Location</span></div>
                                                    <div className="fieldColInputMain">
                                                        <input type='text' className="fieldColInput"  defaultValue={jobObj.jobLocation}  onChange={updateJobLocation}/>
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
                                                        value={jobObj.jobDescription}
                                                        onChange={updatejobDescription}
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
                                        onClick={handleJobModalClose}
                                    >
                                            <span className="updateJobTxt mx-4">
                                                Cancel
                                            </span>
                                        </button>
                                    <button className="updateJob">
                                        <span className="updateJobTxt mx-4"
                                            onClick={saveJobChanges}
                                            >
                                                Save Changes
                                            </span>
                                    </button>
                                </Modal.Footer>
                                </Modal.Dialog>
                            </Modal>

                            <Modal
                                centered
                                show={showProjectModal}
                                onHide={handleProjectModalClose}
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
                                            
                                            }}>Project</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <div className="mx-lg-3 mx-0 bodyMain">
                                        <div className="fieldRow">
                                            <div className="fieldCol">
                                                <div className="fieldColTitle"><span>Project Name</span></div>
                                                <div className="fieldColInputMain">
                                                    <input className="fieldColInput" type='text' defaultValue={projectObj.projectTitle} onChange={updateProjectTitle}/>
                                                </div>
                                            </div>
                                            <div className="fieldCol2">
                                                <div className="fieldColTitle"><span>Category</span></div>
                                                <div className="fieldColInputMain">
                                                    <input type='text' className="fieldColInput"  defaultValue={projectObj.projectCategory} onChange={updateProjectCategory}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="fieldRow">
                                                <div className="fieldCol">
                                                    <div className="fieldColTitle"><span>Tags</span></div>
                                                    <div className="fieldColInputMain">
                                                        <input type='text' className="fieldColInput"  defaultValue={projectObj.projectTags}  onChange={updateProjectTags}/>
                                                    </div>
                                                </div>
                                            <div className="fieldCol2">
                                                <div className="fieldColTitle"><span>Technology</span></div>
                                                    <div className="fieldColInputMain">
                                                        <input type='text' className="fieldColInput"  defaultValue={projectObj.projectTechnology}  onChange={updateProjectTechnology}/>
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
                                                        value={projectObj.projectDescription}
                                                        onChange={updateProjectDescription}
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
                                        onClick={handleProjectModalClose}
                                    >
                                            <span className="updateJobTxt mx-4">
                                                Cancel
                                            </span>
                                        </button>
                                    <button className="updateJob">
                                        <span className="updateJobTxt mx-4"
                                            onClick={saveProjectChanges}
                                            >
                                                Save Changes
                                            </span>
                                    </button>
                                </Modal.Footer>
                                </Modal.Dialog>
                            </Modal>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default LoginForm;