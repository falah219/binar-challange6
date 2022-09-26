const express = require("express")
const route = express.Router()
const { UserData, BioUser } = require("../models")

route.get("/:id", async (req, res) => {
    
    try {
        let id = req.params.id
        let resultData = await BioUser.findAll()
        resultData.forEach(element => {
            let Data = element.dataValues
            if (id == Data.UserDataId) {
                res.render('homepage', {id:Data.UserDataId, dataUser:Data.fullName})
            }
        });
        
    } catch (error) {
        console.log(error);
    }
})

module.exports = route