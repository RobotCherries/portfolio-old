import React, { Component } from 'react';
import Hero from './components/hero';
import Skills from './components/skills';
import Quote from './components/quote';
import Work from './components/work';
import Gallery from './components/gallery';

class Home extends Component {
    render() {
        return (
            <div className='main__home'>
                <Hero/>
                <Skills/>
                <Quote/>
                <Work/>
                <Gallery/>
            </div>
        );
    }
}

export default Home;