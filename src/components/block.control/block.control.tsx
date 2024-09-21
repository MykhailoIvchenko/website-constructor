import React from 'react';
import { useDrag } from 'react-dnd';
import classNames from 'classnames';
import { useRenderBlockTypeIcon } from '../../hooks/use.render.block.type';

type BlockControlProps = {
  type: BlockType;
  title: string;
};

const BlockControl: React.FC<BlockControlProps> = ({ title, type }) => {
  const renderIcon = useRenderBlockTypeIcon();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: type,
    item: { id: type, type: type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const containerClass = classNames(
    'px-basic py-medium rounded-md bg-bg-controls min-w-[100px] aspect-[100/83] cursor-pointer active:cursor-grabbing',
    {
      'opacity-50': isDragging,
    }
  );

  return (
    <div className={containerClass} ref={drag}>
      <div className="h-full flex flex-col gap-basic justify-center items-center">
        {renderIcon(type)}

        <span className="text-sm">{title}</span>
      </div>
    </div>
  );
};

export default BlockControl;
