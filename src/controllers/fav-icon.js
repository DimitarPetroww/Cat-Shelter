const fs = require("fs")
const path = require("path")
const config = require("../../config.json")

function staticHandler(req, res) {
    const ico = fs.createReadStream(path.join(config.favIconPath), (err) => {
        if(err) {
            return console.log(err.message);
        }
        res.writeHead(404)
    })
    res.writeHead(200, {
        "Content-Type": "image/vnd.microsoft.icon"
    })
    ico.pipe(res)
}
module.exports = staticHandler