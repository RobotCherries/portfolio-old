import React, { Component } from 'react';

class Quote extends Component {
    render() {
        return (
            <div className='quote__wrapper container'>
                <blockquote className='quote'>
                    <p className='quote__content'>
                        <span className="quote__symbol">“</span>
                        Spend each day trying to be a little wiser than you were when you woke up. Day by day, and at the end, if you live long enough, you will get out of life what you deserve.
                        <span className="quote__symbol">”</span>
                    </p>
                    <footer className='quote__footer'><cite title="Poor Charlie's Almanack: The Wit and Wisdom of Charles T. Munger">- Charles T. Munger</cite></footer>
                </blockquote>
            </div>
        );
    }
}

export default Quote;