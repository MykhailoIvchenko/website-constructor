import classNames from 'classnames';
import React from 'react';

type ActionsTabProps = {
  children: ReactChildrenType;
  isSecondaryTabBg?: true;
};

const ActionsTab: React.FC<ActionsTabProps> = ({
  children,
  isSecondaryTabBg = false,
}) => {
  const tabClasses = classNames(
    `rounded-t-md rounded-b-0 p-tiny flex gap-tiny`,
    {
      'bg-tab-main': !isSecondaryTabBg,
      'bg-tab-secondary': isSecondaryTabBg,
    }
  );

  return <div className={tabClasses}>{children}</div>;
};

export default ActionsTab;
