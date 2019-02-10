import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Gallery extends Component {
    render() {
        return (
            <div className='gallery'>
                <div className='gallery__container container'>
                    <div className='heading'>
                        <h2 className='heading__title'>Take a look at my Design Porfolio as well!</h2>
                        <p className='heading__text'>Below you can see some of the custom graphic designs I've made, if you want to view more you may click the 'See More' button below which will take you to my portfolio page.</p>
                    </div>

                    <ul className='gallery__list'>
                        <Link to={'/projects'}>
                            <li className='gallery__li' style={{ backgroundImage: 'url(https://i.imgur.com/GHB0R8y.png)' }}></li>
                        </Link>
                        <Link to={'/projects'}>
                            <li className='gallery__li' style={{ backgroundImage: 'url(https://i.imgur.com/qrg9mmV.png)' }}></li>
                        </Link>
                        <Link to={'/projects'}>
                            <li className='gallery__li' style={{ backgroundImage: 'url(https://i.imgur.com/R4LYZlZ.png)' }}></li>
                        </Link>
                    </ul>

                    <div className="gallery__footer">
                        <Link className='btn btn-link btn-icon btn-icon--arrow-right' to={'/projects'}>See more</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;