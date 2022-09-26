const express = require("express")
const routes = express.Router()
const game = require("./game")
const logIn = require("./login")
const register = require("./register")
const homepage = require("./homepage")
const addBiodata = require("./addBiodata")
const dashboard = require("./dashboard.js")


routes.get("/", (req, res)=>{
    res.render("index")
})

routes.use("/game", game)
routes.use("/login", logIn)
routes.use("/register", register)
routes.use("/homepage", homepage)
routes.use("/addBiodata", addBiodata)
routes.use("/dashboard", dashboard)

module.exports = routes