import styled from 'styled-components';

export const Time = styled.li`
  padding: 20px;
  height: 90px;
  border-radius: 4px;
  background: #fff;
  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    display: block;
    color: ${props => (props.available ? '#999' : '#141e30')};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${props => (props.available ? '#999' : 'rgba(36,59,85, 0.6)')};
  }
`;
