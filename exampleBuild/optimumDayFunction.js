const optimumDayFunction = (filteredAllArrays) => {
  const l = filteredAllArrays.length;

  const lastArray = filteredAllArrays[l - 1];

  let max = 0;
  let optimumArray = [];
  for (let i = 0; i <= lastArray[0][1] - lastArray[0][0]; i++) {
    if (max < lastArray[1][i]) {
      max = lastArray[1][i];
    }
    optimumArray.push([
      i + lastArray[0][1] - lastArray[0][0] + 1,
      lastArray[1][i],
    ]);
  }
  optimumArray = optimumArray.filter((e) => e[1] === max);
  return optimumArray[0][0];
};
export default optimumDayFunction;
