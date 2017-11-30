import axios from "axios";
//import moment from "moment";

//Action Constants

const REQ_USER = "REQ_USER";
const USER_FRIENDS = "USER_FRIENDS";
const USER_TRIPS = "USER_TRIPS";
const USER_NEW_TRIP = "USER_NEW_TRIP";
const SELECTED_TRIP = "SELECTED_TRIP";
const GET_FRIENDS_ON_TRIP = "GET_FRIENDS_ON_TRIP";
const GET_FRIENDS_PROFILE = "GET_FRIENDS_PROFILE";
const GET_FRIENDS_TRIPS = "GET_FRIENDS_TRIPS";
const GET_FRIENDS_IMAGE = "GET_FRIENDS_IMAGE";

//InitialState

const initialState = {
  user: {},
  trips: [],
  friends: [],
  newTrip: {},
  selectedTrip: {},
  selectedUser: null,
  selectedUserTrips: [],
  selectedUserImage: "",
  friendsOnTrip: [],
  commentsOnTrip: [],
  selectedNewFriend: {}
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
    case USER_FRIENDS + "_FULFILLED":
      console.log(action.payload);
      return Object.assign({}, state, {
        friends: action.payload,
        isLoading: false
      });
    case USER_TRIPS + "_FULFILLED":
      console.log(action.payload);
      return Object.assign({}, state, {
        trips: action.payload,
        isLoading: false
      });
    case SELECTED_TRIP + "_PENDING":
      return Object.assign({}, state, {
        isLoading: true
      });
    case SELECTED_TRIP + "_FULFILLED":
      console.log(action.payload);
      return Object.assign({}, state, {
        selectedTrip: action.payload,
        isLoading: false
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
    case GET_FRIENDS_PROFILE:
      console.log(action.payload);
      return Object.assign({}, state, {
        isLoading: false,
        selectedUser: action.payload
      });
    case GET_FRIENDS_TRIPS + "_PENDING":
      console.log(action.payload);
      return Object.assign({}, state, {
        isLoading: true
      });
    case GET_FRIENDS_TRIPS + "_FULFILLED":
      console.log(action.payload);
      return Object.assign({}, state, {
        isLoading: false,
        selectedUserTrips: action.payload
      });
    case GET_FRIENDS_IMAGE:
      console.log(action.payload);
      return Object.assign({}, state, {
        selectedUserImage: action.payload
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
  return {
    type: USER_NEW_TRIP,
    payload: axios.post(`/api/planTrip/`, trip_state)
  };
}
export function getSelectedTrip(trip_id) {
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
export function getFriendsOnTrip(friendObj) {
  return {
    type: GET_FRIENDS_ON_TRIP,
    payload: axios
      .post(`/api/getFriendsOnTrip`, friendObj)
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .catch(err => err)
  };
}
export function getFriendsProfile(friend_id) {
  return {
    type: GET_FRIENDS_PROFILE,
    payload: friend_id
  };
}
export function getFriendsImage(profile_image) {
  return {
    type: GET_FRIENDS_IMAGE,
    payload: profile_image
  };
}
export function selectUserTrips(friend_id) {
  console.log("success", friend_id);
  return {
    type: GET_FRIENDS_TRIPS,
    payload: axios
      .get(`/api/getTrips/${friend_id}`)
      .then(response => {
        console.log(response);
        return response.data;
      })
      .catch(err => err)
  };
}
