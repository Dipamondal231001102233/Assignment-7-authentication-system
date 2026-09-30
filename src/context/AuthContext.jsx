import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    localStorage.getItem("username") || null
  );

  const login = (username, password, remember) => {
    if (!username || !password) {
      return false;
    }

    // JWT Token Simulation
    const fakeToken = "jwt-token-" + Date.now();

    if (remember) {
      localStorage.setItem("username", username);
      localStorage.setItem("token", fakeToken);
    }

    setUser(username);
    return true;
  };

  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}