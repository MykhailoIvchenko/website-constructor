import React from 'react';
import ConstructorBlock from '../constructor.block/constructor.block';
import DropArea from '../drop.area/drop.area';
import { useSelectConstructorBlocks } from '../../redux/hooks/select.hooks/use.select.constructor.blocks';

const ConstructorPanel: React.FC = () => {
  const blocks: ConstructorBlocks = useSelectConstructorBlocks();

  return (
    <div className="relative h-full">
      <DropArea>
        {blocks.map((block, i) => (
          <ConstructorBlock
            key={block.id}
            title={block.title}
            type={block.type}
            content={block.content}
            id={block.id}
            index={i}
          />
        ))}
      </DropArea>
    </div>
  );
};

export default ConstructorPanel;
