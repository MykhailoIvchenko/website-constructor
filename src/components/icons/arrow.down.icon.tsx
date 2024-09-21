import React from 'react';
import CustomIcon from '../custom.icon/custom.icon';

const ArrowDownIcon: React.FC = () => {
  return (
    <CustomIcon width={15} height={15} stroke={'none'}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.125 3.38376V13.75H6.875V3.38376L2.94187 7.31688L2.05812 6.43313L7.5 0.991257L12.9419 6.43313L12.0581 7.31688L8.125 3.38376Z"
        fill="white"
      />
    </CustomIcon>
  );
};

export default ArrowDownIcon;
