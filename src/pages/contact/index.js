import React, { Component } from 'react';

// Components
import ContactForm from './components/form';

class Contact extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className='main__contact'>
                <div className="heading heading--main container">
                    <h1 className="heading__title">Contact</h1>
                    <p className="heading__text">Reach me through email.</p>
                </div>

                <ContactForm />
            </div>
        );
    }
}

export default Contact;