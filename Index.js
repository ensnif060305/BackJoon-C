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

/*10926*/

const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
 
rl.on("line", (line) => {
    input = line.split(' ').map(el => String(el));
    rl.close();
});
 
rl.on('close', () => {
    console.log(`${input}??!`);
    process.exit();
})

/*18108*/

const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
 
rl.on("line", (line) => {
    input = line.split(' ').map(el => parseInt(el));
    rl.close();
});
 
rl.on('close', () => {
    console.log(input-543);
    process.exit();
})

/*3003*/

const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

input = [];

rl.on("line", (line) => {
    input = line.split(' ').map(el => parseInt(el));
    rl.close();
});
 
rl.on('close', () => {
    console.log(`${1-input[0]} ${1-input[1]} ${2-input[2]} ${2-input[3]} ${2-input[4]} ${8-input[5]}`);
    process.exit();
})

/*2588*/

const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split('\n');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

const first = A * (B%10);
const second = A * Math.floor((B%100)/10);
const third = A * (Math.floor(B/100));
const result = first + second*10 + third*100;


console.log(first);
console.log(second);
console.log(third);
console.log(result);
