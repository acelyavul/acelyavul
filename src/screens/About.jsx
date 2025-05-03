import styles from "./About.module.css";

export default function About() {
	return (
		<section className={styles.section}>
			<div className={styles.textContainer}>
				<p className={styles.title}>Full Stack Engineer | AI Enthusiast | Mentor | Outdoor Explorer</p>
				<blockquote className={`animation-fadeIn ${styles.textStyle}`}>
					❝Hi! I’m a Full Stack Engineer who builds modern and intuitive interfaces with React and develops robust, scalable backend systems using Node.js, .NET, and Python. I work with PostgreSQL and SQL Server databases and create efficient data flows through RESTful and GraphQL APIs. I also deliver cross-platform mobile experiences using React Native.

					As a developer, I value more than just writing code. I care deeply about learning together and growing as a team. I enjoy mentoring junior developers and contributing to a culture of quality through thoughtful code reviews.

					My passion for machine learning and AI has been shaped by certifications like Andrew Ng’s “Neural Networks and Deep Learning” and “Improving Deep Neural Networks.” Continuous learning and growth are core values in my career journey.

					Spending time in nature, skiing, and staying physically active bring me mental clarity and discipline. I strive to channel that energy into both my work and my relationships.

					I’m committed to building meaningful solutions, creating value through technology, and growing alongside others. Feel free to connect — I’d love to meet you.❞
				</blockquote>
				<p className={styles.nameStyle}>&mdash; Acelya V</p>
			</div>
		</section>
	);
}
