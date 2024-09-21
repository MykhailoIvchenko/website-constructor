import HeadlineIcon from '../components/icons/headline.icon';
import ImageIcon from '../components/icons/image.icon';
import ParagraphIcon from '../components/icons/paragragh.icon';

type UseRenderBlockTypeIconType = () => (type: BlockType) => ReactChildrenType;

export const useRenderBlockTypeIcon: UseRenderBlockTypeIconType = () => {
  const renderIcon = (type: BlockType): ReactChildrenType => {
    switch (type) {
      case 'headline':
        return <HeadlineIcon />;
      case 'paragraph':
        return <ParagraphIcon />;
      case 'button':
      case 'image':
        return <ImageIcon />;
      default:
        return <ImageIcon />;
    }
  };

  return renderIcon;
};
