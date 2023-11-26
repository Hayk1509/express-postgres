import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IUser } from "../../shared/types/User.types";
import { loginUser } from "../../shared/servieces/login.thunk";
import { registrationUser } from "../../shared/servieces/registration.thunk";

// import type { PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../store';



const initialState: IUser = {
  name:'',
  surename:'',
  email:'',
  country:'',
  phoneNumber: '',
  picture: ''
  
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
    builder.addCase(loginUser.fulfilled, (state, action:PayloadAction<IUser>) => {
      state = action.payload;
    });
    builder.addCase(registrationUser.fulfilled, (state, action:PayloadAction<IUser>) => {
      state = action.payload;
    });
  },
});
export const {implement} = userSlice.actions
export const selectUser = (state:IUser) => state
// export const userSlice.reducer;
export default userSlice.reducer;