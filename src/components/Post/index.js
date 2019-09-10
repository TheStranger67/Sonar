import React, { useState } from 'react';
import api from '../../services/api';
import { distanceInWords } from 'date-fns';
import ptbr from 'date-fns/locale/pt';
import download from 'downloadjs';
import { ReactComponent as Loading } from '../../icons/loading.svg';

import { 
  Container,
  Header,
  PostButton,
  Description,
  Content,
  PostItem,
  DownloadButton
} from './styles';

export default function Post ({ postData : post }) {
  const [ loading, setLoading ] = useState (false);

  const handleSongDownload = async song => {
    setLoading (true)

    const response = await api.get (`/songs/${song.id}`, {responseType: 'blob'});
    const { data } = response
    setLoading (false)

    download (data, song.filename);
  }

  const handleLyricDownload = async lyric => {
    setLoading (true)

    const response = await api.get (`/lyrics/${lyric.id}`, {responseType: 'blob'});
    const { data } = response;
    setLoading (false)
    
    download (data, lyric.filename);
  }
  
  return (
    <Container>
      <Header>
        <div>
          <h4> {post.user.name} </h4>
          <p>
            Há {' ' + distanceInWords (post.created_at, new Date (), {
              locale: ptbr
            })}
          </p>
        </div>
        <div>
          <PostButton>
            <i class="fas fa-ellipsis-v"></i>
          </PostButton>
        </div>
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
              {loading
                ? <div>
                    <Loading/>
                  </div>
                : 'Baixar'
              }
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
              {loading
                ? <div>
                    <Loading/>
                  </div>
                : 'Baixar'
              }
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
