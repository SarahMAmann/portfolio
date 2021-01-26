import React from 'react';
import { Button, Input } from 'components/common';
import { Center, InputField } from './styles';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={this.handleSubmit} >
        <InputField>
        <p class="hidden">
          <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
        </p>
        <Input type="text" placeholder="Full name*" name="name" value={name} onChange={this.handleChange} />   
        </InputField>
        <InputField>
          <Input type="email" placeholder="Email*" name="email" value={email} onChange={this.handleChange} />
        </InputField>
        <InputField>
          <textarea name="message" placeholder="Message*" value={message} onChange={this.handleChange} ></textarea>
        </InputField>
        <Center>
          <Button type="submit">Submit</Button>
        </Center>
      </form>
    );
  }
}

export default ContactForm;