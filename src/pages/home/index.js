import React, { Component } from 'react';

// Components
import Hero from './components/hero';
import Skills from './components/skills';
import Quote from './components/quote';
import Gallery from './components/gallery';

// Commons
import Work from '../../commons/work';
import Contact from '../../commons/contact';

class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
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