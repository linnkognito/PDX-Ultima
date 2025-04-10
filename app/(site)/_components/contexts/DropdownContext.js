'use client';

const { createContext, useState, useContext } = require('react');

const DropdownContext = createContext();

export function DropdownProvider({ children }) {
  const [openId, setOpenId] = useState(null);

  return (
    <DropdownContext.Provider value={{ openId, setOpenId }}>
      {children}
    </DropdownContext.Provider>
  );
}

export function useDropdownContext() {
  return useContext(DropdownContext);
}
