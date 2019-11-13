import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Rating from '../../Rating';
import { Container, Loader, EmptyItem } from '../styles'; 

import {
  ReactComponent as LoadingAnimation
} from '../../../icons/loading.svg';

export default function RatingList ({
  ratings, loading, onScroll, isLastPage
}) {
  return (
    <Container>
      <h3> Avaliações </h3>
      {loading ?
        <EmptyItem>
          <div>
            <LoadingAnimation/>
          </div>
        </EmptyItem>
      : 
        <InfiniteScroll
          dataLength={ratings.length}
          next={onScroll}
          hasMore={!isLastPage}
          loader={
            <Loader>
              <LoadingAnimation/>
            </Loader>
          }
          endMessage={<></>}
        >
          {ratings.map (rating => (
            <Rating key={rating.id} data={rating} />
          ))}
        </InfiniteScroll>
      }
    </Container>
  );
}
