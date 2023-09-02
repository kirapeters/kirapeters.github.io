import './Header.css';

function Header() {
  return (
    <header>
      <div className="home-button">
        <button>Kira Peters</button>
      </div>
      <div className="nav-links">
        <a href="www.linkedin.com/in/kira-peters01">LinkedIn</a>
        <a href="https://github.com/kirapeters">Github</a>
      </div>
    </header>
  );
}

export default Header;