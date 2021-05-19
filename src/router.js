const homeHandler = require("./controllers/home");
const addBreedHandler = require("./controllers/addBreed");
const addCatHandler = require("./controllers/addCat")
const postBreed = require("./controllers/postBreed")
const postCat = require("./controllers/postCat")
const staticHandler = require("./controllers/static/static");
const favIconHandler = require("./controllers/static/fav-icon");
const imageHandler = require("./controllers/static/image");

const GETRequestMap = {
    "/": homeHandler,
    "/add-breed": addBreedHandler,
    "/add-cat": addCatHandler,
    "/content/styles/site.css": staticHandler,
    "/content/images/pawprint.ico": favIconHandler
}
const POSTRequestMap = {
    "/add-breed": postBreed,
    "/add-cat": postCat
}

module.exports = function (req, res) {
    const handler = req.method === "GET" ? GETRequestMap[req.url] : POSTRequestMap[req.url]
    if (typeof handler === "function") {
        handler(req, res)
    }else if(req.url.includes("images")) {
        imageHandler(req, res)
    }
}