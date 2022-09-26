const express = require("express")
const route = express.Router()
const { UserData, BioUser } = require("../models")



route.get("/", (req, res) => {
    res.render("login", { isFalse : false })
})


route.post("/", async (req, res) =>{
    try {
        const {username, password, role} = req.body
        let resultData = await UserData.findAll()
        let resultId
        let flaging = false
        
        resultData.forEach(element => {
            let Data = element.dataValues
            if (Data.username === username && Data.password === password && Data.role === role) {
                resultId = Data.id
                flaging = true
            } else{
                flaging = false
            }

            if (flaging) {
                res.redirect(`addBiodata/${resultId}`)
            }


            // console.log(Data, "==> datanya");
        });
    } catch (error) {
        console.log(error);
    }
    //console.log(database[0].username);
    
    
})


module.exports = route