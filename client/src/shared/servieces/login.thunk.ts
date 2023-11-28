import {
  endLoading,
  setError,
  setUserData,
  startLoading,
} from "../../store/authSlice/authSlice";

import { AppDispatch } from "../../store/store";
import { UserLoginApi } from "../../api/UserLoginApi";
import { setDataToLocalStorage } from "../utils/localStorage";

export interface User {
  email: string;
  password: string;
}

export const loginUser = (user: User) => {
  return async (dispatch: AppDispatch) => {
    dispatch(startLoading());
    const { error, data } = await UserLoginApi.logIn(user);
    console.log(error,'error')
    if (error) {
      dispatch(setError(error));
    }
    if (data) {
      setDataToLocalStorage("authorization", data.authorization!);
      dispatch(setUserData(data));
    }
    dispatch(endLoading());
  };
};
