import React, {Component} from 'react';
import axios from 'axios'
import { Col, Form, FormGroup, Input, Label, Button } from 'reactstrap'

class ContactForm extends Component{
    constructor() {
        super()
    
        this.state = {
            name: '',
            email: '',
            message: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    async handleSubmit(e) {
        e.preventDefault()

        const { name, email, message } = this.state

        const form = await axios.post('/api/form', {
            name,
            email,
            message
        })
    }

    render(){
        return(
            <div className="container" style={{marginBottom: '180px'}}>
                <Col md={{ size: 6, offset: 3 }}>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for='name'>Name</Label>
                            <Input
                                type='text'
                                name='name'
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for='email'>Email</Label>
                            <Input
                                type='email'
                                name='email'
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for='message'>Message</Label>
                            <Input
                                type='textarea'
                                name='message'
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <Button color="primary" className='btn btn--lg' style={{ display: 'block', margin: '45px auto 0 auto'}}>Submit</Button>
                    </Form>
                </Col>
            </div>
        )
    }
}

export default ContactForm; 