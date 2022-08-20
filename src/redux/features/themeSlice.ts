import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

export type ThemeState = {
  darkTheme: boolean;
};

const initialState: ThemeState = {
  darkTheme: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state: ThemeState, actions) => {
      state.darkTheme = actions.payload;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const getThemeState = (state: { theme: ThemeState }) => state.theme;

export default themeSlice.reducer;
