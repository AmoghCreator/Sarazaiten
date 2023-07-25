import React from "react";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-teal-700">
      <header className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-white text-2xl font-bold ml-4">SARAZAITEN</h1>
        </div>
      </header>
    </div>
  );
};

export default Header;
