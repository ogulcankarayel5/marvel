import { GET_CHARACTERS_REQUEST, GET_CHARACTERS_SUCCESS } from "./constants";
import { MarvelActionTypes, MarvelState } from "./types";


const initialState: MarvelState = {
  data: {},
  loading: false,
};

export function marvelReducer (state = initialState,action:MarvelActionTypes):MarvelState {
    switch(action.type){
        case GET_CHARACTERS_REQUEST:
            return{
                ...state,
                loading:true
            }
        case GET_CHARACTERS_SUCCESS:
            return{
                ...state,
                loading:false,
                data:action.payload
            }
        default:
            return state
    }
}