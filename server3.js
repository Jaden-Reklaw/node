const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

//How to send static files over the server
//looks for index.html in the public folder
app.use(express.static(__dirname + '/public'));

app.get('/:id', (req, res) => {
    //Add to the end of the url
    // after slash ?name=jordan&age=31
    //console.log(req.query);

    //When you post something to the server
    //req.body

    //in postman click on header
    //send content type with property and value
    //console.log(req.headers);

    //Add 1234 in the url and make sure /:id on server
    //console.log(req.params);
    res.status(200).send('getting root');
});

app.listen(3000);