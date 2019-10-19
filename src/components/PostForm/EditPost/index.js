import React from 'react';
import api from '../../../services/api';
import { withRouter } from 'react-router-dom';
import { getToken } from '../../../services/auth';
import { Formik } from 'formik';
import * as Yup from 'yup';
import GenreSelect from '../../GenreSelect';
import { Tab } from 'react-bootstrap';

import {
  ReactComponent as LoadingAnimation
} from '../../../icons/loading.svg';

import { 
  FormTabs,
  FormField,
  Input,
  TextField,
  ErrorMessage,
  Submit
} from '../styles';

function EditPost ({ postData : post, history }) {
  const hasSongs = post => {
    return post.songs.length > 0;
  }

  const hasLyrics = post => {
    return post.lyrics.length > 0;
  }

  return (
    <Formik
      initialValues={{
        description: post.desc,
        songName: hasSongs (post) ? post.songs[0].name : '',
        songGenre: hasSongs (post) ? post.songs[0].genre : '',
        lyricsName: hasLyrics (post) ? post.lyrics[0].name : '',
        lyricsGenre : hasLyrics (post) ? post.lyrics[0].genre : '',
      }}

      onSubmit={async (values, { setSubmitting, setErrors, props }) => {
        try {
          await api.put (`/posts/${post.id}`, values, {
            headers: {
              'Authorization': `Bearer ${getToken ()}`,
            }
          });
          history.push ('/');
        } catch (error) {
          setSubmitting (false);

          console.log (error)
    
          error.status 
          ? setErrors ({message: error.response.data.message})
          : setErrors ({message: 'A comunicação com o servidor falhou'});
        }
      }}

      validationSchema={Yup.object ().shape ({
        description: Yup.string ()
          .required ('Não é possível enviar uma publicação vazia'),
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
          setFieldTouched,
        } = formikProps;

        const songTab = <>
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
              defaultValue={{
                value: values.songGenre, 
                label: values.songGenre
              }}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
              error={errors.songGenre}
              touched={touched.songGenre}
              stateVar='songGenre'
            />
          </FormField>
        </>

        const lyricTab = <>
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
                defaultValue={{
                  value: values.lyricsGenre, 
                  label: values.lyricsGenre
                }}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.lyricsGenre}
                touched={touched.lyricsGenre}
                stateVar='lyricsGenre'
              />
            </FormField>
          </div>
        </>

        return (
          <form onSubmit={handleSubmit}>
            <FormField>
              {hasSongs (post) && hasLyrics (post) ? 
                <FormTabs transition={false} defaultActiveKey='song_tab'>
                  <Tab eventKey='song_tab' title='Música'>
                    {songTab}
                  </Tab>
                  <Tab eventKey='lyrics_tab' title='Letra'>
                    {lyricTab}
                  </Tab>
                </FormTabs>
              : hasSongs (post) ? songTab : lyricTab
              }
            </FormField>
            <FormField>
              <label htmlFor='desc' className='form_label'> Descrição </label>
              <TextField
                name='description'
                placeholder='Conte mais sobre sua criação'
                rows='8'
                error={errors.description && touched.description}
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.description && touched.description && (
                <p> {errors.description} </p>
              )}
            </FormField>

            {errors.message && (
              <ErrorMessage>
                {errors.message}
              </ErrorMessage>
            )}

            <Submit type='submit' disabled={isSubmitting}>
              {isSubmitting
                ? <div> <LoadingAnimation/> </div>
                : 'Salvar alterações'
              }
            </Submit>
          </form>
        );
      }}
    />
  );
}

export default withRouter (EditPost);
