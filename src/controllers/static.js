const fs = require("fs")
const path = require("path")
const config = require("../../config.json")

function staticHandler(req, res) {
    fs.readFile(path.join(config.cssPath), (err, data) => {
        if(err) {
            res.writeHead(404)
            return console.log(err.message)
        }
        res.writeHead(200, {
            "Content-Type": "text/css"
        })
        res.write(data)
        res.end()
    })
}
module.exports = staticHandler