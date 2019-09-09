import styled from 'styled-components';

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
  margin-bottom: 1rem;

  h4 {
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    margin: 0;
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
`;
