import './App.css';
import Menu from './Menu';
import PromptArea from './PromptArea'; 
import {useState} from 'react';
import axios from 'axios';

function App() {
  const [loading , setLoading] = useState(false);
  const [lastPrompt , setPrompt] = useState("");

  async function promptProcess(value) {
    console.log(value);
    let data = await axios.post("http://localhost:8000/course" , {prompt : "I want you to act as a college professor who can code simultaneously. I want you to educate me about Computer Science and Engineering with intermediate Difficulty level that a child can also understand. For every query I want you to add funny real life example or instance about the subject matter and generate a relevant code to give me an idea about the subject matter. For every code you generate , strictly start the block with <code> and strictly end with </code> and appropriate comments in the code so that a beginner level viewer can understand.Now Can you teach me about Different Opearations in Stack and Queue in Data Structures and Algorithms ? Keep it easy to understand in about 1000 characters. "});
    //let data = value;
    console.log(data)
    setPrompt(data.data);
  }

  return (
    <div className="" style={{display:"flex"}}>
      <Menu processPrompt={promptProcess} /> 
      <PromptArea newPrompt={lastPrompt}/>
    </div>
  );
}

export default App;
