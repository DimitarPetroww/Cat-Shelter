const layout = require("../../views/layout/layout")
const home = require("../../views/home")
const cats = require("../../util/cats.json")
const qs = require("querystring")

function homeHandler(req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html"
    })
    res.write(layout(home(Object.entries(cats))))
    res.end()
}
function searchHandler(req, res) {
    const query = req.url.split("?")[1]
    const breed = qs.parse(query).breed
    res.writeHead(200, {
        "Content-Type": "text/html"
    })
    res.write(layout(home(Object.entries(cats).filter(([id, x]) => x.breed === breed))))
    res.end()
}
module.exports = {
    homeHandler,
    searchHandler
}