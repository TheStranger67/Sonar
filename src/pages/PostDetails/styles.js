import styled from 'styled-components';

export const Container = styled.div`
  background: transparent;
  width: 640px;
  margin: 15px auto 3rem;
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
