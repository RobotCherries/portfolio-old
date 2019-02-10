import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="container">
                    <div className='heading heading--light'>
                        <h2 className='heading__title'>Let's Get In Touch!</h2>
                        <p className='heading__text'>Thinking I'd be a good fit to work on your idea or team? <br/> Then, click below and drop me a message.</p>
                    </div>
                    <Link className='btn btn--lg btn--light' to={'/contact'}>Contact Me</Link>
                </div>
            </div>
        );
    }
}

export default Contact;