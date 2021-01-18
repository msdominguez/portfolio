var express = require("express");
var app = express();
const router = express.Router();
const path = require("path");
const zodjson = require('./idm231/zod.json');
app.use(express.static("."), router);

router.get("/idm231", function(req, res) {
    res.sendFile(path.join('./idm231/index.html '));
});

router.get("/idm231/detail", function(req, res) {
    res.sendFile(path.join('./idm231/detail.html'));
});

app.get("/getZod", function(req, resp) {
    return resp.json(zodjson);
});

// exports.app = functions.https.onRequest(app);

app.listen(4200);