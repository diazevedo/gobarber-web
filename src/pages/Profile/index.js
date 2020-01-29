import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

import { updateProfileRequest } from '~/store/modules/user/actions';

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const handleSubmit = data => dispatch(updateProfileRequest(data));

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Full name" />
        <Input type="email" name="email" placeholder="Your e-mail address" />

        <hr />
        <Input
          type="password"
          name="oldPassword"
          placeholder="Your current password"
        />
        <Input type="password" name="password" placeholder="New password" />
        <Input
          type="password"
          name="passwordConfirmation"
          placeholder="Confirm your password"
        />
        <button type="submit">Update profile</button>
      </Form>
      <button type="button">Sign out</button>
    </Container>
  );
};

export default Profile;
