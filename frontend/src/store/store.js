import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { authReducer } from "./reducers/authReducers"
import { blogReducer } from "./reducers/blogReducers"

const rootReducer = combineReducers({
    blogs: blogReducer,
    auth: authReducer
})


const localData = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : false


const initialValue = {
    blogs: { allBlogs: [] },
    auth: { login: localData }
}
const store = createStore(rootReducer, initialValue, composeWithDevTools(applyMiddleware(thunk)))

export default store;