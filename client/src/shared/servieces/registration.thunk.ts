import { AxiosInstance } from "../../api/axios";
import { IUser } from "../types/User.types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setDataToLocalStorage } from "../utils/localStorage";

interface RequestUser {
    email:string,
    password:string
    name:string
}

export const registrationUser = createAsyncThunk<IUser,RequestUser>('user/registrUser', async (user: RequestUser) => {
    const response = await AxiosInstance.post<any>(`/register`,user);
    const value = response.data.authorization;
    setDataToLocalStorage('authorization',value)
    return response.data;
  });