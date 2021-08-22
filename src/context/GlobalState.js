import React, {createContext, useReducer} from 'react';
import AddReducer from './AppReducer';

const initialState = {
    badges: fetch('http://localhost:9393/badges')
        .then(r => r.json())
        .then(badgesRes => setBadges(badgesRes))
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={{badges: state.badges}}>
            {children}
        </GlobalContext.Provider>
    )
}