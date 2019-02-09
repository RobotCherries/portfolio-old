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
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 1
        };
    }

    handleClickActiveTab(currentTab) {
        this.setState({ activeTab: currentTab });
    }

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
                            {/* Home */}
                            <li className={this.state.activeTab === 1 ? 'nav__tab nav__tab--active' : 'nav__tab'}>
                                <Link className='nav__link' to={'/'} 
                                      onClick={this.handleClickActiveTab.bind(this, 1)}
                                >Home</Link>
                            </li>

                            {/* About */}
                            <li className={this.state.activeTab === 2 ? 'nav__tab nav__tab--active' : 'nav__tab'}>
                                <Link className='nav__link' to={'/about'} 
                                      onClick={this.handleClickActiveTab.bind(this, 2)}
                                >About</Link>
                            </li>
                            
                            {/* Projects */}
                            <li className={this.state.activeTab === 3 ? 'nav__tab nav__tab--active' : 'nav__tab'}>
                                <Link className='nav__link' to={'/projects'} 
                                      onClick={this.handleClickActiveTab.bind(this, 3)}
                                >Projects</Link>
                            </li>

                            {/* Blog */}
                            <li className={this.state.activeTab === 4 ? 'nav__tab nav__tab--active' : 'nav__tab'}>
                                <Link className='nav__link' to={'/blog'} 
                                      onClick={this.handleClickActiveTab.bind(this, 4)}
                                >Blog</Link>
                            </li>
                            
                            {/* Contact */}
                            <li className={this.state.activeTab === 5 ? 'nav__tab nav__tab--last nav__tab--active' : 'nav__tab nav__tab--last'}>
                                <Link className='nav__link nav__link--highlight' to={'/contact'} 
                                      onClick={this.handleClickActiveTab.bind(this, 5)}
                                >Contact</Link>
                            </li>
                        </ul>
                    </nav>
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