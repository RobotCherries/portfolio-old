import React, { Component } from 'react';
import DesignGallery from './components/design_gallery';
import Contact from '../../commons/contact';

class Design extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className='main__design'>
                <div className='heading heading--main container'>
                    <h1 className='heading__title'>Design</h1>
                    <p className='heading__text'>Personal and client work.</p>
                </div>

                <DesignGallery />

                <Contact/>
            </div>
        );
    }
}

export default Design;