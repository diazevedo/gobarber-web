import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';
// import { Container } from './styles';

const SignIn = () => {
  return (
    <>
      <img src={logo} alt="Gobarber" />

      <form>
        <input type="email" placeholder="Your e-mail" />
        <input type="password" placeholder="Your password" />

        <button type="submit">Access</button>
        <Link to="register">Create your account</Link>
      </form>
    </>
  );
};

export default SignIn;
