import React from "react";
import './answerbox.css';
import { useWritingContext } from "../../../../context/WritingContext";


const Task1 = () => {
  const { task1Data, setTask1Data } = useWritingContext();

  const handleChange = (e) => {
    setTask1Data(e.target.value);
  };

  const wordCount = task1Data.trim().split(/\s+/).length;

  return (
    <div className="answer-box">
      <div className="answer-text-div">
        <textarea
          className="answer-text"
          value={task1Data}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="word-count-div">
        <span className="word-count-span">Word Count: {wordCount}</span>
      </div>
    </div>
  );
};

export default Task1;
