import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (userData: Omit<User, 'id' | 'createdAt'>) => Promise<boolean>;
  updateUser: (userData: Partial<User>) => void;
}

// Mock users for demonstration
const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@campus.edu',
    name: 'Admin User',
    role: 'admin',
    createdAt: new Date(),
  },
  {
    id: '2',
    email: 'faculty@campus.edu',
    name: 'Dr. Sarah Johnson',
    role: 'faculty',
    department: 'Computer Science',
    employeeId: 'FAC001',
    createdAt: new Date(),
  },
  {
    id: '3',
    email: 'student@campus.edu',
    name: 'John Smith',
    role: 'student',
    department: 'Computer Science',
    studentId: 'STU2024001',
    createdAt: new Date(),
  },
];

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      login: async (email: string, password: string) => {
        // Mock authentication - in real app, this would be an API call
        const user = mockUsers.find(u => u.email === email);
        if (user && password === 'password123') {
          set({ user, isAuthenticated: true });
          return true;
        }
        return false;
      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
      register: async (userData) => {
        // Mock registration
        const newUser: User = {
          ...userData,
          id: Date.now().toString(),
          createdAt: new Date(),
        };
        mockUsers.push(newUser);
        set({ user: newUser, isAuthenticated: true });
        return true;
      },
      updateUser: (userData) => {
        const currentUser = get().user;
        if (currentUser) {
          const updatedUser = { ...currentUser, ...userData };
          set({ user: updatedUser });
        }
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);