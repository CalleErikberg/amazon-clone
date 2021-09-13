// setup data layer
//used to track basket

import React, { createContext, useContext, useReducer } from "react";

//DATA LAYER
export const StateContext = createContext();

//Build a provider
export const StateProvider = ({ reducer, initialState, children }) =>(

    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>

);

//HOW WE USE IT IN A COMPONENT
export const useStateValue = () => useContext(StateContext);