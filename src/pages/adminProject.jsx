import React,{useState} from "react"
import LayoutWrapper from "components/layout/LayoutWrapper"
import {  Container } from "react-bootstrap"
import AddBtn from "components/pages/AddBtn"
import ProjectCard from "components/pages/ProjectCard"

const AdminProject = () => {
    const [title,setTitle]=useState('Projects')
    const [btnTitle,setBtnTitle]=useState('Project')
	return (
		<>
		<LayoutWrapper>
            <div>
                <AddBtn
                    title={title}
                    btnTitle={btnTitle}
                />
                <ProjectCard/>
				<ProjectCard/>
            </div>
		</LayoutWrapper>
			
		</>
	)
}

export default AdminProject;
