import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "../../api/axios";

interface User {
    email:string;
    password:string;
}
export const loginUser = createAsyncThunk<User, User>('user/loginUser', async (user: User) => {
    const response = await AxiosInstance.post<any>(`/login`,user);
    const value = response.data.authorization
    localStorage.setItem('authorization', value)
    return response.data;
  });