import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { getUserID, getUserName } from '../../services/auth';
import { Link } from 'react-router-dom';
import Filters from '../../components/Filters';
import PostList from '../../components/PostList';
import { Banner, Feed } from './styles';

export default function Profile () {
  const [ posts, setPosts ] = useState ([]);
  const [ loading, setLoading ] = useState (true);
  const [ filters, setFilters ] = useState ('');
  const [ page, setPage ] = useState (1);
  const [ lastPage, setLastPage ] = useState (0);

  useEffect (() => {
    getUserPosts ();
  }, []);

  useEffect (() => {
    setLoading (true);
    getUserPosts (1, filters);
  }, [filters]);

  const getUserPosts = async (pageNumber = page, _filters = filters) => {
    try {
      const response = await api.get (
        `/profiles/${getUserID ()}?page=${pageNumber}${_filters}`
      );
      const { data, lastPage } = response.data;

      pageNumber > 1 ? setPosts ([...posts, ...data]) : setPosts (data);
      setPage (pageNumber + 1);
      setLastPage (lastPage);
      setLoading (false);
    } catch (error) {
      console.log (error);
    }
  }

  const isLastPage = () => {
    return lastPage && page > lastPage;
  }

  return (
    <>
      <Banner>
        <h2> {getUserName ()} </h2>
        <h3> Veja aqui todas as publicações que voce compartilhou </h3>
      </Banner>
      <Feed>
        <Filters onChange={filters => setFilters (filters)}/>
        <PostList 
          posts={posts}
          loading={loading}
          onScroll={() => getUserPosts ()}
          isLastPage={isLastPage ()}
        />
        <div style={{width: 230}}></div>
      </Feed>
    </>
  );
}