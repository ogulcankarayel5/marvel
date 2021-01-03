import { Dispatch } from "react";
import {
  getCharacterByIdService,
  getCharactersService,
  getComicByIdService
} from "../../services/marvel-service";
import { GET_CHARACTERID_SUCCESS, GET_CHARACTERS_FAILURE, GET_CHARACTERS_REQUEST, GET_CHARACTERS_SUCCESS, GET_COMICS_SUCCESS } from "./constants";
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

export const getComicsSuccess = (data: any): MarvelActionTypes => {
  return {
    type: GET_COMICS_SUCCESS,
    payload: data,
  };
};

export const getCharacterIdSuccess = (data: any): MarvelActionTypes => {
  return {
    type: GET_CHARACTERID_SUCCESS,
    payload: data,
  };
};



export const getCharacters = (params?: string) => async (
  dispatch: Dispatch<MarvelActionTypes>
) => {
    try{
        dispatch(getCharactersRequest())
        const response = await getCharactersService(`limit=30&${params}`);

     
        dispatch(getCharactersSuccess(response.data.results));
        
    }   
    catch(err){
        console.log(err)
    }
};


export const getCharacterById = (id: number) => async (
  dispatch: Dispatch<MarvelActionTypes>
) => {
  try {
    dispatch(getCharactersRequest());
    const response = await getCharacterByIdService(id)

   
    dispatch(getCharacterIdSuccess(response.data.results));
  } catch (err) {
    console.log(err);
  }
};

export const getComicById = (id: number) => async (
  dispatch: Dispatch<MarvelActionTypes>
) => {
  try {
    dispatch(getCharactersRequest());
    const response = await getComicByIdService(id);

   
    dispatch(getComicsSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
};