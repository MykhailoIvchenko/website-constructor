import React from 'react';
import CustomIcon from '../custom.icon/custom.icon';

const HeadlineIcon: React.FC = () => {
  return (
    <CustomIcon width={25} height={25} stroke={'none'}>
      <g clipPath="url(#clip0_1_244)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.66665 2.08334H21.3333C22.4839 2.08334 23.4166 3.01608 23.4166 4.16668V8.33334C23.4166 9.48394 22.4839 10.4167 21.3333 10.4167H4.66665C3.51605 10.4167 2.58331 9.48394 2.58331 8.33334V4.16668C2.58331 3.01608 3.51605 2.08334 4.66665 2.08334ZM4.66665 4.16668V8.33334H21.3333V4.16668H4.66665ZM23.4166 16.6667V18.75H2.58331V16.6667H23.4166ZM23.4166 20.8333V22.9167H2.58331V20.8333H23.4166Z"
          fill="#97AACD"
        />
        <path
          d="M23.4166 18.75V16.6667H2.58331V18.75H23.4166Z"
          fill="#97AACD"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.4166 12.5V14.5833H2.58331V12.5H23.4166Z"
          fill="#97AACD"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_244">
          <rect
            width="25"
            height="25"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </CustomIcon>
  );
};

export default HeadlineIcon;
