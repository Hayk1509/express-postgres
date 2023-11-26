import axios from 'axios';
import { getDataFromLocalStorage } from '../shared/utils/localStorage';


export const AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/v1/',
    headers: {
      'Content-Type':'application/json',
      'Accept': 'application/json, text/plain',
      'authorization': getDataFromLocalStorage('authorization')
    }
  });
  
