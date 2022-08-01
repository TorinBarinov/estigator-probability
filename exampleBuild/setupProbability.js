function setupProbability(diffEst, prob, hasDiffProbs, firstDiffProb) {
  console.log(hasDiffProbs);
  if (hasDiffProbs) {
    for (let i = 0; i <= diffEst; i++) {
      console.log(firstDiffProb, i);
      if (i === 0) {
        prob[i] = firstDiffProb;
      } else {
        if (i === diffEst) {
          prob[i] = 1 - firstDiffProb;
        } else prob[i] = 0;
      }
    }
  } else {
    for (let i = 0; i <= diffEst; i++) {
      prob[i] = 1 / (diffEst + 1);
    }
  }
  console.log(prob);
  return prob;
}
export default setupProbability;
