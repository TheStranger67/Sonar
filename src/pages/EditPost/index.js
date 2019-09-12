import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import EditPostForm from '../../components/PostForm/EditPost';
import { Container, FormContainer, EmptyContainer } from './styles';

import {
  ReactComponent as LoadingAnimation
} from '../../icons/loading.svg';

export default function EditPost ({ history, match }) {
  const [ post, setPost ] = useState ({});
  const [ loading, setLoading ] = useState (true);
  const { pid } = match.params;

  useEffect (() => {
    getPost ();
  }, [pid])

  const getPost = async () => {
    try {
      const response = await api.get (`/posts/${pid}`);
      const { data } = response;

      setPost (data);
      setLoading (false);
    } catch (error) {
      console.log (error);
    }
  }

  return (
    <Container>
      {loading ?
        <EmptyContainer>
          <div>
            <LoadingAnimation/>
          </div>
        </EmptyContainer>
      :   
        <FormContainer>
          <h2> Editar publicação </h2>
          <EditPostForm postData={post}/>
        </FormContainer>
      }
    </Container>
  );
}

