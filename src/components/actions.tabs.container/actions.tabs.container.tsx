import React, { useCallback } from 'react';
import ActionButton from '../action.button/action.button';
import ArrowUpIcon from '../icons/arrow.up.icon';
import ArrowDownIcon from '../icons/arrow.down.icon';
import ActionsTab from '../actions.tab/actions.tab';
import CopyIcon from '../icons/copy.icon';
import DeleteIcon from '../icons/delete.icon';
import { useCloneBlock } from '../../hooks/use.clone.block.dispatch';

type ActionsTabsContainerProps = {
  block: IConstructorBlock;
  index: number;
};

const ActionsTabsContainer: React.FC<ActionsTabsContainerProps> = ({
  block,
  index,
}) => {
  const cloneBlock = useCloneBlock();

  const handleCloneBlockClick = useCallback(() => {
    cloneBlock(block);
  }, []);

  return (
    <div
      className={`flex gap-tiny px-basic absolute top-0 right-0 -translate-y-full`}
    >
      <ActionsTab>
        <ActionButton clickHandler={() => {}}>
          <ArrowUpIcon />
        </ActionButton>

        <ActionButton clickHandler={() => {}}>
          <ArrowDownIcon />
        </ActionButton>
      </ActionsTab>

      <ActionsTab isSecondaryTabBg={true}>
        <ActionButton clickHandler={handleCloneBlockClick} isColoredBg={true}>
          <CopyIcon />
        </ActionButton>

        <ActionButton clickHandler={() => {}}>
          <DeleteIcon />
        </ActionButton>
      </ActionsTab>
    </div>
  );
};

export default ActionsTabsContainer;
