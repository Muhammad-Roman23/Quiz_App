import { useEffect, useState } from "react";
import "./Quiz.css";

import { useNavigate } from "react-router-dom";



export const AddQuiz = () => {
  const navigate = useNavigate();

  // const [form, setform] = useState(1);
  const [submit, setsubmit] = useState([]);

  const [ques, setques] = useState("");
  

  const [showOption, setShowOption] = useState({
    input: "",
    list: [],
    right:""
  });
  



  const handleOptionInput = (value) => {
    setShowOption((prev) => ({...prev,input: value,}));
  };
  const handleRight = (value) => {
    setShowOption((prev) => ({...prev,right: value,}));

  }

  const addOptionToList = () => {
    if (showOption.input === ""){
      alert("Write any option")
     console.log("empty");
     return;
    }
    if (showOption.list.length > 2) {
      alert("you can not add more than 3 options ")     
      showOption.list[""] 
  return      
      
    }
    setShowOption((prev) => ({input: "",list: [...prev.list,prev.input]  
    }));
  };

  const deleteItem = (item) => {
    const filtered = showOption.list.filter((opt) => opt !== item);
    setShowOption((prev) => ({...prev,list: filtered}));
  };

  const handleQues = (value) => {
    setques(value);
  };


  const AddmoreQues = () => {
    if(ques === "" || showOption.list.length === 0){

      alert("Please enter a question and at least one option.");
      return;
     } else{
    const newEntry = {
      question: ques,
      options: showOption.list,
      right:showOption.right
    };

    setsubmit((prev) => [...prev, newEntry]);
    setques("");
    setShowOption({ input: "", list: [],right:"" });
  }
    // setform(2);
  };

  useEffect(() => {
    console.log(submit);
  }, [submit]);

  return (
    <div className="parent">
    
        <div className="app">
          <h1>Create Quiz</h1>

          <div className="inputs">
            <input
              type="text"
              placeholder="Write your question"
              value={ques}
              onChange={(e) => handleQues(e.target.value)}
            />
          </div>

          <div className="options inputs">
            <input
              type="text"
              placeholder="Write your Options"
              value={showOption.input}
              onChange={(e) => handleOptionInput(e.target.value)}
            />
         

            <ul>
              {showOption.list.map((item, index) => (
                <div key={index} className="item">
                  <li>{item}</li>
                  <i
                    className="fa-solid fa-minus"
                    onClick={() => deleteItem(item)}
                  ></i>
                </div>
              ))}
            </ul>
   <input
              type="text"
              placeholder="Correct Option"
              value={showOption.right}
              onChange={(e) => handleRight(e.target.value)}
            />
            <div className="addoptions">
              <div className="addopt ">
              <i className="fa-solid fa-plus"></i>
              <p className="addmore_ques" onClick={addOptionToList}>
                Add Options
              </p>

              </div>
              <div className="addques addopt">

              <i className="fa-solid fa-plus"></i>
              <p className="addmore_ques" onClick={AddmoreQues}>
                Add More Ques
              </p>
              </div>
            </div>
          </div>

          <div className="submit"

    onClick={() => {
      if (submit.length === 0) {
        alert("No questions added yet!");
        return;
      }
      navigate("/see", { state: { currdata: submit } });
    }}
  >
    Submit

</div>
        </div>
    </div>
  );
};
