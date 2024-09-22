import React, { useCallback } from 'react';
import useUpdateBlockContentDispatch from '../../redux/hooks/dispatch.hooks/use.update.block.content.dispatch';
import classNames from 'classnames';

type ContentInputAreaProps = {
  content: string;
  id: string;
  isImage?: boolean;
};

const ContentInputArea: React.FC<ContentInputAreaProps> = ({
  content,
  id,
  isImage = false,
}) => {
  const updateBlock = useUpdateBlockContentDispatch(id);

  const uploadImage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event?.target?.files) {
        const image = event.target.files[0];

        const reader = new FileReader();

        reader.addEventListener(
          'load',
          () => {
            if (typeof reader.result === 'string') {
              updateBlock(reader.result);
            }
          },
          false
        );

        reader.readAsDataURL(image);
      }
    },
    []
  );

  const updateContent = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (isImage) {
        uploadImage(event);
      } else {
        updateBlock(event.target.value);
      }
    },
    []
  );

  const inputClasses = classNames(
    'w-full border-2 border-[#e4e6f1] rounded-sm p-tiny',
    {
      'h-11': isImage,
      'h-8': !isImage,
    }
  );

  return (
    <div className="w-full p-tiny rounded-sm bg-bg-main">
      <input
        value={isImage ? '' : content}
        placeholder="Write the block content here"
        className={inputClasses}
        onChange={updateContent}
        type={isImage ? 'file' : 'text'}
      />
    </div>
  );
};

export default ContentInputArea;
