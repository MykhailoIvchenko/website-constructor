import React from 'react';

type BlockRenderContainerProps = {
  children: ReactChildrenType;
};

const BlockRenderContainer: React.FC<BlockRenderContainerProps> = ({
  children,
}) => {
  return (
    <div className="w-full mb-medium text-center flex justify-center">
      {children}
    </div>
  );
};

export default BlockRenderContainer;
