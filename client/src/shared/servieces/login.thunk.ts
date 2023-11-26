import { AxiosInstance } from "../../api/axios";
import { IUser } from "../types/User.types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setDataToLocalStorage } from "../utils/localStorage";

interface User {
    email:string;
    password:string;
}
export const loginUser = createAsyncThunk<IUser, User>('user/loginUser', async (user: User) => {
    const response = await AxiosInstance.post<any>(`/login`,user);
    const value = response.data.authorization;
    setDataToLocalStorage('authorization',value)
    return response.data;
  });