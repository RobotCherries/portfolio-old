import React, { Component } from 'react';
import Hero from './components/hero';
import Skills from './components/skills';
import Quote from './components/quote';

class Home extends Component {
    render() {
        return (
            <div>
                <Hero/>
                <Skills/>
                <Quote/>
            </div>
        );
    }
}

export default Home;