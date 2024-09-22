import React from 'react';
import BlockControl from '../block.control/block.control';
import { BlockTitles } from '../../utils/enums';

const ControlsPanel: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-basic">
      <BlockControl title={BlockTitles.Headline} type={'headline'} />
      <BlockControl title={BlockTitles.Paragraph} type={'paragraph'} />
      <BlockControl title={BlockTitles.Button} type={'button'} />
      <BlockControl title={BlockTitles.Image} type={'image'} />
    </div>
  );
};

export default ControlsPanel;
