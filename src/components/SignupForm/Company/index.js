import React from 'react';
import api from '../../../services/api';
import { withFormik } from 'formik';
import { withRouter } from 'react-router-dom';
import * as Yup from 'yup';
import { ReactComponent as LoadingAnimation } from '../../../icons/loading.svg';
import {isValid as isValidCnpj} from '@fnando/cnpj';

import { 
  FormField,
  Input,
  MaskedInput,
  ErrorMessage,
  Submit 
} from '../styles';

require ('cleave.js/dist/addons/cleave-phone.br');

function SignupJur (props) {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  const handleMaskedValueChange = event => {
    const _e = event; 
    _e.target.value = event.target.rawValue; 
    handleChange (_e);
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField> {/* Raz. Soc. */}
        <label className='form_label' htmlFor='razsoc'> Razão Social </label>
        <Input
          type='text'
          id='razsoc'
          name='razsoc'
          placeholder='Insira a razão social'
          spellCheck='false'
          className={errors.razsoc && touched.razsoc}
          value={values.razsoc}
          onChange={handleChange}
          onBlur={handleBlur}
          maxLength='100'
        />
        {errors.razsoc && touched.razsoc && (
          <p> {errors.razsoc} </p>
        )}
      </FormField>

      <FormField> {/* Name */}
        <label className='form_label' htmlFor='name_jur'> Nome completo </label>
        <Input
          type='text'
          id='name_jur'
          name='name'
          placeholder='Insira o nome completo do responsavél'
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
        <label className='form_label' htmlFor='email_jur'> Endereço de e-mail </label>
        <Input
          type='email'
          id='email_jur'
          name='email'
          placeholder='Insira seu e-mail'
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
        <label className='form_label' htmlFor='password_jur'> Senha </label>
        <Input
          type='password'
          id='password_jur'
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
        <label className='form_label' htmlFor='conf_password_jur'> Confirme sua senha </label>
        <Input
          type='password'
          id='conf_password_jur'
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
      
      <FormField> {/* CNPJ */}
        <label className='form_label' htmlFor='cnpj'> CNPJ </label>
        <MaskedInput
          id='cnpj'
          name='cnpj'
          placeholder='Digite o número de CNPJ' 
          options={{
            blocks: [2,3,3,4,2],
            delimiters: ['.', '.', '/', '-'],
            numericOnly: true
          }}
          error={errors.cnpj && touched.cnpj ? 'true' : 'false'}
          value={values.cnpj}
          onChange={e => handleMaskedValueChange (e)}
          onBlur={handleBlur}
        />
        {errors.cnpj && touched.cnpj && (
          <p> {errors.cnpj} </p>
        )}
      </FormField>
    
      <FormField> {/* Phone */}
        <label className='form_label' htmlFor='phone_jur'> Telefone (opcional) </label>
        <MaskedInput
          id='phone_jur'
          name='phone'
          placeholder='Insira um número de telefone'
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
    razsoc: '',
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    cnpj: '',
    phone: '',
  }),

  validationSchema: Yup.object ().shape ({
    razsoc: Yup.string ()
      .min (3, 'A razão social deve ter pelo menos 3 caracteres')
      .required ('Preencha o campo de razão social'),

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
      
    cnpj: Yup.string ()
      .required ('Preencha o campo de CNPJ')
      .test ('validCpf', 'Insira um CNPJ válido', function (value) {
        return isValidCnpj (value);
      }),

    phone: Yup.string ()
      .test ('validPhone', 'Insira um número de telefone válido', function (value) {
        const phoneExp = /\(|\)| |-/g;
        if (!value) return true;
        return value.replace (phoneExp, '').length >= 10;
      }),
  }),

  handleSubmit: async (values, { setSubmitting, setErrors, props }) => {
    delete values.password_confirmation;
    
    try {
      const response = await api.post ('/companies', values);
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
}) (SignupJur));
