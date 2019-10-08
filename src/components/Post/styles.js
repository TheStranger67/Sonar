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
  margin-bottom: 15px;
  padding: 8px;

  &:last-child {margin-bottom: 0}
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  div {display: flex}

  h4 {
    color: #ffffff;
    flex-shrink: 0;
    font-size: 14px;
    margin: 2px 0;
  }

  p {
    color: #bebebe;
    margin: 0px 0px 0px 1rem;
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const AverageRating = styled.div`
  margin-right: 0.2rem;

  p:first-child {margin-right: 0.8rem}

  p:last-child {
    color: #ffffff;
    margin-left: 10px;
  }

  @media (max-width: 767px) {
    margin-top: 3px;

    p:first-child {margin-left: 0}
  }
`;

export const PostOptions = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 0.3rem;

  &:hover div {display: block}

  button {
    background: transparent;
    color: #ffffff;
    padding-right: 3px;
    border: none;
  }

  div {
    background: #212529;
    display: none;
    position: absolute;
    top: 27px;
    right: 2px;
    min-width: 120px;
    box-shadow: 0px 4px 3px 0px rgba(0,0,0,0.2);
    border-radius: 5px;
    z-index: 1;

    &:before {
      content: '';
      background: #212529;
      position: absolute;
      top: -4px;
      left: 106px;
      width: 10px;
      height: 10px;
      z-index: -1;
      transform: rotate(45deg);
    }

    &:after {
      content: '';
      background: transparent;
      position: absolute;
      top: -12px;
      left: 10px;
      width: 100px;
      height: 80px;
      z-index: -5;
    }
  }

  @media (max-width: 767px) {
    margin: -19px 0px 0px auto;
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

  &:first-child {border-radius: 5px 5px 0 0}
  &:last-child {border-radius: 0 0 5px 5px}

  i {margin-right: 1rem}
`;

export const DangerLink = styled(DefaultLink)`
  &:hover {background: #d64542}
`;

export const Description = styled.div`
  word-break: break-word;
  margin-bottom: 1.5rem;

  p {margin: 0}
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
  justify-content: space-between;
  text-align: left;
  border: 1px solid #ffffff05;
  padding: 7px 8px 5px;
  border-radius: 5px;

  div {
    display: flex;
    flex-direction: column;
    
    div {
      flex-direction: row;

      i { 
        height: auto;
        margin: 2px 10px 0 0;
      }

      p {margin: 0}

      &:first-child {margin-bottom: 2px}
    }
  }

  @media (max-width: 767px) {
    &:last-child {margin-top: 1rem}
  }
`;

export const DownloadButton = styled.button`
  color: #ffffff;
  background: #0062cc;
  align-self: center;
  width: 37px;
  height: 37px;
  padding: auto;
  border: none;
  border-radius: 50%;

  &:hover {
    background: #0050a5;
    box-shadow: none;
  }

  div {
    width: 19px;
    height: 25px;
    margin-left: 3px;
  }
`;

export const Footer = styled.div`
  display: flex;

  button {
    background: transparent;
    color: #ffffff;
    display: flex;
    align-items: center;
    border: none;
    margin-top: 12px;
    padding: 0px;

    i {
      margin: 0 8px 2px 0;
      transition: .2s;
    }

    &:hover i {font-size: 18px}
  }
`;
