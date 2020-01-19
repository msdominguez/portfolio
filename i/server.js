var express = require('express');
var app = express();
const router = express.Router();
const path = require('path');

router.get('/', function(req, res) {
    res.sendFile(path.join(`${__dirname}/index.html`));
});

router.get('/detail', function(req, res) {
    res.sendFile(path.join(`${__dirname}/detail.html`));
});

app.use(express.static('.'), router);
app.listen(process.env.port || 4000);