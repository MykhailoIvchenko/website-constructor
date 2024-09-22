import { useAppDispatch } from '../helper.hooks';
import {
  moveBlockDown,
  moveBlockUp,
} from '../../slices/constructor.blocks.slice';
import { Dispatch } from 'react';

type UseMoveBlockDispatchType = () => {
  moveUp: Dispatch<number>;
  moveDown: Dispatch<number>;
};

const useMoveBlockDispatch: UseMoveBlockDispatchType = () => {
  const dispatch = useAppDispatch();

  const moveUp: Dispatch<number> = (index: number) =>
    dispatch(moveBlockUp(index));

  const moveDown: Dispatch<number> = (index: number) =>
    dispatch(moveBlockDown(index));

  return {
    moveUp,
    moveDown,
  };
};

export default useMoveBlockDispatch;
