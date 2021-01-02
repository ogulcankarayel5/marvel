import { get } from "./api-service";


export const getCharactersService = async (params?: string) => {
  const response = await get<any>({ endpoint: "/characters", params });
  return response;
};

