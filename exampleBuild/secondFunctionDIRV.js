import setupProbability from "./setupProbability.js";
import sumOfEveryEstimate from "./sumOfEveryEstimate.js";
import { S, h } from "../index.js";
const secondFunctionDIRV = (estimate, probD, p2, bool1) => {
  const diffEstimate = estimate.map((element) => element[1] - element[0]);
  const minEstimate = estimate.map((element) => element[0]);
  const maxEstimate = estimate.map((element) => element[1]);

  setupProbability(diffEstimate[1], p2, bool1, 0.75);

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

  let secondSum = 0;
  let secondFiltered = 0;
  for (let i = sumOfMinEstimate; i <= sumOfMaxEstimate; i++) {
    for (let i0 = 0; i0 <= diffEstimate[0]; i0++) {
      for (let i1 = 0; i1 <= diffEstimate[1]; i1++) {
        if (i0 + i1 + sumOfMinEstimate === i) {
          S[i] = probD[i0] * p2[i1];
          h[i] = h[i] + S[i];
          secondSum = secondSum + S[i];
        }
      }
    }
  }
  console.log(secondSum);
  return [
    [sumOfMinEstimate, sumOfMaxEstimate],
    (secondFiltered = h.filter((a) => a !== 0)),
  ];
};
export default secondFunctionDIRV;
