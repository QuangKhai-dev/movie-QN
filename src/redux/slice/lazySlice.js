import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLazy: false,
    isLoadingBackToHome: false,
  }

const lazySlice = createSlice({
  name: 'lazy',
  initialState,
  reducers: {
    lazyMount:(state)=>{
        state.isLazy = true;
    },
    lazyUnMount:(state)=>{
        state.isLazy = false;
    }
  }
});

export const {lazyMount,lazyUnMount} = lazySlice.actions

export default lazySlice.reducer