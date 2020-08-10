import React from 'react';
import { parseISO, formatRelative } from 'date-fns';
import en from 'date-fns/locale/en-GB';

import api from '~/services/api';

import AppointmentList from '~/components/AppointmentList';

import { Container } from './styles';

const Customer = () => {
  const [appointments, setAppointments] = React.useState([]);

  const formatAppointments = React.useCallback(
    apps =>
      apps.map(app => ({
        ...app,
        dateFormatted: formatRelative(parseISO(app.date), new Date(), {
          locale: en,
          addSuffix: true,
        }),
        isCancelled: false,
      })),
    []
  );

  React.useEffect(() => {
    async function loadAppointments() {
      const response = await api.get('appointments');
      const appointmentsWithDate = formatAppointments(response.data);

      setAppointments(appointmentsWithDate);
    }

    loadAppointments();
  }, [formatAppointments]);

  return (
    <Container>
      <h2>Appointments</h2>

      {appointments.length === 0 ? (
        <h2>You do not have any appointments</h2>
      ) : (
        <AppointmentList appointments={appointments} />
      )}
    </Container>
  );
};

export default Customer;
