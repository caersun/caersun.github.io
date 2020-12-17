const db = require("../models");

module.exports = (app) => {
    app.get("/api/contacts", (request, response) => {
        db.Contact.findAll({}).then((dbContact) => {
            response.json(dbContact);
        });
    });

    app.get("/api/contacts/:id", (request, response) => {
        const { id } = request.params;
        db.Contact.findOne({ where: { id }}).then((dbContact) => {
            response.json(dbContact);
        });
    });

    app.post("/api/contacts", (request, response) => {
        db.Contact.create(request.body).then((dbContact) => {
            response.status(201).json(dbContact);
        });
    });

    app.delete("/api/contacts/:id", (request, response) => {
        const { id } = request.params;
        db.Contact.destroy({ where: { id }}).then((dbContact) => {
            response.json(dbContact);
        });
    });
};