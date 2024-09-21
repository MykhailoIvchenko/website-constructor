import React from 'react';
import ActionButton from '../action.button/action.button';
import ArrowUpIcon from '../icons/arrow.up.icon';
import ArrowDownIcon from '../icons/arrow.down.icon';
import ActionsTab from '../actions.tab/actions.tab';
import CopyIcon from '../icons/copy.icon';
import DeleteIcon from '../icons/delete.icon';

type ActionsTabsContainerProps = {
  id: string;
};

const ActionsTabsContainer: React.FC<ActionsTabsContainerProps> = ({ id }) => {
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
        <ActionButton clickHandler={() => {}} isColoredBg={true}>
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
