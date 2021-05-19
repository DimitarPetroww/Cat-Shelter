const homeHandler = require("./controllers/home");
const addBreedHandler = require("./controllers/addBreed");
const addCatHandler = require("./controllers/addCat")
const postBreed = require("./controllers/postBreed")
const staticHandler = require("./controllers/static");
const favIconHandler = require("./controllers/fav-icon")

const GETRequestMap = {
    "/": homeHandler,
    "/add-breed": addBreedHandler,
    "/add-cat": addCatHandler,
    "/content/styles/site.css": staticHandler,
    "/content/images/pawprint.ico": favIconHandler
}
const POSTRequestMap = {
    "/add-breed": postBreed
}

module.exports = function (req, res) {
    const handler = req.method === "GET" ? GETRequestMap[req.url] : POSTRequestMap[req.url]
    if (typeof handler === "function") {
        handler(req, res)
    }
}