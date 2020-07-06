//After you npm install express you can put it on the server
const express = require('express');

//Assign express function to app to use its functions
const app = express();

//in order to access req.body you need the following line
app.use(express.urlencoded({extended: false}));
//in order for the server to recieve json from the front end
app.use(express.json());

//Add middleware to the express server
// app.use((req, res, next) => {
//     console.log('<h1>Hello World!</h1>');
//     next();
// })

//Methods to use with server get, post, delete and put
//Example of get routes you can also use post, put, and delete
app.get('/', (req, res) => {
    res.send('root route');
});

app.get('/sally', (req, res) => {
    const user = {
        name: 'Sally',
        hobby: 'basketball'
    }
    res.send(user);
});

app.get('/bill', (req, res) => {
    const user = {
        name: 'bill',
        hobby: 'coins'
    }
    res.send(user);
});

//Even though you have a post and a get express allows you to use the same
//route and still do different things.
app.post('/profile', (req, res) => {
    console.log('req.body is',req.body);
    res.sendStatus(201);
});

app.listen(3000);


