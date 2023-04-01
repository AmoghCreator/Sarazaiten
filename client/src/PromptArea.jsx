import {useState} from 'react';
import {useForm} from 'react-hook-form';

function PromptArea(props) {

  function promptHandler(formData) {
    let tempArr = qna;
    tempArr.push({type : "usr" , qry : formData.userPrompt})
    setQna([...tempArr]);
    console.log(qna);
  }

  const [qna , setQna] = useState([{type : "usr" , qry : "one"} , {type : "ai" , qry : "two"}]);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  return(
     <div style={{minHeight: "10vh" , minWidth : "60vw"}}t>
        {qna.map((obj , index) => (
          <h1 key={index} className={obj.type}>{obj.qry}</h1> 
        ))}

        <form onSubmit={handleSubmit(promptHandler)} >
          <input id="usrPromptBox" {...register("userPrompt" , {required : true})} />
          <button id="submitBtn">SUBMIT</button>
        </form>
     </div>
  )
}

export default PromptArea;
