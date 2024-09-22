import { v4 as uuidv4 } from 'uuid';
import useAddBlockDispatch from '../redux/hooks/dispatch.hooks/use.add.block.dispatch';

type UseCloneBlockType = () => CloneBlockType;

export const useCloneBlock: UseCloneBlockType = () => {
  const addBlock = useAddBlockDispatch();

  const cloneBclock: CloneBlockType = (block: IConstructorBlock) => {
    const newBlock: IConstructorBlock = {
      ...block,
      id: uuidv4(),
    };

    addBlock(newBlock);
  };

  return cloneBclock;
};
