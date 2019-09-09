import React from 'react';
import api from '../../services/api';
import { withFormik } from 'formik';
import { withRouter } from 'react-router-dom';
import * as Yup from 'yup'
import { ReactComponent as Loading } from '../../icons/loading.svg';
import { FormField, Input, ErrorMessage, Submit } from './styles';

function LoginForm (props) {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <FormField>
        <label htmlFor='login_email'> E-Mail </label>
        <Input
          type='email'
          id='login_email'
          name='email'
          spellCheck='false'
          placeholder='Insira seu e-mail'
          error={errors.email && touched.email}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          maxLength='50'
        />
        {errors.email && touched.email && (
          <p> {errors.email} </p>
        )}
      </FormField>

      <FormField>
        <label htmlFor='login_password'> Senha </label>
        <Input 
          type='password'
          id='login_password'
          name='password'
          placeholder='Insira sua senha'
          error={errors.password && touched.password}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          maxLength='16'
        />
        {errors.password && touched.password && (
          <p> {errors.password} </p>
        )}
      </FormField>

      {errors.message && (
        <ErrorMessage> 
          {errors.message} 
        </ErrorMessage>
      )}
      
      <Submit type='submit' disabled={isSubmitting}>
        {isSubmitting
          ? <div>
              <Loading/>
            </div>
          : 'Entrar'
        }
      </Submit>
    </form>
  );
}

export default withRouter (withFormik ({
  mapPropsToValues: () => ({ 
    email: '',
    password: '',
  }),

  validationSchema: Yup.object ().shape ({
    email: Yup.string ()
      .email ('Digite um e-mail válido')
      .required ('Preencha o campo de e-mail'),
      
    password: Yup.string ()
      .required ('Preencha o campo de senha'),
  }),

  handleSubmit: async (values, { setSubmitting, setErrors, props }) => {
    try {
      const response = await api.post ('/auth', values);
      const { data } = response;
      
      window.localStorage.setItem ('userToken', data.token);
      window.localStorage.setItem ('userId', data.userId);
      window.localStorage.setItem ('userName', data.userName);
      props.history.push ('/');
    } catch (error) {
      setSubmitting (false);
      const { data } = error.response || null;

      data
      ? setErrors ({message: data.message})
      : setErrors ({message: 'A comunicação com o servidor falhou'});
    }
  },
}) (LoginForm));
