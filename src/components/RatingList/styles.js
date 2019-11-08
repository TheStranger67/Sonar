import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem 0 3rem;
  width: 640px;
  height: auto;

  h3 {
    color: #ffffff;
    font-weight: 400;
    margin: 0 0 10px 10px;
  }
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  height: 65px;
  margin-top: 30px;
`;

export const EmptyItem = styled.div`
  color: #bebebe;
  background: #323035;
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  border-radius: 5px;
  width: 100%;

  div {
    width: 60px;
    height: 65px;
  }

  p {
    margin: 0;
  }
`;