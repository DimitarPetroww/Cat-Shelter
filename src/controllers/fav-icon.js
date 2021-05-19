const fs = require("fs")
const path = require("path")
const config = require("../../config.json")

function staticHandler(req, res) {
    const css = fs.createReadStream(path.join(config.cssPath), (err) => {
        if(err) {
            return console.log(err.message);
        }
        res.writeHead(404)
    })
    css.pipe(res)
}
module.exports = staticHandler