var express = require("express");
var app = express();
const router = express.Router();
const path = require("path");

router.get("/idm231", function(req, res) {
    res.sendFile(path.join(`${__dirname}/idm231/index.html`));
});

router.get("/idm231/detail", function(req, res) {
    res.sendFile(path.join(`${__dirname}/idm231/detail.html`));
});

app.use(express.static("."), router);
app.listen(process.env.PORT || 4200);

/*
var express = require("express");
var app = express();
app.use(express.static("."));

app.listen(process.env.PORT || 4200);
*/