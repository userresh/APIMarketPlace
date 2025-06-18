import React from 'react';

import { AuthProvider, useAuth } from './context/AuthContext';
import Loading from './components/Loading';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

const AppContent = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <Loading />;
  }

  if (!user) {
    return <Login />;
  }

  return <Dashboard />;
};

export default App;
