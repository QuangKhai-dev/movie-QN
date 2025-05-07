import { createSlice } from '@reduxjs/toolkit'
import { getVideoId } from '../../utils/getVideoId';

const initialState = {
    trailer: {
        isOpen: false,
        urlYoutube: ''
    }
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state,{payload})=>{
            console.log()
            state.trailer = {urlYoutube:`https://www.youtube.com/embed/${getVideoId(payload)}?autoplay=1`,isOpen: true}
        },
        closeModal: (state)=>{
            console.log()
            state.trailer = {urlYoutube:'',isOpen: false}
        }
    }
});

export const {openModal,closeModal} = modalSlice.actions

export default modalSlice.reducer;