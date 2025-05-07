import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import modalSlice from "./slice/modalSlice";
import movieSlice from "./slice/movieSlice";
import lazySlice from "./slice/lazySlice";

export const store = configureStore({
    reducer:{
        userSlice,
        modalSlice,
        movieSlice,
        lazySlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})