import math from 'mathjs';

// Matrices and Vectors

const matrixA = math.matrix([[0, 1], [2, 3], [4, 5]]);
const matrixB = math.matrix([[0], [1], [2]]);

console.log(`Matrix A Dimension: ${matrixA.size()[0]}x${matrixA.size()[1]}`);
console.log(`Is vector: ${matrixA.size()[1] === 1}`);

console.log(`Matrix B Dimension: ${matrixB.size()[0]}x${matrixB.size()[1]}`);
console.log(`Is vector: ${matrixB.size()[1] === 1}`);
console.log('\n');

// Matrix Addition

const matrixC = math.matrix([[0, 1], [2, 3], [4, -5]]);
const matrixD = math.matrix([[1, -1], [-2, 4], [-7, 4]]);

const matrixAdditionCD = math.add(matrixC, matrixD);

console.log('Matrix Addition:');
console.log(matrixAdditionCD.valueOf());
console.log('\n');

// Matrix Subtraction

const matrixE = math.matrix([[0, 1], [2, 3], [4, -5]]);
const matrixF = math.matrix([[1, -1], [-2, 4], [-7, 4]]);

const matrixAdditionEF = math.subtract(matrixE, matrixF);

console.log('Matrix Subtraction:');
console.log(matrixAdditionEF.valueOf());
console.log('\n');

// Matrix Scalar Multiplication

const matrixG = math.matrix([[0, 1], [2, 3], [4, -5]]);

const matrixG3 = math.multiply(3, matrixG);

console.log('Matrix Scalar Multiplication:');
console.log(matrixG3.valueOf());
console.log('\n');

// Matrix Scalar Division

const matrixH = math.matrix([[2, 4], [6, 2], [4, -4]]);

const matrixH2 = math.divide(matrixH, 2);

console.log('Matrix Scalar Division:');
console.log(matrixH2.valueOf());
console.log('\n');

// Matrix-Vector Multiplication

const matrixI = math.matrix([[0, 1], [2, 3], [4, 5]]);
const matrixJ = math.matrix([[2], [1]]);

const matrixIJ = math.multiply(matrixI, matrixJ);

console.log('Matrix-Vector Multiplication:');
console.log(matrixIJ.valueOf());
console.log('\n');

// Matrix Multiplication

const matrixK = math.matrix([[0, 1], [2, 3], [4, 5]]);
const matrixL = math.matrix([[2, 4], [6, 2]]);

const matrixKL = math.multiply(matrixK, matrixL);

console.log('Matrix Multiplication:');
console.log(matrixKL.valueOf());
console.log('\n');

// Matrix Division

const matrixY = math.matrix([[0, 2], [2, 4], [4, 6]]);
const matrixZ = math.matrix([[2, 1], [2, 2]]);

const matrixYZ = math.divide(matrixY, matrixZ);

console.log('Matrix Division:');
console.log(matrixYZ.valueOf());
console.log('\n');

// Matrix Property: Not Commutative

const matrixN = math.matrix([[0, 1], [2, 3], [4, 5]]);
const matrixO = math.matrix([[2, 4], [6, 2]]);

const matrixNO = math.multiply(matrixN, matrixO);
const matrixON = math.multiply(matrixO, matrixL);

console.log('Are matrices commutative?');
console.log(math.equal(matrixNO.size(), matrixON.size()));
console.log('\n');

// Matrix Property: But Associative

const matrixP = math.matrix([[0, 1], [2, 3], [4, 5]]);
const matrixQ = math.matrix([[2, 4], [6, 2]]);
const matrixR = math.matrix([[5, 2], [2, -2]]);

const matrixPQ_R = math.multiply(math.multiply(matrixP, matrixQ), matrixR);
const matrixP_QR = math.multiply(matrixP, math.multiply(matrixQ, matrixR));

console.log('Are matrices associative?');
console.log(math.equal(matrixPQ_R.valueOf(), matrixP_QR.valueOf()));
console.log('\n');

// Identity (I) Matrix

const matrixM = math.eye(3);

console.log('Identity Matrix:');
console.log(matrixM.valueOf());
console.log('\n');

// Inverse Matrix

const matrixS = math.matrix([[0, 1], [2, 3]]);

const matrixS_I = math.inv(matrixS);

console.log('Inverse Matrix:');
console.log(matrixS_I.valueOf());
console.log('\n');

// Calculated Inverse Matrix with Identity Matrix

const matrixT = math.matrix([[0, 1], [2, 3]]);
const matrixU = math.eye(2);

const matrixT_I = math.divide(matrixU, matrixT);

console.log('Calculated Inverse Matrix with Identity Matrix:');
console.log(matrixT_I.valueOf());
console.log('\n');

// Transpose Matrix

const matrixV = math.matrix([[0], [1], [2]]);

const matrixV_T = math.transpose(matrixV);

console.log('Transpose Matrix:');
console.log(matrixV_T.valueOf());
console.log('\n');

// Example: Predicting Housing Prices with 3 competing Hypotheses

console.log('Predicting Housing Prices with 3 competing Hypotheses:');
console.log('const HOUSE_SIZES = [2104, 1416, 1534, 852];');
console.log('const h1 = x => -40 + 0.25 * x;');
console.log('const h2 = x => 200 + 0.1 * x;');
console.log('const h3 = x => -150 + 0.4 * x;');
console.log('\n');

const houseSizeMatrix = math.matrix([
  [1, 2104],
  [1, 1416],
  [1, 1534],
  [1, 852],
]);

const hypothesesMatrix = math.matrix([
  [-40, 200, -150],
  [0.25, 0.1, 0.4],
]);

const competingResults = math.multiply(houseSizeMatrix, hypothesesMatrix);

console.log('Column: Result for each Hypothesis');
console.log('Row: Result for each House Size');
console.log(competingResults.valueOf());
console.log('\n');
