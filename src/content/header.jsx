import React from "react"
import VenrupLogo from "assets/logos/VenrupLogo"
import mobile_menu_home from "assets/icons/mobile_menu_home.png"
import mobile_menu_clients from "assets/icons/mobile_menu_clients.png"
import mobile_menu_about from "assets/icons/mobile_menu_about.png"
import mobile_menu_blog from "assets/icons/mobile_menu_blog.png"
import mobile_menu_careers from "assets/icons/mobile_menu_careers.png"
import mobile_menu_contact from "assets/icons/mobile_menu_contact.png"

export const content_header = {
	// logo: <VenrupLogo />,

	links: [
		{
			icon: mobile_menu_home,
			text: "Home",
			path: "/",
		},
		{
			icon: mobile_menu_home,
			text: "Companypage",
			path: "/company",
		},
		{
			icon: mobile_menu_about,
			text: "Aboutpage",
			path: "/about",
		},
		{
			icon: mobile_menu_careers,
			text: "Careers",
			path: "/careers",
		},
		{
			icon: mobile_menu_blog,
			text: "Blog",
			path: "/blog",
		},

		{
			icon: mobile_menu_clients,
			text: "Clients",
			path: "/#clients",
		},
		{
			icon: mobile_menu_contact,
			text: "Contact Us",
			path: "/contact",
		},
	],
}
