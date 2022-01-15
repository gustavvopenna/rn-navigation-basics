import { createContext, useReducer } from "react"
import { authReducer } from "./authReducer"
import { IconName } from "../components/TouchableIcon"

// Define how my data looks
export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: IconName;
}

// Define initial state
export const authInitialState: AuthState = {
  isLoggedIn: false
}

// How looks and what properties we're gonna expose in the context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  changeFavoriteIcon: (name: IconName) => void;
}


// Create context
export const AuthContext = createContext({} as AuthContextProps)

// Component that provides the state
export const AuthProvider = ({ children }: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState)

  const signIn = () => dispatch({ type: 'signIn' })
  const changeFavoriteIcon = (name: IconName) => {
    dispatch({ type: 'changeFavoriteIcon', payload: name })
  }

  return (
    <AuthContext.Provider value={{
      authState,
      signIn,
      changeFavoriteIcon
    }}>
      {children}
    </AuthContext.Provider>
  )
}