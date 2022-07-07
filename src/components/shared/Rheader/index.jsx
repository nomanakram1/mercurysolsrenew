import React, { useState } from "react";

import * as styles from "./styles.module.scss";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";

const Headerres = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuToggler = () => setMenuOpen((p) => !p);

    return (
        <div className={styles.header}>
            <div className={styles.header__content}>
                <div>
                    <span className={styles.logo}>Mercury Sols</span>
                </div>
                <div>
                    <nav className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}>
                        <a className={styles.nav__item} href={"/"}>
                            COMPANY
                        </a>
                        <a className={styles.nav__item} href={"/"}>
                            SERVICES
                        </a>
                        <a className={styles.nav__item} href={"/"}>
                            PROJECTS
                        </a>
                        <a className={styles.nav__item} href={"/"}>
                            IPTV
                        </a>
                        <a className={styles.nav__item} href={"/"}>
                            CAREER
                        </a>
                        <div className={styles.nav__button__container}>
                            <Button />
                        </div>
                    </nav>
                </div>
                <div>
                    {/* <div className={styles.header__button__container}>
                        <Button />
                    </div> */}
                    <div className={styles.header__b__container}>
                        <Button />
                    </div>
                    <button className={styles.header__toggler} onClick={menuToggler}>
                        {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
                    </button>
                </div>
            </div>
        </div>
    );
};

const Button = () => {
    return <button className={styles.button}>Click me</button>;
};

export default Headerres;
