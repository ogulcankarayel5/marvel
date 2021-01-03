import { GET_CHARACTERID_SUCCESS, GET_CHARACTERS_FAILURE, GET_CHARACTERS_REQUEST, GET_CHARACTERS_SUCCESS, GET_COMICS_SUCCESS } from "./constants";

export interface MarvelState {
  readonly data: any;
  readonly loading: boolean;
  readonly comics:any;
  readonly character:any;
 
}


export interface GetCharactersRequestAction {
    type:typeof GET_CHARACTERS_REQUEST
}

export interface GetCharactersSuccessAction {
    type:typeof GET_CHARACTERS_SUCCESS,
    payload:any
}


export interface GetComicsSuccessAction {
    type:typeof GET_COMICS_SUCCESS,
    payload:any
}

export interface GetCharacterIdSuccessAction {
  type: typeof GET_CHARACTERID_SUCCESS;
  payload:any
}

export interface GetCharactersFailureAction {
    type:typeof GET_CHARACTERS_FAILURE
}

export type MarvelActionTypes =
  | GetCharacterIdSuccessAction
  | GetComicsSuccessAction
  | GetCharactersRequestAction
  | GetCharactersSuccessAction
  | GetCharactersFailureAction;
