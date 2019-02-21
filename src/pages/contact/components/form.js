
import React, { Component } from 'react';
import { Form, FormGroup, FormFeedback, Input, CustomInput, Label } from 'reactstrap';

class ContactForm extends Component {
    render() {
        return (
            <div className='contact__form'>
                <Form className='form container' action='https://formspree.io/sd.oana123@gmail.com' method='POST'>
                    <FormGroup className='form__group'>
                        <Label for='name'>Name</Label>
                        <Input type='text' name='name' id='js-name' placeholder='E.g. John Doe' required />
                        <FormFeedback tooltip>Please enter you name.</FormFeedback>
                    </FormGroup>

                    <FormGroup className='form__group'>
                        <Label for='exampleEmail'>Email</Label>
                        <Input type='email' name='email' id='js-email' placeholder='example@gmail.com' required />
                        <FormFeedback tooltip>Please enter your e-mail address.</FormFeedback>
                    </FormGroup>

                    <FormGroup className='form__group'>
                        <Label for='exampleEmail'>Message</Label>
                        <Input type='textarea' name='message' id='js-message' placeholder='Hello...' rows="8" required />
                        <FormFeedback tooltip>Please enter your message.</FormFeedback>
                    </FormGroup>

                    <FormGroup className='form__group form__group--center'>
                        <CustomInput className='form__checkbox' type='checkbox' name='bot-check' id='js-bot-check' label={'I\'m not a robot'} required />
                    </FormGroup>

                    <button className='form__submit btn btn--lg btn--primary'>Submit</button>
                </Form>
            </div>
        );
    }
}

  export default ContactForm;