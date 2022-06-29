import React from "react"
import * as styles from "./styles.module.scss"
import Footer from "components/shared/Footer"
import Header from "components/shared/Header"

import "scss/main.scss"

const LayoutWrapper = ({ children }) => {
	return (
		<>
			<Header />
			<div className={styles.content_wrapper}>{children}</div>
			<Footer />
		</>
	)
}

export default LayoutWrapper
