import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ Children }) => {
  const [user, setUser] = useState(null);
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("token", userData.token);
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {Children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
