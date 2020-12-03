const express = require('express');
const dao = require('../dao/sstdb');
const { produceToken } = require('../security/token')
const response = require('../config/response');


module.exports.login = (req, res, next) => {
    const name = req.body.name
    const pwd = req.body.password
    try {
        dao.login(name)
            .then(data => {
                if (data[0].length === 0) {
                    return res.status(400).json(response({ message: 'user name does not exit!' }))
                }
                else {
                    const password = data[0].map(v => {
                        return { password: v.password }
                    })
                    if (password[0].password === pwd) {
                        const token = produceToken({ name, pwd })

                        return res.status(200).json(
                            response({
                                payload: [{ name, token }],
                                message: "login successfully",
                            })
                        )
                    } else {
                        return res.status(406).json(
                            response({
                                message: "password mismatch!"
                            })
                        )
                    }
                }
            })
            .catch(err => {
                console.log(err, 'inErr:')
                return next({ status: 400, error: err })
            })
    } catch (error) {
        return next({ status: 500, error: error });
    }
}
