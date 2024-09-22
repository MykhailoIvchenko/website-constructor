import React from 'react';

type CustomIconProps = {
  width?: number;
  height?: number;
  stroke?: string;
  fill?: string;
  children: ReactChildrenType;
};

const CustomIcon: React.FC<CustomIconProps> = ({
  width,
  height,
  stroke,
  fill,
  children,
}) => {
  return (
    <svg
      width={width || 25}
      height={height || 25}
      viewBox={`0 0 ${width || 25} ${height || 25}`}
      fill={fill || 'none'}
      stroke={stroke || 'currentColor'}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};

export default CustomIcon;
