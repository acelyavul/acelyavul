import styles from "./Hero.module.css";

export default function Hero() {
	return (
		<section className={styles.section}>
			<p className={`animation-fadeIn ${styles.titleStyle}`}>Hello</p>
			<h1 className={`animation-fadeIn ${styles.textStyle}`}>
				I am FullStack Engineer, based in Istanbul.
			</h1>
		</section>
	);
}
