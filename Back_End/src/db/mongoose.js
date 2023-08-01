const mongoose = require("mongoose")
require("dotenv").config()

const Url = process.env.MONGOURL

mongoose.connect(Url , {useNewUrlParser : true  })



 
