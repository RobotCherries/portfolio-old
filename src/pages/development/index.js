import React, { Component } from 'react';

import DevGallery from './components/dev_gallery';
// Commons
import Contact from '../../commons/contact';
import Work from '../../commons/work';
// import Gallery from '../../commons/gallery';


class Development extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className='main__design'>
                <div className='heading heading--main container'>
                    <h1 className='heading__title'>Web Development</h1>
                    <p className='heading__text'>Personal and client work.</p>
                </div>
                
                <Work/>
                
                <DevGallery />

                <Contact/>
            </div>
        );
    }
}

export default Development;