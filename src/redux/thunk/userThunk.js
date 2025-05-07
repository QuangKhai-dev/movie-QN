import { createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../axios/modules/user.api";

export const loginThunk = createAsyncThunk(
    'login',
    async(user,{rejectWithValue})=>{
        try{
            const {data} = await userApi.login(user);
            return data.content;
        }catch(error){
            return rejectWithValue(error.response.data.content);
        }
    }
)

export const registerThunk = createAsyncThunk(
    'register',
    async(user,{rejectWithValue})=>{
        try{
            const {data} = await userApi.register(user);
            return data.content;
        }catch(error){
            return rejectWithValue(error.response.data.content);
        }
    }
)