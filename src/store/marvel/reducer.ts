import { GET_CHARACTERID_SUCCESS, GET_CHARACTERS_REQUEST, GET_CHARACTERS_SUCCESS, GET_COMICS_SUCCESS } from "./constants";
import { MarvelActionTypes, MarvelState } from "./types";


const initialState: MarvelState = {
  data: [],
  loading: false,
  comics:{},
  character:[]
};

export function marvelReducer (state = initialState,action:MarvelActionTypes):MarvelState {
    switch (action.type) {
      case GET_CHARACTERS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_CHARACTERS_SUCCESS:
        return {
          ...state,
          loading: false,
          data: [...state.data, action.payload],
        };
      case GET_CHARACTERID_SUCCESS:
        return {
          ...state,
          character: action.payload,
        };
      case GET_COMICS_SUCCESS:
        return {
          ...state,
          comics: action.payload,
        };
      default:
        return state;
    }
}