export const SITE_TITLE = "Keerthi Kovuru";
export const SITE_DESCRIPTION = "Cyber Security Analyst | Cloud Security | TPRM";
export const SITE_URL = "https://keerthikovuru.com";
export const SITE_IMAGE = "/images/ogimage.png";
// export const TWITTER_HANDLE = "@spikeysanju"; // Removed

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

export const skills = [
	{
		name: "CompTIA Security+",
		url: "https://www.credly.com/badges/db9bfcab-fa49-4817-a3b1-14d5db7c4a5f/linked_in_profile",
		image: "/images/security-plus.png", // Placeholder, user might need to provide images or we use generic
	},
	{
		name: "ISO 27001 Lead Implementer",
		url: "#",
		image: "/images/iso27001.png",
	},
	{
		name: "AWS",
		url: "#",
		image: "/images/aws.png",
	},
	{
		name: "GCP",
		url: "#",
		image: "/images/gcp.png",
	},
	{
		name: "Azure Entra ID",
		url: "#",
		image: "/images/azure.png",
	},
	{
		name: "Microsoft Sentinel",
		url: "#",
		image: "/images/sentinel.png",
	},
	{
		name: "Splunk",
		url: "#",
		image: "/images/splunk.png",
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
