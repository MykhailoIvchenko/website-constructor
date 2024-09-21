import classNames from 'classnames';
import React from 'react';

type ActionButtonProps = {
  children: ReactChildrenType;
  isColoredBg?: boolean;
  clickHandler: () => void;
};

const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  isColoredBg = false,
  clickHandler,
}) => {
  const buttonClasses = classNames(
    `w-[20px] h-[20px] flex justify-center items-center cursor:pointer`,
    `active:scale-y-95 border-0 rounded-sm`,
    {
      'bg-btn-clone': isColoredBg,
    }
  );

  return (
    <button className={buttonClasses} type={'button'} onClick={clickHandler}>
      {children}
    </button>
  );
};

export default ActionButton;
