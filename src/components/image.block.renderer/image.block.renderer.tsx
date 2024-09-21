import React from 'react';
import BlockRenderContainer from '../block.render.container/block.render.container';

type ImageBlockRendererProps = {
  imageUrl: string;
};

const ImageBlockRenderer: React.FC<ImageBlockRendererProps> = ({
  imageUrl,
}) => {
  return (
    <BlockRenderContainer>
      <img
        alt="Some image"
        src={imageUrl}
        className="w-full aspect-[16/9] object-cover rounded-md mh-[200px]"
      />
    </BlockRenderContainer>
  );
};

export default ImageBlockRenderer;
