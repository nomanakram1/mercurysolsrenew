import React from "react"
import * as styles from "./styles.module.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, HeroHeading, Button, HeroSubHeading, HeroTagline } from "components"

const Hero = ({ img, title, subtitle, description, text, buttonText, buttonLink }) => {
	return (
		<>
			<Container>
				<div className={styles.hero}>
					<div>
						<GatsbyImage image={getImage(img.file)} alt="hero_image" className={styles.heroImage} />
					</div>
					<div>
						<HeroHeading>{title}</HeroHeading>
						{subtitle && <HeroSubHeading>{subtitle}</HeroSubHeading>}
						{description && <HeroTagline>{description}</HeroTagline>}
						{text && <p className={styles.heroText}>{text}</p>}
						<div className={styles.heroButton}>
							{buttonText && (
								<Button to={buttonLink} primary>
									{buttonText}
								</Button>
							)}
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}

export default Hero
