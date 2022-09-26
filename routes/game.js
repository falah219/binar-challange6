const express = require("express")
const route = express.Router()
const { UserData, BioUser, historyUser } = require("../models")

route.get("/:id", async (req, res) => {
    // res.send("halo")
    try {
        let id = req.params.id
        let resultData = await BioUser.findAll()
        resultData.forEach(element => {
            let Data = element.dataValues
            if (id == Data.UserDataId) {
                res.render('game', {id:Data.id, dataUser:Data.fullName})
            }
        })
        // let start = new Play();
        // let hasil = {
        //     history: start.play()
        // }

        let hasil = {
            createdAt:new Date(),
            updateAT:new Date(),
            UserDataId: +id
        }
        let result = await historyUser.create(hasil)

    } catch (error) {
        console.log(error);
    }
})



module.exports = route