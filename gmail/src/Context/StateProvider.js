import React, { createContext, useReducer, useContext } from 'react'

//Prepare the data layer
export const StateContext = createContext();

//wrap the app and provide the data layer
export const StateProvider = ({reducer,initialState,Children})=>{
    return <StateContext.Provider value = {useReducer(reducer,initialState)}>
    { Children }
    </StateContext.Provider>
}

//pull information fro, data layer
export const useStateValue =() =>useContext(StateContext);