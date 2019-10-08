import React, { useState } from 'react';
import Rating from 'react-rating';

import {
  ModalContainer,
  RatingContainer,
  TextField,
  Footer,
  Submit,
  Cancel,
} from './styles';

export default function RatingModal (props) {
  const [ rating, setRating ] = useState (0);
  const [ comment, setComment ] = useState ('');

  return (
    <ModalContainer
      {...props}
      centered
      animation={false}
    >
      <h3> Avaliar publicação </h3>
      <RatingContainer>
        <Rating
          initialRating={rating}
          onChange={value => setRating (value)}
          emptySymbol={
            <i className='fas fa-star' style={{color: '#bebebe', fontSize: 20}}/>
          }
          fullSymbol={
            <i className='fas fa-star' style={{color: '#E6C229', fontSize: 20}}/>
          }
        />
        <p> {rating > 0 ? rating : ''} </p>
      </RatingContainer>
      <TextField
        name='comment'
        placeholder='Escreva um comentário...'
        rows='4'
        value={comment}
        onChange={e => setComment (e.target.value)}
      />
      <Footer>
        <Submit type='submit'> Enviar </Submit>
        <Cancel onClick={props.onHide}> Cancelar </Cancel>
      </Footer>
    </ModalContainer>
  );
}
