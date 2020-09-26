import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href="/" className="brand-logo">Samara Liga</a>
                <ul className="right">
                    <li><Link to="/">Teams</Link></li>
                    <li><NavLink to="/tournaments">Torunaments</NavLink></li>
                    <li><NavLink to="/results">Results</NavLink></li>
                </ul>
            </div>
        </nav>
    )

}

export default Navbar