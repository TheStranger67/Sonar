import styled from'styled-components';

export const FormField = styled.div`
  margin-bottom: 2rem;

  label {
    color: white;
    margin-left: 1.2rem;
  }

  p {
    color: #f06d6b;
    margin: 0.4em 0 -10px 1.2rem;
    font-size: 12px;
  }
`;

export const Input = styled.input`
  width: 100%;
  color: white !important;
  background: #212023;
  border-radius: 25px;
  border: 0;
  padding: 8px 1.2rem;
  box-shadow: ${props => props.error ? '0 0 0 1px #D63230' : 'none'};

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #acacac;
  }
  :-ms-input-placeholder {
     color: #acacac;
  }

  &:focus {
    color: white !important;
    -webkit-box-shadow: 0 0 0 1px #2684ff;
    -moz-box-shadow: 0 0 0 1px #2684ff;
    box-shadow: 0 0 0 1px #2684ff;
    outline: none;
  }
`;

export const ErrorMessage = styled.p`
  color: #ffffff;
  background: #d64542;
  width: max-content;
  margin: 0px auto 2rem;
  border-radius: 25px;
  padding: 8px 1rem;
`;

export const Submit = styled.button`
  color: #ffffff;
  background: transparent;
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 9px 4rem 7px;
  border: none;
  box-shadow: 0 0 0 1px #ffffff60;
  border-radius: 25px;
  font-weight: 500;

  &:hover {
    color: #ffffff;
    background: #0062cc;
    text-decoration: none;
    box-shadow: none;
  }

  div {
    width: 20px;
    height: 25px;
    margin: -2px 0.9rem;
  }
`;
