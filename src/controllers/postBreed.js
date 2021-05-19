const fs = require("fs")
const config = require("../../util/config.json")
const breeds = require("../../util/breeds.json")
function postBreed(req, res) {
    let body = ""
    req.on("data", (chunk) => body += chunk)
    req.on("end", () => {
        breeds.push(body.split("=")[1])
        fs.writeFile(config.breedDBPath, JSON.stringify(breeds), (err) => {
            if(err) {
                return console.log(err.message);
            }
            res.writeHead(302, {
                "Location": "/"
            })
            res.end()
        })
    })
}
module.exports = postBreed