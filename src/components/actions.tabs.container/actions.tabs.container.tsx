import React, { useCallback } from 'react';
import ActionButton from '../action.button/action.button';
import ArrowUpIcon from '../icons/arrow.up.icon';
import ArrowDownIcon from '../icons/arrow.down.icon';
import ActionsTab from '../actions.tab/actions.tab';
import CopyIcon from '../icons/copy.icon';
import DeleteIcon from '../icons/delete.icon';
import { useCloneBlock } from '../../hooks/use.clone.block.dispatch';
import useDeleteBlockDispatch from '../../redux/hooks/dispatch.hooks/use.delete.block.dispatch';
import useMoveBlockDispatch from '../../redux/hooks/dispatch.hooks/use.move.block.dispatch';

type ActionsTabsContainerProps = {
  block: IConstructorBlock;
  index: number;
};

const ActionsTabsContainer: React.FC<ActionsTabsContainerProps> = ({
  block,
  index,
}) => {
  const cloneBlock = useCloneBlock();
  const deleteBlock = useDeleteBlockDispatch(block.id);
  const { moveUp, moveDown } = useMoveBlockDispatch();

  const handleCloneBlockClick = useCallback(() => {
    cloneBlock(block);
  }, []);

  const handleMoveBlockUp = () => {
    if (index === 0) {
      return;
    }

    moveUp(index);
  };

  const handleMoveBlockDown = () => {
    moveDown(index);
  };

  return (
    <div
      className={`flex gap-tiny px-basic absolute top-0 right-0 -translate-y-full`}
    >
      <ActionsTab>
        <ActionButton clickHandler={handleMoveBlockDown}>
          <ArrowDownIcon />
        </ActionButton>

        <ActionButton clickHandler={handleMoveBlockUp}>
          <ArrowUpIcon />
        </ActionButton>
      </ActionsTab>

      <ActionsTab isSecondaryTabBg={true}>
        <ActionButton clickHandler={handleCloneBlockClick} isColoredBg={true}>
          <CopyIcon />
        </ActionButton>

        <ActionButton clickHandler={deleteBlock}>
          <DeleteIcon />
        </ActionButton>
      </ActionsTab>
    </div>
  );
};

export default ActionsTabsContainer;
