import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';

// todo: add an active class to the tab that is active
function Header() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate('/');
  }
  return (
    <header className={styles.header}>
      <div className={styles.homeButton}>
        <button className="logo" onClick={navigateHandler}>Kira Peters</button>
      </div>
      <nav className={styles.navbar}>
        <a className={styles.navLink} href="https://www.linkedin.com/in/kira-peters01">LinkedIn</a>
        <a className={styles.navLink} href="https://github.com/kirapeters">Github</a>
      </nav>
    </header>
  );
}

export default Header;