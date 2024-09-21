import React from 'react';
import CustomIcon from '../custom.icon/custom.icon';

const ParagraphIcon: React.FC = () => {
  return (
    <CustomIcon width={25} height={25} stroke={'none'}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.1666 17.7083V19.7917H2.58331V17.7083H17.1666ZM23.4166 13.5417V15.625H2.58331V13.5417H23.4166ZM17.1666 9.37501V11.4583H2.58331V9.37501H17.1666ZM23.4166 5.20834V7.29168H2.58331V5.20834H23.4166Z"
        fill="#97AACD"
      />
    </CustomIcon>
  );
};

export default ParagraphIcon;
