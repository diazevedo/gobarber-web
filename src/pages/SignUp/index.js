import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';
// import { Container } from './styles';

const SignUp = () => {
  return (
    <>
      <img src={logo} alt="Gobarber" srcset="" />

      <form>
        <input type="text" placeholder="Your full name" />
        <input type="email" placeholder="Your email" />
        <input type="password" placeholder="Your password" />

        <button type="submit">Create account</button>
        <Link to="/">Already has an account?</Link>
      </form>
    </>
  );
};

export default SignUp;
