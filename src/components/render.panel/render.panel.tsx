import React from 'react';
import { useRenderBlock } from '../../hooks/use.render.block';
import { useSelectConstructorBlocks } from '../../redux/hooks/select.hooks/use.select.constructor.blocks';

const RenderPanel: React.FC = () => {
  const renderBlock = useRenderBlock();
  const blocks: ConstructorBlocks = useSelectConstructorBlocks();

  return (
    <div className="px-medium">
      {blocks.map((block, i) =>
        renderBlock(block.type, block.content, i.toString())
      )}
    </div>
  );
};

export default RenderPanel;
