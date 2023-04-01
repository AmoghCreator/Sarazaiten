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
    let data = await axios.post("http://localhost:8000/course" , {prompt : value});
    //let data = value;
    setPrompt(data);
  }

  return (
    <div className="" style={{display:"flex"}}>
      <Menu processPrompt={promptProcess} /> 
      <PromptArea newPrompt={lastPrompt}/>
    </div>
  );
}

export default App;
