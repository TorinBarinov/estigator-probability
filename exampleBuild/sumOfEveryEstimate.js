const sumOfEveryEstimate = (eachEstimate) => {
  const l = eachEstimate.length;
  let sum = 0;
  for (let i = 0; i <= l - 1; i++) {
    sum = sum + eachEstimate[i];
  }
  return sum;
};
export default sumOfEveryEstimate;
