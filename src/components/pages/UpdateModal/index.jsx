import React,{useState} from "react";
import { Container,Row,Col,Button} from "react-bootstrap";
import {Form, Input} from "antd";
import * as styles from './styles.module.scss';
import { StaticImage } from "gatsby-plugin-image"
const UpdateModal=()=>{
    return(<>
      <div className="mx-3 bodyMain">
      <div className="d-flex justify-content-between">
          <div className="d-flex justify-content-start w-50">
              <div className=""
                  style={{
                      width:'110px',
                      color:'#323232',
                      fontWeight:'600',
                      fontSize:'16px'
                      }}
              ><span>Job Name</span></div>
              <div className=""><Input type='text'
                  style={{
                      width:'300px',
                      height:'40px',
                      background:'#FFFFFF',
                      border:'1px solid #323232',
                      borderRadius:'5px',
                  }}
              /></div>
          </div>
          <div className="d-flex justify-content-start w-50">
              <div className=""
              style={{
                  width:'110px',
                  color:'#323232',
                  fontWeight:'600',
                  fontSize:'16px'
                  }}
              ><span>Experience</span></div>
              <div className=""><Input type='text'
                  style={{
                      width:'300px',
                      height:'40px',
                      background:'#FFFFFF',
                      border:'1px solid #323232',
                      borderRadius:'5px',
                  }}
              /></div>
          </div>
      </div>
      <div className="d-flex justify-content-between">
          <div className="d-flex justify-content-start w-50">
              <div className=""
              style={{
                  width:'110px',
                  color:'#323232',
                  fontWeight:'600',
                  fontSize:'16px'
                  }}
              ><span>Job Name</span></div>
              <div className=""><Input type='text'
                  style={{
                      width:'300px',
                      height:'40px',
                      background:'#FFFFFF',
                      border:'1px solid #323232',
                      borderRadius:'5px',
                  }}
              /></div>
          </div>
          <div className="d-flex justify-content-start w-50">
              <div className=""
              style={{
                  width:'110px',
                  color:'#323232',
                  fontWeight:'600',
                  fontSize:'16px'
                  }}
              ><span>Experience</span></div>
              <div className=""><Input type='text'
                  style={{
                      width:'300px',
                      height:'40px',
                      background:'#FFFFFF',
                      border:'1px solid #323232',
                      borderRadius:'5px',
                  }}
              /></div>
          </div>
      </div>
      <div className="d-flex justify-content-between">
          <div className="d-flex justify-content-start w-100">
              <div
              style={{
                  width:'110px',
                  color:'#323232',
                  fontWeight:'600',
                  fontSize:'16px'
                  }}><span>Key Skills</span></div>
              <div><textarea
                  style={{
                      width:'300px',
                      height:'40px',
                      background:'#FFFFFF',
                      border:'1px solid #323232',
                      borderRadius:'5px',
                  }}
              /></div>
          </div>
      </div>
  </div>
</>)
}
export default UpdateModal;