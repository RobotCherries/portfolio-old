import React, { Component } from 'react';

// Components
import Story from './components/story';

// Commons
import Contact from '../../commons/contact';

class About extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className='main__about'>
                    <div className='heading heading--main container'>
                        <h1 className='heading__title'>About Me</h1>
                        <p className='heading__text'>A little bit about my background</p>
                    </div>

                <Story />

                <Contact />
            </div>
        );
    }
}

export default About;