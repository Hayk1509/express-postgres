import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../../shared/servieces/loginUser";
// import type { PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../store';
interface UserResponse {
    email?:string;
    password?:string
}
interface User {
  email: string;
  name: string;
  lastName: string;
  data:UserResponse
}

const initialState: User = {
  email: "",
  name: "",
  lastName: "",
  data:{}
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    implement : (state,action:PayloadAction<string>)=>{
        state.name = action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(loginUser.fulfilled, (state, action:PayloadAction<UserResponse>) => {
      state.data = action.payload;
    });
  },
});
export const {implement} = userSlice.actions
export const selectUser = (state:User) => state.data
// export const userSlice.reducer;
export default userSlice.reducer;