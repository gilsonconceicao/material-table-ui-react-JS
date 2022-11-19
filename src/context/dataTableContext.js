import React, { useState } from "react";

export const dataTableContext = React.createContext(); 

export const DataTableProvider = ({children}) => {
  const [users, dataUsers] = useState([]);  

  return (
    <dataTableContext.Provider value={{}}>
      {children}  
    </dataTableContext.Provider>
  )
}

export const useDataTable = () => React.useContext(dataTableContext);