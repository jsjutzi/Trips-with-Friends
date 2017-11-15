import alaska from "../Images/alaska-project.jpg";
import bali from "../Images/bali-sun-project.jpg";
import beach from "../Images/beach-project.jpg";
import flower from "../Images/flower-sun-project.jpeg";
import imperial from "../Images/Imperial-Beach-project.jpg";
import italy from "../Images/italy-project.jpg";
import stream1 from "../Images/mountain-stream-2-project.jpg";
import stream2 from "../Images/mountain-stream-project.jpg";
import newYork from "../Images/New-york-skyline-project.jpg";
import paris from "../Images/Paris-project.jpg";
import philly from "../Images/philadelphia-skyline-project.jpg";
import rockies from "../Images/rockies-project.jpg";
import seattle from "../Images/seattle-project.jpg";
import snow from "../Images/snow-trees-project.jpg";
import stars from "../Images/starry-sky-project.jpg";
import tokyo from "../Images/Tokyo-City-Wallpaper-project.jpg";
import waterfall from "../Images/waterfall-project.jpg";
import croatia from "../Images/croatia-project.jpg";
import greenery from "../Images/greenery-project.jpg";
import mountains from "../Images/mountains-project.jpg";
import skyline from "../Images/colorful-skyline-project.jpg";

const images = [
  alaska,
  bali,
  beach,
  flower,
  imperial,
  italy,
  stream1,
  stream2,
  newYork,
  paris,
  philly,
  rockies,
  seattle,
  snow,
  stars,
  tokyo,
  waterfall,
  croatia,
  greenery,
  mountains,
  skyline
];

export default function changeBackground() {
  let num = Math.floor(Math.random() * (20 - 1) + 1);
  let newImage = images[num];
  console.log(num, newImage);
  return newImage;
}
