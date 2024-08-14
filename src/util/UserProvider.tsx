import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

interface UserContextType {
    currentUserId: string | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentUserId, setCurrentUserId] = useState<string | null>(null);

    useEffect(() => {
        const userId = Cookies.get('userId');
        console.log("uuuuuuuuuuuuu",userId)
        console.log('Fetched User ID from Cookie:', userId); // Debug log
        if (userId) {
            setCurrentUserId(userId);
        }
    }, []);

    return (
        <UserContext.Provider value={{ currentUserId }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
