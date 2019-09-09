import React, { useState } from 'react';
import Post from '../Post';
import { ReactComponent as LoadingAnimation } from '../../icons/loading.svg';
import { SearchBar, List, EmptyItem } from './styles'; 

export default function PostList ({ posts, loading }) {
  const [ query, setQuery ] = useState ('');

  const filterPosts = () => {
    return posts.filter (post => {
      const { desc, user, songs, lyrics } = post;
      return ((user.name && standardize (user.name).indexOf (standardize (query)) >= 0)
        || (desc && standardize (desc).indexOf (standardize (query)) >= 0)
        || (songs.length > 0 && standardize (songs[0].name).indexOf (standardize (query)) >= 0)
        || (songs.length > 0 && standardize (songs[0].genre).indexOf (standardize (query)) >= 0)
        || (lyrics.length > 0 && standardize (lyrics[0].name).indexOf (standardize (query)) >= 0)
        || (lyrics.length > 0 && standardize (lyrics[0].genre).indexOf (standardize (query)) >= 0)
      );
    });
  }

  const standardize = text => {
    return text
      .toLowerCase ()
      .normalize ('NFD')
      .replace (/[\u0300-\u036f|\u00b4|\u0060|\u005e|\u007e]/g, '')
  }

  const postList = filterPosts ();
  return (
    <List>
      <SearchBar
        name='query'
        autoComplete='off'
        placeholder='Pesquisar conteudo'
        className='search'
        onChange={e => setQuery (e.target.value)}
      />
      {loading ?
        <EmptyItem>
          <div>
            <LoadingAnimation/>
          </div>
        </EmptyItem>
      : posts.length > 0 ?
        postList.length > 0 ?
          postList.map (post => (
            <Post key={post.id} postData={post} />
          ))
        : <EmptyItem>
            <p> Não foi encontrado nenhum resultado para sua pesquisa </p>
          </EmptyItem>
      : <EmptyItem>
          <p> Ainda não há postagens nessa categoria </p>
        </EmptyItem>
      }
    </List>
  );
}
