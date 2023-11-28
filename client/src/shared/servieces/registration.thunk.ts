import { AppDispatch } from "../../store/store";
import { UserLoginApi } from "../../api/UserLoginApi";
import { setUserData } from "../../store/authSlice/authSlice";

export interface RequestUser {
  email: string;
  password: string;
  name: string;
}

export const registrationUser = (user: RequestUser) => {
  return async (dispatch: AppDispatch) => {
    const { data } = await UserLoginApi.registrUser(user);
    if (data) {
      dispatch(setUserData(data));
    }
  };
};
