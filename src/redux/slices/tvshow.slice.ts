import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    tvshows: [],
    page: 0,
    pages: 0,
    total: null,
};

const tvShowSlice = createSlice({
    name: "tvshow",
    initialState,
    reducers: {
        setTvShows: (state, action: PayloadAction<any>) => {
            state.tvshows = action.payload.tv_shows;
            state.page = action.payload.page;
            state.pages = action.payload.pages;
            state.total = action.payload.total;

        }
    }
});
export const { setTvShows } = tvShowSlice.actions;
export default tvShowSlice.reducer;