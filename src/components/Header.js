import './Header.sass';

function Header({ logo }) {
  return (
    <header className="Header">
      <img src={ logo } alt="logo"/>
    </header>
  )
}

export default Header;