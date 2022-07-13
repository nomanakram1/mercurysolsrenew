import React,{useState,useEffect} from "react";
import {Container,Row,Col,Modal} from "react-bootstrap";
import {message} from "antd";
import styles from './styles.scss';
import { StaticImage } from "gatsby-plugin-image"
import 'antd/dist/antd.css';
import firebase from '../../../config/firebase';
// import {UpdateModal} from "../UpdateModal"

const ProjectCard=(props)=>{
    console.log(props.projectDescription);
    const [loading,setLoading]=useState(true);
    const [imageList,setImageList]=useState([]);
    const [showModal,setShowModal]=useState(false);
    const [showConfirm,setShowConfirm]=useState(false);
    const [updateObj,setUpdateObj]=useState({});
    const [tempDesc,setTempDesc]=useState(props.projectDescription.split('.'));
    const [tempTags,setTempTags]=useState(props.projectTags.split(','));
    const [tempTech,setTempTech]=useState(props.projectTechnology.split(','));
    const handleModalShow=()=>{
      setShowModal(true);
      setUpdateObj({
        recordId:props.recordId,
        projectTitle:props.projectTitle,
        projectCategory:props.projectCategory,
        projectDescription:props.projectDescription,
        projectTags:props.projectTags,
        projectTechnology:props.projectTechnology,
    })
    }
    function handleChange(val) {
        props.onChange(val);
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
    const updateHandler=()=>{
        firebase.firestore().collection('projects').doc(updateObj.recordId).update(updateObj).then(()=>{
            handleChange(Date.now());
            message.info('Record Updated');
        }).catch(()=>{
            message.info("Error Occured! Can't Update the Record");
        });
        setShowModal(false);
    }
    const handleModalDelete=()=>{
        setShowConfirm(false);
        firebase.firestore().collection('projects').doc(props.recordId).delete().then(()=>{
            handleChange(Date.now());
            message.info('Record Deleted');
        }).catch(()=>{
            message.info("Error Occured! Can't Delete the Record");
        });
    }
    const updateTitle = (e) => {
        setUpdateObj(prevState => ({
              ...prevState,
              projectTitle:e.target.value,
        })
        )
    }
    const updateCategory = (e) => {
        setUpdateObj(prevState => ({
              ...prevState,
              projectCategory:e.target.value,
        })
        )
    }
    const updateTags = (e) => {
        setUpdateObj(prevState => ({
              ...prevState,
              projectTags:e.target.value,
        })
        )
    }
    const updateTechnology = (e) => {
        setUpdateObj(prevState => ({
              ...prevState,
              projectTechnology:e.target.value,
        })
        )
    }
    const updateDescription = (e) => {
        setUpdateObj(prevState => ({
              ...prevState,
              projectDescription:e.target.value,
        })
        )
    }
    console.log(tempDesc);
    const imageSelector=(e)=>{}
    tempDesc.map(item=>{
        if(item.lenght>0){
            console.log(item);
            return({item})
        }
    })
    return(
        <>
        
            <Container>
                <Row className="rowMain">
                    <Col className="p-0">
                        <div className="pcMain">
                            <div>
                                <h1 className="pcTitle">{props.projectTitle}</h1>
                                <h5 className="pcExp">{props.projectCategory}</h5>
                                <h5 className="pcDescHeading">Description</h5>
                            </div>
                            <div className="pcListMain">
                                <p className="pcListItem">
                                    Know and have implemented serverless architecture Know and have implemented serverless architecture Know and have implemented serverless architecture Know and have implemented serverless architecture Know and have implemented serverless architecture 
                                </p>
                            </div>
                            <div className="pcListMain">
                                <ul>
                                {tempDesc.map(item=>{
                                        if(item.length>0){
                                        return(
                                            <li className="pcListItem">{item}</li>
                                        )
                                        }
                                    })}
                                    {/* <li className="pcListItem">Worked with NoSQL and AWS Dynamo DB (optional)</li>
                                    <li className="pcListItem">Knows and implemented CI/CD</li>
                                    <li className="pcListItem">Other backend expectations like strong DB skills and optimization of code etc</li>
                                    <li className="pcListItem">Experience in Design patterns</li> */}
                                </ul>
                            </div>
                            <div className="pcListMain">
                                <p className="pcListItem">
                                    Know and have implemented serverless architecture Know and have implemented serverless architecture Know and have implemented serverless architecture Know and have implemented serverless architecture Know and have implemented serverless architecture 
                                </p>
                            </div>
                            <div className="pcImgMain">
                                <div className="pcImg">
                                    <StaticImage  href="/" className="" src="../../../assets/images/Choosee_main_5.png" alt="Mercury Sols Logo" />
                                </div>
                                <div  className="pcImg">
                                    <StaticImage  href="/" className="" src="../../../assets/images/Choosee_main_5.png" alt="Mercury Sols Logo" />
                                </div>
                            </div>
                            <div className="pcBar">
                                <div className="pcBarHead">
                                    <span  className="pcBarTxt">Tags:</span>
                                </div>
                                
                                    {tempTags.map(item=>{
                                        if(item.length>0){
                                        return(
                                            <div className="pcBarTagMain">
                                                <div className="pcBarTag">
                                                    <span  className="pcBarDescTxt">{item}</span>
                                                </div>
                                            </div>
                                        )
                                        }
                                    })}
                               
                            </div>
                            <div className="pcBar">
                                <div className="pcBarHead">
                                    <span  className="pcBarTxt">Technology</span>
                                </div>
                                
                                    {tempTech.map(item=>{
                                        if(item.length>0){
                                        return(
                                            <div className="pcBarTagMain">
                                                <div className="pcBarTag">
                                                    <span className="pcBarDescTxt">{item}</span>
                                                </div>
                                            </div>
                                            )
                                        }
                                        })}
                                
                            </div>
                            <div className="pcBtns">
                                <button onClick={handleShowConfirm} className="pcDeleteBtn">Delete Job</button>
                                <button onClick={handleModalShow} className="pcUpdateBtn">Update Job</button>
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
                                                onClick={handleModalDelete}
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
                                                <div className="fieldColTitle"><span>Category</span></div>
                                                <div className="fieldColInputMain">
                                                    <input className="fieldColInput" defaultValue={props.projectCategory} onChange={updateCategory} type='text'/>
                                                </div>
                                            </div>
                                            <div className="fieldCol2">
                                                <div className="fieldColTitle"><span>Title</span></div>
                                                <div className="fieldColInputMain">
                                                    <input type='text' defaultValue={props.projectTitle} onChange={updateTitle}  className="fieldColInput"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="fieldRow">
                                                <div className="fieldCol">
                                                    <div className="fieldColTitle"><span>Tags</span></div>
                                                    <div className="fieldColInputMain">
                                                        <input type='text' defaultValue={props.projectTags} onChange={updateTags}  className="fieldColInput"/>
                                                    </div>
                                                </div>
                                                <div className="fieldCol2">
                                                    <div className="fieldColTitle"><span>Technology</span></div>
                                                        <div className="fieldColInputMain">
                                                            <input type='text' defaultValue={props.projectTechnology} onChange={updateTechnology}  className="fieldColInput"/>
                                                        </div>
                                                    </div>
                                                </div>

                                            <input type="file" onChange={imageSelector}/>

                                                {/* <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      defaultFileList={[...fileList]}
      className="upload-list-inline"
    >
      <Button><UploadOutlined />{Upload}</Button>
    </Upload> */}


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
                                                                // width:'300px',
                                                                height:'120px',
                                                                background:'#FFFFFF',
                                                                border:'1px solid #323232',
                                                                borderRadius:'5px',
                                                                }}
                                                                defaultValue={props.projectDescription}
                                                                onChange={updateDescription}
                                                            ></textarea>
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
                                    <button onClick={updateHandler} className="updateJob">
                                        <span className="updateJobTxt mx-4">
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
export default ProjectCard;