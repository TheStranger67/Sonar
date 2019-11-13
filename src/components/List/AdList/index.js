import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Ad from '../../Ad';
import { Container, Loader, EmptyItem } from '../styles'; 

import {
  ReactComponent as LoadingAnimation
} from '../../../icons/loading.svg';

export default function AdList ({
  ads, loading, onScroll, isLastPage
}) {
  return (
    <Container style={{marginTop: 15}}>
      {loading ?
        <EmptyItem>
          <div>
            <LoadingAnimation/>
          </div>
        </EmptyItem>
      : ads.length > 0 ?
        <InfiniteScroll
          dataLength={ads.length}
          next={onScroll}
          hasMore={!isLastPage}
          loader={
            <Loader>
              <LoadingAnimation/>
            </Loader>
          }
          endMessage={<></>}
        >
          {ads.map (ad => (
            <Ad key={ad.id} data={ad} />
          ))}
        </InfiniteScroll>
        :
        <EmptyItem>
          <p> Você ainda não fez nenhuma proposta de anúncio </p>
        </EmptyItem>
      }
    </Container>
  );
}
