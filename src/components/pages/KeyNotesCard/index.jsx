import React from "react";
import { Container,Row,Col,Button } from "react-bootstrap";
import {Form, Input} from "antd";
import * as styles from './styles.module.scss';
const KeyNotesCard=()=>{
    return(
        <div className={styles.notesMain}>
            <div className={styles.notesSub}>
                <div className={styles.notesTxtCont}>
                    <h1 className={styles.notesTxt}>A Learning and healthy work enviroment</h1>
                </div>
                <div className={styles.notesBehind}></div>
                <div className={styles.overlay}>
                    <div className={styles.keyCard}>
                        <div className={styles.keyCardHead}><span className="mx-auto">Positive Work Culture</span></div>
                        <div className={styles.keyCardTxt}><p>Our aim is maintain a positive and perfect work-life balance so that you feel satisfied and happy while working with us while contributing your best to productivity. There are ample oppurtunities to learn and grow professionaly. Mercury Sols always motivates its employees to take initiatives and work in teams. The policies intend to align personal interest with company objectives.</p></div>
                    </div>
                    <div className={styles.keyCard}>
                        <div className={styles.keyCardHead}><span className="mx-auto">Positive Work Culture</span></div>
                        <div className={styles.keyCardTxt}><p>Our aim is maintain a positive and perfect work-life balance so that you feel satisfied and happy while working with us while contributing your best to productivity. There are ample oppurtunities to learn and grow professionaly. Mercury Sols always motivates its employees to take initiatives and work in teams. The policies intend to align personal interest with company objectives.</p></div>
                    </div>
                    <div className={styles.keyCard}>
                        <div className={styles.keyCardHead}><span className="mx-auto">Positive Work Culture</span></div>
                        <div className={styles.keyCardTxt}><p>Our aim is maintain a positive and perfect work-life balance so that you feel satisfied and happy while working with us while contributing your best to productivity. There are ample oppurtunities to learn and grow professionaly. Mercury Sols always motivates its employees to take initiatives and work in teams. The policies intend to align personal interest with company objectives.</p></div>
                    </div>
                </div>
                <div className={styles.noteMain}>
                    <div className={styles.noteSub}>
                        <h1 className={styles.noteHeading}>Looking for talented & skilled individuals</h1>
                        <h2 className={styles.noteHeadingTxt}>Mercurysols provides you with a chance to work on the latest technology and experience gradual professional growth</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default KeyNotesCard;