const layout = require("../../views/layout/layout")
const details = require("../../views/catDetails")
const cats = require("../../util/cats.json")
const config = require("../../util/config.json")
const fs = require("fs")
const generateError = require("../../util/generateError")

function getCat(req, res) {
    const url = req.url
    const id = url.slice(url.lastIndexOf("/") + 1)
    const cat = cats[id]
    Object.assign(cat, { id })
    res.writeHead(200, {
        "Content-Type": "text/html"
    })
    res.write(layout(details(cat)))
    res.end()
}
function deleteCat(req, res) {
    const url = req.url
    const id = url.slice(url.lastIndexOf("/") + 1)
    delete cats[id]
    fs.writeFile(config.catDBPath, JSON.stringify(cats), (err) => {
        if(err) {
            return generateError(res, err.message)
        }
    })
    res.writeHead(302, {
        "Location": "/"
    })
    res.end()
}
module.exports = {
    GET: getCat,
    POST: deleteCat
}