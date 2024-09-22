import { useAppDispatch } from '../helper.hooks';
import { deleteBlock } from '../../slices/constructor.blocks.slice';
import { Dispatch } from 'react';

type UseDeleteBlockDispatchType = (id: string) => Dispatch<void>;

const useDeleteBlockDispatch: UseDeleteBlockDispatchType = (id) => {
  const dispatch = useAppDispatch();

  const deleteSelectedBlock = () => dispatch(deleteBlock(id));

  return deleteSelectedBlock;
};

export default useDeleteBlockDispatch;
