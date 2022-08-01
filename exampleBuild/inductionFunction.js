import secondFunctionDIRV from "./secondFunctionDIRV.js";
const inductionFunction = (
  [a1, a2],
  AllEst,
  filteredAllArr,
  number,
  estimates,
  bool
) => {
  const eachEstigate = [[a1, a2], []]; //##### first element of array is [minEst, maxEst], the second probability
  estimates.map((element) => AllEst.push(element)); //### remove elements form estimates and add to array AllEstimates
  estimates.splice(0, 2);
  estimates.push(filteredAllArr[number][0], eachEstigate[0]); //### added to estimates array for the first estigate(with new probabilities) and for the new third estigate
  filteredAllArr.push(
    secondFunctionDIRV(
      estimates,
      filteredAllArr[number][1],
      eachEstigate[1],
      bool
    )
  );
};
export default inductionFunction;
