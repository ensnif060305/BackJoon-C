/*2557*/

console.log("Hello World!");

/*10718*/

console.log(`강한친구 대한육군
강한친구 대한육군`);

/*1000*/

const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A+B);

/*1001*/

const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A-B);

/*10998*/

const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A*B);

/*1008*/

const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A/B);

/*10869*/

const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(`${A+B}
${A-B}
${A*B}
${parseInt(A/B)}
${A%B}`);
