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
    filterBySongs,
    filterByLyrics,
    orderByRatings,
    orderByRecent,
    orderByOldest
  ])

  const hasSongs = post => {
    return post.songs.length > 0; 
  }

  const hasLyrics = post => {
    return post.lyrics.length > 0; 
  }

  const getAverageRating = post => {
    const avg = post.ratings.length > 0 ?
      post.ratings.map (rating => {
        return rating.value;
      }).reduce ((total, num) => {
        return total + num;
      }) / post.ratings.length
    : 0;
    return Math.round (avg * 10) / 10;
  }

  const filterPosts = () => {
    let filtered = posts;

    if (filterBySongs) 
      filtered = filtered.filter (post => {
        if (filterByLyrics)
          return hasSongs (post) && hasLyrics (post);
        return hasSongs (post) && (!hasLyrics (post));
      });
    
    if (filterByLyrics)
      filtered = filtered.filter (post => {
        if (filterBySongs)
          return hasLyrics (post) && hasSongs (post);
        return hasLyrics (post) && (!hasSongs (post));
      });

    if (orderByRatings)
      filtered = [...filtered].sort ((a, b) => {
        return getAverageRating (b) - getAverageRating (a);
      })

    if (orderByOldest) {
      filtered = [...filtered].sort ((a, b) => {
        return new Date (a.created_at) - new Date (b.created_at)
      })
    }

    if (orderByRecent) {
      filtered = [...filtered].sort ((a, b) => {
        return new Date (b.created_at) - new Date (a.created_at)
      })
    }

    onChange (filtered);
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
