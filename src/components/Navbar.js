import React from 'react'

const Navbar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href="/" className="brand-logo">Samara Liga</a>
                <ul className="right">
                    <li><a href="/">Teams</a></li>
                    <li><a href="/tournaments">Torunaments</a></li>
                    <li><a href="/results">Results</a></li>
                </ul>
            </div>
        </nav>
    )

}

export default Navbar