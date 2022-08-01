let estimates = [
  [4, 7],
  [2, 3],
]; // [minEstimate, maxEstimate]
const diffEstimate = estimates.map((element) => element[1] - element[0]);

const minEstimate = estimates.map((element) => element[0]);
const maxEstimate = estimates.map((element) => element[1]);
export { diffEstimate, minEstimate, maxEstimate, estimates };
