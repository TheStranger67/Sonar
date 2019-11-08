import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { isAuthenticated } from '../../services/auth';
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

  const isLastPage = () => lastPage && page > lastPage;

  return (
    <>
      <Banner>
        <h2> Desenvolvido para compartilhar seu talento musical </h2>
        <h3> Compartilhe suas músicas, letras e encontre novos talentos! </h3>
        <br/>
        {isAuthenticated () ?
          <Link to='/upload' className='opt_link'>
            Compartilhar ideia
          </Link>
        : 
          <Link to='/login' className='opt_link'>
            Entrar
          </Link>
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
        <div style={{width: 260}}></div>
      </Feed>
    </>
  );
}
