import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect } from "react";
import { useState } from "react";
import * as styles from './styles.module.scss';

const ResponsivePractise=()=>{

    const [state,setState]=useState(window.innerWidth)   
    console.log("width is",state)
    window.addEventListener("resize",()=> setState (window.innerWidth));
        // if(state<=576)
        // {
        //     return(
        //         <div  class="card m-2 col-xs-10 col-md-8-col-lg-8">
        //         <h6 className="card-header articlee" style={{ color:'black' }}> if Articles </h6>
        //         <div className=" row card-body " style={{justifyContent:"space-evenly", }}>
        //             <div class="card col-sm-12  ">
        //                 <div >
        //                     <p class="card-text title-style"> Title :iffffff</p>
        //                     <p class="card-title url-style"> Url: iffffffff</p>
        //                      <p id="content" class="card-text text-style  "> Text: iffffff</p>
        //                 </div>  
        //             </div>
        //         </div>
        //      </div>
        //     )
        // }else{
        //     return(
        //     <div>
        //             <table style={{width:'100%'}}>
        //                 <tr>
        //                     <th>Company</th>
        //                     <th>Contact</th>
        //                     <th>Country</th>
        //                 </tr>
        //                 <tr>
        //                     <td>Alfreds Futterkiste</td>
        //                     <td>Maria Anders</td>
        //                     <td>Germany</td>
        //                 </tr>
        //                 <tr>
        //                     <td>Centro comercial Moctezuma</td>
        //                     <td>Francisco Chang</td>
        //                     <td>Mexico</td>
        //                 </tr>
        //             </table>
        //      </div>
        //     )
        // }
    return(
        <>
        
        <h1>They are comming </h1>
        <h3>Be Prepared</h3>
        <div className={styles.heroContainerRight}>
            <StaticImage src="../../../assets/images/aust_careers.png"></StaticImage>
        </div>
        
        <div>
        </div>
        </>
    )
}
export default ResponsivePractise;