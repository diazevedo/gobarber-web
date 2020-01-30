import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  /* margin: 0 auto; */
  margin: 25px auto;
  /* padding: 10px auto; */

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

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.7);
      margin: 10px 0 20px;
    }

    > button {
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
  }

  > button {
    margin: 10px 0 0;
    width: 100%;
    height: 44px;
    background:  ${darken(0.02, '#f64c75')};
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.25s;

    &:hover {
      background: ${darken(0.08, '#f64c75')};
    }

    &:active {
      background: ${darken(0.09, '#f64c75')};
      transform: translateY(2px);
    }
  }
}`;
