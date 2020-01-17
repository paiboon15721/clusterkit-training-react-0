import React, { useState, createContext } from "react";

export const companyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [companyName, setCompanyName] = useState("ClusterKit");

  return (
    <companyContext.Provider value={{ companyName, setCompanyName }}>
      {children}
    </companyContext.Provider>
  );
};
