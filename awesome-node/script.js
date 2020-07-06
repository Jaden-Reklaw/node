//allows you to access your file system
const fs = require('fs');

//Used to read data from a text file
//asynchronous runs second
fs.readFile('./hello.txt', (err, data) => {
    if(err) {
        console.log('error');
    }
    //add to string in order to use utf8
    console.log('1 async',data.toString());
});

//Synchronous 
//runs first
const textFile = fs.readFileSync('./hello.txt');
console.log('2 sync',textFile.toString());


//Add text to a specified file
// fs.appendFile('./hello.txt', 'TEXT GOES HERE', error => {
//     if(error) {
//         console.log(error);
//     }
// })

//Create new file
fs.writeFile('bye.txt', 'TEXT GOES HERE', error => {
    if(error) {
        console.log(error);
    }
});

//Delete a file using fs
fs.unlink('./bye.txt', error => {
    if(error) {
        console.log(error);
    }

    console.log('Inception');
})

/*
    The reason this is so cool is that you can work
    with basic I/O where your not rellying on the web browser
    but interacting with the computer systems.
    You can read from an excel spreadsheet, microphone data
    sensors that attached to the computer. etc
*/