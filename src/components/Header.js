import './Header.css';

// todo: add an active class to the tab that is active
function Header() {
  return (
    <header className="header">
      <div className="home-button">
        <button className="logo">Kira Peters</button>
      </div>
      <nav className="navbar">
        <a className="nav-link" href="www.linkedin.com/in/kira-peters01">LinkedIn</a>
        <a className="nav-link" href="https://github.com/kirapeters">Github</a>
      </nav>
    </header>
  );
}

export default Header;