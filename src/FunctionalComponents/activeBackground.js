import raindrops from "../Images/raindrop-gif.gif";
import highway from "../Images/highway-skyline.gif";
import treeLight from "../Images/tree-light.gif";
import sunshift from "../Images/sunshift.gif";
import ireland from "../Images/ireland.gif";

import volcanoe from "../Images/volcanoe.gif";
import waterfalls from "../Images/waterfalls.gif";

const images = [
  highway,
  raindrops,
  treeLight,
  sunshift,
  ireland,

  volcanoe,
  waterfalls
];

export default function changeBackground() {
  let num = Math.floor(Math.random() * (7 - 1) + 1);
  let newImage = images[num];
  console.log(num, newImage);
  return newImage;
}
