import React , {createContext,useContext, useReducer} from 'react'

//Thiss is the data layer
export const StateContext= createContext()

// Build a provider
export const StateProvider = ({reducer,initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)
// this is how we use it in component
export const useStateValue = ()=> useContext(StateContext)