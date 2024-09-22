import React from 'react';
import BlockRenderContainer from '../block.render.container/block.render.container';

type HeadlineBlockRendererProps = {
  content: string;
};

const HeadlineBlockRenderer: React.FC<HeadlineBlockRendererProps> = ({
  content,
}) => {
  return (
    <BlockRenderContainer>
      <h1 className="font-bold text-xl">{content}</h1>
    </BlockRenderContainer>
  );
};

export default HeadlineBlockRenderer;
