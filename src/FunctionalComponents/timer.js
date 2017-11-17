import moment from "moment";

function timer() {
  let currentTime = moment().format("hh:MM:SS a");
  return currentTime;
}
function dater() {
  let date = moment().format("dddd, MMMM Do YYYY");
  return date;
}
export default function dateTimer() {
  setInterval(timer, 1000);
  setInterval(dater, 1000);
}
