const homeHandler = require("./controllers/home");
const addBreedHandler = require("./controllers/addBreed");
const addCatHandler = require("./controllers/addCat")
const shelterHandler = require("./controllers/shelterCat")
const editHandler = require("./controllers/editCat")

const staticHandler = require("./controllers/static/static");
const favIconHandler = require("./controllers/static/fav-icon");
const imageHandler = require("./controllers/static/image");

const GETRequestMap = {
    "/": homeHandler,
    "/add-breed": addBreedHandler.GET,
    "/add-cat": addCatHandler.GET,
    "/content/styles/site.css": staticHandler,
    "/content/images/pawprint.ico": favIconHandler
}
const POSTRequestMap = {
    "/add-breed": addBreedHandler.POST,
    "/add-cat": addCatHandler.POST
}

module.exports = function (req, res) {
    const handler = req.method === "GET" ? GETRequestMap[req.url] : POSTRequestMap[req.url]
    if (typeof handler === "function") {
        handler(req, res)
    }else if(req.url.match(/^\/details\/.+$/g)) {
        req.method === "GET" ? shelterHandler.GET(req, res) : shelterHandler.POST(req, res)
    }else if(req.url.match(/^\/edit\/.+$/g)) {
        req.method === "GET" ? editHandler.GET(req, res) : editHandler.POST(req, res)
    }else if(req.url.includes("images")) {
        imageHandler(req, res)
    }
}