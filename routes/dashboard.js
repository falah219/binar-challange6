const express = require("express")
const { or } = require("sequelize")
const route = express.Router()
const { UserData, BioUser, historyUser} = require("../models")

route.get("/:id", async (req, res) => {
    try {
        let id = req.params.id
        let dataResult = await BioUser.findAll()
        dataResult.forEach(element => {
            let Data = element.dataValues
            if (Data.UserDataId == id) {
                res.render("dashboard", {id:Data.UserDataId, fullname:Data.fullName,gender:Data.gender, age:Data.age })
            }
        });
    } catch (error) {
        console.log(error);
    }
})

route.post("/:id", async (req, res) => {
    try {
        let id = req.params.id
        let { fullname, gender, age } = req.body
        let inputUser = {
            fullName: fullname,
            gender,
            age
        }

        console.log(req.body);
        returnData = await BioUser.update(inputUser, {
            where:{
                UserDataId: id
            }
        })
        let dataResult = await BioUser.findAll()
        dataResult.forEach(element => {
            let Data = element.dataValues
            res.render(dashboard, {id:Data.UserDataId, fullname:Data.fullName,gender:Data.gender, age:Data.age })
        });

        
        
    } catch (error) {
        
    }
})

route.get("/delete/:id", async (req, res) => {
    let id = req.params.id
    let result = await UserData.destroy({
        where:{
            id:id
        }
    })

    let result2 = await BioUser.destroy({
        where:{
            UserDataId:id
        }
    })
    
    
    if (result) {
        res.redirect("/")
    }
    else if (result2){
        res.redirect("/")
    }
})



module.exports = route