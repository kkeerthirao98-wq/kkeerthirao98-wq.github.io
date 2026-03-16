export const SITE_TITLE = "Keerthi Kovuru";
export const SITE_DESCRIPTION = "Cyber Security Analyst | Cloud Security | TPRM";
export const SITE_URL = "https://www.keerthikovuru.com";
export const SITE_IMAGE = "/images/ogimage.png";

export interface MenuItem {
	label: string;
	url: string;
}

export const menuItems: MenuItem[] = [
	{
		label: "Home",
		url: "/",
	},
	{
		label: "Experience",
		url: "/experience",
	},
	{
		label: "Thoughts",
		url: "/thoughts",
	},
];

export const socialLinks = [
	{
		label: "LinkedIn",
		url: "https://www.linkedin.com/in/keerthikovuru",
	},
	{
		label: "Email",
		url: "mailto:kkeerthirao98@gmail.com",
	},
];
