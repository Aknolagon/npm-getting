const userInfo = require("./information");
const cowsay = require("cowsay");

const message = cowsay.think({ text:`Hi, my name is ${userInfo.name} and I'm in ${userInfo.campus}`});

console.log(message);
