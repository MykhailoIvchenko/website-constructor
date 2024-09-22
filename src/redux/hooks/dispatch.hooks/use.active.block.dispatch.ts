import { useAppDispatch } from '../helper.hooks';
import { set } from '../../slices/active.block.id.slice';
import { Dispatch } from 'react';

type UseActiveBlockIdDispatchType = () => Dispatch<string>;

const useActiveBlockIdDispatch: UseActiveBlockIdDispatchType = () => {
  const dispatch = useAppDispatch();

  const setActiveBlockId = (blockId: string) => dispatch(set(blockId));

  return setActiveBlockId;
};

export default useActiveBlockIdDispatch;
