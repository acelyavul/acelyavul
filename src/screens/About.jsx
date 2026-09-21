import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.section}>
      <div className={styles.textContainer}>
        <p className={styles.title}>Software Engineer | AI & Computer Vision</p>
        <blockquote className={`animation-fadeIn ${styles.textStyle}`}>
          ❝Hi! I’m a Software Engineer with nearly five years of experience
          building web and mobile products with React, React Native, TypeScript,
          Node.js, .NET, and Python. I enjoy working across the full product
          lifecycle — from intuitive user interfaces and API integrations to
          backend systems, databases, testing, CI/CD, and production releases.
          <br />
          <br />
          Alongside software engineering, I completed a master’s degree in
          Artificial Intelligence, with a focus on computer vision, machine
          learning, and image-based 3D reconstruction. I also work with
          Python-based data pipelines, MLOps, dataset traceability, and active
          learning workflows.
          <br />
          <br />
          I care about more than simply shipping code. I value thoughtful
          engineering, continuous learning, constructive code reviews, and
          helping other developers grow. I enjoy sharing what I learn and
          contributing to teams where knowledge is exchanged openly.
          <br />
          <br />
          Spending time in nature, skiing, and staying physically active bring
          me mental clarity and discipline. I strive to channel that energy into
          both my work and my relationships.
          <br />
          <br />
          I’m committed to building meaningful solutions, creating value through
          technology, and growing alongside others. Feel free to connect — I’d
          love to meet you.❞
        </blockquote>
        <p className={styles.nameStyle}>&mdash; Acelya V</p>
      </div>
    </section>
  );
}
