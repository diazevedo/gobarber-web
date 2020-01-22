import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insert a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password has to be longer than 6 characters')
    .required('Password is required'),
});

const SignIn = () => {
  const dispatch = useDispatch();
  const handleSubmitForm = ({ email, password }) => {
    dispatch(signInRequest(email, password));
  };

  return (
    <>
      <img src={logo} alt="Gobarber" />

      <Form onSubmit={handleSubmitForm} schema={schema}>
        <Input
          name="email"
          type="email"
          placeholder="Your e-mail"
          formNoValidate
        />
        <Input name="password" type="password" placeholder="Your password" />

        <button type="submit">Access</button>
        <Link to="register">Create your account</Link>
      </Form>
    </>
  );
};

export default SignIn;
