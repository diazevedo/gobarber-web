import React from 'react';
import { toast } from 'react-toastify';
import { MdCancel, MdRemoveCircle } from 'react-icons/md';

import api from '~/services/api';

import {
  Card,
  CardDetails,
  Info,
  ButtonsWrapper,
  DeleteInput,
  CancelButton,
  Label,
} from './styles';

const AppointmentCard = ({ appointment, user, dateInfo }) => {
  const [showButtonDelete, setShowButtonDelete] = React.useState(false);
  const [cancelled, setCancelled] = React.useState(appointment.cancelled);

  const { id, cancelable, past } = appointment;

  const handleCancelAppointment = async id => {
    try {
      await api.delete(`appointments/${id}`);
      setCancelled(true);
      toast.success('Appointment has been cancelled.');
    } catch ({ response }) {
      toast.error(response.data.error);
    }
  };

  return (
    <Card isCancelled={cancelled} isPast={past}>
      <img
        src={
          (user.avatar && user.avatar.url) ||
          'https://api.adorable.io/avatars/50/abott@adorable.png'
        }
        alt="barber avatar"
      />

      <CardDetails>
        <Info>
          <strong>{user.name}</strong>
          <span>{dateInfo}</span>
        </Info>
        <ButtonsWrapper disabled={false}>
          <Label cancellable={cancelable} cancelled={cancelled}>
            <DeleteInput
              onChange={() => setShowButtonDelete(prevState => !prevState)}
              disabled={cancelable === false ? 'disabled' : ''}
            />
            <MdCancel color="#f64c75" size={26} />
          </Label>

          {showButtonDelete ? (
            <CancelButton
              type="button"
              onClick={() => handleCancelAppointment(id)}
            >
              <MdRemoveCircle color="#f64c75" size={26} />
            </CancelButton>
          ) : null}
        </ButtonsWrapper>
      </CardDetails>
    </Card>
  );
};

export default AppointmentCard;
