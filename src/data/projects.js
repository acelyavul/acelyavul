import owarezaka from "../assets/images/owarezaka.png";
import youthechef from "../assets/images/youthechef.png";

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
];
