import React from "react"
import * as styles from "./styles.module.scss"

const HeroSubHeading = ({ children }) => {
	return (
		<>
			<h2 className={styles.heroSubHeading}>{children}</h2>
		</>
	)
}

export default HeroSubHeading
