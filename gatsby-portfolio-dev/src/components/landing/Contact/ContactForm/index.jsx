import React from 'react';
import axios from 'axios';
import { Formik, Form, FastField, ErrorMessage } from 'formik';
import Recaptcha from 'react-google-recaptcha';
import * as Yup from 'yup';
import { Button, Input } from 'components/common';
import { Error, Center, InputField } from './styles';

export default () => (
  <form name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true">
    <InputField>
    <Input type="text" placeholder="Full name*" name="name" />   
    </InputField>
    <InputField>
      <Input type="email" placeholder="Email*" name="email" />
    </InputField>
    <InputField>
      <textarea name="message" placeholder="Message*"></textarea>
    </InputField>
    <Center data-netlify-recaptcha="true"></Center>
    <Center>
      <Button type="submit">Submit</Button>
    </Center>
  </form>
);
