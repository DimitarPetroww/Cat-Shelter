const layout = require("../../views/layout/layout")
const cat = require("../../views/addCat")
const breeds = require("../../util/breeds.json")
const cats = require("../../util/cats.json")
const config = require("../../util/config.json")

const fs = require("fs")
const formidable = require("formidable")
const { v4: uuid } = require("uuid")
const generateError = require("../../util/generateError")

function addCatHandler(req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html"
    })
    res.write(layout(cat(breeds)))
    res.end()
}
function postCatHandler(req, res) {
    const form = new formidable.IncomingForm()

    form.parse(req, (err, fields, files) => {
        if (err || (!(files && files.upload && files.upload.name && files.upload.name.match('.(jpg|jpeg|png|gif)$')) ||
            !(fields && fields.name && fields.description && fields.breed))) {
            return generateError(res, err.message)
        }
        fs.rename(files.upload.path, `./images/${files.upload.name}`, function (e) {
            if (e) {
                return generateError(res, e.message)
            }
        });
        Object.assign(fields, {imgURL: `${files.upload.name}`})
        cats[uuid()] = fields

        fs.writeFile(config.catDBPath, JSON.stringify(cats), (error) => {
            if(error) {
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
    GET: addCatHandler,
    POST: postCatHandler
}