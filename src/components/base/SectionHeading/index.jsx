import React from "react"
import * as styles from "./styles.module.scss"

const SectionHeading = ({ subheading, className, children, ...props }) => {
	return (
		<>
			<h2 className={`${styles.sectionHeading} ${className}`} {...props}>
				{children}
			</h2>
			{subheading && <p className={styles.sectionSubHeading}>{subheading}</p>}
		</>
	)
}

export default SectionHeading
