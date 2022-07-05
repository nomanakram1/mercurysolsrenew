import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import * as styles from "./styles.module.scss"
const Projectslide=()=>{

    return(
        <>
        <div className={styles.projectOuterdiv}>
            <Container>
                <Row>
                    <Col>
                    <p className={styles.ProjectHeding}>PROJECTS</p>
                    <div className={styles.flexdiv}>
                        <p className={styles.all}>All</p>
                        <p className={styles.all}>Web</p>
                        <p className={styles.all}>Flutter</p>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
                <div className={styles.cardOuterRow} >
                    <div className={styles.carddiv}>
                        <p className={styles.category} >Category</p>  
                        <h3 className={styles.projectname}>Project Name</h3> 
                            <div className={styles.divvv} >
                                <button className={styles.button} variant="primary" type="submit">
                                Learn More
                                </button>
                                <StaticImage  src="../../../assets/images/choose.png"></StaticImage>
                            </div> 
                    </div>
                    <div className={styles.carddiv1}>
                        <p className={styles.category} >Category</p>  
                        <h3 className={styles.projectname}>Project Name</h3> 
                            <div className={styles.divvv} >
                                <button className={styles.button} variant="primary" type="submit">
                                     Learn More
                                </button>
                                <StaticImage  src="../../../assets/images/choose.png"></StaticImage>
                            </div> 
                    </div> 
                </div> 
                <div className={styles.cardOuterRow} > 
                    <div className={styles.carddiv2}>
                        <p className={styles.category} >Category</p>  
                        <h3 className={styles.projectname}>Project Name</h3> 
                            <div className={styles.divvv} >
                                <button className={styles.button} variant="primary" type="submit">
                                     Learn More
                                </button>
                                <StaticImage  src="../../../assets/images/choose.png"></StaticImage>
                            </div> 
                    </div>   
                    <div className={styles.carddiv3}>
                        <p className={styles.category} >Category</p>  
                        <h3 className={styles.projectname}>Project Name</h3> 
                            <div className={styles.divvv} >
                                <button className={styles.button} variant="primary" type="submit">
                                     Learn More
                                </button>
                                <StaticImage  src="../../../assets/images/choose.png"></StaticImage>
                            </div> 
                    </div> 
                </div> 
                <div className={styles.cardOuterRow} >   
                    <div className={styles.carddiv4}>
                        <p className={styles.category} >Category</p>  
                        <h3 className={styles.projectname}>Project Name</h3> 
                            <div className={styles.divvv} >
                                <button className={styles.button} variant="primary" type="submit">
                                     Learn More
                                </button>
                                <StaticImage  src="../../../assets/images/choose.png"></StaticImage>
                            </div> 
                    </div>   
                    <div className={styles.carddiv5}>
                        <p className={styles.category} >Category</p>  
                        <h3 className={styles.projectname}>Project Name</h3> 
                            <div className={styles.divvv} >
                                <button className={styles.button} variant="primary" type="submit">
                                     Learn More
                                </button>
                                <StaticImage  src="../../../assets/images/choose.png"></StaticImage>
                            </div> 
                    </div>  
                </div> 
                <div className={styles.cardOuterRow} >  
                    <div className={styles.carddiv6}>
                        <p className={styles.category} >Category</p>  
                        <h3 className={styles.projectname}>Project Name</h3> 
                            <div className={styles.divvv} >
                                <button className={styles.button} variant="primary" type="submit">
                                     Learn More
                                </button>
                                <StaticImage  src="../../../assets/images/choose.png"></StaticImage>
                            </div> 
                    </div>   
                    <div className={styles.carddiv7}>
                        <p className={styles.category} >Category</p>  
                        <h3 className={styles.projectname}>Project Name</h3> 
                            <div className={styles.divvv} >
                                <button className={styles.button} variant="primary" type="submit">
                                     Learn More
                                </button>
                                <StaticImage  src="../../../assets/images/choose.png"></StaticImage>
                            </div> 
                    </div>   
            </div>
       
        </>
    )
}
export default Projectslide;