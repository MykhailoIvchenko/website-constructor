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
    updateBlockContent: (
      state: ConstructorBlocks,
      action: PayloadAction<IConstructorBlockUpdateData>
    ) => {
      return state.map((block) =>
        block.id === action.payload.id
          ? {
              ...block,
              content: action.payload.content,
            }
          : block
      );
    },
  },
});

export const selectConstructorBlocks = (state: RootState) =>
  state.constructorBlocks;

export const { addBlock, updateBlockContent } = constructorBlocksSlice.actions;

export default constructorBlocksSlice.reducer;
