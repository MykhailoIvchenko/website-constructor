import React from 'react';
import CustomIcon from '../custom.icon/custom.icon';

const ArrowDownIcon: React.FC = () => {
  return (
    <CustomIcon width={15} height={15} stroke={'none'}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.875 11.6162V1.24999H8.125V11.6162L12.0581 7.68312L12.9419 8.56687L7.5 14.0087L2.05813 8.56687L2.94188 7.68312L6.875 11.6162Z"
        fill="white"
      />
    </CustomIcon>
  );
};

export default ArrowDownIcon;
