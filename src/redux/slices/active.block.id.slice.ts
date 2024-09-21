import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState: string | null = null;

export const activeBlockIdSlice = createSlice({
  name: 'activeBlockId',
  initialState,
  reducers: {
    //@ts-ignore
    set: (_state: string | null, action: PayloadAction<string | null>) =>
      action.payload,
  },
});

export const selectNotification = (state: RootState) => state.activeBlockId;

export const { set } = activeBlockIdSlice.actions;

export default activeBlockIdSlice.reducer;
