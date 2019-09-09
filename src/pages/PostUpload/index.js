import React from 'react';
import PostForm from '../../components/PostForm';
import { Container, FormContainer } from './styles';

export default function PostUpload () {
  return (
    <Container>
      <FormContainer>
        <h2> Compartilhar ideias </h2>

        <PostForm/>

      </FormContainer>
    </Container>
  );
}
