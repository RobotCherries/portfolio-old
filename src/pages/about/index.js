import React, { Component } from 'react';

// Partials
import Contact from '../../partials/contact';

class About extends Component {
    render() {
        return (
            <div className='main__about'>
                <section>
                    <div className="heading container">
                        <h1 className="heading__title">About Me</h1>
                        <p className="heading__text">
                            Hello, my name is Oana and I'm a self taught web developer and designer.
                            <br/><br/><br/>
                            I started out as a designer, went to and arts highschool where I studied graphics and illustration.
                            However, I've always had a knack for computers ever since I received the first one at 6 years of age.
                            <br/><br/>
                            Growing up I've spent a lot of time at the computer and on the internet which led me to learning a wide arrray of skills. Amongst which some would be the following: learning to <br/>  write and speak English well, learning to install, configure, troubleshoot all kinds <br/> of operating systems, learning about computer parts, how to combine them build a PC and troubleshoot their hardware at a basic level.
                            <br/><br/>
                            And, the same way I've learned to use the graphic editing programs such as and mainly Adobe Illustrator, Adobe Photoshop and Paint Tool Sai. Besides these, I've used a wide array of other graphic and video editing software, though the above mentioned are the ones I've built some degree of experience with.
                            <br/><br/>
                            The bottom line is that I love learning and building things, indifferent of the subject, I'm always very open to new things as long as the subject is relevant to me and I'm not pressured to do it. I'd love to be surrounded by people who enjoy learning new things, enjoy creative thinking/endeavours and are open minded.
                            <br/><br/><br/>
                            Alright, by now I think you get the gist of who I and if I managed to connected with you somehow feel free to send me a message and start a conversation. <br/>
                            I'll make sure to get back to you as soon as I can. 💨😉
                        </p>
                    </div>
                </section>

                <Contact />
            </div>
        );
    }
}

export default About;