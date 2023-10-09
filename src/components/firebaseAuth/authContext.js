import React, { useContext, useState, useMemo } from 'react';

const AuthContext = React.createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(/* your authentication logic here */);
  const [userid, setUserid] = useState(/* your user ID logic here */);

  const value = useMemo(() => ({
    currentUser,
    setCurrentUser,
    userid,
    setUserid,
    // other functions related to authentication
  }), [currentUser, userid]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
