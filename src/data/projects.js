import otoplan from "../assets/images/otoplan.png";
import owarezaka from "../assets/images/owarezaka.png";
import servisbot from "../assets/images/servisbot.png";
import servisplan from "../assets/images/servisplan.png";
import youthechef from "../assets/images/youthechef.png";

export const projects = [
  {
    id: 1,
    name: "You The Chef",
    image_url: youthechef,
    description:
      "Explore a rich variety of healthy and tasty recipes from around the world. Whether you're into vegan, high-protein, or gluten-free diets, find dishes for every meal type — from quick snacks to full dinners.",
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
    description:
      "An unofficial GitLab Mobile Client designed for both iPhones and Android devices. It brings core GitLab features — such as issue tracking, merge requests, code browsing, and pipeline monitoring — into a streamlined mobile experience, helping developers stay connected and productive on the go.",
    code: "https://gitlab.com/owarezaka/owarezaka",
    tags: ["React Native", "i18next", "Eslint", "Prettier", "Jest"],
    website_link: "https://www.youtube.com/watch?v=s-_4Yv8SF2A",
  },
  {
    id: 3,
    name: "Oto Plan",
    image_url: otoplan,
    description:
      "Oto Plan is a fleet leasing brand founded in 2012 with a vision that brings a modern and innovative perspective to the operational fleet leasing sector.",
    code: "",
    tags: [
      "React Native",
      "Firebase Cloud Messaging",
      "Crashlytics",
      "Analytics",
      "Facebook SDK",
      "Redux Toolkit",
      "TypeScript",
      "ESLint",
      "Jest",
    ],
    website_link: "https://onelink.to/otoplan",
  },
  {
    id: 4,
    name: "Servis Plan",
    image_url: servisplan,
    description:
      "Servis Plan offers all-in-one vehicle management for individual car owners, combining 30 years of fleet expertise. From repairs, maintenance, and roadside assistance to exclusive discounts and real-time support, we deliver seamless service through a single digital platform.",
    code: "",
    tags: [
      "React Native",
      "Firebase Cloud Messaging",
      "Crashlytics",
      "Analytics",
      "Adjust",
      "Fastlane",
      "Redux Toolkit",
      "TypeScript",
      "ESLint",
      "Jest",
      "Expo",
      "Lottie",
      "Formik",
      "Yup",
      "SignalR",
      "Swagger",
      "Husky",
      "Lint-staged",
      "Google Maps",
      "React Native Vision Camera",
    ],
    website_link: "https://t.co/x1e4QLcszf",
  },
  {
    id: 5,
    name: "ServisBot",
    image_url: servisbot,
    description:
      "A domain-specific question-answering assistant built for vehicle-related customer inquiries. Powered by GPT-4 and embedding-based similarity search, the bot verifies question relevance, finds semantically similar entries in the knowledge base, and gives tailored responses.",
    code: "",
    tags: [
      "FastAPI",
      "OpenAI GPT-4",
      "Embedding API",
      "cosine similarity",
      "Pydantic",
      "Render",
      "Vector Search",
      "ChatCompletion",
    ],
    website_link: "https://servisbot.vuluvan.com",
  },
];
