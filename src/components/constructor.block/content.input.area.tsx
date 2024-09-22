import React, { useCallback } from 'react';
import useUpdateBlockContentDispatch from '../../redux/hooks/dispatch.hooks/use.update.block.content.dispatch';

type ContentInputAreaProps = {
  content: string;
  id: string;
};

const ContentInputArea: React.FC<ContentInputAreaProps> = ({ content, id }) => {
  const updateBlock = useUpdateBlockContentDispatch(id);

  const updateContent = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      updateBlock(event.target.value);
    },
    []
  );

  return (
    <div className="w-full p-tiny rounded-sm bg-bg-main">
      <input
        value={content}
        placeholder="Write the block content here"
        className="w-full border-2 border-[#e4e6f1] rounded-sm h-8 p-tiny"
        onChange={updateContent}
      />
    </div>
  );
};

export default ContentInputArea;
