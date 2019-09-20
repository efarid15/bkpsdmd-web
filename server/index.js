const express = require("express");
const consola = require("consola");
var cors = require("cors");
const { Nuxt, Builder } = require("nuxt");
const app = express();

// Import and Set Nuxt.js options
let config = require("../nuxt.config.js");
config.dev = !(process.env.NODE_ENV === "production");

async function start() {
    // Init Nuxt.js
    const nuxt = new Nuxt(config);

    const { host, port } = nuxt.options.server;

    // Build only in dev mode
    if (config.dev) {
        const builder = new Builder(nuxt);
        await builder.build();
    } else {
        await nuxt.ready();
    }

    var allowCrossDomain = function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        next();
    };

    // Listen the server
    app.listen(port, host);
    app.use(nuxt.render);
    app.use(cors());
    app.options("*", cors());
    consola.ready({
        message: `Server listening ons http://${host}:${port}`,
        badge: true
    });
}
start();