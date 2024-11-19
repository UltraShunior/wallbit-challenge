import React from 'react';
import topoImg from '../../assets/topo.webp';

export const Header = ({ title }: { title: string }) => {
  return (
    <header className="text-center mb-[2rem] flex items-center justify-center">
      <h1 className="text-3xl text-center font-light m-[2rem]">
        {title}
      </h1>
      <img src={topoImg} alt="El topo" className="w-12" />
    </header>
  );
};

export default Header;