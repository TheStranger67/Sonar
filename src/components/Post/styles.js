import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: #323035;
  display: flex;
  flex-direction: column;
  border: 1px solid #4340471a;
  border-radius: 5px;
  color: #cecece;
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
  }

  h4 {
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    margin: 0;
  }

  p {
    color: #bebebe;
    margin-left: 1rem;
  }
`;

export const PostOptions = styled.div`
  position: relative;
  display: inline-block;

  &:hover div {
    display: block;
  }

  button {
    background: transparent;
    color: #ffffff;
    height: 20px;
    border: none;
  }

  div {
    background: #212529;
    display: none;
    position: absolute;
    top: 28px;
    right: 2px;
    min-width: 120px;
    box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.2);
    border-radius: 5px;
    z-index: 1;

    &:before {
      content: '';
      background: #212529;
      position: absolute;
      top: -6px;
      left: 101px;
      width: 14px;
      height: 14px;
      z-index: -1;
      transform: rotate(45deg);
    }
  }
`;

export const DefaultLink = styled(Link)`
  color: #ffffff;
  padding: 10px 16px 8px;
  display: block;

  &:hover {
    color: #ffffff;
    background: #0062cc;
    text-decoration: none;
  }

  &:first-child {
    border-radius: 5px 5px 0 0;
  }

  &:last-child {
    border-radius: 0 0 5px 5px;
  }

  i {
    margin-right: 1rem;
  }
`;

export const DangerLink = styled(DefaultLink)`
  &:hover {
    background: #d64542;
  }
`;

export const Description = styled.div`
  word-break: break-word;
  margin-bottom: 2rem;

  p { margin: 0; }
`;

export const Content = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  text-transform: capitalize;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;

export const PostItem = styled.div`
  background: #434047aa;
  display: flex;
  flex-direction: column;
  text-align: left;
  border: 1px solid #ffffff05;
  padding: 10px;
  border-radius: 5px;

  & > p {
    font-size: 16px;
    font-weight: 500;
  }

  div {
    display: flex;

    strong { margin-right: 10px; }
    p { margin: 0; }
  }

  @media (max-width: 767px) {
    &:last-child {
      margin-top: 1rem;
    }
  }
`;

export const DownloadButton = styled.button`
  color: #ffffff;
  background: #0062cc;
  width: max-content;
  margin-top: 1.5rem;
  padding: 9px 1.5rem 7px;
  border: none;
  border-radius: 25px;
  font-weight: 500;

  &:hover {
    background: #0050a5;
    text-decoration: none;
    box-shadow: none;
  }

  div {
    width: 20px;
    height: 25px;
    margin: -2px 0.9rem;
  }
`;
