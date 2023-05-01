import {
  ADD_BLOG_FAIL,
  ADD_BLOG_REQUEST,
  ADD_BLOG_SUCCESS,
  DELETE_BLOG_FAIL,
  DELETE_BLOG_REQUEST,
  DELETE_BLOG_SUCCESS,
  GET_ALL_BLOG_FAIL,
  GET_ALL_BLOG_REQUEST,
  GET_ALL_BLOG_SUCCESS,
  UPDATE_BLOG_FAIL,
  UPDATE_BLOG_REQUEST,
  UPDATE_BLOG_SUCCESS,
} from "../constants/blogConstants";

export const blogReducer = (state = { allBlogs: [] }, { type, payload }) => {
  switch (type) {
    case GET_ALL_BLOG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        allBlogs: payload,
      };
    case GET_ALL_BLOG_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case ADD_BLOG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        blogAdded: payload,
      };
    case ADD_BLOG_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case UPDATE_BLOG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        upadatedBlog: true,
      };
    case UPDATE_BLOG_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case DELETE_BLOG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_BLOG_SUCCESS:
      return {
        ...state,
        loading: true,
        deletedBlog: true,
      };
    case DELETE_BLOG_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };

    default:
      return state;
  }
};
