import React, { useState } from 'react';
import api from '../../services/api';
import { distanceInWordsStrict } from 'date-fns';
import ptbr from 'date-fns/locale/pt';
import CollapsibleText from 'react-read-more-less';
import Rating from 'react-rating';
import download from 'downloadjs';

import {
  ReactComponent as Loading
} from '../../icons/loading.svg';

import { 
  Container,
  Header,
  AverageRating,
  PostOptions,
  DefaultLink,
  DangerLink,
  Description,
  Content,
  PostItem,
  DownloadButton,
  Footer
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
            Há {' ' + distanceInWordsStrict (post.created_at, new Date (), {
              locale: ptbr
            })}
          </p>
        </div>
        
        <div>
          <AverageRating>
            {post.ratings.length > 0 ?
              <>
                <p>
                  {post.ratings.length > 1 
                    ? `${post.ratings.length} avaliações`
                    : `1 avaliação`}
                </p>

                <Rating
                  readonly={true}
                  fractions={10}
                  initialRating={post.average_rating}
                  emptySymbol={<i className='fas fa-star' style={{color: '#bebebe'}}></i>}
                  fullSymbol={<i className='fas fa-star' style={{color: '#E6C229'}}></i>}
                />
                <p> {post.average_rating} </p>
              </>
              : null
            }
          </AverageRating>
          
          {post.user.id.toString () === localStorage.userID && (
            <PostOptions>
              <button> <i className="fas fa-cog"></i> </button>
              <div>
                <DefaultLink to={`/posts/${post.id}`}> 
                  <i className="far fa-edit"></i>
                  Editar
                </DefaultLink>
                <DangerLink to='/posts/'>
                  <i className="fas fa-trash-alt"></i>
                  Excluir
                </DangerLink>
              </div>
            </PostOptions>
          )}
        </div>
      </Header>
      
      <Description>
        <CollapsibleText
          charLimit={150}
          readMoreText=' mais'
          readLessText=' menos'
        >
          {post.desc}
        </CollapsibleText>
      </Description>

      <Content>
        {post.songs.length > 0 && (
          <PostItem>
            <div>
              <div>
                <i className="fas fa-music"></i>
                <p> {post.songs[0].name} </p>
              </div>

              <div>
                <i className="fas fa-headphones"></i>
                <p> {post.songs[0].genre} </p>
              </div>
            </div>

            <DownloadButton
              onClick={() => handleSongDownload (post.songs[0])}
            > 
              {loading
                ? <div>
                    <Loading/>
                  </div>
                : <i className="fas fa-download"></i>
              }
            </DownloadButton>
          </PostItem>
        )} 

        {post.lyrics.length > 0 && (
          <PostItem>
            <div>
              <div>
                <i className="fas fa-file-alt"></i>
                <p> {post.lyrics[0].name} </p>
              </div>

              <div>
                <i className="fas fa-headphones"></i>
                <p> {post.lyrics[0].genre} </p>
              </div>
            </div>
            
            <DownloadButton
              onClick={() => handleLyricDownload (post.lyrics[0])}
            > 
              {loading
                ? <div>
                    <Loading/>
                  </div>
                : <i className="fas fa-download"></i>
              }
            </DownloadButton>
          </PostItem>
        )}
      </Content>

      <Footer>

      </Footer>
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
