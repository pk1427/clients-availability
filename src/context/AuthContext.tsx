import React, { createContext, useState, ReactNode } from 'react';

interface AuthContextType {
    user: { email: string } | null;
    setUser: (user: { email: string } | null) => void;
}

// Define the shape of the props, including children
interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    setUser: () => {}
});

// Use the interface for props and extract children properly
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<{ email: string } | null>(null);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};
