import { GET_CHARACTERS_FAILURE, GET_CHARACTERS_REQUEST, GET_CHARACTERS_SUCCESS } from "./constants";

export interface MarvelState {
  readonly data: any;
  readonly loading: boolean;
}


export interface GetCharactersRequestAction {
    type:typeof GET_CHARACTERS_REQUEST
}

export interface GetCharactersSuccessAction {
    type:typeof GET_CHARACTERS_SUCCESS,
    payload:any
}

export interface GetCharactersFailureAction {
    type:typeof GET_CHARACTERS_FAILURE
}

export type MarvelActionTypes =
  | GetCharactersRequestAction
  | GetCharactersSuccessAction
  | GetCharactersFailureAction;
