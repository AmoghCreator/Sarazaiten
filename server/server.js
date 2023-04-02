require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser")
const cors = require('cors')
const prompts = require('./prompts.json')
const app = express();
const { Configuration, OpenAIApi } = require("openai");
const fs = require('fs')

const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(cors())

app.get('/' , (req , res) => {
  res.send(prompts);
})

app.post('/admin' , (req , res) => {

})


app.post('/usrQry' , async (req , res) => {
console.log("loading...")
const completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [{role: "user", content: req.body.prompt}],
});

res.send(completion.data.choices[0].message.content);
});

app.post('/course' , async (req , res) => {
console.log("loading...")
const completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [{role: "user", content: req.body.prompt}],
});
});

app.post('/addPrompt' , async (req , res) => {

  // adding data in json file using fs 

  var data = fs.readFileSync('prompts.json')
  var myObj =  JSON.parse(data)
  console.log("pushing")
  let newData = {"title" : req.body.title , "prompt" : req.body.prompt , "imgP" : req.body.imgP} 
  myObj.push(newData)
  var newData2 = JSON.stringify(myObj);
  fs.writeFile('prompts.json', newData2, err => {
    // error checking
    if(err) throw err;
    
    console.log("New data added");
  });   
})

app.listen(8000, ()=>{
  console.log("server started at 8000");
})
