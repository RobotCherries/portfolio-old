import React, { Component } from 'react';

class DevGallery extends Component {
    render() {
        return (
            <div className='dev-gallery'>
                <div className='dev-gallery__container container'>
                    <div className='heading'>
                        <h2 className='heading__title'>Work & Play</h2>
                        <p className='heading__text'>Some of the projects I worked on either for work, learning or simply fun.</p>
                    </div>

                    <ul className='dev-gallery__list'>
                        <a href="https://www.fotografland.dk/" target="_blank" rel="noopener noreferrer">
                            <li className='dev-gallery__li' style={{ backgroundImage: 'url(https://i.imgur.com/KbSUIGJ.png?2)' }}></li>
                        </a>
                        <a href="https://inspiring-visvesvaraya-2a03e7.netlify.com/" target="_blank" rel="noopener noreferrer">
                            <li className='dev-gallery__li' style={{ backgroundImage: 'url(https://i.imgur.com/HKXSDjy.png)' }}></li>
                        </a>
                        <a href="https://s.codepen.io/RobotCherries/debug/rwQLZZ/yYMyLOKWZank" target="_blank" rel="noopener noreferrer">
                            <li className='dev-gallery__li' style={{ backgroundImage: 'url(https://i.imgur.com/1NlmyCS.png)' }}></li>
                        </a>
                        <a href="https://www.mezoni.ro/" target="_blank" rel="noopener noreferrer">
                            <li className='dev-gallery__li' style={{ backgroundImage: 'url(https://i.imgur.com/SQsnUHV.png)' }}></li>
                        </a>
                        <a href="https://s.codepen.io/RobotCherries/debug/gRPdpX/wQAPoNRvxNLr" target="_blank" rel="noopener noreferrer">
                            <li className='dev-gallery__li' style={{ backgroundImage: 'url(https://i.imgur.com/rvq7Vjk.png)' }}></li>
                        </a>
                        <a href="https://www.clinicadeparbrize.ro/" target="_blank" rel="noopener noreferrer">
                            <li className='dev-gallery__li' style={{ backgroundImage: 'url(https://i.imgur.com/YH80wiu.png)' }}></li>
                        </a>
                        <a href="https://www.hudemas.com/" target="_blank" rel="noopener noreferrer">
                            <li className='dev-gallery__li' style={{ backgroundImage: 'url(https://i.imgur.com/fS9e6Zj.png)' }}></li>
                        </a>
                        <a className='disabled' href="https://sineira.ro/" target="_blank" rel="noopener noreferrer">
                            <li className='dev-gallery__li' style={{ backgroundImage: 'url(https://i.imgur.com/VY3O3LI.png)' }}></li>
                        </a>
                        <a className='disabled' href="https://casamaria.sineira.ro/" target="_blank" rel="noopener noreferrer">
                            <li className='dev-gallery__li' style={{ backgroundImage: 'url(https://i.imgur.com/SuV6crm.png)' }}></li>
                        </a>
                    </ul>
                </div>
            </div>
        );
    }
}

export default DevGallery;