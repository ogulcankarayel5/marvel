import { get } from "./api-service";


export const getCharacters = async(params?:string) => {
    const response = await get<any>({endpoint:'/characters',params})
    return response ;
}

