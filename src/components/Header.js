import {useState} from 'react'
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import linkedInIcon from "../assets/linkedIn-icon.png";
import githubIcon from "../assets/github-icon.png";

// todo: add an active class to the tab that is active?
function Header() {
  const navigate = useNavigate();
  const responsiveClasses = useState({
    menubar: styles.menuButton,
    bar1: styles.bar1,
    bar2: styles.bar2,
    bar3: styles.bar3
  })

  function navigateHandler() {
    navigate("/");
  }

  function handleMenuIconClick() {

  }
  return (
    <header className={styles.header}>
      <div className={styles.homeButton}>
        <button className="logo" onClick={navigateHandler}>
          Kira Peters
        </button>
      </div>
      <nav className={styles.navbar}>
        <Link className={styles.navLink} to="blog">
          Blog
        </Link>
        <a
          className={styles.navIcon}
          href={"https://www.linkedin.com/in/kira-peters01"}
        >
          <img className={styles.icon} src={linkedInIcon} alt="LinkedIn Icon" />
        </a>
        <a className={styles.navIcon} href="https://github.com/kirapeters">
          <img className={styles.icon} src={githubIcon} alt="Github Icon" />
        </a>
      </nav>
        <a id="menuButton" href="#">
          <span className={styles.bar1}></span>
          <span className={styles.bar2}></span>
          <span className={styles.bar3}></span>
        </a>
    </header>
  );
}

export default Header;
