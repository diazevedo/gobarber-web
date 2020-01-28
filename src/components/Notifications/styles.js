import styled, { css } from 'styled-components';
import PerfectScrollar from 'react-perfect-scrollbar';
import { lighten } from 'polished';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        background: #f64c75;
        border-radius: 50%;
      }
    `}
`;

export const NotificationList = styled.div`
  position: absolute;
  width: 260px;
  left: calc(50% - 130px);
  top: calc(100% + 30px);
  /* background: rgba(246, 76, 117, 0.6); */
  /* background: rgba(36, 59, 85, 0.7); */
  background: rgba(70, 91, 115, 0.7);
  border-radius: 4px;
  padding: 15px 5px;
  display: ${props => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(70, 91, 115, 0.7);
  }
`;

export const Scroll = styled(PerfectScrollar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  color: #fff;

  & + div {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid rgba(70, 91, 115, 0.8);
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    display: block;
    margin-bottom: 5px;
    font-size: 12px;
    opacity: 0.6;
  }

  button {
    font-size: 12px;
    border: 0;
    padding: 7px 7px;
    background: ${lighten(0.9, '#465b73')};
    color: ${lighten(0.2, '#465b73')};
    border-radius: 4px;
  }

  ${props =>
    props.unread &&
    css`
      &::after {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background: #f64c75;
        border-radius: 50%;
        margin-left: 10px;
      }
    `}
`;
