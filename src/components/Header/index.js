import React from 'react';
import { Link } from 'react-router-dom';

import logoColorful from '~/assets/logo-colorful.svg';
import { Container, Content, Profile } from './styles';

const Header = () => {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logoColorful} alt="Gobarber logo"></img>
          <Link to="/dashboard">dashboard</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Diego Azevedo</strong>
              <Link to="/profile">My profile</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Diego Azevedo"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
};

export default Header;
