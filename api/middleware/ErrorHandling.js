// error handling

function errorHandling(err, req, res, next) {
    if (err) {
        let status = err.status || 500;
        res.json({
            status,
            msg: "An error has occured! Please retry later.",
        });
    }
    next();   // if next() isn't here it loads website whole time 
}

module.exports = errorHandling 