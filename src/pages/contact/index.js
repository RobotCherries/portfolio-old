import React, { Component } from 'react';

class Contact extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className='main__contact'>
                <section>
                    <div className="heading container">
                        <h1 className="heading__title">Contact</h1>
                        <p className="heading__text">Reach me through email.</p>
                    </div>
                </section>
            </div>
        );
    }
}

export default Contact;