import React, { Component } from 'react';

class Hero extends Component {
    render() {
        return (
            <div className='hero js-blobs'>
                <h1 className='hero__title'>
                    var Oana = ["Web Developer", "Graphic Designer"];
                </h1>
                <a className='hero__btn' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>Learn React</a>
            </div>
        );
    }
}

export default Hero;