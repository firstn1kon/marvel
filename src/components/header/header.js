import { NavLink, Link} from 'react-router-dom';

import './_header.scss';

function Header() {
  return (
    <header className="header">
        <div className="container">
            <div className="header__wrapper">
                <div className="header__info"><span><Link to="/">Marvel</Link></span> information portal</div>
                <nav className="header__nav">
                    <ul>
                        <li><NavLink className={({ isActive }) => isActive ? "active" : null} to="/">Characters</NavLink></li>
                        /
                        <li><NavLink className={({ isActive }) => isActive ? "active" : null} to="/comics">Comics</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  );
}

export default Header;