import React from 'react';
import BlockRenderContainer from '../block.render.container/block.render.container';

type ButtonBlockRendererProps = {
  content: string;
};

const buttonClasses =
  'text-bg-controls bg-[#4368E0] flex justify-center' +
  'items-center rounded-md border-none outline-none' +
  'cursor-pointer px-large py-basic hover:bg-[#3a5bbd]';

const ButtonBlockRenderer: React.FC<ButtonBlockRendererProps> = ({
  content,
}) => {
  return (
    <BlockRenderContainer>
      <button className={buttonClasses}>{content}</button>
    </BlockRenderContainer>
  );
};

export default ButtonBlockRenderer;
