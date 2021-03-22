import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";
// import cars, { useCar } from "./practice";

// const [honda, tesla] = cars;
// const [teslaTopColour, teslaTopSpeed] = useCar(tesla);
// const [hondaTopColour, hondaTopSpeed] = useCar(honda);

const [honda, tesla] = cars;

const {
    speedStats: { topSpeed: hondaTopSpeed }
} = honda;

const {
    speedStats: { topSpeed: teslaTopSpeed }
} = tesla;



const {
    speedStats: { topSpeed }
} = tesla;




const { coloursByPopularity: [hondaTopColour] } = honda;

const { coloursByPopularity: [teslaTopColour] } = tesla;
// const {
//     coloursByPopularity: { teslaTopColour }
// } = tesla;



ReactDOM.render(
  <table>
    <tr>
      <th>Model</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{topSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
