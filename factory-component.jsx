import React from 'react';

const UserContext = React.createContext({ user: null });

const UserContextProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ /* this is a comment */ }}>
      { children }
    </UserContext.Provider>
  )
};

const userFactoryWrapper1 = (user) => ({ children }) => (
  <UserContext.Provider value={{ user }}>
    { children }
  </UserContext.Provider>
)

const userFactoryWrapper2 = (user) => ({ children }) => {
  const memoizedValue = React.useMemo(() => ({
    user
  }), [user]);

  return (
    <UserContext.Provider value={memoizedValue}>
      { children }
    </UserContext.Provider>
  )
}