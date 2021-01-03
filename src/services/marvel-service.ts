import { get } from "./api-service";


export const getCharactersService = async (params?: string) => {
  const response = await get<any>({ endpoint: "/characters", params });
  return response;
};

export const getCharacterByIdService = async (id:number) => {
  const response = await get<any>({endpoint:`/characters/${id}`})
  
  return response;
}

export const getComicByIdService = async(id:number) => {
  const response = await get<any>({
    endpoint: `/characters/${id}/comics`,
    params: "orderBy=-onsaleDate&limit=10",
  });
  return response;
}
