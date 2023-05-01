import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS } from "../constants/authConstants";

export const authReducer = (state = { login: {} }, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST: return {
            ...state,
            loading: true
        }
        case LOGIN_SUCCESS: return {
            ...state, loading: false, login: payload
        }
        case LOGIN_FAIL: return {
            ...state, loading: false,
            error: payload
        }

        case REGISTER_REQUEST: return {
            loading: true,
            ...state
        }

        case REGISTER_SUCCESS: return {
            loading: false,
            ...state,
            login: payload
        }
        case REGISTER_FAIL: return {
            loading: false,
            ...state,
            error: payload
        }
        case LOGOUT: return { login: {} }


        default: return state;
    }
}
