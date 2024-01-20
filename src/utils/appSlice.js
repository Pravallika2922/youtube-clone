import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpenFlag: true,
    videos: [],
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpenFlag = !state.isMenuOpenFlag;
    },
    addVideos: (state, action) => {
      state.videos = action.payload;
    },
    closeMenu: (state) => {
      state.isMenuOpenFlag = false;
    },
  },
});
export default appSlice.reducer;
export const { toggleMenu, addVideos, closeMenu } = appSlice.actions;
