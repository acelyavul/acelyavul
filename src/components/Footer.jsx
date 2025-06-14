import * as Icon from "../assets/Icon";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.section} id="contact">
      <div className="alignCenter">
        <a
          href="https://www.linkedin.com/in/a%C3%A7elya-v-833887212/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          <div className={styles.footerLink}>
            <Icon.Linkedin className={styles.iconStyle} size={33} />
          </div>
        </a>
        <a
          href="https://twitter.com/acelya_vul"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <div className={styles.footerLink}>
            <Icon.Twitter className={styles.iconStyle} size={33} />
          </div>
        </a>
        <a
          href="https://github.com/acelyavul"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <div className={styles.footerLink}>
            <Icon.Github className={styles.iconStyle} size={33} />
          </div>
        </a>
        <a href="mailto:acelya@vuluvan.com" aria-label="Email Address">
          <div className={styles.footerLink}>
            <Icon.Email className={styles.iconStyle} size={33} />
          </div>
        </a>
      </div>
      <p className={styles.copyrightTextStyle}>
        &copy; {new Date().getFullYear()}, All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
