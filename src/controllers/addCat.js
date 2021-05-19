const layout = require("../../views/layout/layout")
const cat = require("../../views/addCat")
const breeds = require("../../util/breeds.json")

function addCatHandler(req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html"
    })
    res.write(layout(cat(breeds)))
    res.end()
}
module.exports = addCatHandler