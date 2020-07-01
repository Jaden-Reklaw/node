const script2 = require('./script2.js');

//Since I sent largeNumber as an object you access the object first then the property
const a = script2.largeNumber;
const b = 4;

//setTimeout works sinces its a process in node
//window does not work since it located in a web browser
//that's why fetch doesn't work on the server side
setTimeout(() => {
    console.log(a + b);
}, 3000);

//Get you the directory name
//You have the power to user the computers
//processes using node
console.log(__dirname);