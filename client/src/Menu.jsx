import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

function Menu(props) {
  const [menuItems, setMenuItems] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  async function getMenuItem() {
    let data = await axios.get("https://sarazaiten.el.r.appspot.com/");
    setMenuItems(data.data);
  }

  function sendPrompt(e) {
    console.log(e.target.value);
    props.processPrompt(e.target.value + " in C++"); // Remove language choice
    setShowMenu(false);
  }

  useEffect(() => {
    getMenuItem();
  }, []);

  return (
    <div className="relative">
      <button
        className="block md:hidden py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-sm transition-colors"
        onClick={() => setShowMenu(!showMenu)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div
        className={`${
          showMenu ? "block" : "hidden"
        } absolute md:relative md:block top-0 left-0 z-10 mainMenuStyle max-w-md mx-auto p-4 bg-blue-100 rounded-lg shadow-lg`}
      >
        <button
          className="absolute top-0 right-0 p-2 text-blue-800 hover:text-blue-900 transition-colors md:hidden"
          onClick={() => setShowMenu(false)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="mb-2">
              <button
                value={item.prompt}
                onClick={sendPrompt}
                className="block w-full py-2 px-4 bg-white hover:bg-blue-200 text-blue-800 text-left transition-colors rounded-lg shadow-sm"
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
