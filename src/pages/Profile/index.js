import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';
import { Container } from './styles';

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const handleSubmit = data => dispatch(updateProfileRequest(data));
  const handleSignOut = event => dispatch(signOut());

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
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
      <button type="button" onClick={handleSignOut}>
        Sign out
      </button>
    </Container>
  );
};

export default Profile;
