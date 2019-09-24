import React, { useState, useEffect } from 'react';
import { Container, FilterGroup, Filter } from './styles';

export default function Filters ({ posts, onChange }) {
  const [ filterBySongs, setFilterBySongs ] = useState (false);
  const [ filterByLyrics, setFilterByLyrics ] = useState (false);
  const [ orderByRatings, setOrderByRatings ] = useState (false);
  const [ orderByRecent, setOrderByRecent ] = useState (true);
  const [ orderByOldest, setOrderByOldest ] = useState (false);

  useEffect (() => {
    filterPosts ();
  }, [
    posts,
    filterBySongs,
    filterByLyrics,
    orderByRatings,
    orderByRecent,
    orderByOldest
  ])

  const filterPosts = () => {
    let content = '';
    let order = '';

    if (filterBySongs) content = '&content=songs';
    if (filterByLyrics) content = '&content=lyrics';
    if (filterBySongs && filterByLyrics) content = '&content=both';
    
    if (orderByRatings) order = '&order=ratings';
    if (orderByOldest) order = '&order=old';
    if (orderByRecent) order = '';

    onChange (`${content + order}`);
  }

  return (
    <Container>
      <h3> Filtrar publicações </h3>

      <FilterGroup>
        <h4> Ordenar por... </h4>

        <Filter>
          <input
            type='radio'
            name='radio'
            checked={orderByRatings}
            onChange={e => {
              setOrderByRecent (false)
              setOrderByOldest (false)
              setOrderByRatings (e.target.checked)
            }}
          />
          <p> Melhor avaliadas </p>
        </Filter>

        <Filter>
          <input
            type='radio'
            name='radio'
            checked={orderByRecent}
            onChange={e => {
              setOrderByRatings (false)
              setOrderByOldest (false)
              setOrderByRecent (e.target.checked);
            }}
          />
          <p> Mais recentes </p>
        </Filter>

        <Filter>
          <input
            type='radio'
            name='radio'
            checked={orderByOldest}
            onChange={e => {
              setOrderByRecent (false)
              setOrderByRatings (false)
              setOrderByOldest (e.target.checked);
            }}
          />
          <p> Mais antigas </p>
        </Filter>
      </FilterGroup>
      
      <FilterGroup>
        <h4> Conteúdo </h4>

        <Filter>
          <input
            type='checkbox'
            checked={filterBySongs}
            onChange={e => setFilterBySongs (e.target.checked)}
          />
          <p> Músicas </p>
        </Filter>

        <Filter>
          <input
            type='checkbox'
            checked={filterByLyrics}
            onChange={e => setFilterByLyrics (e.target.checked)}
          />
          <p> Letras </p>
        </Filter>
      </FilterGroup>
    </Container>
  );
}
