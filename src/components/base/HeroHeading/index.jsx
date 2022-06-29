import React from "react"
import * as styles from "./styles.module.scss"

const HeroHeading = ({ children, ...props }) => {
	return (
		<>
			<h1 className={styles.heroHeading} {...props}>
				{children}
			</h1>
		</>
	)
}

export default HeroHeading
