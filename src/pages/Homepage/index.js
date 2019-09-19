import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { isAuthenticated, getUserName } from '../../services/auth';
import { Link } from 'react-router-dom';
import Filters from '../../components/Filters';
import PostList from '../../components/PostList';
import { Banner, Feed } from './styles';

export default function Homepage () {
  const [ loading, setLoading ] = useState (true);
  const [ posts, setPosts ] = useState ([]);
  const [ filteredPosts, setFilteredPosts ] = useState ([]);

  useEffect (() => {
    getPosts ();
  }, []);

  const getPosts = async () => {
    try {
      const response = await api.get ('/posts');
      const { data } = response;

      setPosts (data);
      setFilteredPosts (data);
      setLoading (false);
    } catch (error) {
      console.log (error);
    }
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
        <Filters 
          posts={posts}
          onChange={filteredPosts => setFilteredPosts (filteredPosts)}
        />

        <PostList posts={filteredPosts} loading={loading}/>

        <div style={{width: 230}}></div>
      </Feed>
    </>
  );
}
