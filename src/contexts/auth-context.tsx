"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { AuthApi } from "@/app/Api/Api";

export interface User {
  _id?: string;
  name: string;
  email: string;
  role?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (credentials: any) => Promise<void>;
  register: (data: any) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  updateProfile: (data: any) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (token && storedUser) {
          try {
            setUser(JSON.parse(storedUser));
            // Optional: Verify token validity with backend if needed
            // await AuthApi.getProfile();
          } catch (e) {
            console.error("Auth initialization error", e);
            logout();
          }
        }
      }
      setIsLoading(false);
    };

    initAuth();
  }, []);

  const login = async (credentials: any) => {
    setIsLoading(true);
    try {
      const response: any = await AuthApi.login(credentials);
      // Adjust based on actual API response structure
      const token = response.token || response.accessToken;
      const userData = response.user || response.data;

      if (token) {
        localStorage.setItem("token", token);
      }
      if (userData) {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
      }
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (data: any) => {
    setIsLoading(true);
    try {
      const response: any = await AuthApi.register(data);
      // If registration automatically logs in
      const token = response.token || response.accessToken;
      const userData = response.user || response.data;

      if (token && userData) {
        localStorage.setItem("token", token);
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
      }
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  };

  const updateProfile = async (data: any) => {
    try {
      const response: any = await AuthApi.updateProfile(data);
      const updatedUser = response.user || response.data || response;
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
