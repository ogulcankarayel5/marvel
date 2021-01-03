import { Dispatch } from "react";
import { getCharactersService } from "../../services/marvel-service";
import { GET_CHARACTERS_FAILURE, GET_CHARACTERS_REQUEST, GET_CHARACTERS_SUCCESS } from "./constants";
import { MarvelActionTypes } from "./types";

export const getCharactersRequest = () : MarvelActionTypes=> {
    return {
        type:GET_CHARACTERS_REQUEST
    }
}

export const getCharactersSuccess = (data:any) : MarvelActionTypes => {
    return {
        type:GET_CHARACTERS_SUCCESS,
        payload:data
    }
}

export const getCharactersFailure = () :MarvelActionTypes => {
    return {
        type:GET_CHARACTERS_FAILURE
    }
}



export const getCharacters = (params?: string) => async (
  dispatch: Dispatch<MarvelActionTypes>
) => {
    try{
        dispatch(getCharactersRequest())
        const response = await getCharactersService('limit=30');

        console.log(response.data)
        dispatch(getCharactersSuccess(response.data));
        
    }   
    catch(err){
        console.log(err)
    }
};
