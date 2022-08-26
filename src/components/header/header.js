import './_header.scss';

function Header() {
  return (
    <header className="header">
    <div className="container">
        <div className="header__wrapper">
            <div className="header__info"><span>Marvel</span> information portal</div>
            <nav className="header__nav">
                <ul>
                    <li ><a href="#" className="active">Characters</a></li>
                    /
                    <li><a href="#">Comics</a></li>
                </ul>
            </nav>
        </div>
    </div>
</header>

  );
}

export default Header;