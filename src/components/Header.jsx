function Header() {
    return (
        <header>
            <h1>World Wild Go</h1>
            <p>
            люби • пой • <span>путешествуй</span>
            </p>
            <nav>
            <div className="container">
                <a href="index.html" className="active">
                ГЛАВНАЯ
                </a>
                <a href="favorites.html">ИЗБРАННОЕ</a>
                <a href="">Q&A</a>
                <a href="">ВОЙТИ</a>
            </div>
            </nav>
        </header>
    );
}

export default Header;