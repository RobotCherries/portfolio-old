import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
        <div className='skills'>
            <div className='container'>
            
                {/* Card 1 out of 6 */}
                <div className='skills-card'>
                    <div className='skills-card__image'>
                        <i className="fab fa-html5 fa-skill fa-2x"></i>
                    </div>
                    <div className='skills-card__copy'>
                        <h3>HTML</h3>
                        <p>HTML5, Markdown, Pug.</p>
                    </div>
                </div>
                {/* Card 2 out of 6 */}
                <div className='skills-card'>
                    <div className='skills-card__image'>
                    <i className="fab fa-css3-alt fa-skill fa-2x"></i>
                    </div>
                    <div className='skills-card__copy'>
                        <h3>CSS</h3>
                        <p>CSS3, SCSS, Bootstrap.</p>
                    </div>
                </div>
                {/* Card 3 out of 6 */}
                <div className='skills-card'>
                    <div className='skills-card__image'>
                    <i className="fab fa-js fa-skill fa-2x"></i>
                    </div>
                    <div className='skills-card__copy'>
                        <h3>JavaScript</h3>
                        <p>jQuery, React js, Node js</p>
                    </div>
                </div>
                {/* Card 4 out of 6 */}
                <div className='skills-card'>
                    <div className='skills-card__image'>
                        <i className="fab fa-laravel fa-skill fa-2x"></i>
                    </div>
                    <div className='skills-card__copy'>
                    <h3>Laravel</h3>
                        <p>MVC, CRUD, REST.</p>
                    </div>
                </div>
                {/* Card 5 out of 6 */}
                <div className='skills-card'>
                    <div className='skills-card__image'>
                        <i className="fab fa-adobe fa-skill fa-2x"></i>
                    </div>
                    <div className='skills-card__copy'>
                        <h3>Web Design</h3>
                        <p>Illustrator, Photoshop, Sai.</p>
                    </div>
                </div>
                {/* Card 6 out of 6 */}
                <div className='skills-card'>
                    <div className='skills-card__image'>
                        <i className="fab fa-github fa-skill fa-2x"></i>
                    </div>
                    <div className='skills-card__copy'>
                        <h3>Git</h3>
                        <p>Terminal, Github, GitKracken.</p>
                    </div>
                </div>

            </div>
        </div>
        );
    }
}

export default Skills;