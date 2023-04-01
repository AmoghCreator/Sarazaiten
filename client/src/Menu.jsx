import axios from "axios";
import {useState , useEffect} from 'react' ;
;

function Menu() {
  async function getMenuItem() {
    let data = await axios.get("http://localhost:8000/");
    console.log(data.data);
  }

  useEffect(()=>{
    getMenuItem(); 
  } , [])

  return (
    <div > menuContent </div>
  )
}

export default Menu;
