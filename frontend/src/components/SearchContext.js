import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [nameFilter, setNameFilter] = useState('');

  const updateNameFilter = (value) => {
    setNameFilter(value);
  };

  return (
    <SearchContext.Provider value={{ nameFilter, updateNameFilter }}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export default { SearchProvider, useSearch };
