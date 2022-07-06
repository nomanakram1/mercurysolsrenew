import React from "react";
import * as styles from './styles.module.scss';

const ChooseUspage=()=>{

    return(
        <>
        <div className={styles.main}>
            <h3 className={styles.convert}> Convert Your Idea Into Profitable Business </h3>
            <h1 className={styles.choose}>Why choose us</h1>
            <p className={styles.paragraph1}>Mercury Solutions is a promising business solution IT Company that provides top notch IT
                 solution to its clients for any Web Development, E-Commerce (Magento/Woocommerce/Shopify) ,
                  IPTV related requirements. Our qualified team is always ready to provide you robust and 
                  scalable solutions, dedicated technical assistance and 12 to 15 hrs support a day.</p>
                  
                  <p className={styles.paragraph2}> Our core principle is absolute transparency in everything. Come any time to check how your
                    project is doing – our specialists will inform you about the progress.</p>

        </div>
        </>
    )
}
export default ChooseUspage;