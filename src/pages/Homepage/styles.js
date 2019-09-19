import { Jumbotron } from 'react-bootstrap';
import styled from 'styled-components';


export const Banner = styled(Jumbotron)`
  color: #ffffff;
  background: linear-gradient(to right, #d81e5b 0%, #0062cc 100%);
  margin-bottom: 0;
  padding: 2rem 2.7rem 2.7rem;
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

export const Feed = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
`;
