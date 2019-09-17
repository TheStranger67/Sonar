import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { isAuthenticated, getUserName } from '../../services/auth';
import { Link } from 'react-router-dom';
import PostList from '../../components/PostList';
import { Banner, Feed, Filters } from './styles';

export default function Homepage () {
  const [ loading, setLoading ] = useState (true);
  const [ posts, setPosts ] = useState ([]);

  useEffect (() => {
    getPosts ();
  }, []);

  const getPosts = async () => {
    try {
      const response = await api.get ('/posts');
      const { data } = response;

      setPosts (data);
      setLoading (false);
    } catch (error) {
      console.log (error);
    }
  }

  const getFilteredPosts = type => {
    const filtered = posts.filter (post => {
      const { songs, lyrics } = post
      switch (type) {
        case 'songs':
          return songs.length > 0 && lyrics.length === 0;
        case 'lyrics': 
          return lyrics.length > 0 && songs.length === 0;
        case 'both': 
          return songs.length > 0 && lyrics.length > 0;
        default: return post;
      }
    });
    return filtered;
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
        <Filters>
          <p> Filtrar </p>
        </Filters>

        <PostList posts={getFilteredPosts ('recent')} loading={loading}/>
      </Feed>
    </>
  );
}
