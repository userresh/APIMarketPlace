import React, { useState, useEffect, createContext, useContext } from 'react';

// Auth Context
const AuthContext = createContext();

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Auth Provider
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate auth check
    setTimeout(() => {
      const storedUser = {
        id: 1,
        name: 'John Developer',
        email: 'john@example.com',
        avatar: 'https://ui-avatars.com/api/?name=John+Developer&background=3b82f6&color=fff',
        plan: 'Pro',
        apiKey: 'sk_live_abc123...'
      };
      setUser(storedUser);
      setIsLoading(false);
    }, 1000);
  }, []);

  const login = (provider) => {
    // Simulate OAuth login
    console.log(`Logging in with ${provider}`);
    window.location.href = `/auth/${provider}`;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
