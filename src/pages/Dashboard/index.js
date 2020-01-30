import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';

import { Container, Time } from './styles';

const Dashboard = () => {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft size={36} color="#fff"></MdChevronLeft>
        </button>
        <strong>31 of May</strong>
        <button type="button">
          <MdChevronRight size={36} color="#fff"></MdChevronRight>
        </button>
      </header>

      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Diego Azevedo</span>
        </Time>
        <Time available>
          <strong>08:00</strong>
          <span>Slot available</span>
        </Time>
        <Time>
          <strong>08:00</strong>
          <span>Diego Azevedo</span>
        </Time>
        <Time>
          <strong>08:00</strong>
          <span>Diego Azevedo</span>
        </Time>
      </ul>
    </Container>
  );
};

export default Dashboard;
