import React from 'react';
import BlockControl from '../block.control/block.control';

const ControlsPanel: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-basic">
      <BlockControl title={'Headline'} type={'headline'} />
      <BlockControl title={'Paragraph'} type={'paragraph'} />
      <BlockControl title={'Button'} type={'button'} />
      <BlockControl title={'Image'} type={'image'} />
    </div>
  );
};

export default ControlsPanel;
