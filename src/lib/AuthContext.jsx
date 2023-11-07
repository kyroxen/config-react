import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? { email: storedUser } : null;
  });

  const login = (email, password) => {
    // Perform authentication logic here (e.g., API request, validation)
    // If authentication is successful, set the user
    console.log("LOGIN:: ", email, password);
    localStorage.setItem("user", email);
    setUser({ email });
  };

  const logout = () => {
    // Perform logout logic here (e.g., clearing session)
    console.log("LOGOUT:: ", user);
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
