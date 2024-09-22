import React, { useCallback } from 'react';
import ContentInputArea from './content.input.area';
import classNames from 'classnames';
import { useRenderBlockTypeIcon } from '../../hooks/use.render.block.type';
import ActionsTabsContainer from '../actions.tabs.container/actions.tabs.container';
import { useSelectActiveBlockId } from '../../redux/hooks/select.hooks/use.select.active.block.id';
import useActiveBlockIdDispatch from '../../redux/hooks/dispatch.hooks/use.active.block.dispatch';

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
  const activeBlockId = useSelectActiveBlockId();
  const setActiveBlockId = useActiveBlockIdDispatch();

  const containerClass = classNames(
    'px-basic py-medium flex flex-col ' +
      'justify-between items-center w-full rounded-lg ' +
      'mb-medium min-h-[84px] cursor-pointer relative',
    {
      'bg-bg-main': id !== activeBlockId,
      'bg-bg-active': id === activeBlockId,
    }
  );

  const handleBlockClick = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    setActiveBlockId(id);
  }, []);

  return (
    <div className={containerClass} onClick={handleBlockClick}>
      {id === activeBlockId && <ActionsTabsContainer id={id} />}

      <div className="h-full w-full flex flex-col gap-basic justify-center items-center">
        {renderIcon(type)}

        <span className="text-sm">{title}</span>

        {id === activeBlockId && <ContentInputArea content={content} id={id} />}
      </div>
    </div>
  );
};

export default ConstructorBlock;
