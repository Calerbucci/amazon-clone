// Setup a data layer
// We need this to track the basklet

import React, { createContext, useContext, useReducer } from "react";


//this is the data layer
export const StateContext = createContext();


//build the provider
export const StateProvider = ({ reducer, initialState, children}) =>(
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>    
);

//this is how we use the data layer inside of a component
export const useStateValue = () => useContext(StateContext);

