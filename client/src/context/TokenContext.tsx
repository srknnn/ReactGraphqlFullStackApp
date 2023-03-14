import React, { createContext, useState, useContext, useEffect } from "react";

interface TokenContextType {
  loginToken: string | undefined;
  updateLoginToken: (newToken: string) => void;
}

// Create a new context for the login token
export const TokenContext = createContext<TokenContextType>({
  loginToken: "",
  updateLoginToken: () => {},
});

// Create a component to provide the login token context
export const LoginTokenProvider: React.FC<any> = ({ children }) => {
  const [loginToken, setLoginToken] = useState(
    () => localStorage.getItem("loginToken") || undefined
  );

  // Define a function to update the login token
  const updateLoginToken = (newToken: string) => {
    localStorage.setItem("loginToken", newToken);
    setLoginToken(newToken);
  };

  // Pass the login token and the function to update it as the context value
  const contextValue: TokenContextType = {
    loginToken,
    updateLoginToken,
  };

  return (
    <TokenContext.Provider value={contextValue}>
      {children}
    </TokenContext.Provider>
  );
};
