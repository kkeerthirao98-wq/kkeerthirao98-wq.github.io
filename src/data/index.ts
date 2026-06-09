export const SITE_TITLE = "Keerthi Kovuru";
export const SITE_DESCRIPTION =
	"Security analyst focused on identity, cloud risk, AI governance, and third-party security.";
export const SITE_URL = "https://www.keerthikovuru.com";
export const SITE_IMAGE = "/images/keerthi-og.png";

export interface MenuItem {
	label: string;
	url: string;
}

export const menuItems: MenuItem[] = [
	{
		label: "home",
		url: "/",
	},
	{
		label: "experience",
		url: "/experience",
	},
	{
		label: "thoughts",
		url: "/thoughts",
	},
];

export const socialLinks = [
	{
		label: "linkedin",
		url: "https://www.linkedin.com/in/keerthikovuru",
	},
	{
		label: "email",
		url: "mailto:kkeerthirao98@gmail.com",
	},
];
