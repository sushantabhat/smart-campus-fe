import React, { createContext, useContext, useEffect, useState } from 'react';
import { useUser, useLogout } from '../api/hooks/useAuth';
import { User } from '../api/types/auth';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { data: user, isLoading, error } = useUser();
  const logoutMutation = useLogout();

  // Check if user is authenticated on mount
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('user');
    
    if (token && storedUser) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  // Update authentication state when user data changes
  useEffect(() => {
    if (user) {
      setIsAuthenticated(true);
    } else if (error && !isLoading) {
      setIsAuthenticated(false);
    }
  }, [user, error, isLoading]);

  const handleLogout = async () => {
    try {
      await logoutMutation.mutateAsync();
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Logout error:', error);
      // Still clear local state even if API call fails
      setIsAuthenticated(false);
    }
  };

  const value: AuthContextType = {
    user: user || null,
    isAuthenticated,
    isLoading,
    logout: handleLogout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 