import React from 'react';
import { distanceInWordsStrict } from 'date-fns';
import ptbr from 'date-fns/locale/pt';
import CollapsibleText from 'react-read-more-less';

import { 
  Container,
  Header,
  Desc,
} from './styles';

export default function Ad ({ data : ad }) {
  return (
    <Container>
      <Header>
        <div>
          <h4> {ad.title} </h4>
          <p>
            Há {' ' + distanceInWordsStrict (ad.created_at, new Date (), {
              locale: ptbr
            })}
          </p>
        </div>
      </Header>
      <Desc>
        <CollapsibleText
          charLimit={150}
          readMoreText=' mais'
          readLessText=' menos'
        >
          {ad.desc}
        </CollapsibleText>
      </Desc>
    </Container>
  );
}
