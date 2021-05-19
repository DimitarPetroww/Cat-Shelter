const layout = require("../../views/layout/layout")
const breed = require("../../views/addBreed")
const config = require("../../util/config.json")
const breeds = require("../../util/breeds.json")

const fs = require("fs")
const generateError = require("../../util/generateError")

function addbreedHandler(req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html"
    })
    res.write(layout(breed()))
    res.end()
}
function postBreedHandler(req, res) {
    let body = ""
    req.on("data", (chunk) => body += chunk)
    req.on("end", () => {
        breeds.push(body.split("=")[1])
        fs.writeFile(config.breedDBPath, JSON.stringify(breeds), (err) => {
            if(err) {
                return generateError(res, err.message)
            }
            res.writeHead(302, {
                "Location": "/"
            })
            res.end()
        })
    })
}
module.exports = {
    GET: addbreedHandler,
    POST: postBreedHandler
}