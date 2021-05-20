const fs = require("fs")
const path = require("path")
const config = require("../../../util/config.json")

function staticHandler(req, res) {
    const css = fs.createReadStream(config.cssPath, (err) => {
        if(err) {
            return console.log(err.message);
        }
        res.writeHead(404)
    })
    res.writeHead(200, {
        "Content-Type": "text/css"
    })
    css.pipe(res)
}
module.exports = staticHandler