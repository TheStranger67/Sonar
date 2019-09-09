import styled from 'styled-components';

export const SearchBar = styled.input`
  color: #cfcfcf;
  background: #323035;
  width: 100% !important;
  margin: 0 0 1.5rem !important;
  padding: 8px 1.2rem;
  border: none;
  border-radius: 25px;

  ::placeholder { 
    color: #bebebe;
  }

  &:focus {
    color: white;
    box-shadow: 0 0 0 1px #2684ff;
    outline: none;
  }
`;

export const List = styled.div`
  background: transparent;
  padding: 0.8rem;
  margin: 1rem auto 3rem;
  max-width: 768px;
  height: auto;
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
