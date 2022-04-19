
import * as types from './actionTypes';


const initialState = {
    loading: false,
    error: null,
    currentUser: null
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_START:
        case types.LOGIN_START:
            return {
                ...state,
                loading: true
            }
        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                loading: false
            }
        case types.REGISTER_ERROR:
        case types.LOGIN_ERROR:
            return {
                ...state,
                error: action.payload,
            }



        default:
            return state
    }
}