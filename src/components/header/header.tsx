import React from 'react';

const headerClasses =
  'px-large h-header sticky top-0 flex items-center ' +
  'border-b border-[#e4e6f1] bg-bg-main';

const Header: React.FC = () => {
  return (
    <header className={headerClasses}>
      <h1 className="font-bold text-lg">REACT EDITOR</h1>
    </header>
  );
};

export default Header;
