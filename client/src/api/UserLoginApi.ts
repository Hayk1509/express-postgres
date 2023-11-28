import Api, { ApiResponse } from "./axios";

import { IUser } from "../shared/types/User.types";
import { RequestUser } from "../shared/servieces/registration.thunk";
import { User } from "../shared/servieces/login.thunk";

export  class UserLoginApi {
    static logIn(data:User):Promise<ApiResponse<IUser>> {
        return Api.Instance.post<IUser>(`/login`,data)
    }
    static registrUser(data:RequestUser):Promise<ApiResponse<IUser>> {
        return Api.Instance.post<IUser>(`/register`,data)
    }
} 