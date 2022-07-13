import React,{useState,useEffect} from "react"
import LayoutWrapper from "components/layout/LayoutWrapper"
import {  Container } from "react-bootstrap"
import AddBtn from "components/pages/AddBtn"
import InfoCard from "components/pages/InfoCard"
import firebase from '../config/firebase';
import {message} from 'antd';

const AdminPanel = () => {
	const [title,setTitle]=useState('Jobs');
	const [btnTitle,setBtnTitle]=useState('Job');
	const [data,setData]=useState([]);
	const [value, setValue] = useState("");
    function handleChange(newValue) {
      setValue(newValue);
	}
	useEffect(()=>{
		setData([]);
			firebase.firestore().collection('jobs').get().then((querySnapshot) => {
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
					value={value}
					onChange={handleChange}
				/>
				{data.map((element) =>{
					return(
						<InfoCard
							jobId={element.data.jobId}
							jobTitle={element.data.jobTitle}
							jobExperience={element.data.jobExperience}
							jobDescription={element.data.jobDescription}
							jobKeySkills={element.data.jobKeySkills}
							jobLocation={element.data.jobLocation}
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
export default AdminPanel;
