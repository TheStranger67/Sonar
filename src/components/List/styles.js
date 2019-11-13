import styled from 'styled-components';

export const SearchBar = styled.div`
  background: #212023;
  position: sticky;
  top: 56px;
  padding: 15px 0px;
  z-index: 5;

  input {
    color: #cfcfcf;
    background: #323035;
    width: 100% !important;
    margin: 0 !important;
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
  }
`;

export const Container = styled.div`
  background: transparent;
  margin-bottom: 3rem;
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
