import { createSlice } from "@reduxjs/toolkit";

type Theme = "light" | "dark";

interface ThemeSlice {
  modeTheme: Theme;
}

const initialState: ThemeSlice = {
  modeTheme: (localStorage.getItem("theme") as Theme) || "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeMode(state) {
      const newTheme = state.modeTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      state.modeTheme = newTheme;
    },
  },
});

export const { setThemeMode } = themeSlice.actions;
export default themeSlice.reducer;
