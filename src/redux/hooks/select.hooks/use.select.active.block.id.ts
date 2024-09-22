import { selectActiveBlockId } from '../../slices/active.block.id.slice';
import { useAppSelector } from '../helper.hooks';

type UseSelectActiveBlockIdType = () => string;

export const useSelectActiveBlockId: UseSelectActiveBlockIdType = () => {
  const activeBlockId = useAppSelector(selectActiveBlockId);

  return activeBlockId || '';
};
