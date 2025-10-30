import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, displayName: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user storage in localStorage
const MOCK_USERS_KEY = 'VAXTOP_MOCK_USERS';
const CURRENT_USER_KEY = 'VAXTOP_CURRENT_USER';

function generateUID(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function getMockUsers(): Record<string, { email: string; password: string; displayName: string; uid: string }> {
  try {
    const data = localStorage.getItem(MOCK_USERS_KEY);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
}

function saveMockUsers(users: Record<string, any>): void {
  localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(users));
}

function getCurrentUser(): User | null {
  try {
    const data = localStorage.getItem(CURRENT_USER_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

function setCurrentUser(user: User | null): void {
  if (user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(CURRENT_USER_KEY);
  }
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    setLoading(true);
    try {
      const users = getMockUsers();
      const userEntry = Object.values(users).find((u) => u.email === email);

      if (!userEntry || userEntry.password !== password) {
        throw new Error('Invalid email or password');
      }

      const userData: User = {
        uid: userEntry.uid,
        email: userEntry.email,
        displayName: userEntry.displayName,
      };

      setUser(userData);
      setCurrentUser(userData);
    } finally {
      setLoading(false);
    }
  };

  const signup = async (email: string, password: string, displayName: string): Promise<void> => {
    setLoading(true);
    try {
      const users = getMockUsers();
      const userExists = Object.values(users).some((u) => u.email === email);

      if (userExists) {
        throw new Error('User already exists');
      }

      const uid = generateUID();
      users[uid] = { uid, email, password, displayName };
      saveMockUsers(users);

      const userData: User = {
        uid,
        email,
        displayName,
      };

      setUser(userData);
      setCurrentUser(userData);
    } finally {
      setLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    setUser(null);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
