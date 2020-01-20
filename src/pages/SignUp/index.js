import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Your name is necessary'),
  email: Yup.string()
    .email('Insert a valid email')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});
const SignUp = () => {
  const handleSubmitForm = (data, resetForm) => {
    resetForm.resetForm();
  };

  return (
    <>
      <img src={logo} alt="Gobarber" srcset="" />

      <Form onSubmit={handleSubmitForm} schema={schema}>
        <Input name="name" type="text" placeholder="Your full name" />
        <Input name="email" type="email" placeholder="Your email" />
        <Input name="password" type="password" placeholder="Your password" />

        <button type="submit">Create account</button>
        <Link to="/">Already has an account?</Link>
      </Form>
    </>
  );
};

export default SignUp;
