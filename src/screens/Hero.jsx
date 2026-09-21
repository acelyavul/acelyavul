import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.section}>
      <p
        style={{ zIndex: -100 }}
        className={`animation-fadeIn ${styles.titleStyle}`}
      >
        Hello
      </p>
      <h1 className={`animation-fadeIn ${styles.textStyle}`}>
        I am a Software Engineer focused on AI and Computer Vision
      </h1>
    </section>
  );
}
