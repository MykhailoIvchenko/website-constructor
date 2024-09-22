import { selectConstructorBlocks } from '../../slices/constructor.blocks.slice';
import { useAppSelector } from '../helper.hooks';

type UseSelectConstructorBlocksType = () => ConstructorBlocks;

export const useSelectConstructorBlocks: UseSelectConstructorBlocksType =
  () => {
    const constructorBlocks = useAppSelector(selectConstructorBlocks);

    return constructorBlocks;
  };
