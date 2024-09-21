import { useAppDispatch } from '../helper.hooks';
import { addBlock } from '../../slices/constructor.blocks.slice';
import { Dispatch } from 'react';

const useAddBlockDispatch = (): Dispatch<IConstructorBlock> => {
  const dispatch = useAppDispatch();

  const addConstructorBlock = (block: IConstructorBlock) =>
    dispatch(addBlock(block));

  return addConstructorBlock;
};

export default useAddBlockDispatch;
