
import {
   // DELETE_COMMENT,
    //DELETE_POST,
    //EDIT_COMMENT,
    GET_POSTS,
    POST_POST,
    //LIKE_POST,
    //UNLIKE_POST,
    //UPDATE_POST,
  } from "../actions/post.actions";


const initialState = {};


export default function postReducer(state = initialState, action) {

    switch (action.type) {
        case GET_POSTS:
          return action.payload;

          case POST_POST:
            return action.payload;


 default:
      return state;
  }





}