import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

// Resources
import logo from '../logo.svg';

// Pages
import Home from '../pages/home/index';
import About from '../pages/about/index';
import Projects from '../pages/projects/index';
import Blog from '../pages/blog/index';
import Contact from '../pages/contact/index';


class Header extends Component {
    render() {
        return (
            <div>
                <header className='header'>
                    {/* Navigation */}
                    <nav className='nav'>
                        {/* Logo */}
                        <img className='nav__logo' src={logo} alt='logo' />

                        {/* Tabs */}
                        <ul className='nav__tabs'>
                            <li className='nav__tab'>
                                <Link className='header__link' to={'/'}>Home</Link>
                            </li>
                            <li className='nav__tab'>
                                <Link className='header__link' to={'/about'}>About</Link>
                            </li>
                            <li className='nav__tab'>
                                <Link className='header__link' to={'/projects'}>Projects</Link>
                            </li>
                            <li className='nav__tab'>
                                <Link className='header__link' to={'/blog'}>Blog</Link>
                            </li>
                            <li className='nav__tab nav__tab--last'>
                                <Link className='header__link' to={'/contact'}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
    
                    <div className='header__content js-blobs'>
                        <p className='header__title'>Welcome to my portfolio!</p>
                        <a className='header__link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>Learn React</a>
                    </div>
                </header>
                
                <Route path='/' exact component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/projects' component={Projects}/>
                <Route path='/blog' component={Blog}/>
                <Route path='/contact' component={Contact}/>
            </div>
        );
    }
}

export default Header;