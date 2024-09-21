import React from 'react';
import ContentInputArea from './content.input.area';
import classNames from 'classnames';
import { useRenderBlockTypeIcon } from '../../hooks/use.render.block.type';

type ConstructorBlockProps = {
  type: BlockType;
  title: string;
  content: string;
  id: string;
  index: number;
};

const ConstructorBlock: React.FC<ConstructorBlockProps> = ({
  title,
  type,
  content,
  id,
  index,
}) => {
  const renderIcon = useRenderBlockTypeIcon();

  const containerClass = classNames(
    'px-basic py-medium flex flex-col ' +
      'justify-between items-center w-full rounded-lg ' +
      'mb-medium min-h-[84px] cursor-pointer relative',
    {
      'bg-bg-main': id !== '1',
      'bg-bg-active': id === '1',
    }
  );

  return (
    <div className={containerClass}>
      <div className="h-full w-full flex flex-col gap-basic justify-center items-center">
        {renderIcon(type)}

        <span className="text-sm">{title}</span>

        {id === '1' && <ContentInputArea content={content} id={id} />}
      </div>
    </div>
  );
};

export default ConstructorBlock;
