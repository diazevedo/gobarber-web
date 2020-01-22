import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Your name is necessary'),
  email: Yup.string()
    .email('Insert a valid email')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const SignUp = () => {
  const dispatch = useDispatch();

  const handleSubmitForm = ({ name, email, password }) => {
    dispatch(signUpRequest(name, email, password));
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
