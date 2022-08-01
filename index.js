import firstFunctionDIRV from "./exampleBuild/firstFunctionOfDIRV.js";
import { estimates } from "./exampleBuild/estimates.js";
import secondFunctionDIRV from "./exampleBuild/secondFunctionDIRV.js";
import optimumDayFunction from "./exampleBuild/optimumDayFunction.js";
import inductionFunction from "./exampleBuild/inductionFunction.js";
// estimates array;
const h = [];
const S = [];
let probsArray = [[], []];
const filteredAllArrays = [];
const AllEstimates = [];
// ###################################### first function ###############################################
filteredAllArrays.push(firstFunctionDIRV(estimates, probsArray, false, false));

// ###################################### second function ###############################################

inductionFunction([1, 2], AllEstimates, filteredAllArrays, 0, estimates, true);
// ###################################### third function ###############################################

inductionFunction([2, 5], AllEstimates, filteredAllArrays, 1, estimates, false);
// ###################################### fourth function ###############################################

inductionFunction([3, 6], AllEstimates, filteredAllArrays, 2, estimates, false);

// ###################################### fifth function ###############################################

const theBestDay = optimumDayFunction(filteredAllArrays);
console.log(filteredAllArrays);
console.log(theBestDay); //#### The optimum work day

export { S, h };
