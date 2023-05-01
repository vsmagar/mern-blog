import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS } from "../constants/authConstants"
import axios from "axios"
export const loginUser = Creadential => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST })
        const { data } = await axios.post("http://localhost:5000/api/user/login", Creadential)
        dispatch({ type: LOGIN_SUCCESS, payload: data.result })
        localStorage.setItem("user", JSON.stringify(data.result))
    } catch (error) {

        dispatch({ type: LOGIN_FAIL })
    }
}

export const registerUser = userData => async dispatch => {
    try {
        dispatch({ type: REGISTER_REQUEST })
        const { data } = await axios.post("http://localhost:5000/api/user/register", userData)

        dispatch({ type: REGISTER_SUCCESS, payload: data.result })
        localStorage.setItem("user", JSON.stringify(data.result))
    } catch (error) {
        dispatch({ type: REGISTER_FAIL })
    }
}


export const userLogOut = () => async dispatch => {
    dispatch({ type: LOGOUT })
    localStorage.removeItem("user")

}