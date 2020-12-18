import React, { createContext, useReducer } from 'react';
import Cookies from 'js-cookie';


const initialState = {
	isLogin: Cookies.get('jwt') ? true : false,
	cart: [],
};

const store = createContext(initialState);

const { Provider } = store;

function Reducer(state, action) {
	switch (action.type) {
        case 'logout':
            Cookies.remove("jwt");
            return { isLogin: false , ...state }
        case 'login':
            return { isLogin: Cookies.get("jwt") ? true : false, ...state }
        default:
            throw new Error();
    }
}

const StateProvider = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer,initialState);
    
    return <Provider value={{state,dispatch}}>{children}</Provider> 

};

export { store, StateProvider };
