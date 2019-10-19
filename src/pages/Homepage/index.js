import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { isAuthenticated, getUserName } from '../../services/auth';
import { Link } from 'react-router-dom';
import Filters from '../../components/Filters';
import PostList from '../../components/PostList';
import { Banner, Feed } from './styles';

export default function Homepage () {
  const [ posts, setPosts ] = useState ([]);
  const [ loading, setLoading ] = useState (true);
  const [ filters, setFilters ] = useState ('');
  const [ page, setPage ] = useState (1);
  const [ lastPage, setLastPage ] = useState (0);

  useEffect (() => {
    getPosts ();
  }, []);

  useEffect (() => {
    setLoading (true);
    getPosts (1, filters);
  }, [filters]);

  const getPosts = async (pageNumber = page, _filters = filters) => {
    try {
      const response = await api.get (`/posts?page=${pageNumber}${_filters}`);
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
        {isAuthenticated () ?
          <>
            <h2> Bem vindo (a), {getUserName ()} </h2>
            <h3> Mostre suas ideias para o mundo agora mesmo! </h3>
            <br/>
            <Link to='/upload' className='opt_link'>
              Compartilhar ideia
            </Link>
          </>
        : 
          <>
            <h2> Bem vindo (a) ao Projeto Sonar! </h2>
            <h3> Entre para começar a compartilhar suas ideias musicais agora mesmo! </h3>
            <br/>
            <Link to='/login' className='opt_link'>
              Entrar
            </Link>
          </>
        }
      </Banner>
      <Feed>
        <Filters onChange={filters => setFilters (filters)}/>
        <PostList 
          posts={posts}
          loading={loading}
          onScroll={() => getPosts ()}
          isLastPage={isLastPage ()}
        />
        <div style={{width: 230}}></div>
      </Feed>
    </>
  );
}
