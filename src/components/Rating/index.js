import React from 'react';
import { distanceInWordsStrict } from 'date-fns';
import ptbr from 'date-fns/locale/pt';
import CollapsibleText from 'react-read-more-less';
import Rating from 'react-rating';

import { 
  Container,
  Header,
  AverageRating,
  Comment,
} from './styles';

export default function rating ({ data : rating }) {
  return (
    <Container>
      <Header>
        <div>
          <h4> {rating.user.name} </h4>
          <p>
            Há {' ' + distanceInWordsStrict (rating.created_at, new Date (), {
              locale: ptbr
            })}
          </p>
        </div>
        <div>
          <AverageRating>
            <Rating
              readonly={true}
              fractions={10}
              initialRating={rating.value}
              emptySymbol={<i className='fas fa-star' style={{color: '#bebebe'}}/>}
              fullSymbol={<i className='fas fa-star' style={{color: '#E6C229'}}/>}
            />
            <p> {rating.value} </p>
          </AverageRating>
        </div>
      </Header>
      {rating.comment && (
        <Comment>
          <CollapsibleText
            charLimit={150}
            readMoreText=' mais'
            readLessText=' menos'
          >
            {rating.comment}
          </CollapsibleText>
        </Comment>
      )}
    </Container>
  );
}
