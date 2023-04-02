import axios from "axios";
import {useState , useEffect} from 'react' ;
import "./css/menu.css"
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
    <div className="mainMenuStyle"style={{maxWidth : "500px", }}> 
      <ul>
      {
      menuItems.map((items , index) => (
        <button key={index} value={menuItems[index].prompt} onClick={sendPrompt} style={{cursor: "pointer" , display : "block" , marginTop: "20px" , backgroundColor: "transparent", color: "white" , borderStyle : "none" , fontSize: "1em" , textAlign: "center"}}>
          {menuItems[index].title} 
        </button>
      ))
    } 
    </ul>
    </div>
  )
}

export default Menu;
