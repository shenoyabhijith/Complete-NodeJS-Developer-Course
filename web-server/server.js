/**
 * Created by manishgiri on 2/28/17.
 */

var express = require('express');
var app = express();

/*
app.get('/', function (req, res) {
    res.send("Hello Express");
})
*/

app.get("/about", function (req, res) {
    res.send("About Me");
})

//console.log(__dirname);
var port = 3000;

app.use(express.static(__dirname +"/public"));

app.listen(port, function () {
    console.log("Express server started on port " + port);
});
