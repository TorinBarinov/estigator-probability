import setupProbability from "./setupProbability.js";
import sumOfEveryEstimate from "./sumOfEveryEstimate.js";
import { S, h } from "../index.js";

const firstFunctionDIRV = (estimate, p, bool1, bool2) => {
  const diffEstimate = estimate.map((element) => element[1] - element[0]);
  const minEstimate = estimate.map((element) => element[0]);
  const maxEstimate = estimate.map((element) => element[1]);
  console.log(minEstimate, maxEstimate, diffEstimate, p);

  console.log(diffEstimate[0]);
  setupProbability(diffEstimate[0], p[0], bool1, 0.75);
  setupProbability(diffEstimate[1], p[1], bool2, 0);

  const sumOfMaxEstimate = sumOfEveryEstimate(maxEstimate);
  const sumOfMinEstimate = sumOfEveryEstimate(minEstimate);
  console.log(sumOfMaxEstimate, "and", sumOfMinEstimate);
  const initialValueOfArrays = (sum) => {
    for (let z = 0; z <= sum + 5; z++) {
      S[z] = 0; //## arrays of nulls
      h[z] = 0;
    }
  };
  initialValueOfArrays(sumOfMaxEstimate);
  console.log(S, h);
  let sum = 0;
  let filtered = [];
  for (let i = sumOfMinEstimate; i <= sumOfMaxEstimate; i++) {
    for (let i0 = 0; i0 <= diffEstimate[0]; i0++) {
      for (let i1 = 0; i1 <= diffEstimate[1]; i1++) {
        if (i0 + i1 + sumOfMinEstimate === i) {
          S[i] = p[0][i0] * p[1][i1];
          h[i] = h[i] + S[i];
          sum = sum + S[i];
        }
      }
    }
  }
  console.log("Sum", sum);
  return [
    [sumOfMinEstimate, sumOfMaxEstimate],
    (filtered = h.filter((a) => a !== 0)),
  ];
};
export default firstFunctionDIRV;
