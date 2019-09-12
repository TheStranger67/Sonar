import React from 'react';
import api from '../../../services/api';
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
  FileInput,
  TextField,
  ErrorMessage,
  Submit
} from '../styles';

export default function EditPost ({ postData : post, history }) {
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
        songFile: null,
        songFileName: hasSongs (post)
          ? post.songs[0].filename 
          : 'Nenhuma música seleceionada',
        lyricsName: hasLyrics (post) ? post.lyrics[0].name : '',
        lyricsGenre : hasLyrics (post) ? post.lyrics[0].genre : '',
        lyricsFile : null,
        lyricsFileName : hasLyrics (post)
          ? post.lyrics[0].filename
          : 'Nenhuma letra seleceionada',
      }}

      onSubmit={async (values, { setSubmitting, setErrors, props }) => {
        console.log (values)

        // const data = new FormData ();
    
        // data.append ('desc', values.description);
        // data.append ('song_name', values.songName);
        // data.append ('song_genre', values.songGenre);
        // data.append ('song_file', values.songFile);
        // data.append ('lyrics_name', values.lyricsName);
        // data.append ('lyrics_genre', values.lyricsGenre);
        // data.append ('lyrics_file', values.lyricsFile);
    
        // try {
        //   await api.post ('/posts', data, {
        //     headers: {
        //       'Authorization': 'Bearer ' + localStorage.userToken,
        //       'Content-Type': 'multipart/form-data',
        //     }
        //   });
        //   alert ('Idéia compartilhada com sucesso!');
        //   props.history.push ('/');
        // } catch (error) {
        //   setSubmitting (false);
    
        //   error.status 
        //   ? setErrors ({message: error.response.data.message})
        //   : setErrors ({message: 'A comunicação com o servidor falhou'});
        // }
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
                rows='6'
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
                ? <div>
                    <LoadingAnimation/>
                  </div>
                : 'Salvar alterações'
              }
            </Submit>
          </form>
        );
      }}
    />
  );
}
