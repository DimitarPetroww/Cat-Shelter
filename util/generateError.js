const generateError = (res, msg = 'Resource not found.') => {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(msg);
};
module.exports = generateError