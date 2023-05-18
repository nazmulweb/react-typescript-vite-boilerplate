import { createSlice } from '@reduxjs/toolkit';
import { themeConfig } from '../../configs/theme.config';

interface InitialStateInterfase {
  mode: string;
}

const initialState: InitialStateInterfase = {
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
