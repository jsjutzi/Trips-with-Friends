import axios from "axios";
//import moment from "moment";

//Action Constants

const REQ_USER = "REQ_USER";
const USER_FRIENDS = "USER_FRIENDS";
const USER_TRIPS = "USER_TRIPS";
const USER_NEW_TRIP = "USER_NEW_TRIP";
const SELECTED_TRIP = "SELECTED_TRIP";
const GET_FRIENDS_ON_TRIP = "GET_FRIENDS_ON_TRIP";

//InitialState

const initialState = {
  user: {},
  trips: [],
  friends: [],
  newTrip: {},
  selectedTrip: {},
  friendsOnTrip: [],
  commentsOnTrip: []
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

    case USER_NEW_TRIP + "_FULFILLED":
      console.log(action.payload);
      return Object.assign({}, state, {
        newTrip: action.payload.data,
        isLoading: false
      });
    case SELECTED_TRIP + "_PENDING":
      console.log(action, "pending");
      return Object.assign({}, state, {
        isLoading: true
      });
    case SELECTED_TRIP + "_FULFILLED":
      console.log(action.payload);
      return Object.assign({}, state, {
        selectedTrip: action.payload,
        isLoading: false
      });
    case SELECTED_TRIP + "_REJECTED":
      console.log(action.payload);
      return Object.assign({}, state, {
        isLoading: false,
        error: action.payload
      });
    case GET_FRIENDS_ON_TRIP + "_PENDING":
      console.log(action.payload);
      return Object.assign({}, state, {
        isLoading: true
      });
    case GET_FRIENDS_ON_TRIP + "_FULFILLED":
      console.log(action.payload);
      return Object.assign({}, state, {
        isLoading: false,
        friendsOnTrip: action.payload
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
        console.log(response);
        return response.data;
      })
      .catch(err => err)
  };
}
export function addNewTrip(trip_state) {
  console.log(trip_state);
  return {
    type: USER_NEW_TRIP,
    payload: axios.post(`/api/planTrip/`, trip_state)
  };
}
export function getSelectedTrip(trip_id) {
  console.log("this is the trip id", trip_id);
  return {
    type: SELECTED_TRIP,
    payload: axios
      .get(`/api/selectedTrip/${trip_id}`)
      .then(response => {
        console.log(response.data);
        return response.data[0];
      })
      .catch(err => err)
  };
}
export function getFriendsOnTrip(trip_id) {
  console.log("this is the trip id", trip_id);
  return {
    type: GET_FRIENDS_ON_TRIP,
    payload: axios
      .get(`/api/getFriendsOnTrip/${trip_id}`)
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .catch(err => err)
  };
}
