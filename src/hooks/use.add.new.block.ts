import { v4 as uuidv4 } from 'uuid';
import { BlockTitles } from '../utils/enums';
import useAddBlockDispatch from '../redux/hooks/dispatch.hooks/use.add.block.dispatch';

type UseAddNewBlockType = () => AddNewBlockType;

export const useAddNewBlock: UseAddNewBlockType = () => {
  const addBlock = useAddBlockDispatch();

  const addNewBlock: AddNewBlockType = (type) => {
    const newBlock: IConstructorBlock = {
      type: 'paragraph',
      content: '',
      id: uuidv4(),
      title: '',
    };

    switch (type) {
      case 'headline':
        newBlock.title = BlockTitles.Headline;
        newBlock.type = 'headline';
        break;
      case 'button':
        newBlock.title = BlockTitles.Button;
        newBlock.type = 'button';
        break;
      case 'image':
        newBlock.title = BlockTitles.Image;
        newBlock.type = 'image';
        break;
      case 'paragraph':
        newBlock.title = BlockTitles.Paragraph;
        newBlock.type = 'paragraph';
        break;
      default:
        newBlock.title = BlockTitles.Paragraph;
        newBlock.type = 'paragraph';
        break;
    }

    addBlock(newBlock);
  };

  return addNewBlock;
};
