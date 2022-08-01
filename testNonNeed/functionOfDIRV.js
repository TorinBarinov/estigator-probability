// import { S, h } from "./index.js";
// export const functionOfDIRV = (
//   sumOfMaxEst,
//   sumOfMinEst,
//   diffEst,
//   p,
//   filterArr,
//   sum
// ) => {
//   for (let i = sumOfMinEst; i <= sumOfMaxEst; i++) {
//     for (let i0 = 0; i0 <= diffEst[0]; i0++) {
//       for (let i1 = 0; i1 <= diffEst[1]; i1++) {
//         for (let i2 = 0; i2 <= diffEst[2]; i2++) {
//           if (i0 + i1 + i2 + sumOfMinEst === i) {
//             S[i] = p[0][i0] * p[1][i1] * p[2][i2];
//             h[i] = h[i] + S[i];
//             sum = sum + S[i];
//           }
//         }
//       }
//     }
//   }
//   console.log(sum);
//   return (filterArr = h.filter((a) => a !== 0));
// };
