import { createContext } from "react";
import { AuthData } from "types/AuthData";

export type AuthContextType = {
    authContextData: AuthData;
    setAuthContextData: (authContextData: AuthData) => void;
}

export const AuthContext = createContext<AuthContextType>({
    authContextData: {
        authenticated: false
    },
    setAuthContextData: () => null
});