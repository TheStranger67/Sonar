import { Jumbotron, Tabs } from 'react-bootstrap';
import styled from 'styled-components';


export const Banner = styled(Jumbotron)`
  color: #ffffff;
  background: linear-gradient(to right, #d81e5b 0%, #0062cc 100%);
  margin-bottom: 1.9rem;
  padding: 2.7rem;
  text-align: center;
  border-radius: 0;

  a {
    background-color: transparent;
    color: #ffffff;
    border: none;
    box-shadow: 0 0 0 1px #ffffff60;
    border-radius: 25px;
    padding: 12px 2em 11px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      color: #ffffff;
      background: #0062cc;
      text-decoration: none;
      box-shadow: none;
    }
  }
`;

export const FilterTabs = styled(Tabs)`
  max-width: 650px;
  margin: auto;
  border: none;
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
    background: #323035;
    text-align: center;
    margin: 0 7px !important;
    border: none !important;
    border-radius: 25px !important;
    padding: 9px 1em 7px;
    box-shadow: 0 0 0 1px #ffffff40;

    &:hover {
      background: #29272B;
    }
  }
`;
