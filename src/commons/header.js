import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { UncontrolledTooltip } from 'reactstrap';

// Commons
import NavLink from './nav_link';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            preventAnimation: 1,
            isOpen: false
        };
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
    this.setState(state => ({
        preventAnimation: 0,
        isOpen: !state.isOpen
    }));
    }
    
    render() {
        return (
            <header className='header'>
                {/* Navigation */}
                <nav className='nav container'>
                    {/* Logo */}
                    <Link to={'/'} className='nav__logo'>Oana<span>Maria</span></Link>

                    {/* Tabs */}
                    <ul className={this.state.isOpen ? 'nav__tabs nav__tabs--menu' : 'nav__tabs'}>
                        {/* Home */}
                        <li className='nav__tab'>
                            <NavLink onClick={this.handleClick} to='/'>Home</NavLink>
                        </li>
                        
                        {/* About */}
                        <li className='nav__tab'>
                            <NavLink onClick={this.handleClick} to='/about'>About</NavLink>
                        </li>

                        {/* Development */}
                        <li className='nav__tab'>
                            <NavLink onClick={this.handleClick} to='/development'>Web Development</NavLink>
                        </li>
                        
                        {/* Design */}
                        <li className='nav__tab'>
                            <NavLink onClick={this.handleClick} to='/design'>Design</NavLink>
                        </li>

                        {/* Blog */}
                        <li className='nav__tab' id='js-tooltip'>
                            <NavLink onClick={this.handleClick} className='disabled' to='/blog'>Blog</NavLink>
                            <UncontrolledTooltip placement='bottom' target='js-tooltip'>Coming soon!</UncontrolledTooltip>
                        </li>
                        
                        {/* Contact */}
                        <li className='nav__tab nav__tab nav__tab--last btn btn--primary'>
                            <NavLink onClick={this.handleClick} to='/contact'>Contact</NavLink>
                        </li>
                    </ul>

                    {/* Mobile menu */}
                    <div className={'nav__menu menu ' + (this.state.isOpen ? 'anim-start' : 'anim-end')} onClick={this.handleClick}>
                        <div className={'menu__line menu__line--top ' + (this.state.preventAnimation === 1 ? 'anim-inactive' : '')}></div>
                        <div className={'menu__line menu__line--middle ' + (this.state.preventAnimation === 1 ? 'anim-inactive' : '')}></div>
                        <div className={'menu__line menu__line--bottom ' + (this.state.preventAnimation === 1 ? 'anim-inactive' : '')}></div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;