import React, { Component } from 'react';

// Partials
import Contact from '../../partials/contact';

class About extends Component {
    render() {
        return (
            <div>
                <section>
                    <div className="heading container">
                        <h1 className="heading__title">About Me</h1>
                        <p className="heading__text">I am a Graphic Designer and Web Developer from Romania.</p>
                    </div>
                </section>
                <Contact />
            </div>
        );
    }
}

export default About;