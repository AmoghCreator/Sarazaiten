import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

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
      qry: "Hello there! I am Sarazaiten, and I will help you learn today :-)\nBegin your journey of DSA by selecting a topic on the left\nyou can also ask your doubts and request specific codes using the inputs below\nHappy Learning :-)\nSarazaiten by Team 4th",
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
    <div className="main p-4 bg-blue-100 rounded-lg shadow-lg">
      <div
        className="overflow-auto max-w-md mx-auto mb-4 p-4 bg-white rounded-lg shadow-sm"
        style={{
          minHeight: "10vh",
          minWidth: "80vw",
          maxWidth: "80vw",
          minHeight: "75vh",
          maxHeight: "75vh",
        }}
      >
        {qna.map((obj, index) => (
          <div key={index}>
            <div
              className={`p-2 mb-2 rounded-lg shadow-sm ${
                obj.type === "ai" ? "bg-blue-200" : "bg-gray-200"
              }`}
              style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
              dangerouslySetInnerHTML={{ __html: obj.qry }}
            />
          </div>
        ))}
      </div>
      {props.loader && (
        <div className="p-2 mb-4 text-center bg-green-500 text-white rounded-lg shadow-sm">
          LOADING PLEASE WAIT, REMEMBER TO SCROLL DOWN AFTER THIS MESSAGE
          DISAPPEARS
        </div>
      )}
      <form
        onSubmit={handleSubmit(promptHandler)}
        className="flex flex-col items-center"
      >
        <label className="mb-2 text-black">Enter your query</label>
        <input
          {...register("userPrompt", { required: false })}
          className="mb-2 w-full p-2 bg-gray-300 border-none rounded-lg shadow-sm"
        />
        <label className="mb-2 text-black">Enter programming language(s)</label>
        <input
          {...register("lang", { required: true })}
          className="mb-4 w-full p-2 bg-gray-300 border-none rounded-lg shadow-sm"
          placeholder="c++"
        />
        <button className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-sm transition-colors">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default PromptArea;
