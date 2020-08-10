import styled from 'styled-components';

export const Card = styled.li`
  padding: 20px;
  height: 90px;
  opacity: ${props => (props.isCancelled || props.isPast ? 0.6 : 1)};

  border-radius: 4px;
  background: #fff;

  position: relative;
  display: flex;

  align-items: center;

  img {
    border-radius: 50%;
    width: 30%;
    max-height: 60px;
    max-width: 60px;
    margin-right: 15px;
  }
`;
export const CardDetails = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;

  span,
  strong {
    margin-bottom: 5px;
  }

  strong {
    display: block;
    font-size: 18px;
    font-weight: normal;
  }

  span {
    color: #999;
  }
`;

export const DeleteInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

export const Info = styled.div``;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  cursor: ${props =>
    !props.cancellable || props.cancelled ? 'not-allowed' : 'pointer'};
`;

export const CancelButton = styled.button.attrs({ type: 'button' })`
  border: none;
  background: none;
`;
