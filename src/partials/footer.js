import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <ul className="footer__row container">
                    <li className="footer__col">
                        <h4 className='footer__title'>About Me</h4>

                        <p className='footer__text'>
                            Hi, I'm Oana. <br/>
                            I'd describe myself as a web development/design enthusiast <br/> 
                            and massive autodidact.
                            <br/><br/>
                            I love learning, reading, painting (traditional & digital), computers , building things and impoving myself.
                            <br/><br/>
                            Head to the contact page and tell me something about yourself. 😊👋
                        </p>
                    </li>
                    <li className="footer__col">
                        <h4 className='footer__title'>Footer Navigation</h4>

                        <ul className="footer__navigation">
                            <li className="footer__navigation-li">
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li className="footer__navigation-li">
                                <Link to={'/about'}>About</Link>
                            </li>
                            <li className="footer__navigation-li">
                                <Link to={'/projects'}>Projects</Link>
                            </li>
                            <li className="footer__navigation-li">
                                <Link to={'/blog'}>Blog</Link>
                            </li>
                            <li className="footer__navigation-li">
                                <Link to={'/contact'}>Contact</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="footer__col">
                        <h4 className='footer__title'>Other Media</h4>

                        <ul className='footer__social'>
                            <li className="footer__social-li">
                                <a href="https://www.freecodecamp.org/robotcherries" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-free-code-camp fa-2x"></i>
                                </a>
                            </li>
                            <li className="footer__social-li">
                                <a href="https://codepen.io/RobotCherries/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-codepen fa-2x"></i>
                                </a>
                            </li>
                            <li className="footer__social-li">
                                <a href="https://github.com/RobotCherries" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github fa-2x"></i>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </footer>
        );
    }
}

export default Footer;