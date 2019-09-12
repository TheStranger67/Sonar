import React from 'react';
import LoginForm from '../../components/LoginForm';
import { Link } from 'react-router-dom';
import { Container, FormContainer} from './styles.js';

export default function LoginSignup () {
  return (
    <Container>
      <FormContainer>
        <h2> Login </h2>
        <LoginForm/>
        <Link to='/signup'> 
          Criar conta
        </Link>
      </FormContainer>
    </Container>
  );
}
