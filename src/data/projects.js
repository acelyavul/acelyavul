import owarezaka from "../assets/images/owarezaka.png";
import youthechef from "../assets/images/youthechef.png";
import otoplan from "../assets/images/otoplan.png";
import servisplan from "../assets/images/servisplan.png";

export const projects = [
	{
		id: 1,
		name: "You The Chef",
		image_url: youthechef,
		description: "Explore delicious world recipes focused on healthy eating.",
		code: "",
		tags: [
			"NextJS",
			"React",
			"Prisma",
			"PostgreSQL",
			"React Query",
			"Jotai",
			"Eslint",
			"Prettier",
			"Axios",
			"Pnpm",
			"Vercel",
		],
		website_link: "https://youthechef.vercel.app",
	},
	{
		id: 2,
		name: "Owarezaka",
		image_url: owarezaka,
		description: "An unofficial GitLab Mobile Client for iPhones and Androids.",
		code: "https://gitlab.com/owarezaka/owarezaka",
		tags: ["React Native", "i18next", "Eslint", "Prettier", "Jest"],
		website_link: "https://www.youtube.com/watch?v=s-_4Yv8SF2A",
	},
	{
		id: 3,
		name: "Oto Plan",
		image_url: otoplan,
		description: "Oto Plan is a fleet leasing brand founded in 2012 with a vision that brings a modern and innovative perspective to the operational fleet leasing sector.",
		code: "",
		tags: ["React Native", "Firebase Cloud Messaging"],
		website_link: "https://play.google.com/store/apps/details?id=com.otoplanmobile",
	},
	{
		id: 4,
		name: "Servis Plan",
		image_url: servisplan,
		description: "Servis Plan provides a one-stop contact for maintenance, emergencies, with exclusive perks and 24/7 support for vehicle owners.",
		code: "",
		tags: ["React Native", "Firebase Cloud Messaging"],
		website_link: "https://t.co/x1e4QLcszf",
	},
];
