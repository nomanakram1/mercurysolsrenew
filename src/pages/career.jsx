import React,{useState} from "react"
import LayoutWrapper from "components/layout/LayoutWrapper"
import {  Container } from "react-bootstrap"
import KeyNotesCard from "components/pages/KeyNotesCard"
import ProjectCard from "components/pages/CareerCard"


const AdminProject = () => {
    const [title,setTitle]=useState('Projects')
    const [btnTitle,setBtnTitle]=useState('Project')
	return (
		<>
		<LayoutWrapper>
            <div>
                <KeyNotesCard/>
				<ProjectCard/>
            </div>
		</LayoutWrapper>
			
		</>
	)
}

export default AdminProject;
