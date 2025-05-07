import React from 'react';

import { openModal } from '../../redux/slice/modalSlice';
import { store } from '../../redux/store';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {

    const navigate = useNavigate();

    return (
        <div className='movie-card'>
            <img className="movie-card__img" src={movie.hinhAnh} alt='movie'></img>
            <div className="movie-card__btns">
                <button className='btns btns-orange mb-2'
                    onClick={() => store.dispatch(openModal(movie.trailer))}>
                    Xem trailer
                </button>
                <button className='btns btns-outline-orange' onClick={()=>navigate(`/chitiet/${movie.maPhim}`)}>
                    Xem chi tiết
                </button>
            </div>
            <h3>Check</h3>
        </div>
    );
}

export default MovieCard;