import { find_distance } from "./find_distance/index";

let point1 = [7, 2];
let point2 = [2, 5];

const d = new find_distance(point1, point2);
console.log("Distance Result:", d.distance());
