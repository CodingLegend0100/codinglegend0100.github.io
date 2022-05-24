const express = require("express");

const app = express();
const http = require(http).Server(app);

app.listen('/', (req, res) => {
    res.send('index.html');
});

var server = http.listen(3000, () => {
    console.log('Server listening on port ',server.address().port)
});