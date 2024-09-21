import { useAppSelector } from '../helper.hooks';

type UseSelectActiveBlockIdType = () => string;

export const useSelectActiveBlockId: UseSelectActiveBlockIdType = () => {
  const activeBlockId = useAppSelector(useSelectActiveBlockId);

  return activeBlockId || '';
};
