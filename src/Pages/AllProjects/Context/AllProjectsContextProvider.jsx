import React, { useState } from 'react';
import AllProjectsContext from './AllProjectsContext';

function AllProjectsContextProvider({children}){
  const [loading, setLoading] = useState([]);
  const [projects, setProjects] = useState([]);
  const [busca, setBusca] = useState('')

  const value = {
    loading, setLoading,
    projects, setProjects,
    busca, setBusca,
  };

  return (
    <AllProjectsContext.Provider value = {value}>
      {children}
    </AllProjectsContext.Provider>
  );
}

export default AllProjectsContextProvider;


