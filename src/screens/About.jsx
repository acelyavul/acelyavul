import styles from "./About.module.css";

export default function About() {
	return (
		<section className={styles.section}>
			<div className={styles.textContainer}>
				<blockquote className={`animation-fadeIn ${styles.textStyle}`}>
					❝ I have more than one year of experience as a fullstack engineer with
					Sayarus Technology, based in Istanbul. In my short time there, I've
					already assisted to a lot of projects built in
					<span> React and React Native.</span>
					<br />
					<br />I completed online courses in education platforms like Udemy,
					Kent C. Dodds Workshop, Cisco Networking Academy, AWS, IBM Cognitive
					class etc to learn and develop my skills. Ideally, I would like to
					continue to specialize in this field.❞
				</blockquote>
				<p className={styles.nameStyle}>&mdash; Acelya V</p>
			</div>
		</section>
	);
}
