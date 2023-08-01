const mongoose = require("mongoose")

const Url = process.env.Db

mongoose.connect(Url , {useNewUrlParser : true  })



 
