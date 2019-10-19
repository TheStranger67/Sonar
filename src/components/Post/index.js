import React, { useState, useEffect } from 'react';
import { isAuthenticated, getUserID } from '../../services/auth';
import { distanceInWordsStrict } from 'date-fns';
import ptbr from 'date-fns/locale/pt';
import CollapsibleText from 'react-read-more-less';
import Rating from 'react-rating';
import PostItem from './PostItem';
import RatingModal from '../RatingModal';

import { 
  Container,
  Header,
  AverageRating,
  PostOptions,
  DefaultLink,
  DangerLink,
  Description,
  Content,
  Footer
} from './styles';

export default function Post ({ postData : post }) {
  const [ showRatingModal, setShowRatingModal ] = useState (false);
  const [ userRating, setUserRating ] = useState (null);

  useEffect (() => {
    setUserRating (getUserRating ());
  }, []);

  const getUserRating = () => {
    const rating = post.ratings.find (rating => rating.user_id !== getUserID ());
    if (!rating) return null;
    return rating.value;
  }

  const belongsToUser = () => String (post.user.id) === getUserID ()

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
          <AverageRating onClick={() => alert (post.id)}>
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
          {belongsToUser () && (
            <PostOptions>
              <button> <i className="fas fa-cog"/> </button>
              <div>
                <DefaultLink to={`/posts/${post.id}`}> 
                  <i className="far fa-edit"/> Editar
                </DefaultLink>
                <DangerLink to='/posts/'>
                  <i className="fas fa-trash-alt"/> Excluir
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
        {post.songs.length > 0 && <PostItem item={post.songs[0]} type='song'/>} 
        {post.lyrics.length > 0 && <PostItem item={post.lyrics[0]} type='lyric'/>}
      </Content>
      {isAuthenticated () && !belongsToUser () && (
        <Footer>
          {userRating ? 
            <div>
              <i className='fas fa-star' style={{color: '#E6C229'}}/>
              <p> {userRating} </p>
            </div>
            : 
            <button onClick={() => setShowRatingModal (true)}>
              <i className='fas fa-star' style={{color: '#E6C229'}}/>
              Avaliar
            </button>      
          }
          {showRatingModal && (
            <RatingModal
              show={showRatingModal}
              onChange={value => setUserRating (value)}
              onHide={() => setShowRatingModal (false)}
              postid={post.id}
            />
          )}
        </Footer>
      )}
    </Container>
  );
}
