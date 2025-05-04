import { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../assets/logo.png";
import ContactForm from "./ContactForm";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [showForm, setShowForm] = useState(false);

  function closeFormHandler() {
    setShowForm((prevState) => !prevState);
  }

  return (
    <Fragment>
      <nav className={`animation-fadeIn ${styles.nav}`}>
        <Link to="home" className={styles.logoBox}>
          <img
            src={logo}
            className={styles.logo}
            alt="brand-logo"
            loading="lazy"
          />
        </Link>

        <div className={styles.navLinks}>
          <div className={styles.navLink}>
            <NavLink to="about" className={styles.linkItem}>
              About me
            </NavLink>
            <NavLink to="projects" className={styles.linkItem}>
              Showcase
            </NavLink>
            <NavLink to="blog" className={styles.linkItem}>
              Blog
            </NavLink>
          </div>
          <div>
            <button
              className={styles.btnContact}
              onClick={() =>
                (window.location.href = "mailto:acelya@vuluvan.com")
              }
            >
              Contact me
            </button>
          </div>
        </div>
      </nav>
      {showForm && <ContactForm onClose={closeFormHandler} />}
    </Fragment>
  );
}
