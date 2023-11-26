import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "../../api/axios";

interface User {
    name:string
}
export const fetchUser = createAsyncThunk<User, string>('user/fetchUser', async (userId: string) => {
    const response = await AxiosInstance.get<User>(`/users/${userId}`);
    return response.data;
  });