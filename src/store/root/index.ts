import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { marvelReducer } from '../marvel/reducer';
import { MarvelActionTypes } from '../marvel/types';


export const rootReducer = combineReducers({
    marvel:marvelReducer
})


export type AppActions = MarvelActionTypes;

export type AppState = ReturnType<typeof rootReducer>

export const middleware = [thunk as ThunkMiddleware<AppState, AppActions>];

export const store = createStore<AppState, AppActions, {}, {}>(
  rootReducer,
  applyMiddleware(...middleware)
);