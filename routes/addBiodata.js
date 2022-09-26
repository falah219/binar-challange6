const express = require("express")
const route = express.Router()
const { UserData, BioUser } = require("../models")




route.get("/:id", (req, res) => {
    let id = req.params.id
    res.render("addBiodata", { id })
})

route.post("/:id", async (req, res) => {
    try {
        let id = req.params.id
        let { fullname, gender, age } = req.body
        let inputUser = {
            fullName: fullname,
            gender,
            age,
            UserDataId: +id,
            createdAt : new Date(),
            updateAt : new Date()
        } 
        console.log(inputUser);
        let result = BioUser.create(inputUser)

        if (result) {
            res.redirect(`/homepage/${id}`)
        }
    } catch (error) {
        console.log(error);
    }


    // console.log(inputUser);
})

module.exports = route