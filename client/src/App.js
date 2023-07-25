import "./App.css";
import Menu from "./Menu";
import PromptArea from "./PromptArea";
import { useState } from "react";
import axios from "axios";
import Footer from "./Footer";

function App() {
  const [loading, setLoading] = useState(false);
  const [lastPrompt, setPrompt] = useState("");

  async function promptProcess(value) {
    console.log(value);
    setLoading(true);
    let data = await axios.post("https://sarazaiten.el.r.appspot.com/course", {
      prompt: value,
    });
    setLoading(false);
    //let data = value;
    console.log(data);
    setPrompt(data.data);
  }

  async function qryPromptProcess(value) {
    console.log(value);
    setLoading(true);
    let data = await axios.post("https://sarazaiten.el.r.appspot.com/usrQry", {
      prompt: value,
    });
    setLoading(false);
    //let data = value;
    console.log(data);
    setPrompt(data.data);
  }

  return (
    <div>
      <div className="main" style={{ display: "flex" }}>
        <Menu processPrompt={promptProcess} />
        <PromptArea
          newPrompt={lastPrompt}
          processPrompt={qryPromptProcess}
          loader={loading}
        />
      </div>
    </div>
  );
}

export default App;
