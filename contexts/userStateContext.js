import React, { useState } from 'react';

const UserStateContext = React.createContext();

const UserStateProvider = ({ children }) => {
  const [userState, setUserState] = useState('user');

  return (
    <UserStateContext.Provider value={{ userState, setUserState }}>
      {children}
    </UserStateContext.Provider>
  );
};

export { UserStateContext, UserStateProvider };
