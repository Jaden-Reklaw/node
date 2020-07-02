//After you npm install express you can put it on the server
const express = require('express');

//Assign express function to app to use its functions
const app = express();

//Example of get routes you can also use post, put, and delete
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
app.post('/bill', (req, res) => {
    const user = {
        name: 'Sally',
        hobby: 'basketball'
    }
    res.send(user);
});

app.listen(3000);