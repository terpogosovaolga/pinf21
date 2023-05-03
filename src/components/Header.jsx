import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1>World Wild Go</h1>
            <p>
            люби • пой • <span>путешествуй</span>
            </p>
            <nav>
            <div className="container">
                <NavLink to="/">
                ГЛАВНАЯ
                </NavLink>
                <NavLink to="/favs">ИЗБРАННОЕ</NavLink>
                <Link to="">Q&A</Link>
                <Link to="">ВОЙТИ</Link>
            </div>
            </nav>
        </header>
    );
}

export default Header;