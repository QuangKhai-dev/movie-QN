import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Banner from '../components/banner/Banner';
import Header from '../components/header/Header';
import SnowFall from '../components/snowFall/SnowFall';
import Movie from '../pages/movie/Movie';
import { getAllMovieThunk } from '../redux/thunk/movieThunk';
import Footer from '../components/footer/Footer';
import Application from '../pages/application/Application';

const HomeLayout = () => {


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMovieThunk());
  }, [])
  return (
    <>
      <SnowFall />
      <Header />
      <Banner />
      <Movie />
      <Application/>
      <Footer/>
    </>
  )
}

export default HomeLayout