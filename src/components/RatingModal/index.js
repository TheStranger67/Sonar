import React, { useState } from 'react';
import api from '../../services/api';
import { getToken } from '../../services/auth';
import { withRouter } from 'react-router-dom';
import Rating from 'react-rating';

import {
  ModalContainer,
  RatingContainer,
  TextField,
  Footer,
  Submit,
  Cancel,
} from './styles';

function RatingModal (_props) {
  const [ value, setValue ] = useState (0);
  const [ comment, setComment ] = useState ('');
  const { staticContext, ...props } = _props;

  const handleSubmit = async () => {
    try {
      await api.put (`/posts/${props.postid}/ratings`, {value}, {
        headers: {
          'Authorization': `Bearer ${getToken ()}`,
        }
      });
      props.onChange (value);
      props.onHide ();
    } catch (error) {
      console.log (error)
    }
  }

  return (
    <ModalContainer
      {...props}
      centered
      animation={false}
    >
      <h3> Avaliar publicação </h3>
      <RatingContainer>
        <Rating
          initialRating={value}
          onChange={value => setValue (value)}
          emptySymbol={
            <i className='fas fa-star' style={{color: '#bebebe', fontSize: 20}}/>
          }
          fullSymbol={
            <i className='fas fa-star' style={{color: '#E6C229', fontSize: 20}}/>
          }
        />
        <p> {value > 0 ? value : ''} </p>
      </RatingContainer>
      <TextField
        name='comment'
        placeholder='Escreva um comentário...'
        rows='4'
        value={comment}
        onChange={e => setComment (e.target.value)}
      />
      <Footer>
        <Submit type='submit' onClick={handleSubmit}> Enviar </Submit>
        <Cancel onClick={props.onHide}> Cancelar </Cancel>
      </Footer>
    </ModalContainer>
  );
}

export default withRouter (RatingModal);
