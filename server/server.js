require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser")
const cors = require('cors')
const prompts = require('./prompts.json')
const app = express();
const { Configuration, OpenAIApi } = require("openai");

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

app.post('/course' , async (req , res) => {
console.log("loading...")
const completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [{role: "user", content: req.body.prompt}],
});
res.send(completion.data.choices[0].message.content);
})

app.listen(8000 , ()=>{
  console.log("server started at 8000");
})
