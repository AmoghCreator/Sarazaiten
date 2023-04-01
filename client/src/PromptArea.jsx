import {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import "./css/promptBox.css"

function PromptArea(props) {

  async function promptHandler(formData) {
    let tempArr = qna;
    tempArr.push({type : "usr" , qry : formData.userPrompt})
    setQna([...tempArr]);
    console.log(qna);
  }

  useEffect(()=>{
    let tempArr = qna;
    tempArr.push({type : "ai" , qry : props.newPrompt})
    console.log(tempArr);
    setQna([...tempArr]);
    console.log(qna);
  } , [props.newPrompt])

  const [qna , setQna] = useState([{type : "usr" , qry : "one"} , {type : "ai" , qry : "two"}]);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  return(
    <div>
     <div style={{minHeight: "10vh" , minWidth : "80vw"  , maxWidth : "80vw", minHeight : "80vh" , maxHeight : "80vh" , overflowY : "auto" , overflowX : "hidden"}}t>

        {qna.map((obj , index) => (
          <div>
            <hr/>
            <div key={index} className={obj.type} style={{whiteSpace : "pre"}} dangerouslySetInnerHTML={{ __html: obj.qry}} / >
            <hr/>
          </div>
        ))}

    </div>
        <form onSubmit={handleSubmit(promptHandler)} style={{ marginBottom : "0px" , width:"100%"}} >
          <input id="usrPromptBox" {...register("userPrompt" , {required : true})} style={{width : "100%"}}/>
          <button id="submitBtn">SUBMIT</button>
        </form>
    </div>
  )
}

export default PromptArea;
