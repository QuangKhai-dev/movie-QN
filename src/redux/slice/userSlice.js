import { createSlice } from '@reduxjs/toolkit'
import { loginThunk, registerThunk } from '../thunk/userThunk';
import { userLocalStorage } from '../../utils/config';
import { message } from 'antd';

const initialState = {
  user: userLocalStorage.get()
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
      userLocalStorage.set(payload);
      state.user = payload;
      message.success('Đăng nhập thành công');
    })
    builder.addCase(loginThunk.rejected, (state, { payload }) => {
      message.error(payload);
    })
    builder.addCase(registerThunk.fulfilled,(state)=>{
      message.success('Đăng ký thành công');
    })
    builder.addCase(registerThunk.rejected,(state,{payload})=>{
      message.error(payload);
    })
  }
});

export default userSlice.reducer