const projects = require("../db/projects.json");

module.exports = (app) => {
    app.get("/", (request, response) => {
        const data = { projects };
        response.render("index", data);
    });
};