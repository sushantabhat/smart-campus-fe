import { useEffect } from 'react';
import { useAuthStore } from '../store/authStore';

export const useAuthInit = () => {
  const { user, isAuthenticated, accessToken } = useAuthStore();

  useEffect(() => {
    // Check if we have stored auth data but no user is loaded
    if (accessToken && !user) {
      // The user data should already be persisted by Zustand
      // This is just a safety check
      console.log('Auth data found, user should be loaded from persistence');
    }
  }, [user, isAuthenticated, accessToken]);

  return { isInitialized: true };
}; 