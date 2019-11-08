import React from 'react';
import api from '../../services/api';
import { getToken } from '../../services/auth';
import { withRouter } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Rating from 'react-rating';

import {
  ReactComponent as LoadingAnimation
} from '../../icons/loading.svg';

import {
  ModalContainer,
  RatingContainer,
  RatingError,
  TextField,
  Footer,
  ErrorMessage,
  Submit,
  Cancel,
} from './styles';

function RatingModal (_props) {
  const { staticContext, onRating, ...props } = _props;

  return (
    <ModalContainer
      {...props}
      centered
      animation={false}
    >
      <Formik
        initialValues={{
          value: 0,
          comment: '',
        }}

        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            await api.put (`/posts/${props.postid}/ratings`, values, {
              headers: {
                'Authorization': `Bearer ${getToken ()}`,
              }
            });
            onRating (values.value);
            props.onHide ();
          } catch (error) {
            setSubmitting (false);
            const { data } = error.response || null;

            data
            ? setErrors ({message: data.message})
            : setErrors ({message: 'A comunicação com o servidor falhou'});
          }
        }}

        validationSchema={Yup.object ().shape ({
          value: Yup.number ()
            .moreThan (0, 'Não é possível enviar uma avaliação vazia'),
        })}

        render={formikProps => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
          } = formikProps;

          return (
            <form onSubmit={handleSubmit}>
              <h3> Avaliar publicação </h3>
              <RatingContainer>
                <Rating
                  initialRating={values.value}
                  onChange={value => setFieldValue ('value', value)}
                  emptySymbol={
                    <i className='fas fa-star' style={{color: '#bebebe', fontSize: 20}}/>
                  }
                  fullSymbol={
                    <i className='fas fa-star' style={{color: '#E6C229', fontSize: 20}}/>
                  }
                />
                {errors.value && touched.value && (
                  <RatingError> {errors.value} </RatingError>
                )}
                <h3> {values.value > 0 ? values.value : ''} </h3>
              </RatingContainer>
              <TextField
                name='comment'
                placeholder='Escreva um comentário...'
                rows='4'
                value={values.comment}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.message && (
                <ErrorMessage>
                  {errors.message}
                </ErrorMessage>
              )}
              <Footer>
                <Submit type='submit' disabled={isSubmitting}>
                  {isSubmitting
                    ? <div> <LoadingAnimation/> </div>
                    : 'Enviar'
                  }
                </Submit>
                <Cancel onClick={props.onHide}> Cancelar </Cancel>
              </Footer>
            </form>
          );
        }}
      />
    </ModalContainer>
  );
}

export default withRouter (RatingModal);
