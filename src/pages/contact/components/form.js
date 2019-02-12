
import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div className="container">
                <form method="POST">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />

                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows="3"></textarea>

                    <input type="submit" />
                </form>
            </div>
        );
    }
}

  export default Form;