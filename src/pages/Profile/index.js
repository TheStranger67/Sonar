import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { getToken, getUserID, getUserName } from '../../services/auth';
import { Tab } from 'react-bootstrap';
import PostList from '../../components/PostList';
import { Banner, FilterTabs } from './styles';

export default function Profile () {
  const [ loading, setLoading ] = useState (true);
  const [ user, setUser ] = useState (null);
  const [ posts, setPosts ] = useState ([]);

  useEffect (() => {
    getUserPosts ();
  }, []);

  const getUserPosts = async () => {
    try {
      const response = await api.get (`/users/${getUserID ()}`, {
        headers: {
          'Authorization': `Bearer ${getToken ()}`
        }
      });
      const { data } = response;
      
      setUser (data);
      setPosts (data.posts);
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
        <h2> {getUserName ()} </h2>
        <h3> Veja aqui todas as publicações que voce compartilhou </h3>
      </Banner>
      <FilterTabs justify transition={false} defaultActiveKey='recent'>
        <Tab eventKey='recent' title='Mais recentes'>
          <PostList posts={getFilteredPosts ('recent')} loading={loading}/>
        </Tab>
        <Tab eventKey='songs' title='Músicas'>
          <PostList posts={getFilteredPosts ('songs')} loading={loading}/>
        </Tab>
        <Tab eventKey='lyrics' title='Letras'>
          <PostList posts={getFilteredPosts ('lyrics')} loading={loading}/>
        </Tab>
        <Tab eventKey='both' title='Músicas e letras'>
          <PostList posts={getFilteredPosts ('both')} loading={loading}/>
        </Tab>
      </FilterTabs>
    </>
  );
}