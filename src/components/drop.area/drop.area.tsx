import React from 'react';
import { useDrop } from 'react-dnd';
import classNames from 'classnames';
import { useAddNewBlock } from '../../hooks/use.add.new.block';

type DropAreaProps = {
  children: ReactChildrenType;
};

const DropArea: React.FC<DropAreaProps> = ({ children }) => {
  const addNewBlock = useAddNewBlock();

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: ['headline', 'paragraph', 'button', 'image'],

    drop: (item: { type: BlockType }, monitor) => {
      if (monitor.didDrop()) {
        return;
      }

      addNewBlock(item.type);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  const containerClass = classNames('h-full w-full', {
    'opacity-50': canDrop && !isOver,
    'opacity-90': isOver,
  });

  return (
    <div className={containerClass} ref={drop}>
      {children}
    </div>
  );
};

export default DropArea;
