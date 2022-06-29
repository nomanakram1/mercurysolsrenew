import React from "react"
import * as styles from "./styles.module.scss"

const Section = ({ children, className, style }) => {
	return (
		<>
			<div
				className={`${styles.section} ${className}`}
				style={{
					...style,
				}}
			>
				{children}
			</div>
		</>
	)
}

export default Section
