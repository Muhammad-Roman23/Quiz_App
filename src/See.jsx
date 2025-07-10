import "./Quiz.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export const See = () => {
  const location = useLocation();
  const { currdata } = location.state || {};
  const [currentIndex, setCurrentIndex] = useState(0);

  const [data,setdata] = useState([])
  
  const handleSubmit = () => {

      data.map((my)=>{
              
            console.log(my.rightAnswer);
            
              console.log(currentIndex);
              console.log(data.length);
              return
            }
            
        )
    }
    

  const handleValidation = (val) => {

    
    if(data.length > currentIndex){

        alert("You can't select more than 1 value ")
        return
    }
        let newdata = {
            question:currentQues.question,
            userSelect:val,
            rightAnswer:currentQues.right
        }
        
        setdata((prev)=>[...prev,newdata])

        console.log(val);
        console.log(data);

  }

  const prevbtn = () => {
    setCurrentIndex((prev)=>prev-1);
  };

  const handleNext = () => {

    if(data.length>currentIndex){
        setCurrentIndex((prev) => prev + 1);
    }else{
        alert("please select any option")
    }
  };



  let currentQues;

  if (currdata && currdata.length > currentIndex) {
    currentQues = currdata[currentIndex];
  } else {
    currentQues = undefined;
  }

  return (
    <div className="parent">
      <div className="app">
        <h1>Attempt Quiz</h1>

        {currentQues ? (
          <>
            <h3 className="question">
              Q{currentIndex + 1}: {currentQues.question}
            </h3>
            <ul>
              {currentQues.options.map((opt, i) => (
                <button onClick={()=>handleValidation(opt)} className="showli" key={i}>
                  {opt}
                  
                 
                </button>
              ))}
            </ul>
            <div className="btns">
              <div
                onClick={() => prevbtn()}
                className={currentIndex == 0 ? "none" : " addopt show"}
              >
                prev
              </div>
              <div className="addopt" onClick={handleNext}>
                Next
              </div>
            </div>
          </>
        ) : (
            <>
          <h2 style={{ textAlign: "center" }}>You’ve completed the quiz!</h2>

          <button className="submit" onClick={()=>handleSubmit()} > submit </button>
 
            </>
        )}
      </div>
    </div>
  );
};
