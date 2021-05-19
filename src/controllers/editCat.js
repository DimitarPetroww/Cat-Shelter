const layout = require("../../views/layout/layout")
const edit = require("../../views/edit")
const cats = require("../../util/cats.json")
const breeds = require("../../util/breeds.json")
const config = require("../../util/config.json")

const formidable = require("formidable")
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
    res.write(layout(edit(cat, breeds)))
    res.end()
}
function editCat(req, res) {
    const form = new formidable.IncomingForm()
    const url = req.url
    const id = url.slice(url.lastIndexOf("/") + 1)

    form.parse(req, (err, fields, files) => {
        if(err) {
            return generateError(res, e.message)
        }
        fs.rename(files.upload.path, `./images/${files.upload.name}`, function (e) {
            if (e) {
                return generateError(res, e.message)
            }
        });
        Object.assign(fields, { imgURL: `${files.upload.name}` })
        cats[id] = fields
        fs.writeFile(config.catDBPath, JSON.stringify(cats), (error) => {
            if (error) {
                return generateError(res, error.message)
            }
        })
        res.writeHead(302, {
            "Location": "/"
        })
        res.end()
    })
}
module.exports = {
    GET: getCat,
    POST: editCat
}