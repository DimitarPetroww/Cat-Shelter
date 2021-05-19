const layout = require("../../views/layout/layout")
const breed = require("../../views/addBreed")

function addbreedHandler(req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html"
    })
    res.write(layout(breed()))
    res.end()
}
module.exports = addbreedHandler