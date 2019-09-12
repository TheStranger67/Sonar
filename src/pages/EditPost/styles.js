import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(to right, #d81e5b 0%, #0062cc 100%);
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 57px);
  margin: 0 !important;
  padding: 2rem;

  h2 {
    font-size: 20px;
  }
`;

export const FormContainer = styled.div`
  height: 100%;
  width: 520px;
  max-width: 520px;
  background: #212023ac;
  padding: 1.5rem;
  border-radius: 8px;

  h2 {
    color: #ffffff;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
`;

export const EmptyContainer = styled(FormContainer)`
  display: flex;
  justify-content: center;
  padding: 2.5rem 1.5rem;

  div {
    width: 60px;
    height: 65px;
  }
`;
