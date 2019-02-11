import React, { Component } from 'react';
import { render } from 'react-dom';
import DesignGallery from './components/design_gallery';
import Contact from '../../partials/contact';

class Design extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className='main__design'>
                <section>
                    <div className='heading container'>
                        <h1 className='heading__title'>Design</h1>
                        <p className='heading__text'>My personal and client work.</p>
                    </div>
                </section>

                <DesignGallery />

                <Contact/>
            </div>
        );
    }
}

export default Design;