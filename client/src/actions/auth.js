import { LOGIN } from "../store/constants/auth";

const signIn = () => {
  return { type: LOGIN };
};

export const login = () => (dispatch) => {
  dispatch(signIn());
};
