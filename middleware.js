const {secret} = require("./config/config")
const jwt = require("jsonwebtoken")
module.exports = {
    auth(req, res, next) {
        const token = req.headers["x-auth-token"];
        if (!token) {
            return res.status(401).send({
                "msg": "Token tidak ditemukan!"
            });
        }
        try {
            req.userLogin = jwt.verify(token, secret);
            next();
        } catch (err) {
            return res.status(400).send(err)
        }
    },
    checkRole(req, res, next) {
        //authorization
        console.log(req.userLogin.role)
        if (req.userLogin.role != "1") {
            return res.status(403).send({
                "msg": "Hanya asisten yang boleh mengakses endpoint ini"
            });
        }
        next();
    }
}