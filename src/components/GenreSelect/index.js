import React from 'react';
import Select from 'react-select';
import styles from './styles'

export default function GenreSelect (props) {
  const options = [
    { value: 'acustico', label: 'Acustico' },
    { value: 'axe', label: 'Axe' },
    { value: 'blues', label: 'Blues' },
    { value: 'country', label: 'Country' },
    { value: 'eletronica', label: 'Eletronica' },
    { value: 'rock', label: 'Folk' },
    { value: 'hiphop', label: 'Hip Hop' },
    { value: 'jazz', label: 'Jazz' },
    { value: 'metal', label: 'Metal' },
    { value: 'mpb', label: 'MPB' },
    { value: 'pagode', label: 'Pagode' },
    { value: 'pop', label: 'Pop' },
    { value: 'rock', label: 'Rock' },
    { value: 'samba', label: 'Samba' },
    { value: 'sertanejo', label: 'Sertanejo' },
    { value: 'reggae', label: 'Reggae' },
    { value: 'rap', label: 'Rap' }
  ]

  const handleChange = selected => {
    props.onChange(props.stateVar, selected.value);
  };

  const handleBlur = () => {
    props.onBlur(props.stateVar, true);
  };

  return (
    <>
      <Select
        options={options}
        styles={styles('default')}
        classNamePrefix='form_select'
        placeholder='Selecione o gênero musical desejado'
        noOptionsMessage={() => 'Nenhuma opção encontrada'}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {props.error && props.touched && (
        <p className='label_error'> {props.error} </p>
      )}
    </>
  );
} 