import constructorBlocksReducer from './slices/constructor.blocks.slice';
import activeBlockIdReducer from './slices/active.block.id.slice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    constructorBlocks: constructorBlocksReducer,
    activeBlockId: activeBlockIdReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
