import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(to right, #d81e5b 0%, #0062cc 100%);
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 57px);
  margin: 0 !important;
  padding: 2rem;
`;

export const FormContainer = styled.div`
  height: 100%;
  width: 360px;
  max-width: 360px;
  background-color: #212023ac;
  padding: 1.5rem;
  border-radius: 8px;

  h2 {
    color: #ffffff;
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
  }

  a {
    color: #ffffff;
    display: flex;
    justify-content: center;
    height: 37px;
    margin: 10% 25% 0px;
    padding: 9px 1rem 7px;
    border-radius: 25px;  
    font-weight: 500;

    &:hover {
      color: white;
      box-shadow: 0 0 0 1px #ffffff60;
      text-decoration: none;
    }
  }
`;
