import React from 'react';
import Select from 'react-select';
import styles from './styles'

export default function GenderSelect (props) {
  const options = [
    { value: 'M', label: 'Masculino' },
    { value: 'F', label: 'Feminino' },
    { value: 'O', label: 'Outro' }
  ];

  const handleChange = selected => {
    props.onChange ('gender', selected.value);
  };

  const handleBlur = () => {
    props.onBlur ('gender', true);
  };

  return (
    <>
      <Select
        options={options}
        styles={props.error && props.touched ? styles ('error') : styles ('default')}
        placeholder='Selecione um sexo'
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
