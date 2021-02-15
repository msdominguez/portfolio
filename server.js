var express = require("express");
var app = express();
const router = express.Router();
const path = require("path");
const zodjson = require('./idm231/zod.json');
app.use(express.static("."), router);

router.get("/", function(req, res) {
    res.sendFile(path.join(`${__dirname}/index.html`));
});

router.get("/about", function(req, res) {
    res.sendFile(path.join(`${__dirname}/about.html`));
});

router.get("/work", function(req, res) {
    res.sendFile(path.join(`${__dirname}/work.html`));
});

router.get("/projects", function(req, res) {
    res.sendFile(path.join(`${__dirname}/projects.html`));
});

router.get("/idm231", function(req, res) {
    res.sendFile(path.join(`${__dirname}/idm231/index.html`));
});

router.get("/idm231/detail", function(req, res) {
    res.sendFile(path.join(`${__dirname}/idm231/detail.html`));
});

app.get("/getZod", function(req, resp) {
    return resp.json(zodjson);
});

app.listen(process.env.PORT || 4200);