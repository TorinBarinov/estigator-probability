// import { initialValueOfArrays } from "./initialValueOfArrays.js";
// import { setupProbability } from "./setupProbability.js";
// import { sumOfEveryEstimate } from "./sumOfEveryEstimate.js";
// import { functionOfDIRV } from "./functionOfDIRV.js";
// import { maxEstimate, minEstimate, diffEstimate } from "./estimates.js";

// const p = [[], [], []]; //## array of probabilities for the  estimates

// const h = []; //## sums of probabilities of each variants

// const S = []; //##Probability of each variants

// setupProbability(diffEstimate[0], p[0], 0);

// setupProbability(diffEstimate[1], p[1], 1);

// setupProbability(diffEstimate[2], p[2], 2);

// const sumOfMaxEstimate = sumOfEveryEstimate(maxEstimate);

// const sumOfMinEstimate = sumOfEveryEstimate(minEstimate);

// initialValueOfArrays(sumOfMaxEstimate);

// const filteredArray = []; //## filtered array of discrete independent random variables

// const sumsOfDIRV = 0; //## sums of discrete independent random variables is always equal 1(one)

// const filteredDIRV = functionOfDIRV(
//   sumOfMaxEstimate,
//   sumOfMinEstimate,
//   diffEstimate,
//   p,
//   filteredArray,
//   sumsOfDIRV
// );
// console.log(
//   filteredDIRV,
//   "filtered array of discrete independent random variables"
// );
// export { S, h };
