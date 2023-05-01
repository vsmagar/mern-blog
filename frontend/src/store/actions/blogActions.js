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
import axios from "axios";

export const getAllBlogs = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_BLOG_REQUEST });
    const { data } = await axios.get("http://localhost:5000/api/blog");
    dispatch({ type: GET_ALL_BLOG_SUCCESS, payload: data.result });
  } catch (error) {
    dispatch({ type: GET_ALL_BLOG_FAIL, payload: error.message });
  }
};

export const addBlog = (blogData) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADD_BLOG_REQUEST });
    const token = getState().auth.login.token;
    const config = {
      headers: {
        authorization: token,
      },
    };

    const { data } = await axios.post(
      "http://localhost:5000/api/blog/add",
      blogData,
      config
    );
    dispatch({ type: ADD_BLOG_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_BLOG_FAIL, payload: error.message });
  }
};

export const updateBlog = (blogData) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATE_BLOG_REQUEST });
    const token = getState().auth.login.token;
    const config = {
      headers: {
        authorization: token,
      },
    };
    const { data } = await axios.put(
      `http://localhost:5000/api/blog/update/${blogData._id}`,
      blogData,
      config
    );
    dispatch({ type: UPDATE_BLOG_SUCCESS, payload: data.result });
  } catch (error) {
    dispatch({ type: UPDATE_BLOG_FAIL, payload: error.message });
  }
};

export const deleteBlog = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_BLOG_REQUEST });
    const token = getState().auth.login.token;
    const config = {
      headers: {
        authorization: token,
      },
    };
    const { data } = await axios.delete(
      `http://localhost:5000/api/blog/delete/${id}`,
      config
    );
    dispatch({ type: DELETE_BLOG_SUCCESS, payload: data.result });
  } catch (error) {
    dispatch({ type: DELETE_BLOG_FAIL, payload: error.message });
  }
};
