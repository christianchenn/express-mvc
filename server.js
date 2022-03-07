const express = require('express');
const {routers} = require("./routes/router")

module.exports.init = function () {
    const app = express();

    // middlewares
    app.use(express.urlencoded({ extended: true }));

    // setup routes
    for (const router of routers) {
        app.use(router.path, router.route)
    }

    return app;
};