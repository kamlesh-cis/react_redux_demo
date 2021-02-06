import axios from "axios";

export const getUsers = () => dispatch => {
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      dispatch({
        type: "USERS",
        payload: response.data
      })
    })
    .catch(error =>
      dispatch({
        type: "USERS_ERRORS",
        payload: []
      })
    );
};


export const deleteUser = () => dispatch => {
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      dispatch({
        type: "DELETE_USER",
        payload: response.data
      })
    }
    )
    .catch(error =>
      dispatch({
        type: "DELETE_USER_ERROR",
        payload: []
      })
    );
};

export const getUser = () => dispatch => {
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      dispatch({
        type: "USER",
        payload: response.data
      })
    }
    )
    .catch(error =>
      dispatch({
        type: "USERS_ERROR",
        payload: []
      })
    );
};
 