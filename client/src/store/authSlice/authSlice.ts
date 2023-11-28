import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ApiError } from "../../api/axios";
import type { IUser } from "../../shared/types/User.types";

// import { loginUser } from "../../shared/servieces/login.thunk";
// import { registrationUser } from "../../shared/servieces/registration.thunk";

// import type { PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../store';

interface IState {
  user: IUser;
  isLoading: boolean;
  error: ApiError;
}

const initialState: IState = {
  user: {
    name: "",
    surename: "",
    email: "",
    country: "",
    phoneNumber: "",
    picture: "",
  },
  isLoading: false,
  error: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    endLoading: (state) => {
      state.isLoading = false;
    },
    setError: (state, action: PayloadAction<ApiError>) => {
      state.error = action.payload;
    },
    setUserData: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});
export const { setUserData, endLoading,setError,startLoading } = userSlice.actions;
export const selectUser = (state: IUser) => state;
export const loading = (state: IState) => state.isLoading;
export default userSlice.reducer;
