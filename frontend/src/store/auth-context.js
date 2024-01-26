import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "",
  status: "",
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
});

export default function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [status, setStatus] = useState();

  function authenticate(token) {
    if (token === "admin" || token === "user") {
      setAuthToken(token);
      setStatus(token);
      return true;
    }
    return false;
  }

  function logout() {
    setAuthToken(null);
  }

  const value = {
    token: authToken,
    status: status,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
