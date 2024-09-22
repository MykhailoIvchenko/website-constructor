import HeadlineBlockRenderer from '../components/headline.block.renderer/headline.block.renderer';
import ParagraphBlockRenderer from '../components/paragraph.block.renderer/paragraph.block.renderer';
import ImageBlockRenderer from '../components/image.block.renderer/image.block.renderer';
import ButtonBlockRenderer from '../components/button.block.renderer/button.block.renderer';

type UseRenderBlockType = () => (
  type: BlockType,
  content: string,
  id: string
) => ReactChildrenType | null;

export const useRenderBlock: UseRenderBlockType = () => {
  const renderBlock = (
    type: BlockType,
    content: string,
    id: string
  ): ReactChildrenType | null => {
    if (!content) {
      return null;
    }

    switch (type) {
      case 'headline':
        return <HeadlineBlockRenderer content={content} key={id} />;
      case 'paragraph':
        return <ParagraphBlockRenderer content={content} key={id} />;
      case 'button':
        return <ButtonBlockRenderer content={content} key={id} />;
      case 'image':
        return <ImageBlockRenderer imageUrl={content} key={id} />;
      default:
        return <ParagraphBlockRenderer content={content} key={id} />;
    }
  };

  return renderBlock;
};
