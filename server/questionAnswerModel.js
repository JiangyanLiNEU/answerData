const mongoose = require("mongoose")

const QAschema = mongoose.Schema({
     question:{
          type: String,
          required: true
     },
     answer:{
          type:String,
          required: true
     }
})

module.exports = mongoose.model("QAmodel", QAschema);