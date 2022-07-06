import React from "react"
import * as styles from "./styles.module.scss"

const Subheading = ({ title }) => {
	return <h3 className={styles.subHeading}>{title}</h3>
}

export default Subheading
