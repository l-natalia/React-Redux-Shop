import { LOGIN } from "../constants/auth";

const initState = { loggedIn: false };

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, loggedIn: !state.loggedIn };
    default: {
      return state;
    }
  }
}
