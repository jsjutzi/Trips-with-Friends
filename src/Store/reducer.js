import axios from "axios";

//Action Constants

const REQ_USER = "REQ_USER";

//InitialState

const initialState = {
  user: {}
};

//Reducer
export default function reducer(state = initialState, action) {
  console.log("ACTION TYPE", action.type);
  switch (action.type) {
    case REQ_USER + "_PENDING":
      return Object.assign({}, state, { isLoading: true });
    case REQ_USER + "_FULFILLED":
      return Object.assign({}, state, {
        isLoading: false,
        user: action.payload
      });

    default:
      return state;
  }
}

//Action Creators

export function getUserInfo() {
  return {
    type: REQ_USER,
    payload: axios.get("/api/me").then(response => {
      console.log(response.data);
      return response.data;
    })
  };
}
