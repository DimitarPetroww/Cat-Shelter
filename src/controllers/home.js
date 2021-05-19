const layout = require("../../views/layout/layout")
const home = require("../../views/home")
const cats = require("../../util/cats.json")

function homeHandler(req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html"
    })
    res.write(layout(home(cats)))
    res.end()
}
module.exports = homeHandler