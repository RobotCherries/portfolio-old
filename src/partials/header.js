import React, { Component } from 'react';

// Resources
import logo from '../icons/logo.svg';
import NavLink from "./nav_link";

class Header extends Component {
    render() {
        return (
            <header className='header'>
                {/* Navigation */}
                <nav className='nav container'>
                    {/* Logo */}
                    <img className='nav__logo' src={logo} alt='logo' />

                    {/* Tabs */}
                    <ul className='nav__tabs'>
                        {/* Home */}
                        <li className='nav__tab'>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        
                        {/* About */}
                        <li className='nav__tab'>
                            <NavLink to="/about">About</NavLink>
                        </li>

                        {/* Development */}
                        <li className='nav__tab'>
                            <NavLink to="/development">Development</NavLink>
                        </li>
                        
                        {/* Design */}
                        <li className='nav__tab'>
                            <NavLink to="/design">Design</NavLink>
                        </li>

                        {/* Blog */}
                        <li className='nav__tab'>
                            <NavLink to="/blog">Blog</NavLink>
                        </li>
                        
                        {/* Contact */}
                        <li className='nav__tab nav__tab nav__tab--last btn'>
                            <NavLink to='/contact'>Contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;