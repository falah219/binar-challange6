const express = require("express")
const route = express.Router()
const { UserData, BioUser } = require("../models")




route.get("/", (req, res) => {
    res.render("register")
})

route.post("/", async (req, res) => {
    try {
        let { username, password, role } = req.body
        let inputUser = {
            username,
            password,
            role,
            createdAt : new Date(),
            updateAt : new Date()
        } 
        let result = await UserData.create(inputUser)
        if (result) {
            res.redirect('login')
        }
    } catch (error) {
        console.log(error);
    }


    // console.log(inputUser);
})

module.exports = route