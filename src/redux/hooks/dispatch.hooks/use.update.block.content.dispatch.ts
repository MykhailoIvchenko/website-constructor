import { useAppDispatch } from '../helper.hooks';
import { updateBlockContent } from '../../slices/constructor.blocks.slice';
import { Dispatch } from 'react';

type UseUpdateBlockContentDispatchType = (id: string) => Dispatch<string>;

const useUpdateBlockContentDispatch: UseUpdateBlockContentDispatchType = (
  id
) => {
  const dispatch = useAppDispatch();

  const updateBlock = (content: string) =>
    dispatch(
      updateBlockContent({
        id,
        content,
      })
    );

  return updateBlock;
};

export default useUpdateBlockContentDispatch;
