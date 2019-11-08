import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

export const ModalContainer = styled(Modal)`
  & > div > div {
    background: #323035;
    padding: 10px;

    h3 {
      color: #ffffff;
      font-size: 16px;
      font-weight: bold;
    }
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  margin: 0;

  h3 {
    color: #ffffff;
    font-size: 20px;
    font-weight: 500;
    margin: 0 0 6px 9px;
  }
`;

export const RatingError = styled.p`
  color: #f06d6b;
  margin: 0 10px;
  font-size: 12px;
`;

export const TextField = styled.textarea`
  color: #ffffff;
  background: #212023;
  width: 100%;
  border-radius: 5px;
  padding: 0.7rem 1rem;
  resize: none;
  border: none;
  box-shadow: ${props => props.error ? '0 0 0 1px #D63230' : 'none'};

  ::placeholder {
    color: #acacac;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px #2684ff;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

export const ErrorMessage = styled.p`
  color: #ffffff;
  background: #d64542;
  width: max-content;
  margin: 12px 0px 18px;
  border-radius: 25px;
  padding: 8px 1rem;
`;

export const Submit = styled.button`
  color: #ffffff;
  background: transparent;
  display: flex;
  justify-content: center;
  padding: 9px 1.5rem 7px;
  border: none;
  box-shadow: 0 0 0 1px #ffffff60;
  border-radius: 25px;
  font-weight: 500;

  &:hover {
    color: #ffffff;
    background: #0062cc;
    text-decoration: none;
    box-shadow: none;
  }

  div {
    width: 20px;
    height: 25px;
    margin: -2px 0.9rem;
  }
`;

export const Cancel = styled(Submit)`
  background: transparent;
  box-shadow: none;
  padding: 9px 1rem 7px;

  &:hover {
    background: transparent;
    box-shadow: 0 0 0 1px #ffffff60
  }
`