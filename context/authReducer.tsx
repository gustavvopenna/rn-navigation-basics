import { AuthState } from "./AuthContext";
import { IconName } from "../components/TouchableIcon";

type AuthActions =
  | { type: 'signIn' }
  | { type: 'changeFavoriteIcon', payload: IconName }
  | { type: 'logout' }


export const authReducer = (state: AuthState, action: AuthActions): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'Lautaro'
      }
    case 'changeFavoriteIcon':
      return {
        ...state,
        favoriteIcon: action.payload
      }
    case 'logout':
      return {
        ...state,
        isLoggedIn: false,
        username: undefined,
        favoriteIcon: undefined
      }
    default:
      return state
  }
}