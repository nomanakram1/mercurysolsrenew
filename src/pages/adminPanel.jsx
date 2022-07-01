import React,{useState} from "react"
import LayoutWrapper from "components/layout/LayoutWrapper"
import {  Container } from "react-bootstrap"
import AddBtn from "components/pages/AddBtn"
import InfoCard from "components/pages/InfoCard"

const AdminPanel = () => {
	const [title,setTitle]=useState('Jobs');
	const [btnTitle,setBtnTitle]=useState('Job');
	return (
		<>
		<LayoutWrapper>
            <div>
                <AddBtn
					title={title}
					btnTitle={btnTitle}
				/>
                <InfoCard/>
				<InfoCard/>
            </div>
		</LayoutWrapper>
			
		</>
	)
}

export default AdminPanel;
