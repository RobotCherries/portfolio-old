import React, { Component } from 'react';

// Components
import Gallery from './components/gallery';

class Projects extends Component {
    render() {
        return (
            <div className='main__projects'>
                <section>
                    <div className='heading container'>
                        <h1 className='heading__title'>Projects</h1>
                        <p className='heading__text'>My personal and client work.</p>
                    </div>
                </section>

                <section>
                    <Gallery/>
                </section>
            </div>
        );
    }
}

export default Projects;