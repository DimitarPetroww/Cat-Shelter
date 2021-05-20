const fs = require("fs")

function imageHandler(req, res) {
    const extname = req.url.split(".")[1]
    const image = fs.createReadStream("." + req.url, (err) => {
        if(err) {
            return console.log(err.message);
        }
        res.writeHead(404)
        res.end()
    })
    res.writeHead(200, {
        "Content-Type": `image/${extname}`
    })
    image.pipe(res)
}
module.exports = imageHandler
