import React, { Component } from 'react';
import { UncontrolledTooltip } from 'reactstrap';

// Commons
import NavLink from "./nav_link";

class Header extends Component {
    render() {
        return (
            <header className='header'>
                {/* Navigation */}
                <nav className='nav container'>
                    {/* Logo */}
                    <div className="nav__logo">Oana<span>Maria</span></div>

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
                            <NavLink to="/development">Web Development</NavLink>
                        </li>
                        
                        {/* Design */}
                        <li className='nav__tab'>
                            <NavLink to="/design">Design</NavLink>
                        </li>

                        {/* Blog */}
                        <li className='nav__tab' id='js-tooltip'>
                            <NavLink className='disabled' to="/blog">Blog</NavLink>
                            <UncontrolledTooltip placement="bottom" target="js-tooltip">Coming soon!</UncontrolledTooltip>
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