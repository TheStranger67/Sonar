import styled from 'styled-components';

export const Container = styled.div`
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
  width: 38px;
  height: 37px;
  padding: auto;
  border: none;
  border-radius: 50%;

  &:hover {background: #0050a5}

  div {
    width: 19px;
    height: 25px;
    margin-left: 3px;
  }
`;
