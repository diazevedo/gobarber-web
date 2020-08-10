import React from 'react';

import { List } from './styles';

import AppointmentCard from '~/components/AppointmentCard';

const AppointmentList = ({ appointments }) => {
  return (
    <List>
      {appointments.map(app => (
        <AppointmentCard
          key={app.id}
          appointment={app}
          user={app.provider}
          dateInfo={app.dateFormatted}
        />
      ))}
    </List>
  );
};

export default AppointmentList;
