import styled from 'styled-components';

export const Container = styled.div`
  background: #323035;
  color: #ffffff;
  position: sticky;
  top: 123px;
  width: 230px;
  height: max-content;
  padding: 15px;
  margin: 67px 15px;
  border-radius: 5px;

  h3 {
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 1.2rem;
  }
`;

export const FilterGroup = styled.div`
  margin-bottom: 1rem;

  h4 {
    font-size: 14px;
    margin-bottom: 1rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Filter = styled.label`
  display: flex;
  padding-left: 5px;
  margin: 0px 10px 8px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;

  input[type='checkbox'],
  input[type='radio'] {
    position: relative;
    width: 32px;
    height: 16px;
    top: 2px;
    right: 8px;
    -webkit-appearance: none;
    background: #212023;
    outline: none;
    border-radius: 10px;
    transition: .5s;
    cursor: pointer;
  }

  input:checked[type='checkbox'],
  input:checked[type='radio'] {
    background: #0062cc;
  }

  input[type='checkbox']:before,
  input[type='radio']:before {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    top: 2px;
    right: 5px;
    border-radius: 10px;
    top: 1px;
    left: 1px;
    background: #ffffff60;
    transition: .3s;
  }

  input:checked[type='checkbox']:before,
  input:checked[type='radio']:before {
    left: 17px;
  }

  p {
    color: #cecece;
    padding-left: 5px;
    margin: 1px 0 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;