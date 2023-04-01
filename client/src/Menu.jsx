import axios from "axios";
import {useState , useEffect} from 'react' ;
;

function Menu(props) {
  const [menuItems , setMenuItems] = useState([]);
  async function getMenuItem() {
    let data = await axios.get("http://localhost:8000/");
    setMenuItems(data.data) 
  }
  
  function sendPrompt(e) {
    console.log(e.target.value)
    props.processPrompt(e.target.value) 
  }

  useEffect(()=>{
    getMenuItem(); 
  } , [])

  return (
    <div style={{maxWidth : "500px", }}> 
      <ul>
      {
      menuItems.map((items , index) => (
        <button key={index} value={menuItems[index].prompt} onClick={sendPrompt} style={{display : "block"}}>{menuItems[index].title} </button>
      ))
    } 
    </ul>
    </div>
  )
}

export default Menu;
