import { useAppDispatch } from '../helper.hooks';
import { set } from '../../slices/constructor.blocks.slice';
import { Dispatch } from 'react';

const useConstructorBlocksDispatch = (): Dispatch<ConstructorBlocks> => {
  const dispatch = useAppDispatch();

  const setConstructorBlocks = (blocks: ConstructorBlocks) =>
    dispatch(set(blocks));

  return setConstructorBlocks;
};

export default useConstructorBlocksDispatch;
