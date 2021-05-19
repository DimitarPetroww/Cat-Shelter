const layout = require("../../views/layout/layout")
const cat = require("../../views/addCat")

function addCatHandler(req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html"
    })
    res.write(layout(cat()))
    res.end()
}
module.exports = addCatHandler