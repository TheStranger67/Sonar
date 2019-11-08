import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import RatingList from '../../components/RatingList';
import Post from '../../components/Post';
import { Container, EmptyItem } from './styles';

import {
  ReactComponent as LoadingAnimation
} from '../../icons/loading.svg';

export default function PostDetails ({ match }) {
  const [ post, setPost ] = useState ({});
  const [ ratings, setRatings ] = useState ([]);
  const [ loadingPost, setLoadingPost ] = useState (true);
  const [ loadingRatings, setLoadingRatings ] = useState (true);
  const [ page, setPage ] = useState (1);
  const [ lastPage, setLastPage ] = useState (0);

  useEffect (() => {
    getPost ();
  }, []);

  const isLastPage = () => lastPage && page > lastPage;

  const getPost = async () => {
    setLoadingPost (true);
    try {
      const response = await api.get (`/posts/${match.params.pid}`);
      const { data } = response;

      setPost (data);
      setLoadingPost (false);
      getRatings ();
    } catch (error) {
      console.log (error);
    }
  }


  const getRatings = async (pageNumber = page) => {
    setLoadingRatings (true);
    try {
      const response = await api.get (
        `/posts/${match.params.pid}/ratings?page=${pageNumber}`
      );
      const { data, lastPage } = response.data;

      pageNumber > 1 ? setRatings ([...ratings, ...data]) : setRatings (data);
      setPage (pageNumber + 1);
      setLastPage (lastPage);
      setLoadingRatings (false);
    } catch (error) {
      console.log (error);
    }
  }
  
  return (
    <Container>
      {loadingPost ? 
        <EmptyItem>
          <div>
            <LoadingAnimation/>
          </div>
        </EmptyItem>
      : 
        <>
          <Post data={post}/>
          <RatingList
            ratings={ratings}
            loading={loadingRatings}
            onScroll={() => getRatings ()}
            isLastPage={isLastPage ()}
          />
        </>
      }
    </Container>
  );
}
