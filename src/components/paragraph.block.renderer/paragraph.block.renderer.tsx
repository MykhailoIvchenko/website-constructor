import React from 'react';
import BlockRenderContainer from '../block.render.container/block.render.container';

type ParagraphBlockRendererProps = {
  content: string;
};

const ParagraphBlockRenderer: React.FC<ParagraphBlockRendererProps> = ({
  content,
}) => {
  return (
    <BlockRenderContainer>
      <p className="text-font-secondary">{content}</p>
    </BlockRenderContainer>
  );
};

export default ParagraphBlockRenderer;
