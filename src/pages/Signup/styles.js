import styled from 'styled-components';
import { Tabs } from 'react-bootstrap';

export const Container = styled.div`
  background: linear-gradient(to right, #d81e5b 0%, #0062cc 100%);
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 57px);
  margin: 0 !important;
  padding: 2rem;
`;

export const FormContainer = styled.div`
  height: 100%;
  width: 576px;
  max-width: 576px;
  background-color: #212023ac;
  padding: 1.5rem;
  border-radius: 8px;

  h2 {
    color: #ffffff;
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
  }
`;

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
    width: 100px;
    margin: 0 5px !important;
    border: none !important;
    border-radius: 25px !important;
    padding: 9px 1.2rem 7px;
    box-shadow: 0 0 0 1px #ffffff40;

    &:hover {
      background: #232323;
    }

    &:first-child {
      border-radius: 25px 0px 0px 25px;
    }

    &:last-child {
      border-radius: 0px 25px 25px 0px;
    }
  }
`;
