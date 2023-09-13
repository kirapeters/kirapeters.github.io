import styles from './Header.module.css';

// todo: add an active class to the tab that is active
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.homeButton}>
        <button className="logo">Kira Peters</button>
      </div>
      <nav className={styles.navbar}>
        <a className={styles.navLink} href="www.linkedin.com/in/kira-peters01">LinkedIn</a>
        <a className={styles.navLink} href="https://github.com/kirapeters">Github</a>
      </nav>
    </header>
  );
}

export default Header;