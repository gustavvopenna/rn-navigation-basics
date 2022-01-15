import { createContext } from "react"

// Define how my data looks
export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

// Define initial state
export const authInitialState: AuthState = {
  isLoggedIn: false
}

// How looks and what properties we're gonna expose in the context
export interface AuthContextProps {
  userState: AuthState;
  signIn: () => void;
}


// Create context
export const AuthContext = createContext({} as AuthContextProps)

// Component that provides the state
export const AuthProvider = () => {
  return (
    <AuthContext.Provider value={{
      userState: authInitialState,
      signIn: () => {}
    }}>

    </AuthContext.Provider>
  )
}