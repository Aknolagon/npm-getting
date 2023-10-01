const userInfo = require("./information");
const cowsay = require("cowsay");

const message = `Hi, my name is ${userInfo.name} and I'm in ${userInfo.campus}`;
const output = cowsay.think({ text:message});

console.log(output);
