var fs = require("fs");
var express = require('express');
var app = express();
app.configure(function () {

    app.use(
        "/", //the URL throught which you want to access to you static content

        //express.static(__dirname) //where your static content is located in your filesystem
        express.static(__dirname+"/../www")
    );
});
app.listen(3000); //the port you want to use

console.log("Server listening on http://localhost:3000");
