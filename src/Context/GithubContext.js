import { createContext, useState, useEffect } from "react";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState(["Emre"]);

  return (
    <GithubContext.Provider value={{ users }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
