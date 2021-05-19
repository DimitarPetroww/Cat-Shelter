const layout = require("../../views/layout/layout")
const home = require("../../views/home")

function homeHandler(req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html"
    })
    res.write(layout(home()))
    res.end()
}
module.exports = homeHandler