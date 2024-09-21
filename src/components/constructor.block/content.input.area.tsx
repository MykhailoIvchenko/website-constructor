import React from 'react';

type ContentInputAreaProps = {
  content: string;
  id: string;
};

const ContentInputArea: React.FC<ContentInputAreaProps> = ({ content, id }) => {
  return (
    <div className="w-full p-tiny rounded-sm bg-bg-main">
      <input
        value={content}
        placeholder="Write the block content here"
        className="w-full border-2 border-[#e4e6f1] rounded-sm h-8 p-tiny"
      />
    </div>
  );
};

export default ContentInputArea;
