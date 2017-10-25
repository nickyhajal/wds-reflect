import React from 'react';
import styled from 'styled-components';
import formSerialize from 'form-serialize';
import axios from 'axios';
import C from '../constants';

const Label = styled.label`
  font-weight: bold;
  display: block;
`;
const Input = styled.input`
  border: 1px solid ${C.color.rain};
  border-radius: 3px;
  padding: 12px 10px;
  font-size: 18px;
  font-family: lato;
`;
const Textarea = styled.textarea`
  border: 1px solid ${C.color.rain};
  border-radius: 3px;
  padding: 12px 10px;
  font-size: 18px;
  width: 600px;
  height: 110px;
  font-family: lato;
`;
const Success = styled.div`
  padding: 40px;
  background: ${C.color.leaf};
  font-size: 20px;
  color: #fff;
`;
const Button = styled.button`
  background: ${C.color.leaf};
  color: #fff;
  padding: 10px 15px;
  font-family: lato;
  font-size: 18px;
  font-style: italic;
  border: 0;
  border-radius: 4px;
  width: 200px;
  cursor: pointer;
`;
const Row = styled.div`margin-bottom: 16px;`;

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
      status: 'ready',
    };
  }
  change = e => {
    e.preventDefault();
    e.stopPropagation();
    const el = e.currentTarget;
    this.setState({
      [el.name]: el.value,
    });
  };
  submit = e => {
    e.stopPropagation();
    e.preventDefault();
    const body = JSON.stringify(formSerialize(e.currentTarget, { hash: true }));
    this.setState({ status: 'sending' });
    axios.post(`${C.apiUrl}/contact`, {
      body,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(req => {
      req.json().then(rsp => {
        this.setState({ status: 'sent' });
      });
    });
  };
  render() {
    let btn = 'Send Message';
    const sending = this.state.status === 'sending';
    const sent = this.state.status === 'sent';
    switch (this.state.status) {
      case 'sending':
        btn = 'Sending...';
        break;
      case 'sent':
        btn = 'Sent!';
    }
    if (sent)
      return (
        <Success>Your message was sent! We'll get back to you soon.</Success>
      );
    else
      return (
        <form onSubmit={this.submit} style={{ marginTop: '60px' }}>
          <Row>
            <Label>Your Full Name</Label>
            <Input
              type="text"
              name="name"
              onChange={this.change}
              placeholder="Your Full Name"
              value={this.state.name}
              style={{ width: '300px' }}
              disabled={sending}
            />
          </Row>
          <Row>
            <Label>Your E-Mail Address</Label>
            <Input
              type="text"
              name="email"
              onChange={this.change}
              placeholder="Your E-mail Address"
              value={this.state.fullname}
              style={{ width: '300px' }}
              disabled={sending}
            />
          </Row>
          <Row>
            <Label>Your Message</Label>
            <Textarea
              type="text"
              onChange={this.change}
              placeholder="Your Message"
              name="message"
              value={this.state.message}
              style={{ width: '500px' }}
              disabled={sending}
            />
          </Row>
          <Button>{btn}</Button>
        </form>
      );
  }
}

export default ContactForm;
