// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

/*
 *  STEPS TO SEQUELIZE THE STAR WARS APP.
 *  1. Install the sequelize and mysql2 npm packages.
 *  2. Delete the orm from config. In your app folder, create a model folder
 *     with a character.js file in the model
 *  3. In character.js, model out the character table, as detailed
 *     in the schema.sql file located in the root of this project directory.
 *  4. Remove all references to the old orm file,
 *     and replace it with character.js
 *  5. Use Sequelize methods in place of the orm calls
 *     to retrieve and insert data.
 *  6. Update connection.js to use sequelize instead of the mysql package.
 *
 * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ */

// Dependencies
// =============================================================

var express = require("express");
var app = express();

var db = require("./models");


// Sets up the Express App
// =============================================================

var fileUpload = require("express-fileupload");
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
// Static directory to be served
app.use(express.static("app/public"));

// Routes
// =============================================================
// require("./app/routes/api-routes.js")(app);

// Here we introduce HTML routing to serve different HTML files
require("./app/routes/html-routes.js")(app);

// require("./routes")(app);



const routes = require("./routes");
app.use(routes);



// Starts the server to begin listening
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
	});
});
