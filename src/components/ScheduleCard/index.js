import React from 'react';

import { Time } from './styles.js';

const ScheduleCard = ({ time }) => {
  return (
    <Time key={time.time} past={time.past} available={!time.appointment}>
      <strong>{time.time}</strong>
      <span>{time.appointment ? time.appointment.user.name : 'Available'}</span>
    </Time>
  );
};

export default ScheduleCard;
