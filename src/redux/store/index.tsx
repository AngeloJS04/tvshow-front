import { configureStore } from "@reduxjs/toolkit"
import tvShowSlice from "../slices/tvshow.slice"

export const store = configureStore({
    reducer: {
        tvShow: tvShowSlice,
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch