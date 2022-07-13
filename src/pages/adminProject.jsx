import React,{useState,useEffect} from "react"
import LayoutWrapper from "components/layout/LayoutWrapper"
import {  Container } from "react-bootstrap"
import AddBtn from "components/pages/AddBtn"
import ProjectCard from "components/pages/ProjectCard"
import firebase from '../config/firebase';
import {message} from 'antd';

const AdminProject = () => {
    const [title,setTitle]=useState('Projects');
    const [btnTitle,setBtnTitle]=useState('Project');
    const [data,setData]=useState([]);
	const [value, setValue] = useState("");
    function handleChange(newValue) {
      setValue(newValue);
    }
	useEffect(()=>{
		setData([]);
		firebase.firestore().collection('projects').get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var singleData={data:element.data(),id:element.id};
				setData(prevState => ([...prevState, singleData]));
            });
        }).then(()=>{}).catch(()=>{
            message.info("Error Occured! Can't Fetch the Record");
        });
	},[value]);
	return (
		<>
		<LayoutWrapper>
            <div>
                <AddBtn
                    title={title}
                    btnTitle={btnTitle}
					recordId={data.id}
					value={value}
					onChange={handleChange}
                />
                {data.map((element) =>{
					return(
						<ProjectCard
							projectTitle={element.data.projectTitle}
							projectCategory={element.data.projectCategory}
							projectDescription={element.data.projectDescription}
							projectTags={element.data.projectTags}
							projectTechnology={element.data.projectTechnology}
							recordId={element.id}
							value={value}
							onChange={handleChange}
						/>
					)
				})}
            </div>
		</LayoutWrapper>
			
		</>
	)
}

export default AdminProject;
