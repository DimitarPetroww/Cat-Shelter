const layout = require("../../views/layout/layout")
const edit = require("../../views/edit")
const cats = require("../../util/cats.json")
const breeds = require("../../util/breeds.json")
const config = require("../../util/config.json")

const fs = require("fs")

function getCat(req, res) {
    const url = req.url
    const id = url.slice(url.lastIndexOf("/") + 1)
    const cat = cats[id]
    Object.assign(cat, { id })
    res.writeHead(200, {
        "Content-Type": "text/html"
    })
    res.write(layout(edit(cat, breeds)))
    res.end()
}
function editCat(req, res) {
    const url = req.url
    const id = url.slice(url.lastIndexOf("/") + 1)
    delete cats[id]
    fs.writeFile(config.catDBPath, JSON.stringify(cats), (err) => {
        if (err) {
            return console.log(err.message);
        }
    })
    res.writeHead(302, {
        "Location": "/"
    })
    res.end()
}
module.exports = {
    GET: getCat,
    POST: editCat
}