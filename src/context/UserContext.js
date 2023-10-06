import React from "react";

const UserContext = React.createContext({ name: "", auth: false });

const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState({ name: "", auth: false });

  const login = (name) => {
    setUser((user) => {
      setUser({
        name: name,
        auth: true,
      });
    });
  };
  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
