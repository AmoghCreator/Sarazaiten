import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./css/promptBox.css";

function PromptArea(props) {
  async function promptHandler(formData) {
    let tempArr = qna;
    tempArr.push({ type: "usr", qry: formData.userPrompt });
    setQna([...tempArr]);
    let response = props.processPrompt(
      formData.userPrompt + " in " + formData.lang
    );
    tempArr.push({ type: "ai", qry: response.data });
    setQna([...tempArr]);
    console.log(qna);
  }

  useEffect(() => {
    let tempArr = qna;
    tempArr.push({ type: "ai", qry: props.newPrompt });
    console.log(tempArr);
    setQna([...tempArr]);
    console.log(qna);
  }, [props.newPrompt]);

  const [qna, setQna] = useState([
    {
      type: "ai",
      qry: "Hello there! I am Sarazaiten, and I will help you learn today :-)",
    },
  ]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      lang: "c++",
    },
  });
  return (
    <div className="main">
      <div
        style={{
          minHeight: "10vh",
          minWidth: "80vw",
          maxWidth: "80vw",
          minHeight: "80vh",
          maxHeight: "80vh",
          overflowY: "auto",
          overflowX: "hidden",
        }}
        t
      >
        {qna.map((obj, index) => (
          <div>
            <hr />
            <div
              key={index}
              className={obj.type}
              style={{ whiteSpace: "pre", wordWrap: "break-word" }}
              dangerouslySetInnerHTML={{ __html: obj.qry }}
            />
            <hr />
          </div>
        ))}
      </div>
      {props.loader && (
        <div
          style={{
            backgroundColor: "#909090",
            color: "white",
            textAlign: "center",
          }}
        >
          LOADING PLS WAIT
        </div>
      )}
      <form
        onSubmit={handleSubmit(promptHandler)}
        style={{ marginBottom: "0px", width: "100%" }}
      >
        <label>Enter text</label>
        <input
          id="usrPromptBox"
          {...register("userPrompt", { required: true })}
          style={{
            width: "95%",
            backgroundColor: "gray",
            border: "none",
            height: "20px",
          }}
        />

        <input
          id="usrLanguage"
          {...register("lang", { required: true })}
          style={{
            width: "95%",
            backgroundColor: "gray",
            border: "none",
            height: "20px",
          }}
          placeholder="c++"
        />
        <button id="submitBtn">SUBMIT</button>
      </form>
    </div>
  );
}

export default PromptArea;
