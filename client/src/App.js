import './App.css';
import Menu from './Menu';
import PromptArea from './PromptArea'; 

function App() {
  function promptProcess(value) {
    console.log("works??" + value)
  }
  return (
    <div className="" style={{display:"flex"}}>
      <Menu processPrompt={promptProcess} /> 
      <PromptArea />
    </div>
  );
}

export default App;
