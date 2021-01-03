import { AxiosRequestConfig, AxiosResponse } from "axios";
import { IAxiosParameters, IParameters } from "../types";
import { apiKey } from "../utils";
import axiosInstance from './client';

/*
get<T>({endpoint:/characters,params:null})
*/
export const get = <T = any>(parameters: IParameters): Promise<T> => {
  const { endpoint, params = null } = parameters;
  return genericAxios<T>({ method: "get", endpoint, params });
};


//http://gateway.marvel.com/v1/public/characters?ts=1&apikey=65cb83fb1cadab3f1fa083c0608e8f13&hash=00852b78b61a7783efcd2f752c8169fe&limit=1
const genericAxios = async <T = any>(parameters: IAxiosParameters): Promise<T> => {

  
  return new Promise((resolve, reject) => {
    const { method,endpoint, params } = parameters;
    
    const config: AxiosRequestConfig = {
      method,
      url: `${endpoint}?${apiKey}&${params?params:''}`,
      
    };
    

    axiosInstance(config)
      .then((response: AxiosResponse<T>) => {
        // console.log("response in callAxios: ", response);
        resolve(response.data as T)
      })
      .catch((error) => {
        // console.log("response in callaxios error: ",error.response);
        reject(error.response);
      });
  });
};
