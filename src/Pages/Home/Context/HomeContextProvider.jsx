import React, { useState } from 'react';
import HomeContext from './HomeContext';

function HomeContextProvider({children}){
  const [Loading, setLoading] = useState([]);
  const value = {
    Loading, setLoading,
  };

  return (
    <HomeContext.Provider value = {value}>
      {children}
    </HomeContext.Provider>
  );
}

export default HomeContextProvider;


