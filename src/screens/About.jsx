import styles from "./About.module.css";

export default function About() {
	return (
		<section className={styles.section}>
			<div className={styles.textContainer}>
				<blockquote className={`animation-fadeIn ${styles.textStyle}`}>
					❝ Hello and welcome! I'm a Full Stack Engineer with a passion for
					crafting innovative web and mobile applications. Within my professional role, I'm adept at using <strong>React</strong> for frontend, alongside <strong>NodeJS, Python, PostgreSQL, REST
					API</strong>, and <strong>GraphQL</strong> for robust backend development. Moreover, I'm building mobile applications using <strong>React Native</strong>. I find immense
					fulfillment in guiding and mentoring junior developers while actively
					engaging in code reviews.
					<br />
					<br />
					My learning journey involves certifications such as Improving Deep
					Neural Networks, Aygaz Veri Analizi Bootcamp, Neural Networks and Deep
					Learning, among others, enriching my skills in <i>Machine and Deep
					Learning</i>.
					<br />
					<br />
					Outside of work, I'm passionate about staying active and embracing the
					outdoors. Skiing down snow-capped mountains exhilarates me, offering
					an adrenaline rush like no other. Fitness is another aspect I
					prioritize; it not only keeps me physically fit but also instills
					discipline and focus. These pursuits outside my professional realm
					rejuvenate me, providing a perfect balance to the fast-paced tech
					world I thrive in during work hours. ❞
				</blockquote>
				<p className={styles.nameStyle}>&mdash; Acelya V</p>
			</div>
		</section>
	);
}
