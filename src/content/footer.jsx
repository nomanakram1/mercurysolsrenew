import React from "react"
import VenrupLogo from "assets/logos/VenrupLogo"
import { Behance, Facebook, Instagram, Linkedin } from "assets/icons"

export const content_footer = {
	logo: <VenrupLogo />,

	copyright: {
		text: <>VENRUP &copy; 2022</>,
		socials: [
			{
				icon: <Facebook />,
				link: "https://facebook.com/venrup",
			},
			{
				icon: <Linkedin />,
				link: "https://linkedin.com/company/venrup",
			},
			{
				icon: <Behance />,
				link: "https://www.behance.net/VENRUP",
			},
			{
				icon: <Instagram />,
				link: "https://linkedin.com/company/venrup",
			},
		],
	},
}
