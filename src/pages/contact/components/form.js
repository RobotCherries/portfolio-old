
import React, { Component } from 'react';
import { Row, Col, Form, FormGroup, FormFeedback, Input, Label, Button } from 'reactstrap';

class ContactForm extends Component {
    render() {
        return (
            <div className='container' style={{ marginBottom: '125px', width: '600px' }}>
                <Form  action='https://formspree.io/sd.oana123@gmail.com' method='POST'>
                    <FormGroup>
                        <Label for='name'>Name</Label>
                        <Input type='text' name='name' id='js-name' placeholder='E.g. John Doe' required />
                        <FormFeedback tooltip>Please enter you name.</FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label for='exampleEmail'>Email</Label>
                        <Input type='email' name='email' id='js-email' placeholder='example@gmail.com' required />
                        <FormFeedback tooltip>Please enter your e-mail address.</FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label for='exampleEmail'>Message</Label>
                        <Input type='textarea' name='message' id='js-message' placeholder='Hello...' required />
                        <FormFeedback tooltip>Please enter your message.</FormFeedback>
                    </FormGroup>

                    <FormGroup check style={{ textAlign: 'center' }}>
                        <Input type='checkbox' name='bot-check' id='js-bot-check' required />
                        <Label for='bot-check' check>I'm not a robot.</Label>
                    </FormGroup>

                    <Button color='primary' className='btn btn--lg' style={{ display: 'block', margin: '35px auto 0 auto'}}>Submit</Button>
                </Form>
            </div>
        );
    }
}

  export default ContactForm;