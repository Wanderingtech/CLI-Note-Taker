var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

