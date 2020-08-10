import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logoColorful from '~/assets/logo-colorful.svg';
import { Container, Content, Profile } from './styles';

const Header = () => {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logoColorful} alt="Gobarber logo" />
          {profile.provider ? (
            <Link to="/dashboard">dashboard</Link>
          ) : (
            <Link to="/dashboard/customer">dashboard</Link>
          )}
        </nav>

        <aside>
          {profile.provider ? <Notifications /> : null}

          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">My profile</Link>
            </div>
            <img
              src={
                (profile.avatar && profile.avatar.url) ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt={profile.name}
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
};

export default Header;
