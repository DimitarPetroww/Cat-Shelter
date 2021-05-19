const homeHandler = require("./controllers/home");
const addBreedHandler = require("./controllers/addBreed");
const addCatHandler = require("./controllers/addCat")
const staticHandler = require("./controllers/static");

const requestMap = {
    "/": homeHandler,
    "/add-breed": addBreedHandler,
    "/add-cat": addCatHandler,
    "/content/styles/site.css": staticHandler,
}

module.exports = function(req, res) {
    if(req.method === "POST") {
        console.log("da");
    }else {
        const handler = requestMap[req.url]
        if(typeof handler === "function") {
            handler(req, res)
        }
    }
}