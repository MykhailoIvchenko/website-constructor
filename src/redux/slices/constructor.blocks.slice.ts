import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState: ConstructorBlocks = [];

export const constructorBlocksSlice = createSlice({
  name: 'constructorBlocks',
  initialState,
  reducers: {
    //@ts-ignore
    set: (
      _state: ConstructorBlocks,
      action: PayloadAction<ConstructorBlocks>
    ) => action.payload,
  },
});

export const selectConstructorBlocks = (state: RootState) =>
  state.constructorBlocks;

export const { set } = constructorBlocksSlice.actions;

export default constructorBlocksSlice.reducer;
