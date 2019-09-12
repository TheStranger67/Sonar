import React from 'react';
import CreatePostForm from '../../components/PostForm/CreatePost';
import { Container, FormContainer } from './styles';

export default function UploadPost () {
  return (
    <Container>
      <FormContainer>
        <h2> Compartilhar ideias </h2>
        <CreatePostForm/>
      </FormContainer>
    </Container>
  );
}
