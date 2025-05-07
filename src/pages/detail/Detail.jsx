import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getMovieByIdThunk } from '../../redux/thunk/movieThunk';

const Detail = () => {

    const param = useParams();
    const dispatch = useDispatch();
    const {movieDetail} = useSelector(state=>state.movieSlice);
    console.log(movieDetail);
    useEffect(()=>{
        dispatch(getMovieByIdThunk(param.id));
    },[])

    return (
        <div>Detail</div>
    )
}

export default Detail