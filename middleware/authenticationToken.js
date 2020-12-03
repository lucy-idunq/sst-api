const jwt = require('jsonwebtoken');

module.exports.authenticationMiddleware = (req, res, next) => {
    const authHeader = req.headers['x-access-token'] || req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    req.token = token
    if (token === null) return res.status(401).json({ success: false })

    jwt.verify(token, 'AuthenticationforShanShweTaungWebapp',{ expiresIn: '1d' }, (err, data) => {
        if (err) { res.sendStatus(401).json({ err }) }
        else {
            next()
        }
    })
}