export const sumOfEveryEstimate = (estimate) => {
  const l = estimate.length;
  let sum = 0;
  for (let i = 0; i <= l - 1; i++) {
    sum = sum + estimate[i];
  }
  return sum;
};
