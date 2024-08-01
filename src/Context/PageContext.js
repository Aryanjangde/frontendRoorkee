// src/Context/PageContext.jsx
import { createContext, useContext, useState } from 'react';

const PageContext = createContext();

// export const usePageContext = () => useContext(PageContext);

function PageProvider({ children }){
  const [currentPage, setCurrentPage] = useState(1);
  const [showSuccess ,setShowSuccess] = useState(false);

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage, showSuccess, setShowSuccess }}>
      {children}
    </PageContext.Provider>
  );
};
export default PageContext;
export {PageProvider};