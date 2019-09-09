import React from 'react';
import { distanceInWords } from 'date-fns';
import ptbr from 'date-fns/locale/pt';
import api from '../../services/api';
import download from 'downloadjs';

import { 
  Container,
  Header,
  Description,
  Content,
  PostItem,
  DownloadButton
} from './styles';

export default function Post ({ postData : post }) {
  const handleSongDownload = async song => {
    const response = await api.get (`/songs/${song.id}`, {responseType: 'blob'});
    const { data } = response
    download (data, song.filename);
  }

  const handleLyricDownload = async lyric => {
    const response = await api.get (`/lyrics/${lyric.id}`, {responseType: 'blob'});
    const { data } = response;
    console.log (data)
    download (data, lyric.filename);
  }
  
  return (
    <Container>
      <Header>
        <h4> {post.user.name} </h4>
        <p>
          Há {' ' + distanceInWords (post.created_at, new Date (), {
            locale: ptbr
          })}
        </p>
      </Header>
      <Description>
        <p> {post.desc} </p>
      </Description>
      <Content>
        {post.songs.length > 0 && (
          <PostItem>
            <p> Música </p>

            <div>
              <strong> Nome: </strong>
              <p> {post.songs[0].name} </p>
            </div>
            <div>
              <strong> Gênero musical: </strong>
              <p> {post.songs[0].genre} </p>
            </div>

            <DownloadButton
              onClick={() => handleSongDownload (post.songs[0])}
            > 
              Baixar
            </DownloadButton>
          </PostItem>
        )} 
        {post.lyrics.length > 0 && (
          <PostItem>
            <p> Letra </p>

            <div>
              <strong> Nome: </strong>
              <p> {post.lyrics[0].name} </p>
            </div>
            <div>
              <strong> Gênero musical: </strong>
              <p> {post.lyrics[0].genre} </p>
            </div>
            
            <DownloadButton
              onClick={() => handleLyricDownload (post.lyrics[0])}
            > 
              Baixar
            </DownloadButton>
          </PostItem>
        )}
      </Content>
    </Container>
  );
}

/*
  post {
    date
    desc
    id
    lyrics[].genre
    lyrics[].name
    lyrics[].path
    lyrics[].filename
    songs[].genre
    songs[].name
    songs[].path
    songs[].filename
    user.name
  }
*/
