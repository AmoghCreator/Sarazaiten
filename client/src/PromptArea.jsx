import {useState} from 'react';

function PromptArea(props) {
  const [qna , setQna] = useState([{type : "usr" , qry : "one"} , {type : "ai" , qry : "two"}]);
  return(
     <div style={{display : "inline-block" , minHeight: "100vh" , minWidth : "60vw"}}t>
        {qna.map((obj) => (
          <h1 className={obj.type}>{obj.qry}</h1> 
        ))}
     </div>
  )
}

export default PromptArea;
