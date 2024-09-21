import React from 'react';
import { useRenderBlock } from '../../hooks/use.render.block';

const RenderPanel: React.FC = () => {
  const renderBlock = useRenderBlock();
  const blocks: ConstructorBlocks = [];

  return (
    <div className="px-medium">
      {blocks.map((block, i) =>
        renderBlock(block.type, block.content, i.toString())
      )}
    </div>
  );
};

export default RenderPanel;
