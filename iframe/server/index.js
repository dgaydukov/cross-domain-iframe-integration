'use strict';

/*
 * Node.js web server
 */

const express = require('express'),
    path = require("path"),
    app = express(),
    port = process.env.port || process.env.PORT || 3000,
    host = "127.0.0.1";


//serve static (css, js, images)
app.use(express.static(path.join(__dirname, '../static')));

//redirect every request to index.html, so we can use browserRouter (instead of hashrouter)
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../static/index.html'));
});

app.listen(port, host, function (err) {
    if (err) {
        return console.error(err);
    }
    console.log(`Listening http://${host}:${port}`);
});