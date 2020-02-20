const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

var express = require("express");
var app = express();
const router = express.Router();
const path = require("path");
const zodjson = require(`${__dirname}/zod.json`);
app.use(express.static("."), router);

router.get("/idm231", (req, res) => {
    res.sendFile(path.join(`../idm231/index.html`));
});

router.get("/idm231/detail", (req, res) => {
    res.sendFile(path.join(`../idm231/detail.html`));
});

app.get("/getZod", (req, resp) => {
    return resp.json(zodjson);
});

exports.app = functions.https.onRequest(app);