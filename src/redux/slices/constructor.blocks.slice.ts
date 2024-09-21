import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState: ConstructorBlocks = [];

export const constructorBlocksSlice = createSlice({
  name: 'constructorBlocks',
  initialState,
  reducers: {
    addBlock: (
      state: ConstructorBlocks,
      action: PayloadAction<IConstructorBlock>
    ) => {
      return [...state, action.payload];
    },
  },
});

export const selectConstructorBlocks = (state: RootState) =>
  state.constructorBlocks;

export const { addBlock } = constructorBlocksSlice.actions;

export default constructorBlocksSlice.reducer;
