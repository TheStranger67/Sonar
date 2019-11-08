import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderBar = styled.div`   
  background: #151416;
  border-bottom: 1px solid #262428;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 57px;
  position: fixed;
  top: 0;
  padding: 10px;

  img {
    width: 32px;
    height: 32px;
    margin-right: 12px;
    transition: all 0.2s;
  }
`;

export const Menu = styled.div`
  display: flex;

  p {
    color: #acacac;
    margin: 2px 16px 0px;
    align-self: center;
  }
`;

export const MenuItem = styled(Link)`
  color: #ffffffe5;
  display: flex;
  align-items: center;
  border-radius: 25px;
  padding: 9px 1.2rem 7px;
  font-weight: 500;

  &:hover {
    color: #ffffff;
    box-shadow: 0 0 0 1px #ffffff60;
    text-decoration: none;
  }
`;

export const Brand = styled(MenuItem)`
  padding: 8px 1.2rem 8px;

  h1 {
    font-size: 18px;
    font-weight: bold;
    color: #ced3dc !important;
    margin: 0 0 2px;
  }

  &:hover {
    text-decoration: none;
    box-shadow: none;
  }

  &:hover img {
    width: 36px;
    height: 36px;
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
