import axios from "axios";
import { useState, useEffect } from "react";

function Menu(props) {
  const [menuItems, setMenuItems] = useState([]);

  async function getMenuItem() {
    let data = await axios.get("https://sarazaiten.el.r.appspot.com/");
    setMenuItems(data.data);
  }

  function sendPrompt(e) {
    console.log(e.target.value);
    props.processPrompt(e.target.value + " in C++"); // Remove language choice
  }

  useEffect(() => {
    getMenuItem();
  }, []);

  return (
    <div className="mainMenuStyle max-w-md mx-auto p-4 bg-blue-100">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className="mb-2">
            <button
              value={item.prompt}
              onClick={sendPrompt}
              className="block w-full py-2 px-4 bg-white hover:bg-blue-200 text-blue-800 text-left transition-colors shadow-sm"
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
