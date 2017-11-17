import axios from "axios";
//import moment from "moment";

//Action Constants

const REQ_USER = "REQ_USER";
const USER_FRIENDS = "USER_FRIENDS";
const USER_TRIPS = "USER_TRIPS";

//InitialState

const initialState = {
  user: {},
  trips: [],
  friends: []
};

//Reducer
export default function reducer(state = initialState, action) {
  console.log("ACTION TYPE", action.type);
  switch (action.type) {
    case REQ_USER + "_PENDING":
      console.log(action.payload);
      return Object.assign({}, state, { isLoading: true });
    case REQ_USER + "_FULFILLED":
      console.log(action.payload);
      return Object.assign({}, state, {
        isLoading: false,
        user: action.payload.data
      });
    case USER_FRIENDS + "_PENDING":
      console.log(action.payload);
      return Object.assign({}, state, {
        isLoading: true
      });
    case USER_FRIENDS + "_FULFILLED":
      console.log(action.payload);
      return Object.assign({}, state, {
        friends: action.payload,
        isLoading: false
      });
    case USER_TRIPS + "_PENDING":
      console.log(action.payload);
      return Object.assign({}, state, {
        isLoading: true
      });
    case USER_TRIPS + "_FULFILLED":
      console.log(action.payload);
      return Object.assign({}, state, {
        trips: action.payload,
        isLoading: false
      });
    case USER_TRIPS + "_REJECTED":
      return Object.assign({}, state, {
        isLoading: false,
        error: action.payload
      });

    default:
      return state;
  }
}

//Action Creators

export function getUserInfo() {
  return {
    type: REQ_USER,
    payload: axios.get("/api/me")
  };
}
export function getUserFriends(user_id) {
  return {
    type: USER_FRIENDS,
    payload: axios.get(`/api/getFriends/${user_id}`).then(response => {
      console.log(response);
      return response.data;
    })
  };
}
export function getUserTrips(user_id) {
  return {
    type: USER_TRIPS,
    payload: axios
      .get(`/api/getTrips/${user_id}`)
      .then(response => {
        return response.data;
      })
      .catch(err => err)
  };
}
