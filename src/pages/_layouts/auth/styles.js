import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(180deg, #141e30, #243b55);
  /* background: linear-gradient(-90deg, #7159c1, #ab59c1); */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }

      &:focus {
        background: ${darken(0.03, '#141e30')};
        border: #243b55 0.7px solid;
      }
    }

    span {
      color: #f64c75;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #0d5690;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.25s;

      &:hover {
        background: ${darken(0.03, '#0d5690')};
      }

      &:active {
        background: ${darken(0.08, '#0d5690')};
        transform: translateY(2px);
      }
    }

    a {
      margin-top: 15px;
      height: 44px;
      font-size: 16px;
      opacity: 0.8;
      color: #fff;
      transition-duration: 0.5s;

      &:hover {
        opacity: 1;
        transform: scale(1.05);
      }
    }
  }
`;
