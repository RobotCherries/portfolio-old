import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Hero extends Component {
    render() {
        return (
            <div className='hero js-blobs'>
                <h1 className='hero__title hero__title--desktop'>
                    var Oana = ["Web Developer", "Graphic Designer"];
                </h1>
                <h1 className='hero__title hero__title--mobile'>
                    Hello World!
                </h1>
                <Link className='hero__btn' to={'/development'}>View my work</Link>
            </div>
        );
    }
}

export default Hero;