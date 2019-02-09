import React, { Component } from 'react';
import Skills from './components/skills';
import Hero from './components/hero';

class Home extends Component {
    render() {
        return (
            <div>
                <Hero />
                <Skills />
            </div>
        );
    }
}

export default Home;