import React from 'react';

const UserContext = React.createContext({ user: null });

const UserContextProvider = ({ children }) => { // imagine I'm a real context
  return children
};

const userFactoryWrapper1 = (user) => ({ children }) => (
  <UserContext.Provider value={{ user }}>
    { children }
  </UserContext.Provider>
)

const userFactoryWrapper2 = (user) => ({ children }) => {
  const memoizedUser = React.useMemo(() => user, [user]);

  return (
    <UserContext.Provider value={{ user }}>
      { children }
    </UserContext.Provider>
  )
}