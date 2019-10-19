import React, { useState } from 'react';
import api from '../../../services/api';
import download from 'downloadjs';
import { Container, DownloadButton } from './styles';

import {
  ReactComponent as Loading
} from '../../../icons/loading.svg';

export default function PostItem ({ item, type }) {
  const [ loading, setLoading ] = useState (false);

  const handleDownload = async () => {
    setLoading (true)
    let url = '';

    switch (type) {
      case 'song': url = `/songs/${item.id}`; break;
      case 'lyric': url = `/lyrics/${item.id}`; break;
      default: break;
    }

    const response = await api.get (url, {responseType: 'blob'});
    const { data } = response
    setLoading (false)

    download (data, item.filename);
  }

  return (
    <Container>
      <div>
        <div>
          {type === 'song' && <i className='fas fa-music'/>}
          {type === 'lyric' && <i className='fas fa-file-alt'/>}
          <p> {item.name} </p>
        </div>
        <div>
          <i className='fas fa-headphones'/>
          <p> {item.genre} </p>
        </div>
      </div>
      <DownloadButton onClick={handleDownload}> 
        {loading
          ? <div> <Loading/> </div>
          : <i className='fas fa-download'/>
        }
      </DownloadButton>
    </Container>
  );
}
