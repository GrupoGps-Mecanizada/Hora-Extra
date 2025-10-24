import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-yellow-400 shadow-md">
      <div className="container mx-auto p-4 md:p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
          Registro de Horas Extras
        </h1>
      </div>
    </header>
  );
};

export default Header;
