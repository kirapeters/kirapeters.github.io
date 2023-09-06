import './Header.css';

// todo: add an active class to the tab that is active
function Header() {
  return (
    <header>
      <div className="home-button">
        <button>Kira Peters</button>
      </div>
      <nav className="nav-links">
        <a href="www.linkedin.com/in/kira-peters01">LinkedIn</a>
        <a href="https://github.com/kirapeters">Github</a>
      </nav>
    </header>
  );
}

export default Header;