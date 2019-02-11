import React, { Component } from 'react';

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSlide: 1
        };
    }

    handleClickActiveSlide(currentSlide) {
        this.setState({ activeSlide: currentSlide });
    }

    render() {
        return (
            <div className='work'>
                <div className="work__container container">
                    {/* Heading */}
                    <div className="work__heading">
                        <h1 className='work__title'>Check out what I've Built:</h1>
                        <p className='work__subtitle'>Here you can see some websites that I've built myself or helped build for our clients.</p>
                    </div>
                    
                    {/* Slider */}
                    <div className="work__slider">
                        <div className='slider'>
                            {/* Control buttons */}
                            <ol className="slider__controls">
                                {/* 1 out of 4 */}
                                <li className="slider__controls-li">
                                    <button className={this.state.activeSlide === 1 ? 'slider__controls-btn slider__controls-btn--active' : 'slider__controls-btn'} 
                                    onClick={this.handleClickActiveSlide.bind(this, 1)}
                                    type='button' ></button>
                                </li>
                                {/* 2 out of 4 */}
                                <li className="slider__controls-li">
                                    <button className={this.state.activeSlide === 2 ? 'slider__controls-btn slider__controls-btn--active' : 'slider__controls-btn'} 
                                    onClick={this.handleClickActiveSlide.bind(this, 2)}
                                    type='button' ></button>
                                </li>
                                {/* 3 out of 4 */}
                                <li className="slider__controls-li">
                                    <button className={this.state.activeSlide === 3 ? 'slider__controls-btn slider__controls-btn--active' : 'slider__controls-btn'} 
                                    onClick={this.handleClickActiveSlide.bind(this, 3)}
                                    type='button' ></button>
                                </li>
                                {/* 4 out of 4 */}
                                <li className="slider__controls-li">
                                    <button className={this.state.activeSlide === 4 ? 'slider__controls-btn slider__controls-btn--active' : 'slider__controls-btn'} 
                                    onClick={this.handleClickActiveSlide.bind(this, 4)}
                                    type='button' ></button>
                                </li>
                            </ol>
                            
                            {/* Slides */}
                            <ul className="slider__slides">
                                {/* 1 out of 4 */}
                                <li className="slider__slides-li" style={this.state.activeSlide === 1 ? { backgroundImage: 'url(https://i.imgur.com/VY3O3LI.png)', opacity: '1' } : { opacity: '0' }}>
                                    <div className="slider__slides-info" style={this.state.activeSlide === 1 ? { opacity: '1', transform: 'translateY(0)' } : { opacity: '0', transform: 'translateY(80px)' }}>
                                        <h2 className="slider__slides-title">www.sineira.ro</h2>
                                        <p className="slider__slides-text">This website was built by me for the romanian "Sine Ira" foundation.</p>
                                    </div>
                                </li>
                                {/* 2 out of 4 */}
                                <li className="slider__slides-li" style={this.state.activeSlide === 2 ? { backgroundImage: 'url(https://i.imgur.com/SuV6crm.png)', opacity: '1' } : { opacity: '0' }}>
                                    <div className="slider__slides-info" style={this.state.activeSlide === 2 ? { opacity: '1', transform: 'translateY(0)' } : { opacity: '0', transform: 'translateY(80px)' }}>
                                        <h2 className="slider__slides-title">www.casamaria.sineira.ro</h2>
                                        <p className="slider__slides-text">This website was built by me for the romanian "Casa Maria" hospice house.</p>
                                    </div>
                                </li>
                                {/* 3 out of 4 */}
                                <li className="slider__slides-li" style={this.state.activeSlide === 3 ? { backgroundImage: 'url(https://i.imgur.com/KbSUIGJ.png?2)', opacity: '1' } : { opacity: '0' }}>
                                    <div className="slider__slides-info" style={this.state.activeSlide === 3 ? { opacity: '1', transform: 'translateY(0)' } : { opacity: '0', transform: 'translateY(80px)' }}>
                                        <h2 className="slider__slides-title">www.fotografland.dk</h2>
                                        <p className="slider__slides-text">I've helped build this website for the danish "Fotograf Land" photographers platform.</p>
                                    </div>
                                </li>
                                {/* 4 out of 4 */}
                                <li className="slider__slides-li" style={this.state.activeSlide === 4 ? { backgroundImage: 'url(https://i.imgur.com/YBv9r8b.png?1)', opacity: '1' } : { opacity: '0' }}>
                                    <div className="slider__slides-info" style={this.state.activeSlide === 4 ? { opacity: '1', transform: 'translateY(0)' } : { opacity: '0', transform: 'translateY(80px)' }}>
                                        <h2 className="slider__slides-title">www.mezoni.ro</h2>
                                        <p className="slider__slides-text">I've helped build this website for the romanian "Mezoni" furniture e-commerce store.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* End Slider */}
                </div>
            </div>
        );
    }
}

export default Work;