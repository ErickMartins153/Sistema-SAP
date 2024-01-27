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
    const devUser = token.split("@upe.br")[0];
    const isValid = users.some((user) => user.name === devUser);

    if (isValid) {
      setAuthToken(token);
      setStatus(token);
      return true;
    }
    return false;
  }

  function logout() {
    setAuthToken(null);
  }

  function addUser(name, email) {
    if (users.some((user) => user.name === name)) {
      return false;
    }
    setUsers((prevUsers) => [...prevUsers, { name: name, email: email }]);
    return true;
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
