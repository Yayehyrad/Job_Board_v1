const mongoose = require("mongoose")
const { paths } = require("../helper/documentation")
require("dotenv").config()

const Url = process.env.MONGO_URL
mongoose.connect(Url , {useNewUrlParser : true  })



 
