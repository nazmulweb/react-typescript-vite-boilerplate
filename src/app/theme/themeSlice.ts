import { createSlice } from '@reduxjs/toolkit';
import { themeConfig } from '../../configs/theme.config';

interface initialStateInterfase {
  mode: String;
}

const initialState: initialStateInterfase = {
  mode: themeConfig.mode,
};

const themeSlice: any = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { setMode } = themeSlice.actions;
export default themeSlice.reducer;
