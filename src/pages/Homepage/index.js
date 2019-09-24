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
  const [ info, setInfo ] = useState ({});

  useEffect (() => {
    getPosts ();
  }, []);

  useEffect (() => {
    setLoading (true);
    getPosts (1, filters);
  }, [filters]);

  const getPosts = async (pageNumber = 1, filters = '') => {
    try {
      const response = await api.get (`/posts?page=${pageNumber}${filters}`);
      const { data, ...info } = response.data;

      pageNumber > 1 ? setPosts ([...posts, ...data]) : setPosts (data);
      setInfo (info)
      setLoading (false);
    } catch (error) {
      console.log (error);
    }
  }

  const handleScroll = () => {
    if (isLastPage ()) return;
    const pageNumber = info.page + 1;
    getPosts (pageNumber, filters);
  }

  const isLastPage = () => {
    return info.lastPage === info.page;
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
          onScroll={handleScroll}
          isLastPage={isLastPage ()}
        />

        <div style={{width: 230}}></div>
      </Feed>
    </>
  );
}
