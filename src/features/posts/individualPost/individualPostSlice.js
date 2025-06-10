import { createSlice } from '@reduxjs/toolkit';

const individualPostSlice = createSlice({
  name: 'individualPostId',
  initialState: '',
  reducers: {
    changeActivePostId: (state, action) => (state = action.payload),
  },
});

export default individualPostSlice.reducer;
export const { changeActivePostId } = individualPostSlice.actions;
