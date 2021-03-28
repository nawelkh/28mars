import axios from "axios";


// posts
export const GET_POSTS = "GET_POSTS";
export const POST_POST = "POST_POST"; 

export const getPosts = () => {
    return (dispatch) => {
      return axios
        .get("http://localhost:5000/etudiant-e96f9/us-central1/api/publications")
        .then((res) => {
         // const array = res.data.slice(0, num);
          dispatch({ type: GET_POSTS, payload: res.data });
          //dispatch({ type: GET_ALL_POSTS, payload: res.data });
        })
        .catch((err) => console.log(err));
    };
  };


  export const addPost = (data) => {
    return (dispatch) => {
      return axios
        .post("http://localhost:5000/etudiant-e96f9/us-central1/api/publication", data)
        .then((res) => {
          
            dispatch({ type: POST_POST, payload: res.data });
         })

         .catch((err) => console.log(err.response.data));

        };
        
      };
