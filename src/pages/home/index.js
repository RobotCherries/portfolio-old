import React, { Component } from 'react';

// Components
import Hero from './components/hero';
import Skills from './components/skills';
import Quote from './components/quote';
import Work from './components/work';
import Gallery from './components/gallery';

// Partials
import Contact from '../../partials/contact';

class Home extends Component {
    render() {
        return (
            <div className='main__home'>
                <Hero/>
                <Skills/>
                <Quote/>
                <Work/>
                <Gallery/>
                <Contact/>
            </div>
        );
    }
}

export default Home;