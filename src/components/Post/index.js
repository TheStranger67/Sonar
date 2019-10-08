import React, { useState } from 'react';
import api from '../../services/api';
import { isAuthenticated } from '../../services/auth';
import { distanceInWordsStrict } from 'date-fns';
import ptbr from 'date-fns/locale/pt';
import CollapsibleText from 'react-read-more-less';
import Rating from 'react-rating';
import download from 'downloadjs';
import RatingModal from '../RatingModal';

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
  const [ showRatingModal, setShowRatingModal ] = useState (false);

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
            {post.ratings.length > 0 && (
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
                  emptySymbol={<i className='fas fa-star' style={{color: '#bebebe'}}/>}
                  fullSymbol={<i className='fas fa-star' style={{color: '#E6C229'}}/>}
                />
                <p> {post.average_rating} </p>
              </>
            )}
          </AverageRating>
          {post.user.id.toString () === localStorage.userID && (
            <PostOptions>
              <button> <i className="fas fa-cog"/> </button>
              <div>
                <DefaultLink to={`/posts/${post.id}`}> 
                  <i className="far fa-edit"/>
                  Editar
                </DefaultLink>
                <DangerLink to='/posts/'>
                  <i className="fas fa-trash-alt"/>
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
                <i className="fas fa-music"/>
                <p> {post.songs[0].name} </p>
              </div>
              <div>
                <i className="fas fa-headphones"/>
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
                : <i className="fas fa-download"/>
              }
            </DownloadButton>
          </PostItem>
        )} 

        {post.lyrics.length > 0 && (
          <PostItem>
            <div>
              <div>
                <i className="fas fa-file-alt"/>
                <p> {post.lyrics[0].name} </p>
              </div>
              <div>
                <i className="fas fa-headphones"/>
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
                : <i className="fas fa-download"/>
              }
            </DownloadButton>
          </PostItem>
        )}
      </Content>
      {isAuthenticated () && post.user.id.toString () === localStorage.userID && (
        <>
          <Footer>
            <button onClick={() => setShowRatingModal (true)}>
              <i className='fas fa-star' style={{color: '#E6C229'}}/>
              Avaliar
            </button>
          </Footer>
          {showRatingModal && (
            <RatingModal
              show={showRatingModal}
              onHide={() => setShowRatingModal (false)}
              postid={post.id}
            />
          )}
        </>
      )}
    </Container>
  );
}
