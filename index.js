const userInfo = require('./information');
console.log(`Hi, my name is ${userInfo.name} and I'm in ${userInfo.campus}`);

import * as userInfo from "cowsay"

let output: string = cowsay.say({ text: 'Hi, my name is ${userInfo.name} and I'm in ${userInfo.campus} });

console.log(output);