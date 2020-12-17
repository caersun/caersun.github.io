const express = require("express");
// const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3000;

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client"));

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

require("../routes/html-routes.js")(app);
require("../routes/contact-api-routes.js")(app);

// db.sequelize.sync({ force: true }).then(() => {});

app.listen(PORT, () => {
    console.log(`Server is live @ http://localhost:${PORT}`);
});