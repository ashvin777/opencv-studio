var express = require('express');
var path = require('path');
var app = express();
var cv = require("opencv");
var bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: '15mb' }));
app.use(bodyParser.urlencoded({ limit: '15mb' }));

var port = process.env.PORT || 8080;

app.use((req, res, next) => next());

app.post("/process", (req, res, next) => {
  let image = new Buffer(req.body.image, 'base64');
  cv.readImage(image, function (err, im) {
    im[req.body.method]();
    res.send({
      error: false,
      body: {
        image: im.toBuffer().toString('base64')
      }
    })
  });
});

app.listen(port, () => {
  console.log("Server has been started on:", port);
});
