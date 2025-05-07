import React, { useEffect, useState } from 'react'
import MovieList from '../../components/movieList/MovieList'
import { useSelector } from 'react-redux';

const Movie = () => {
    const { movieList } = useSelector(state => state.movieSlice);
    const [data, setData] = useState({
        showingList: null,
        comingList: null,
      });
    useEffect(()=>{
        let comingList = movieList.filter(item=>item.sapChieu===true);
        let showingList = movieList.filter(item=>item.dangChieu===true);
        setData({showingList,comingList});
    },[movieList])
    return (
        <section className="section" id='phim'>
            <div className="container movie">
                <div className="movie__showing ">
                    <h2 className="title mb-2">
                        PHIM ĐANG CHIẾU
                    </h2>
                    <MovieList movieList={data.showingList}/>
                </div>
                <div className="movie__coming">
                    <h2 className="title mb-2">
                        PHIM SẮP CHIẾU
                    </h2>
                    <MovieList movieList={data.comingList}/>
                </div>
            </div>
        </section>
    )
}

export default Movie