import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import { getUserID, getUserName } from '../../../services/auth';
//import { Link } from 'react-router-dom';
import AdList from '../../../components/List/AdList';
import { Banner, Feed } from '../styles';

export default function CompanyProfile () {
  const [ ads, setAds ] = useState ([]);
  const [ loading, setLoading ] = useState (true);
  const [ page, setPage ] = useState (1);
  const [ lastPage, setLastPage ] = useState (0);

  useEffect (() => {
    getAds ();
  }, []);

  const getAds = async (pageNumber = page) => {
    try {
      const response = await api.get (
        `/profiles/company/${getUserID ()}?page=${pageNumber}`
      );
      const { data, lastPage } = response.data;

      pageNumber > 1 ? setAds ([...ads, ...data]) : setAds (data);
      console.log (ads)
      setPage (pageNumber + 1);
      setLastPage (lastPage);
      setLoading (false);
    } catch (error) {
      console.log (error);
    }
  }

  const isLastPage = () => lastPage && page > lastPage;

  return (
    <>
      <Banner>
        <h2> {getUserName ()} </h2>
        <h3> Veja aqui todas as suas propostas de anúncio </h3>
      </Banner>
      <Feed>
        <AdList
          ads={ads}
          loading={loading}
          onScroll={() => getAds ()}
          isLastPage={isLastPage ()}
        />
      </Feed>
    </>
  );
}
