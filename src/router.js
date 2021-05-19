const {homeHandler, searchHandler} = require("./controllers/home");
const addBreedHandler = require("./controllers/addBreed");
const addCatHandler = require("./controllers/addCat")
const shelterHandler = require("./controllers/shelterCat")
const editHandler = require("./controllers/editCat")

const staticHandler = require("./controllers/static/static");
const favIconHandler = require("./controllers/static/fav-icon");
const imageHandler = require("./controllers/static/image");

const qs = require("querystring")

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
    }

    switch(true) {
        case /^\/details\/.+$/g.test(req.url):
            req.method === "GET" ? shelterHandler.GET(req, res) : shelterHandler.POST(req, res)
        break;
        case /^\/edit\/.+$/g.test(req.url): 
            req.method === "GET" ? editHandler.GET(req, res) : editHandler.POST(req, res)
        break;
        case /\/images\/.+$/g.test(req.url): 
            imageHandler(req, res)
        break;
        case /^\/\?breed=.+$/g.test(req.url):
            searchHandler(req, res)
        break;
    }
}