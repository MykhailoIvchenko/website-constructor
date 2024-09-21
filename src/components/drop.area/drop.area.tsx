import React from 'react';
import { useDrop } from 'react-dnd';
import classNames from 'classnames';

type DropAreaProps = {
  children: ReactChildrenType;
};

const DropArea: React.FC<DropAreaProps> = ({ children }) => {
  const onDrop = (item: any) => {
    console.log('Handle drop ');
    console.log(item);
  };

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: ['headline', 'paragraph', 'button', 'image'],
    drop: (item, monitor) => {
      if (monitor.didDrop()) {
        return;
      }

      onDrop(item);
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
