import React from "react"
import * as styles from "./styles.module.scss"

const EmailLink = ({ email, text, props }) => {
	return (
		<a href={`mailto:${email}`} rel="noreferrer" className={styles.emailLink} {...props}>
			{text ? text : email}
		</a>
	)
}

export default EmailLink
