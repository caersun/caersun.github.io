const project = require("../db/projects.json");

module.exports = (app) => {
    app.get("/", (request, response) => {
        const data = { project };
        response.render("index", data);
    });
};