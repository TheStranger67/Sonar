import React from 'react';
import api from '../../../services/api';
import { withFormik } from 'formik';
import { withRouter } from 'react-router-dom';
import * as Yup from 'yup';
import GenderSelect from '../../GenderSelect';
import { ReactComponent as LoadingAnimation } from '../../../icons/loading.svg';
import { isValid as isValidCpf } from '@fnando/cpf';

import { 
  FormField,
  Input,
  MaskedInput,
  ErrorMessage,
  Submit 
} from '../styles';

require ('cleave.js/dist/addons/cleave-phone.br');

function SignupFis (props) {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
  } = props;

  const handleMaskedValueChange = event => {
    const _e = event; 
    _e.target.value = event.target.rawValue; 
    handleChange (_e);
  }
 
  return (
    <form onSubmit={handleSubmit}>
      <FormField> {/* Name */}
        <label className='form_label' htmlFor='name_fis'> Nome completo </label>
        <Input
          type='text'
          id='name_fis'
          name='name'
          placeholder='Insira seu nome completo'
          error={errors.name && touched.name}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          maxLength='70'
        />
        {errors.name && touched.name && (
          <p> {errors.name} </p>
        )}
      </FormField>

      <FormField> {/* E-mail */}
        <label className='form_label' htmlFor='email_fis'> Endereço de e-mail </label>
        <Input
          type='email'
          id='email_fis'
          name='email'
          placeholder='Insira seu endereço de e-mail'
          spellCheck='false'
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
      
      <FormField> {/* Password */}
        <label className='form_label' htmlFor='password_fis'> Senha </label>
        <Input
          type='password'
          id='password_fis'
          name='password'
          placeholder='Mínimo de 8 caracteres'
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

      <FormField> {/* Password Conf */}
        <label className='form_label' htmlFor='conf_password_fis'> Confirme sua senha </label>
        <Input
          type='password'
          id='conf_password_fis'
          name='password_confirmation'
          placeholder='Digite a mesma senha informada acima'
          error={errors.password_confirmation && touched.password_confirmation}
          value={values.password_confirmation}
          onChange={handleChange}
          onBlur={handleBlur}
          maxLength='16'
        />
        {errors.password_confirmation && touched.password_confirmation && (
          <p> {errors.password_confirmation} </p>
        )}
      </FormField>
      
      <FormField> {/* CPF */}
        <label className='form_label' htmlFor='cpf'> CPF </label>
        <MaskedInput
          id='cpf'
          name='cpf'
          placeholder='Digite seu número de CPF'
          options={{
            blocks: [3,3,3,2],
            delimiters: ['.', '.', '-'],
            numericOnly: true
          }}
          error={errors.cpf && touched.cpf ? 'true' : 'false'}
          value={values.cpf}
          onChange={e => handleMaskedValueChange (e)}
          onBlur={handleBlur}
        />
        {errors.cpf && touched.cpf && (
          <p> {errors.cpf} </p>
        )}
      </FormField>

      <FormField> {/* Gender */}
        <label className='form_label' htmlFor='gender'> Sexo </label>
        <GenderSelect
          id='gender'
          name='gender'
          value={values.gender}
          onChange={setFieldValue}
          onBlur={setFieldTouched}
          error={errors.gender}
          touched={touched.gender}
        />
      </FormField>
    
      <FormField> {/* Date */}
        <label className='form_label' htmlFor='birth'> Data de nascimento </label>
        <MaskedInput
          id='birth'
          name='birth'
          placeholder='dd/mm/aaaa'
          options={{date: true, datePattern: ['d', 'm', 'Y']}}
          error={errors.birth && touched.birth ? 'true' : 'false'}
          value={values.birth}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.birth && touched.birth && (
          <p> {errors.birth} </p>
        )}
      </FormField>

      <FormField> {/* Phone */}
        <label className='form_label' htmlFor='phone_fis'> Telefone (opcional) </label>
        <MaskedInput
          id='phone_fis'
          name='phone'
          placeholder='Insira seu número de telefone'
          options={{phone: true, phoneRegionCode: 'BR'}}
          error={errors.phone && touched.phone ? 'true' : 'false'}
          value={values.phone}
          onChange={e => handleMaskedValueChange (e)}
          onBlur={handleBlur}
        />
        {errors.phone && touched.phone && (
          <p> {errors.phone} </p>
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
              <LoadingAnimation/>
            </div>
          : 'Criar conta'
        }
      </Submit>
    </form>
  );
}

export default withRouter (withFormik ({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    cpf: '',
    gender: '',
    birth: '',
    phone: '',
  }),

  validationSchema: Yup.object ().shape ({
    name: Yup.string ()
      .min (3, 'O nome deve ter pelo menos 3 caracteres')
      .required ('Preencha o campo de nome'),

    email: Yup.string ()
      .email ('Digite um e-mail válido')
      .required ('Preencha o campo de e-mail'),

    password: Yup.string ()
      .min (8, 'A senha deve ter no mínimo 8 caracteres')
      .required ('Preencha o campo de senha'),

    password_confirmation: Yup.string ()
      .required ('Preencha o campo de confirmação de senha')
      .oneOf ([Yup.ref ('password'), null], 'As duas senhas devem ser iguais'),
      
    cpf: Yup.string ()
      .required ('Preencha o campo de CPF')
      .test ('validCpf', 'Insira um CPF válido', function (value) {
        return isValidCpf (value);
      }),

    gender: Yup.string ()
      .required ('Preencha o campo de sexo'),

    birth: Yup.string ()
      .required ('Preencha o campo de data de nascimento')
      .min (8, 'Insira uma data válida (formato dd/mm/aaaa)')
      .test ('validYear', 'Insira um ano válido (entre 1900 e 2010)', function (value) {
        if (!value) return true;
        const year = value.split ('/')[2];
        return year >= 1900 && year <= 2010;
      }),
    
    phone: Yup.string ()
      .required ('Preencha o campo de telefone')
      .test ('validPhone', 'Insira um número de telefone válido', function (value) {
        const phoneExp = /\(|\)| |-/g;
        if (!value) return true;
        return value.replace (phoneExp, '').length >= 10;
      }),
  }),

  handleSubmit: async (values, { setSubmitting, setErrors, props }) => {
    const user = {
      ...values,
      birth: values.birth.split ('/').reverse ().join ('-')
    }

    try {
      const response = await api.post ('/users', user);
      const { data } = response;

      alert (data.message);
      props.history.push ('/login');
    } catch (error) {
      setSubmitting (false);
      const { data } = error.response || null;

      data
      ? setErrors ({message: data.message})
      : setErrors ({message: 'A comunicação com o servidor falhou'});
    }
  }, 
}) (SignupFis));
