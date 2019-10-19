import { Tabs } from 'react-bootstrap';
import styled from 'styled-components';

export const FormTabs = styled(Tabs)`
  display: flex;
  justify-content: center;
  border: none;
  margin-bottom: 2rem;
  border-radius: 25px;

  &.nav-tabs .nav-link:hover {
    color: #ffffff;
    border: none;
  }

  &.nav-tabs .nav-link.active {
    color: #ffffff;
    background-color: #0062cc;
    border: none;
    box-shadow: none;
  }

  a {
    color: #bebebe;
    text-align: center;
    width: 90px;
    margin: 0 5px !important;
    border: none !important;
    border-radius: 25px !important;
    padding: 9px 1.2rem 7px;
    box-shadow: 0 0 0 1px #ffffff40;

    &:hover {
      background: #29272B;
    }
  }
`;

export const FormField = styled.div`
  margin-bottom: 2rem;

  label {
    color: white;
    margin-left: 1.2rem;
  }

  p {
    color: #f06d6b;
    margin: 0.1rem 0 -10px 1.2rem;
    font-size: 12px;
  }
`;

export const Input = styled.input`
  width: 100%;
  color: #ffffff;
  background: #212023;
  border-radius: 25px;
  border: 0;
  padding: 8px 1.2rem;
  box-shadow: ${props => props.error ? '0 0 0 1px #D63230' : 'none'};

  ::placeholder {
    color: #acacac;
  }

  &:focus {
    color: #ffffff;
    box-shadow: 0 0 0 1px #2684ff;
    outline: none;
  }
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

  ::placeholder {color: #acacac}

  ::-webkit-scrollbar-track,
  ::-webkit-scrollbar-thumb {border-radius: 25px}

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px #2684ff;
  }
`;

export const FileInput = styled.div`
  label {
    width: 100%;
    color: #bebebe;
    background: #212023;
    margin: 0 0 7px;
    border: none;
    border-radius: 25px;
    padding: 9px 1.2rem 7px;
    cursor: pointer;

    &:hover {
      color: #ffffff;
      background: #0062cc;
    }
  }

  p {
    color: #bebebe;
    margin: auto 1.2rem 7px !important;
  }

  input {
    display: none;
  }
`;

export const ErrorMessage = styled.p`
  color: #ffffff;
  background: #d64542;
  width: max-content;
  margin: 0px auto 2rem;
  border-radius: 25px;
  padding: 8px 1rem;
`;

export const Submit = styled.button`
  color: #ffffff;
  background: transparent;
  display: flex;
  justify-content: center;
  margin: 0px auto;
  padding: 9px 3rem 7px;
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
