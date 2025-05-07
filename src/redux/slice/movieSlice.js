import { createSlice } from '@reduxjs/toolkit'
import { getAllMovieThunk, getMovieByIdThunk } from '../thunk/movieThunk';

const initialState = {
    movieList: [],
    movieDetail:{},
    loadingMovie: false
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllMovieThunk.pending,(state)=>{
            state.loadingMovie = true;
        })
        builder.addCase(getAllMovieThunk.fulfilled, (state, { payload }) => {
            state.movieList = payload;
            state.loadingMovie = false;
        })
        builder.addCase(getAllMovieThunk.rejected, (state, { payload }) => {
            state.loadingMovie = true;
        })
        builder.addCase(getMovieByIdThunk.fulfilled,(state,{payload})=>{
            state.movieDetail = payload;
        })
    }
});

export default movieSlice.reducer;