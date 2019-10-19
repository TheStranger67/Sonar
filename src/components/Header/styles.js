import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const HeaderBar = styled(Navbar)`   
  background: #151416;
  border-bottom: 1px solid #262428;
  height: 57px;

  img {
    width: 32px;
    height: 32px;
    margin-right: 12px;
    transition: all 0.2s;
  }

  .brand, h1 {
    font-size: 18px;
    font-weight: bold;
    color: #ced3dc !important;
    margin: 0 0 2px;
    cursor: pointer;

    &:hover {
      text-decoration: none;
      box-shadow: none;
    }

    &:hover img {
      width: 36px;
      height: 36px;
    }
  }

  
`;

export const MenuItem = styled(Link)`
  background-color: transparent;
  color: #ffffffe5;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 25px;
  padding: 9px 1.2rem 7px;
  font-weight: 500;

  &:hover {
    color: #ffffff;
    box-shadow: 0 0 0 1px #ffffff60;
    text-decoration: none;
  }
`;

export const LoginButton = styled(MenuItem)`
  box-shadow: 0 0 0 1px #ffffff60;
  margin-right: 4px;

  &:hover {
    color: #ffffff;
    background: #0062cc;
    text-decoration: none;
    box-shadow: none;
  }
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  color: #ffffffe5;
  border: none;
  border-radius: 25px;
  padding: 9px 1.2rem 7px;
  font-weight: 500;

  &:hover {
    color: #ffffff;
    box-shadow: 0 0 0 1px #ffffff60;
    text-decoration: none;
  }
`;
