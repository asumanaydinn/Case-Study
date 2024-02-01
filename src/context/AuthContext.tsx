import { faker } from "@faker-js/faker";
import { set } from "date-fns";
import { signIn } from "next-auth/react";
import React, { createContext, useContext, useMemo, useState } from "react";

export const AuthContext = createContext<{
  login: (e: any) => Promise<void>;
  isAuthenticated: boolean;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  error: string;
}>({
  login: () => {
    throw new Error("login function should be overridden");
  },
  isAuthenticated: false,
  username: "",
  setUsername: () => {
    throw new Error("setUsername function should be overridden");
  },
  password: "",
  setPassword: () => {
    throw new Error("setPassword function should be overridden");
  },
  error: "",
});

export const AuthProvider: React.FC<{ children: any }> = ({
  children,
}: {
  children: any;
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const login = async (e: any) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (result?.error) {
      setIsAuthenticated(false);
      setError("Login failed. Please check your credentials.");
    } else {
      setIsAuthenticated(true);
      setError("");

      window.location.href = "/overview";
    }
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        isAuthenticated,
        username,
        setUsername,
        password,
        setPassword,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const {
    isAuthenticated,
    login,
    username,
    setPassword,
    setUsername,
    password,
    error,
  } = useContext(AuthContext);

  return {
    isAuthenticated,
    login,
    username,
    setPassword,
    setUsername,
    password,
    error,
  };
};
