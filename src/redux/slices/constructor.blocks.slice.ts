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
    deleteBlock: (state: ConstructorBlocks, action: PayloadAction<string>) => {
      return state.filter((block) => block.id !== action.payload);
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
    moveBlockUp: (state: ConstructorBlocks, action: PayloadAction<number>) => {
      if (action.payload === 0) {
        return;
      }

      //We can mutate the state in Redux toolkit, but the initial idea
      //is to make immutable changes, so the copy of array is created
      const newBlocksList = [...state];

      newBlocksList[action.payload] = state[action.payload - 1];
      newBlocksList[action.payload - 1] = state[action.payload];

      return newBlocksList;
    },
    moveBlockDown: (
      state: ConstructorBlocks,
      action: PayloadAction<number>
    ) => {
      if (action.payload === state.length - 1) {
        return;
      }

      //We can mutate the state in Redux toolkit, but the initial idea
      //is to make immutable changes, so the copy of array is created
      const newBlocksList = [...state];

      newBlocksList[action.payload + 1] = state[action.payload];
      newBlocksList[action.payload] = state[action.payload + 1];

      return newBlocksList;
    },
  },
});

export const selectConstructorBlocks = (state: RootState) =>
  state.constructorBlocks;

export const {
  addBlock,
  deleteBlock,
  updateBlockContent,
  moveBlockUp,
  moveBlockDown,
} = constructorBlocksSlice.actions;

export default constructorBlocksSlice.reducer;
