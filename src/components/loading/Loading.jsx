import React from 'react';
import { useSelector } from 'react-redux';
import { GridLoader } from 'react-spinners';
import useHandleLazy from '../../hooks/useHandleLazy';

const Loading = () => {
  const isLazy = useHandleLazy();

  const { loadingMovie } = useSelector(state => state.movieSlice);

  const loading = isLazy || loadingMovie;
  

  return (
    <div className={`loading ${loading ? 'fadeIn visible' : 'fadeOut'}`}>
      <GridLoader color="#36d7b7" size={60} />
    </div>
  )
}

export default Loading