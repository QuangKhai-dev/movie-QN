import { createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../axios/modules/movie.api";

export const getAllMovieThunk = createAsyncThunk(
    'getMovie',
    async () => {
        try {
            const { data } = await movieApi.getAllMovie();
            return data.content;
        } catch (error) {
            return error;
        }
    }
)

export const getMovieByIdThunk = createAsyncThunk(
    'getMovieById',
    async (idMovie,{rejectWithValue}) => {
        try {
            const { data } = await movieApi.getMovieById(idMovie);
            return data.content;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)
