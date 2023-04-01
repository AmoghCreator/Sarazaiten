const express = require("express");
const bodyParser = require("body-parser")
const cors = require('cors')
const prompts = require('./prompts.json')
const app = express();
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(cors())

app.get('/' , (req , res) => {
  res.send(prompts);
})

app.post('/course' , (req , res) => {
  console.log(req.body.prompt)
})

app.listen(8000 , ()=>{
  console.log("server started at 8000");
})
