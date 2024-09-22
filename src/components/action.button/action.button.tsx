import classNames from 'classnames';

type ActionButtonProps = {
  tooltip: string;
  children: ReactChildrenType;
  isColoredBg?: boolean;
  clickHandler: () => void;
  index?: number;
};

const ActionButton: React.FC<ActionButtonProps> = ({
  tooltip,
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
    <button
      className={buttonClasses}
      type="button"
      onClick={clickHandler}
      title={tooltip}
    >
      {children}
    </button>
  );
};

export default ActionButton;
