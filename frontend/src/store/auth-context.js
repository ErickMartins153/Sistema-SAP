import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "",
  status: "",
  users: [],
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
  addUser: (name, email) => {},
  deleteUser: (name) => {},
});

export default function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [status, setStatus] = useState();
  const [users, setUsers] = useState([
    { name: "admin", email: "admin@upe.br" },
    { name: "user", email: "user@upe.br" },
  ]);

  function authenticate(token) {
    const devToken = token === "" ? "admin" : token;
    if (devToken === "admin" || devToken === "user") {
      setAuthToken(devToken);
      setStatus(devToken);
      return true;
    }
    return false;
  }

  function logout() {
    setAuthToken(null);
  }

  function addUser(name, email) {
    setUsers((prevUsers) => [...prevUsers, { name: name, email: email }]);
  }

  function deleteUser(name) {
    setUsers((prevUsers) =>
      prevUsers.filter((userData) => userData.name !== name)
    );
  }

  const value = {
    token: authToken,
    status: status,
    users: users,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
    addUser: addUser,
    deleteUser: deleteUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
