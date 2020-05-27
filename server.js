const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

// Serve 'public' files
app.use(express.static("public"));

// Middleware to parse JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start the server
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
