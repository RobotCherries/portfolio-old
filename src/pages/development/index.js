import React, { Component } from 'react';
import { render } from 'react-dom';
import DevGallery from './components/dev_gallery';
import Contact from '../../partials/contact';

class Development extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className='main__design'>
                <section>
                    <div className='heading container'>
                        <h1 className='heading__title'>Development</h1>
                        <p className='heading__text'>My personal and client work.</p>
                    </div>
                </section>

                <DevGallery />

                <Contact/>
            </div>
        );
    }
}

export default Development;