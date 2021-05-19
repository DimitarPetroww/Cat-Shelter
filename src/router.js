const homeHandler = require("./controllers/home");
const addBreedHandler = require("./controllers/addBreed");
const addCatHandler = require("./controllers/addCat")
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
    
}

module.exports = function(req, res) {
    if(req.method === "POST") {
        console.log("da");
    }else {
        const handler = GETRequestMap[req.url]
        if(typeof handler === "function") {
            handler(req, res)
        }
    }
}