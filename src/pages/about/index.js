import React, { Component } from 'react';

// Partials
import Contact from '../../partials/contact';

class About extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className='main__about'>
                <section>
                    <div className='heading container'>
                        <h1 className='heading__title'>About Me</h1>
                        <p className='heading__text'>
                            <br/><br/>
                            Hello, <span style={{ fontSize: '20px' }} role='img' aria-label='Waving hand'>👋</span> my name is Oana and I'm a romanian self taught web developer and designer.
                            <br/><br/><br/>
                            Orignally, I started out on a path to become a designer, went to an arts highschool where I studied graphics and illustration.
                            However, I've always had a knack for computers ever since I've received my first one at 6 years of age.
                            <br/><br/>
                            Growing up I've spent a lot of time at the computer and on the internet which led me to learning a wide arrray of skills. Amongst, some of the relevant ones would be the following: <br/>
                            Speak and write English at a high level; 
                            Install, configure, troubleshoot all kinds of operating systems and use their terminals; Understand computer parts, the ways to combine them, build PCs and troubleshoot the hardware at a basic level. <br/><br/>
                            And of course, learning to code from all kinds of <acronym title='Massive Open Online Course'>MOOCs</acronym> (Lynda, Udemy, EggHead, Scrimba etc.), some of the more immersive resources being FreeCodeCamp, Udacity and The Odin Project. <br/>
                            I've started by learning JavaScript on Khan Academy and the rest is a long journey.
                            <br/><br/>
                            The same way I've learned to use the graphic editing programs, mainly Adobe Illustrator, Photoshop and Paint Tool Sai. Besides these, I've tried many other graphic and video editing software, though the above mentioned are the ones I've built some degree of experience with.
                            <br/><br/>
                            The bottom line is that I love learning and building things, regardless of the subject matter, generally I'm always very open to new things as long as the subject is relevant to me and I'm not pressured to do it. I'd love to be surrounded by people who are similar and from whom I can learn and grow.
                            <br/><br/><br/>
                            By now I hope that you get the gist of who I am and if I managed to connect with you through anything that I wrote, feel free to send me a message and start a conversation. <br/>
                            I'll make sure to get back to you as soon as I can. <span role='img' aria-label='Fast email response cloud'>💨</span><span role='img' aria-label='Smiling winking face'>😉</span>
                        </p>
                    </div>
                </section>

                <Contact />
            </div>
        );
    }
}

export default About;