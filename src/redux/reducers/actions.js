
import * as types from './actionTypes';
import { auth } from '../../services/firebase';



export const registerStart = () => (
    {
        type: types.REGISTER_START
    }

)
export const registerSuccess = () => (
    {
        type: types.REGISTER_SUCCESS
    }

)
export const registerError = () => (
    {
        type: types.REGISTER_ERROR
    }

)
export const registerInitiate = (email, password, displayName) => {
    return (dispatch) => {
        dispatch(registerStart())
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                user.updateProfile({
                    displayName
                })
                dispatch(registerSuccess(user))
            })
            .catch(error => dispatch(registerError(error)))
    }
}