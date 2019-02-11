import React, { Component } from 'react';

class Blog extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <div>
                <div className="heading heading--main container">
                    <h1 className="heading__title">Blog</h1>
                    <p className="heading__text">The blog will be available soon.</p>
                </div>
            </div>
        );
    }
}

export default Blog;