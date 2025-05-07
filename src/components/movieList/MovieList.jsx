import React from "react";
import Slider from "react-slick";
import MovieCard from "../movieCard/MovieCard";

const MovieList = ({ movieList }) => {

  var settings = {

    infinite: false,
    speed: 500,
    pauseOnHover: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    arrow: false,
    responsive: [
      {
        breakpoint: 1330,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const renderMovieList = () => {
    return movieList?.map((movie, index) => (
      <div key={index}>
        <MovieCard movie={movie} />
      </div>
    ))
  }

  return (
    <div>
      <Slider {...settings}>
        {renderMovieList()}
      </Slider>
    </div>
  );
}


export default MovieList;