import styled from 'styled-components';

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

  div {display: flex}

  h4 {
    color: #ffffff;
    flex-shrink: 0;
    font-size: 14px;
    margin: 2px 0 0;
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
  display: flex;
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

export const Comment = styled.div`
  word-break: break-word;
  margin-top: 1.5rem;

  p {margin: 0}
`;
