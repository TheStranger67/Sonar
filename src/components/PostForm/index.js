import React from 'react';
import api from '../../services/api';
import { withFormik } from 'formik';
import { withRouter } from 'react-router-dom';
import * as Yup from 'yup';
import GenreSelect from '../GenreSelect';
import { ReactComponent as LoadingAnimation } from '../../icons/loading.svg';
import { Tab } from 'react-bootstrap';

import { 
  FormTabs,
  FormField,
  Input,
  FileInput,
  TextField,
  ErrorMessage,
  Submit
} from './styles';

function PostForm (props) {
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

  const handleFileChange = event => {
    const { files, name } = event.currentTarget;

    if (name === 'songFile') {
      if (files[0]) {
        setFieldValue (name, files[0]);
        setFieldValue (`${name}Name`, files[0].name);
      } else {
        setFieldValue (name, null);
        setFieldValue (`${name}Name`, 'Nenhuma música selecionada');
      }
    } else if (name === 'lyricsFile') {
      if (files[0]) {
        setFieldValue (name, files[0]);
        setFieldValue (`${name}Name`, files[0].name);
      } else {
        setFieldValue (name, null);
        setFieldValue (`${name}Name`, 'Nenhuma letra selecionada');
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField>
        <FormTabs transition={false} defaultActiveKey='song_tab'>
          <Tab eventKey='song_tab' title='Música'>
            <FormField>
              <label htmlFor='song_name'> Nome da música </label>
              <Input
                type='text'
                id='song_name'
                name='songName'
                placeholder='Insira o nome da música'
                value={values.songName}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength='100'
              />
            </FormField>

            <FormField>
              <label htmlFor='song_genre'> Gênero musical </label>
              <GenreSelect
                id='song_genre'
                name='songGenre'
                value={values.songGenre}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.songGenre}
                touched={touched.songGenre}
                stateVar='songGenre'
              />
            </FormField>

            <label htmlFor='song'> Arquivo da música </label>
            <FileInput>
              <label htmlFor='song'>
                Clique aqui para buscar em seus arquivos 
              </label>
              <input
                type='file'
                id='song'
                name='songFile'
                onChange={e => handleFileChange (e)}
                onBlur={handleBlur}
              />
              <p> {values.songFileName} </p>
            </FileInput>
          </Tab>
          <Tab eventKey='lyrics_tab' title='Letra'>
            <div>
              <FormField>
                <label htmlFor='lyrics_name'> Nome da letra </label>
                <Input
                  type='text'
                  id='lyrics_name'
                  name='lyricsName'
                  placeholder='Insira o nome da letra'
                  value={values.lyricsName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </FormField>

              <FormField>
                <label htmlFor='lyrics_genre'> Gênero musical </label>
                <GenreSelect
                  id='lyrics_genre'
                  name='lyricsGenre'
                  value={values.lyricsGenre}
                  onChange={setFieldValue}
                  onBlur={setFieldTouched}
                  error={errors.lyricsGenre}
                  touched={touched.lyricsGenre}
                  stateVar='lyricsGenre'
                />
              </FormField>

              <label htmlFor='lyrics'> Arquivo da letra </label>
              <FileInput>
                <label htmlFor='lyrics'> 
                  Clique aqui para buscar em seus arquivos 
                </label>
                <input 
                  type='file'
                  id='lyrics'
                  name='lyricsFile'
                  onChange={e => handleFileChange (e)}
                  onBlur={handleBlur}
                />
                <p> {values.lyricsFileName} </p>
              </FileInput>
            </div>
          </Tab>
        </FormTabs>
      </FormField>
      <FormField>
        <label htmlFor='desc' className='form_label'> Descrição </label>
        <TextField
          name='description'
          placeholder='Conte mais sobre sua criação'
          rows='6'
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
        >
        </TextField>
      </FormField>

      {errors.message && (
        <ErrorMessage>
          {errors.message}
        </ErrorMessage>
      )}

      <Submit disabled={isSubmitting}>
        {isSubmitting
          ? <div>
              <LoadingAnimation/>
            </div>
          : 'Compartilhar'
        }
      </Submit>
    </form>
  );
}

export default withRouter (withFormik ({
  mapPropsToValues: () => ({ 
    description: '',
    songName: '',
    songGenre: '',
    songFile: null,
    songFileName: 'Nenhuma música seleceionada',
    lyricsName: '',
    lyricsGenre : '',
    lyricsFile : null,
    lyricsFileName : 'Nenhuma letra seleceionada',
  }),

  validationSchema: Yup.object ().shape ({
    description: Yup.string ()
      .required ('Esvreva uma descrição para sua publicação'),
  }),

  handleSubmit: async (values, { setSubmitting, setErrors, props }) => {
    const data = new FormData ();

    data.append ('desc', values.description);
    data.append ('song_name', values.songName);
    data.append ('song_genre', values.songGenre);
    data.append ('song_file', values.songFile);
    data.append ('lyrics_name', values.lyricsName);
    data.append ('lyrics_genre', values.lyricsGenre);
    data.append ('lyrics_file', values.lyricsFile);

    try {
      await api.post ('/posts', data, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.userToken,
          'Content-Type': 'multipart/form-data',
        }
      });
      alert ('Idéia compartilhada com sucesso!');
      props.history.push ('/');
    } catch (error) {
      setSubmitting (false);

      error.status 
      ? setErrors ({message: error.response.data.message})
      : setErrors ({message: 'A comunicação com o servidor falhou'});
    }
  },
}) (PostForm));
