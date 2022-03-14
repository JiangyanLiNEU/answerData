const express = require("express")
const router = express.Router()
const QAmodel = require("./questionAnswerModel")

router.get("/", async (req, res)=>{
     try{
          const all = await QAmodel.find()
          console.log("Get all questions from database")
          res.send(all)
     }catch(err){
          console.log("Err in questionRoute get method")
          res.send("Error!")
     }
     
})

router.post("/", async (req, res)=>{
     const info = req.body
     const data = new QAmodel(info)
     try{
          await data.save();
          console.log("new data point is saved in database")
          res.send(data)
     }catch(err){
          console.log("Err in questionRoute post method")
          res.send("Error!")
     }
})
module.exports = router;