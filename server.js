const express = require('express');
const app = express();
const drinks = require('./models/drinks');

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
