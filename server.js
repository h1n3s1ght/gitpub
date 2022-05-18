const express = require('express');
const app = express();
const drinks = require('./models/drinks');
const food = require('./models/food');

//Set the PORT to 3000
const PORT = 3000;

//Set up Listener for server connection
app.listen(PORT, () => {
    console.log("The connection is working through port:", PORT);
})

//include a get route / that will res.send('Welcome to the Gitpub App!');so that when you got to localhost:3000, you will see Welcome to the Gitpub App!
app.get("/", (req, res) => {
    res.send("Welcome to the GitPub App!")
})

//Create a get route /drinks that will res.send(drinks), which will display your drinks data as json in the browser
app.get("/drinks", (req, res) => {
    res.render('drinks_index.ejs', {drinks});
})

//Add a new get route for /drinks/:id
app.get("/drinks/:id", (req, res) => {
    res.render('drinks_show.ejs', {drinks: drinks[req.params.id]});
})

//Create a get route /drinks that will res.send(drinks), which will display your drinks data as json in the browser
app.get("/food", (req, res) => {
    res.render('food_index.ejs', {food});
})

//Add a new get route for /drinks/:id
app.get("/food/:id", (req, res) => {
    res.render('food_show.ejs', {food: food[req.params.id]});
})
