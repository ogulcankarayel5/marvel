import { createSelector } from "reselect";
import { AppState } from "../root";

export const getData = (state: AppState) => state.marvel.data

export const getResultsSelector = createSelector([getData], (data) => data);



export const getCharacter = (state:AppState) => state.marvel.character

export const getCharacterSelector = createSelector(getCharacter,(character)=>character)