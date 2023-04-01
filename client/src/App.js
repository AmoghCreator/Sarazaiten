import './App.css';
import Menu from './Menu';
import PromptArea from './PromptArea'; 

function App() {
  function promptProcess(value) {
    console.log("works??" + value)
  }
  return (
    <div className="">
      <Menu processPrompt={promptProcess} /> 
      <PromptArea />
    </div>
  );
}

export default App;
