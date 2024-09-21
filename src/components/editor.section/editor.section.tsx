import classNames from 'classnames';
import React from 'react';

type EditorSectionProps = {
  width: number;
  isColoredBg?: boolean;
  children: ReactChildrenType;
};

const EditorSection: React.FC<EditorSectionProps> = ({
  width,
  isColoredBg = false,
  children,
}) => {
  const sectionClasses = classNames(
    `h-editor overflow-auto w-full p-large min-w-[270px]`,
    {
      'md:w-[19%]': width === 19,
      'md:w-[37%]': width === 37,
      'md:w-[44%]': width === 44,
      'bg-bg-secondary': isColoredBg,
    }
  );

  return <section className={sectionClasses}>{children}</section>;
};

export default EditorSection;
